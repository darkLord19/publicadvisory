import { useMemo, useState } from 'react';
import { AdvisoryCard } from './components/AdvisoryCard';
import { FilterPanel, type Filters } from './components/FilterPanel';
import type { Advisory } from './types';

const seed: Advisory[] = [
  {
    id: 'adv-1',
    title: 'Civil Defense Alert: Cross-border drone activity',
    summary: 'Authorities issued advisory for border communities to follow shelter protocols.',
    publishedAt: '2026-02-25T08:30:00Z',
    country: 'Ukraine',
    government: 'Ministry of Defense',
    department: 'Civil Defense',
    severity: 'high',
    tags: ['security', 'civil-defense'],
    sourceUrl: 'https://example.gov/advisory/1',
  },
  {
    id: 'adv-2',
    title: 'Public safety notice for northern district',
    summary: 'Regional administration requested temporary movement restrictions overnight.',
    publishedAt: '2026-02-24T21:00:00Z',
    country: 'Jordan',
    government: 'Interior Ministry',
    department: 'Public Safety',
    severity: 'medium',
    tags: ['movement', 'regional'],
    sourceUrl: 'https://example.gov/advisory/2',
  },
];

const initialFilters: Filters = { query: '', severities: [] };

export default function App() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const advisories = useMemo(() => {
    return seed
      .filter((item) => {
        const keyword = filters.query.trim().toLowerCase();
        if (!keyword) {
          return true;
        }
        return [item.title, item.summary, item.country, item.government, item.department]
          .join(' ')
          .toLowerCase()
          .includes(keyword);
      })
      .filter((item) => {
        if (filters.severities.length === 0) {
          return true;
        }
        return filters.severities.includes(item.severity);
      })
      .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
  }, [filters]);

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">Public Advisory Timeline</h1>
      <p className="mb-6 text-slate-700">Unified stream of official public advisories.</p>
      <FilterPanel filters={filters} onChange={setFilters} />
      <section className="space-y-4">
        {advisories.map((advisory) => (
          <AdvisoryCard key={advisory.id} advisory={advisory} />
        ))}
      </section>
    </main>
  );
}
