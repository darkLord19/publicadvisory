import type { Severity } from '../types';

const severityClasses: Record<Severity, string> = {
  critical: 'bg-red-600',
  high: 'bg-orange-600',
  medium: 'bg-amber-500',
  low: 'bg-sky-600',
  info: 'bg-slate-600',
};

export function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span className={`rounded px-2 py-1 text-xs font-semibold uppercase ${severityClasses[severity]}`}>
      {severity}
    </span>
  );
}
