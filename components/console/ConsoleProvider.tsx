'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { seedActivity, seedAdmins, type AccountStatus, type ActivityEvent, type AdminAccount } from '@/lib/console/data';

type NewAdmin = { name: string; email: string; businessId: string; role: AdminAccount['role'] };

type ConsoleState = {
  admins: AdminAccount[];
  activity: ActivityEvent[];
  setStatus: (id: string, status: AccountStatus) => void;
  addAdmin: (product: string, admin: NewAdmin) => void;
};

const ConsoleContext = createContext<ConsoleState | null>(null);

const verb: Record<AccountStatus, string> = { active: 'activated', paused: 'paused', deactivated: 'deactivated' };

export function ConsoleProvider({ children }: { children: ReactNode }) {
  const [admins, setAdmins] = useState<AdminAccount[]>(seedAdmins);
  const [activity, setActivity] = useState<ActivityEvent[]>(seedActivity);

  const log = useCallback((product: string, text: string) => {
    setActivity((prev) => [{ id: `${product}-${Date.now()}-${prev.length}`, product, text, minutesAgo: 0 }, ...prev]);
  }, []);

  const setStatus = useCallback(
    (id: string, status: AccountStatus) => {
      const target = admins.find((a) => a.id === id);
      if (!target) return;
      setAdmins((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
      log(target.product, `${target.name} was ${target.status === 'deactivated' && status === 'active' ? 'reactivated' : target.status === 'paused' && status === 'active' ? 'resumed' : verb[status]} by you`);
    },
    [admins, log]
  );

  const addAdmin = useCallback(
    (product: string, admin: NewAdmin) => {
      setAdmins((prev) => [
        ...prev,
        { id: `${product}-${Date.now()}`, product, ...admin, status: 'active', lastActiveMinutes: null },
      ]);
      log(product, `${admin.name} was added as ${admin.role.toLowerCase()} by you`);
    },
    [log]
  );

  const value = useMemo(() => ({ admins, activity, setStatus, addAdmin }), [admins, activity, setStatus, addAdmin]);
  return <ConsoleContext.Provider value={value}>{children}</ConsoleContext.Provider>;
}

export function useConsole() {
  const ctx = useContext(ConsoleContext);
  if (!ctx) throw new Error('useConsole must be used inside ConsoleProvider');
  return ctx;
}
