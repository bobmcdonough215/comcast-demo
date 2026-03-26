import { useParams, useLocation } from 'react-router-dom';
import AppLayout from '../../components/layout/AppLayout';
import Breadcrumb from '../../components/layout/Breadcrumb';
import HoverLegend from '../../components/hover/HoverLegend';
import HoverTrigger from '../../components/hover/HoverTrigger';
import InternalLinkCard from '../../components/content/InternalLinkCard';
import { pageInventory } from '../../data/pageInventory';

export default function StubPage() {
  const { slug } = useParams();
  const location = useLocation();

  // Find matching page in inventory
  const page = pageInventory.find((p) => p.url === location.pathname);

  const title = page?.title || slug?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Planned Page';
  const tier = page?.tier || 2;
  const pageType = page?.type || 'spoke';
  const queries = page?.targetQueries || [];
  const parentHub = page?.parentHub;

  const tierLabel = tier === 2 ? 'TIER 2 — PLANNED' : 'TIER 3 — STUB';
  const tierColor = tier === 2 ? 'text-amber-400 bg-amber-500/15' : 'text-slate-400 bg-slate-500/15';

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Business Internet', to: '/learn/business-internet' },
    ...(parentHub ? [{ label: parentHub }] : []),
    { label: title },
  ];

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wide ${tierColor}`}>
            {tierLabel}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wide bg-white/5 text-slate-400">
            {pageType}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight mb-4">
          {title}
        </h1>

        {page && (
          <div className="text-sm text-slate-500 mb-2">
            <span className="font-mono text-xs text-slate-600">URL</span>{' '}
            <span className="text-slate-400">{page.url}</span>
          </div>
        )}

        {queries.length > 0 && (
          <div className="text-sm text-slate-500">
            <span className="font-mono text-xs text-slate-600">TARGET QUERIES</span>{' '}
            <span className="text-slate-400">
              {queries.join(' \u00b7 ')}
            </span>
          </div>
        )}
      </header>

      <HoverTrigger cardId="stub-page-strategy">
        <div className="rounded-lg border border-white/5 bg-navy-light/30 p-6 mb-8">
          <h2 className="text-lg font-heading font-semibold text-white mb-3">
            What This Page Would Contain
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">&bull;</span>
              <span>A direct answer block (40-60 words) targeting the primary query</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">&bull;</span>
              <span>An HTML data table with structured comparison or specification data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">&bull;</span>
              <span>5-8 FAQ items in natural question syntax with FAQPage schema</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">&bull;</span>
              <span>Appropriate schema markup ({pageType === 'glossary' ? 'DefinedTerm' : pageType === 'vertical' ? 'Service' : pageType === 'tool' ? 'WebApplication' : 'Article'} + FAQPage + BreadcrumbList)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">&bull;</span>
              <span>Internal links to parent hub and lateral spoke pages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">&bull;</span>
              <span>E-E-A-T signals: author attribution, sourced statistics, last updated date</span>
            </li>
          </ul>
        </div>
      </HoverTrigger>

      <HoverTrigger cardId="tier-system">
        <div className="rounded-lg border border-white/5 bg-navy-light/30 p-6 mb-8">
          <h2 className="text-lg font-heading font-semibold text-white mb-3">
            Why This Page Exists in the Cluster
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            {tier === 2
              ? 'Tier 2 pages fill out the content cluster so it reads as a complete ecosystem, not a curated demo. This page targets specific queries that the hub and pillar pages are too broad to rank for. It strengthens the entire cluster\'s topical authority by covering a necessary subtopic.'
              : 'Tier 3 pages exist as linked placeholder nodes in the content architecture. They appear as navigation items, internal link targets, and cluster map nodes — demonstrating the full planned system. Internal links pointing to this URL still distribute link equity to the cluster.'}
          </p>
          <p className="text-sm text-slate-400">
            Internal links from built pages already point here, reserving this URL for future content.
          </p>
        </div>
      </HoverTrigger>

      <InternalLinkCard
        title="Navigate Back"
        links={[
          { label: 'Business Internet — The Complete Guide', to: '/learn/business-internet', description: 'Return to the pillar page' },
          { label: 'Cluster Map', to: '/cluster', description: 'View the full content architecture' },
          { label: 'Page Inventory', to: '/inventory', description: 'Browse all 47 pages' },
        ]}
      />
    </AppLayout>
  );
}
