import { Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import HoverLegend from '../components/hover/HoverLegend';
import HoverTrigger from '../components/hover/HoverTrigger';
import { clusterMap } from '../data/clusterMap';
import { pageInventory } from '../data/pageInventory';
import type { ClusterNode } from '../types';

const builtUrls = new Set(pageInventory.filter(p => p.built).map(p => p.url));

const tierConfig: Record<number, { dot: string; border: string; label: string }> = {
  1: { dot: 'bg-green-400', border: 'border-green-400/30', label: 'T1' },
  2: { dot: 'bg-amber-400', border: 'border-amber-400/20', label: 'T2' },
  3: { dot: 'bg-slate-500', border: 'border-slate-500/20', label: 'T3' },
};

const typeColors: Record<string, string> = {
  pillar: 'text-cyan',
  hub: 'text-electric',
  spoke: 'text-slate-300',
  vertical: 'text-orange-400',
  'add-on': 'text-purple-400',
  comparison: 'text-yellow-400',
  glossary: 'text-emerald-400',
  'use-case': 'text-pink-400',
  tool: 'text-amber-300',
  trust: 'text-blue-300',
};

function ClusterNode({ node, depth = 0 }: { node: ClusterNode; depth?: number }) {
  const tc = tierConfig[node.tier];
  const isBuilt = builtUrls.has(node.url);

  return (
    <div style={{ marginLeft: depth > 0 ? '24px' : '0' }}>
      <Link
        to={node.url}
        className={`group flex items-center gap-2.5 py-2 px-3 rounded-lg border transition-all hover:bg-white/[0.03] ${
          isBuilt ? tc.border : 'border-transparent'
        } ${isBuilt ? 'hover:border-cyan/30' : 'hover:border-white/10'}`}
      >
        {/* Tier dot */}
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${tc.dot} ${
          node.tier === 3 ? 'border border-dashed border-slate-500 bg-transparent' : ''
        }`} />

        {/* Connector line for children */}
        {depth > 0 && (
          <span className="text-slate-600 text-xs shrink-0">&mdash;</span>
        )}

        {/* Title */}
        <span className={`text-sm font-medium group-hover:text-white transition-colors ${
          typeColors[node.type] || 'text-slate-300'
        }`}>
          {node.title}
        </span>

        {/* Badges */}
        <span className="ml-auto flex items-center gap-1.5 shrink-0">
          <span className={`text-[9px] font-mono font-bold ${
            node.tier === 1 ? 'text-green-400' : node.tier === 2 ? 'text-amber-400' : 'text-slate-600'
          }`}>
            {tc.label}
          </span>
          <span className="text-[9px] font-mono text-slate-600 uppercase">
            {node.type}
          </span>
          {isBuilt && (
            <span className="text-[9px] text-green-400">&#x2713;</span>
          )}
        </span>
      </Link>

      {node.children?.map((child) => (
        <ClusterNode key={child.id} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function ClusterOverview() {
  // Count pages by tier
  function countByTier(node: ClusterNode): Record<number, number> {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
    function walk(n: ClusterNode) {
      counts[n.tier] = (counts[n.tier] || 0) + 1;
      n.children?.forEach(walk);
    }
    walk(node);
    return counts;
  }

  const counts = countByTier(clusterMap);
  const total = counts[1] + counts[2] + counts[3];

  return (
    <AppLayout>
      <HoverLegend />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-3">
          Content Cluster Architecture
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          This is the full 47-page topic cluster for Comcast Business internet products. Every node is a planned page. Green nodes are fully built Tier 1 pages. Click any node to visit it.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            { label: 'Tier 1 — Built', count: counts[1], color: 'bg-green-400' },
            { label: 'Tier 2 — Planned', count: counts[2], color: 'bg-amber-400' },
            { label: 'Tier 3 — Stub', count: counts[3], color: 'bg-slate-500' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs text-slate-400">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <span>{item.label}: <strong className="text-white">{item.count}</strong></span>
            </div>
          ))}
          <div className="text-xs text-slate-400">
            Total: <strong className="text-white">{total}</strong>
          </div>
        </div>

        {/* Legend for node types */}
        <HoverTrigger cardId="topical-authority">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500 mb-2">
            {Object.entries(typeColors).map(([type, color]) => (
              <span key={type} className={`${color} uppercase font-mono`}>
                {type}
              </span>
            ))}
          </div>
        </HoverTrigger>
      </header>

      {/* The cluster tree */}
      <div className="rounded-lg border border-white/5 bg-navy-light/20 p-4">
        <ClusterNode node={clusterMap} />
      </div>
    </AppLayout>
  );
}
