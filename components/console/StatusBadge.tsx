import type { AccountStatus } from '@/lib/console/data';

const styles: Record<AccountStatus, string> = {
  active: 'bg-[#E3F4EC] text-[#12704D]',
  paused: 'bg-[#FFF3D6] text-[#8A5A00]',
  deactivated: 'bg-[#FBE4E4] text-[#A32525]',
  invited: 'bg-[#E4EBFB] text-[#2E388F]',
};
const labels: Record<AccountStatus, string> = { active: 'Active', paused: 'Paused', deactivated: 'Deactivated', invited: 'Invited' };

export default function StatusBadge({ status }: { status: AccountStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {labels[status]}
    </span>
  );
}
