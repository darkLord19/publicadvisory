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
    <section className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <label className="mb-3 block">
        <span className="mb-1 block text-sm font-medium">Keyword</span>
        <input
          value={filters.query}
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
              className={`rounded-full border px-3 py-1 text-sm font-medium transition ${active ? 'border-blue-600 bg-blue-50 text-blue-800' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'}`}
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
