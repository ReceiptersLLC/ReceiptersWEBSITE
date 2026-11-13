import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';
import { adminDb } from '@/lib/firebase-admin';

const COLLECTION = 'console_owners';
const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60 * 1000;

export const MIN_PASSWORD_LENGTH = 12;

/** True only when Firebase admin credentials are present. adminDb alone is not enough: it exists even without credentials. */
export function passwordStoreConfigured(): boolean {
  return Boolean(
    process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY &&
      (process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) &&
      adminDb
  );
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt$${salt.toString('base64')}$${hash.toString('base64')}`;
}

export function verifyPassword(password: string, stored: string | undefined): boolean {
  // A dummy hash keeps the timing the same when no password has been created yet.
  const [scheme, saltB64, hashB64] = (stored || 'scrypt$AAAAAAAAAAAAAAAAAAAAAA==$' + 'A'.repeat(86) + '==').split('$');
  if (scheme !== 'scrypt' || !saltB64 || !hashB64) return false;
  const expected = Buffer.from(hashB64, 'base64');
  const actual = scryptSync(password, Buffer.from(saltB64, 'base64'), expected.length);
  return Boolean(stored) && actual.length === expected.length && timingSafeEqual(actual, expected);
}

export type OwnerRecord = {
  passwordHash?: string;
  passwordUpdatedAt?: number;
  failed?: number;
  lockedUntil?: number;
};

const doc = (email: string) => adminDb!.collection(COLLECTION).doc(email.trim().toLowerCase());

/** Stops a slow or unreachable database from leaving the sign-in page waiting forever. */
function withTimeout<T>(promise: Promise<T>, ms = 8000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Firestore request timed out')), ms)),
  ]);
}

export async function getOwner(email: string): Promise<OwnerRecord> {
  const snap = await withTimeout(doc(email).get());
  return (snap.exists ? (snap.data() as OwnerRecord) : {}) || {};
}

export async function savePassword(email: string, password: string): Promise<void> {
  await withTimeout(
    doc(email).set(
    { passwordHash: hashPassword(password), passwordUpdatedAt: Math.floor(Date.now() / 1000), failed: 0, lockedUntil: 0 },
    { merge: true }
  ));
}

/** Records a wrong password and locks the account for 15 minutes after 5 in a row. */
export async function recordFailure(email: string, current: OwnerRecord): Promise<void> {
  const failed = (current.failed || 0) + 1;
  await withTimeout(
    doc(email).set(failed >= MAX_FAILURES ? { failed: 0, lockedUntil: Date.now() + LOCK_MS } : { failed }, { merge: true })
  );
}

export async function clearFailures(email: string): Promise<void> {
  await withTimeout(doc(email).set({ failed: 0, lockedUntil: 0 }, { merge: true }));
}
