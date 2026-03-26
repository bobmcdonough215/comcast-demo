import HoverTrigger from '../hover/HoverTrigger';

interface PageHeaderProps {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  tier: 1 | 2 | 3;
  pageType: string;
  targetQueries?: string[];
}

const tierStyles: Record<number, { bg: string; text: string; label: string }> = {
  1: { bg: 'bg-green-500/15', text: 'text-green-400', label: 'Tier 1 — Built' },
  2: { bg: 'bg-amber-500/15', text: 'text-amber-400', label: 'Tier 2 — Planned' },
  3: { bg: 'bg-slate-500/15', text: 'text-slate-400', label: 'Tier 3 — Stub' },
};

const typeIcons: Record<string, string> = {
  pillar: '\u{1f3db}',
  hub: '\u{1f4c2}',
  spoke: '\u{1f4c4}',
  vertical: '\u{1f3ed}',
  'add-on': '\u{1f50c}',
  comparison: '\u{1f4ca}',
  glossary: '\u{1f4d6}',
  'use-case': '\u{1f4a1}',
  tool: '\u{1f527}',
  trust: '\u{2b50}',
};

export default function PageHeader({
  h1,
  metaTitle,
  metaDescription,
  lastUpdated,
  tier,
  pageType,
  targetQueries,
}: PageHeaderProps) {
  const ts = tierStyles[tier];

  return (
    <header className="mb-8">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wide ${ts.bg} ${ts.text}`}>
          {ts.label}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wide bg-white/5 text-slate-400">
          {typeIcons[pageType] || '\u{1f4c4}'} {pageType}
        </span>
      </div>

      {/* H1 */}
      <HoverTrigger cardId="h1-format">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-4">
          {h1}
        </h1>
      </HoverTrigger>

      {/* Meta info block */}
      <div className="space-y-2 text-sm">
        <HoverTrigger cardId="meta-title">
          <div className="flex items-start gap-2">
            <span className="text-slate-500 shrink-0 font-mono text-xs mt-0.5">TITLE</span>
            <span className="text-slate-300">{metaTitle}</span>
          </div>
        </HoverTrigger>

        <HoverTrigger cardId="meta-description">
          <div className="flex items-start gap-2">
            <span className="text-slate-500 shrink-0 font-mono text-xs mt-0.5">DESC</span>
            <span className="text-slate-300">{metaDescription}</span>
          </div>
        </HoverTrigger>

        {targetQueries && targetQueries.length > 0 && (
          <HoverTrigger cardId="query-targeting">
            <div className="flex items-start gap-2">
              <span className="text-slate-500 shrink-0 font-mono text-xs mt-0.5">QUERIES</span>
              <span className="text-slate-400">
                {targetQueries.map((q, i) => (
                  <span key={i}>
                    {i > 0 && <span className="text-slate-600 mx-1">&middot;</span>}
                    <span className="text-slate-300">{q}</span>
                  </span>
                ))}
              </span>
            </div>
          </HoverTrigger>
        )}

        <HoverTrigger cardId="content-freshness">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 shrink-0 font-mono text-xs">UPDATED</span>
            <span className="text-slate-400">{lastUpdated}</span>
          </div>
        </HoverTrigger>
      </div>
    </header>
  );
}
