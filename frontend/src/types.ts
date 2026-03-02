export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';

export type Advisory = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  country: string;
  government: string;
  department: string;
  severity: Severity;
  tags: string[];
  sourceUrl: string;
};
