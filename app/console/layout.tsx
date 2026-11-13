import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import { ConsoleProvider } from '@/components/console/ConsoleProvider';
import ConsoleShell from '@/components/console/ConsoleShell';

export const metadata: Metadata = {
  title: 'Owners console',
  robots: { index: false, follow: false },
};

export default function ConsoleLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProviderWrapper>
      <ConsoleProvider>
        <ConsoleShell>{children}</ConsoleShell>
      </ConsoleProvider>
    </SessionProviderWrapper>
  );
}
