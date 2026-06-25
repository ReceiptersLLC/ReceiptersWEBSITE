import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const cleanEnvVar = (val: string | undefined) => {
  if (!val) return undefined;
  return val.replace(/^"|"$/g, '').trim();
};

const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n').replace(/^"|"$/g, '')
  : undefined;

const clientEmail = cleanEnvVar(process.env.FIREBASE_CLIENT_EMAIL);
const projectId = cleanEnvVar(process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

// Prevent duplicate initializations in development hot-reloads
const app = getApps().length === 0 ? (() => {
  try {
    if (clientEmail && privateKey && projectId) {
      return initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
    } else {
      // Fallback to default credentials if environment values aren't set
      return initializeApp();
    }
  } catch (error) {
    console.warn('Firebase Admin SDK initialization warning:', error);
    return null;
  }
})() : getApps()[0];

const adminAuth = app ? getAuth(app) : null;
const adminDb = app ? getFirestore(app) : null;

export { app, adminAuth, adminDb };
