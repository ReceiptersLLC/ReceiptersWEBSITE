// Sample data for the owners console preview. Replace with the real API when it exists.

export type AccountStatus = 'active' | 'paused' | 'deactivated' | 'invited';

export type AdminAccount = {
  id: string;
  product: string;
  name: string;
  email: string;
  businessId: string;
  role: 'Owner' | 'Admin';
  status: AccountStatus;
  /** Minutes since the admin last did anything; null if they never signed in. */
  lastActiveMinutes: number | null;
};

export type ActivityEvent = { id: string; product: string; text: string; minutesAgo: number };

export type ConsoleProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /** Set when the product already has its own owners/admin console. The console links out to it. */
  externalConsoleUrl?: string;
};

export const consoleProducts: ConsoleProduct[] = [
  { slug: 'receipters-app', name: 'Receipters App', category: 'Receipts', description: 'Merchant and customer receipt app.' },
  {
    slug: 'bodapos',
    name: 'BodaPOS',
    category: 'Point of sale',
    description: 'Point of sale for retail and wholesale.',
    externalConsoleUrl: 'https://www.bodapos.com/owner',
  },
  { slug: 'linearpos', name: 'LinearPOS', category: 'Point of sale', description: 'Point of sale for fast-moving counters.' },
  { slug: 'chomapos', name: 'ChomaPOS', category: 'Point of sale', description: 'Point of sale for food and hospitality.' },
  {
    slug: 'chomapos-plus',
    name: 'ChomaPOS Plus',
    category: 'Point of sale',
    description: 'The Plus edition of ChomaPOS.',
    externalConsoleUrl: 'https://plus-owner.chomapos.com/',
  },
  { slug: 'nairopos', name: 'NairoPOS', category: 'Point of sale', description: 'Point of sale for multi-branch retail.' },
  { slug: 'fursapay', name: 'FursaPay', category: 'Payments', description: 'Payments linked to digital receipts.' },
  { slug: 'shahidibox', name: 'ShahidiBox', category: 'Receipt vault', description: 'Keeps signed eTIMS receipts from the till.' },
];

const prefix: Record<string, string> = {
  'receipters-app': 'RA',
  bodapos: 'BP',
  linearpos: 'LP',
  chomapos: 'CP',
  'chomapos-plus': 'CX',
  nairopos: 'NP',
  fursapay: 'FP',
  shahidibox: 'SB',
};

const people: Array<[string, string, 'Owner' | 'Admin', AccountStatus, number | null]> = [
  ['Amina Wanjiru', 'amina.wanjiru', 'Owner', 'active', 14],
  ['Brian Otieno', 'brian.otieno', 'Admin', 'active', 190],
  ['Chipo Mwansa', 'chipo.mwansa', 'Admin', 'paused', 4300],
  ['Daniel Kimani', 'daniel.kimani', 'Admin', 'active', 1500],
  ['Esther Njeri', 'esther.njeri', 'Admin', 'deactivated', 21000],
  ['Farid Hassan', 'farid.hassan', 'Admin', 'active', null],
];

export const seedAdmins: AdminAccount[] = consoleProducts.flatMap((p, pi) =>
  people.slice(0, 3 + (pi % 4)).map(([name, local, role, status, minutes], i) => ({
    id: `${p.slug}-${i + 1}`,
    product: p.slug,
    name,
    email: `${local}@example.com`,
    businessId: `${prefix[p.slug]}-${10400 + pi * 37 + Math.floor(i / 2) * 11}`,
    role,
    status: pi % 3 === 2 && i === 1 ? 'paused' : status,
    lastActiveMinutes: minutes === null ? null : minutes + pi * 25,
  }))
);

export const seedActivity: ActivityEvent[] = consoleProducts.flatMap((p, pi) => [
  { id: `${p.slug}-e1`, product: p.slug, text: 'Brian Otieno signed in', minutesAgo: 190 + pi * 25 },
  { id: `${p.slug}-e2`, product: p.slug, text: 'Daniel Kimani changed a business setting', minutesAgo: 1500 + pi * 25 },
  { id: `${p.slug}-e3`, product: p.slug, text: 'Chipo Mwansa was paused by an owner', minutesAgo: 4300 + pi * 25 },
]);

export function timeAgo(minutes: number | null): string {
  if (minutes === null) return 'Never';
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months === 1 ? '' : 's'} ago`;
}
