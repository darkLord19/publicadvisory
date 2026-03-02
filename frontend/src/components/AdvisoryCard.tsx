import { SeverityBadge } from './SeverityBadge';
import type { Advisory } from '../types';

export function AdvisoryCard({ advisory }: { advisory: Advisory }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{advisory.title}</h2>
        <SeverityBadge severity={advisory.severity} />
      </div>
      <p className="text-sm leading-6 text-slate-700">{advisory.summary}</p>
      <div className="mt-3 space-y-1 text-xs text-slate-600">
        <p>{advisory.country} · {advisory.government} · {advisory.department}</p>
        <p>{new Date(advisory.publishedAt).toLocaleString()}</p>
        <a className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900" href={advisory.sourceUrl} target="_blank" rel="noreferrer">
          Source link
        </a>
      </div>
    </article>
  );
}
