import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { ConsoleProvider } from '@/components/console/ConsoleProvider';
import ConsoleShell from '@/components/console/ConsoleShell';
import ConsoleSignIn from '@/components/console/ConsoleSignIn';
import { SESSION_COOKIE, readToken } from '@/lib/console/auth';

export const metadata: Metadata = {
  title: 'Owners console',
  robots: { index: false, follow: false },
};

export default async function ConsoleLayout({ children }: { children: ReactNode }) {
  const owner = readToken('session', (await cookies()).get(SESSION_COOKIE)?.value);
  if (!owner) return <ConsoleSignIn />;

  return (
    <ConsoleProvider>
      <ConsoleShell owner={owner}>{children}</ConsoleShell>
    </ConsoleProvider>
  );
}
