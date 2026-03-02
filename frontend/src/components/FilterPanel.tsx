export type Filters = {
  query: string;
  severities: string[];
};

type Props = {
  filters: Filters;
  onChange: (next: Filters) => void;
};

const options = ['critical', 'high', 'medium', 'low', 'info'];

export function FilterPanel({ filters, onChange }: Props) {
  return (
    <section className="mb-6 rounded-lg border border-slate-800 bg-slate-900 p-4">
      <label className="mb-3 block">
        <span className="mb-1 block text-sm font-medium">Keyword</span>
        <input
          value={filters.query}
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
          className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2"
          placeholder="Search advisories"
        />
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((severity) => {
          const active = filters.severities.includes(severity);
          return (
            <button
              key={severity}
              type="button"
              className={`rounded border px-3 py-1 text-sm ${active ? 'border-sky-400 text-sky-300' : 'border-slate-700 text-slate-300'}`}
              onClick={() => {
                const severities = active
                  ? filters.severities.filter((value) => value !== severity)
                  : [...filters.severities, severity];
                onChange({ ...filters, severities });
              }}
            >
              {severity}
            </button>
          );
        })}
      </div>
    </section>
  );
}
