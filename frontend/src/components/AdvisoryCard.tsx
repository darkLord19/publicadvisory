import { SeverityBadge } from './SeverityBadge';
import type { Advisory } from '../types';

export function AdvisoryCard({ advisory }: { advisory: Advisory }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{advisory.title}</h2>
        <SeverityBadge severity={advisory.severity} />
      </div>
      <p className="text-sm text-slate-300">{advisory.summary}</p>
      <div className="mt-3 text-xs text-slate-400">
        <p>{advisory.country} · {advisory.government} · {advisory.department}</p>
        <p>{new Date(advisory.publishedAt).toLocaleString()}</p>
        <a className="text-sky-400 hover:text-sky-300" href={advisory.sourceUrl} target="_blank" rel="noreferrer">
          Source link
        </a>
      </div>
    </article>
  );
}
