import { Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import HoverLegend from '../components/hover/HoverLegend';
import HoverTrigger from '../components/hover/HoverTrigger';
import { pageInventory } from '../data/pageInventory';

const tierConfig: Record<number, { bg: string; text: string; label: string }> = {
  1: { bg: 'bg-green-500/15', text: 'text-green-400', label: 'T1' },
  2: { bg: 'bg-amber-500/15', text: 'text-amber-400', label: 'T2' },
  3: { bg: 'bg-slate-500/15', text: 'text-slate-400', label: 'T3' },
};

export default function PageInventoryPage() {
  const t1 = pageInventory.filter((p) => p.tier === 1);
  const t2 = pageInventory.filter((p) => p.tier === 2);
  const t3 = pageInventory.filter((p) => p.tier === 3);

  return (
    <AppLayout>
      <HoverLegend />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-3">
          Full Page Inventory
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          All 47 pages in the Comcast Business content cluster. Tier 1 pages are fully built and clickable. Tier 2 and Tier 3 pages route to stub pages showing what they would contain.
        </p>

        <HoverTrigger cardId="tier-system">
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>Tier 1: <strong className="text-green-400">{t1.length}</strong> built</span>
            <span>Tier 2: <strong className="text-amber-400">{t2.length}</strong> planned</span>
            <span>Tier 3: <strong className="text-slate-400">{t3.length}</strong> stubs</span>
            <span>Total: <strong className="text-white">{pageInventory.length}</strong></span>
          </div>
        </HoverTrigger>
      </header>

      <div className="overflow-x-auto rounded-lg border border-white/5">
        <table className="w-full text-sm">
          <caption className="text-left text-xs text-slate-500 px-4 py-2 bg-navy-light/50">
            Complete 47-page content cluster inventory
          </caption>
          <thead>
            <tr className="border-b border-white/10 bg-navy-light">
              <th scope="col" className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 w-8">#</th>
              <th scope="col" className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Page Title</th>
              <th scope="col" className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 hidden md:table-cell">URL</th>
              <th scope="col" className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Type</th>
              <th scope="col" className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Tier</th>
              <th scope="col" className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 hidden lg:table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {pageInventory.map((page, idx) => {
              const tc = tierConfig[page.tier];
              return (
                <tr
                  key={page.id}
                  className={`border-b border-white/5 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}
                >
                  <td className="px-4 py-2.5 text-slate-600 font-mono text-xs">{page.id}</td>
                  <td className="px-4 py-2.5">
                    <Link
                      to={page.url}
                      className="text-slate-300 hover:text-cyan transition-colors font-medium"
                    >
                      {page.title}
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-slate-600 font-mono text-xs hidden md:table-cell">
                    {page.url}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="text-[10px] font-mono uppercase text-slate-500">
                      {page.type}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${tc.bg} ${tc.text}`}>
                      {tc.label}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 hidden lg:table-cell">
                    {page.built ? (
                      <span className="text-green-400 text-xs">&#x2713; Built</span>
                    ) : (
                      <span className="text-slate-600 text-xs">Stub</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
