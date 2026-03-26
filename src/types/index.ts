export type HoverCardCategory = 'seo' | 'aeo' | 'strategy' | 'conversion';

export interface HoverCardData {
  id: string;
  category: HoverCardCategory;
  title: string;
  body: string;
  learnMore?: string;
}

export interface PageEntry {
  id: number;
  title: string;
  url: string;
  type: 'pillar' | 'hub' | 'spoke' | 'vertical' | 'add-on' | 'comparison' | 'glossary' | 'use-case' | 'tool' | 'trust';
  tier: 1 | 2 | 3;
  targetQueries: string[];
  parentHub?: string;
  built: boolean;
}

export interface ClusterNode {
  id: string;
  title: string;
  url: string;
  type: PageEntry['type'];
  tier: 1 | 2 | 3;
  children?: ClusterNode[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export const categoryConfig: Record<HoverCardCategory, { color: string; label: string; icon: string }> = {
  seo:        { color: '#16a34a', label: 'SEO',              icon: '\u{1F7E2}' },
  aeo:        { color: '#2563eb', label: 'AEO / GEO',       icon: '\u{1F535}' },
  strategy:   { color: '#ea580c', label: 'Content Strategy', icon: '\u{1F7E0}' },
  conversion: { color: '#7c3aed', label: 'Conversion / UX',  icon: '\u{1F7E3}' },
};
