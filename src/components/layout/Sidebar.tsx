import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clusterMap } from '../../data/clusterMap';
import type { ClusterNode } from '../../types';

const tierColors: Record<number, string> = {
  1: 'text-green-400',
  2: 'text-amber-400',
  3: 'text-slate-500',
};

const tierBadge: Record<number, string> = {
  1: 'T1',
  2: 'T2',
  3: 'T3',
};

function SidebarNode({ node, depth = 0 }: { node: ClusterNode; depth?: number }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const isActive = location.pathname === node.url;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center gap-1.5 py-1 pr-2 rounded-md text-sm transition-colors cursor-pointer group ${
          isActive
            ? 'bg-electric/15 text-cyan'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="w-4 h-4 flex items-center justify-center text-[10px] text-slate-500 hover:text-white shrink-0"
            aria-label={expanded ? 'Collapse section' : 'Expand section'}
          >
            {expanded ? '\u25BE' : '\u25B8'}
          </button>
        )}
        {!hasChildren && <span className="w-4 shrink-0" />}

        <Link
          to={node.url}
          className="flex-1 truncate leading-tight"
          title={node.title}
        >
          {node.title}
        </Link>

        <span className={`text-[10px] font-mono font-bold shrink-0 ${tierColors[node.tier]}`}>
          {tierBadge[node.tier]}
        </span>
      </div>

      {hasChildren && expanded && (
        <div>
          {node.children!.map((child) => (
            <SidebarNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-navy border-r border-white/5
          overflow-y-auto transition-transform duration-200
          lg:static lg:translate-x-0 lg:z-auto
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo / Brand */}
        <div className="p-4 border-b border-white/5">
          <Link to="/" className="block" onClick={onClose}>
            <div className="text-lg font-heading font-bold text-white tracking-tight">
              Comcast Business
            </div>
            <div className="text-[11px] text-cyan tracking-widest uppercase mt-0.5">
              Content Strategy Demo
            </div>
          </Link>
        </div>

        {/* Cluster tree */}
        <nav className="p-3">
          <SidebarNode node={clusterMap} />
        </nav>

        {/* Bottom links */}
        <div className="p-3 border-t border-white/5 mt-2">
          <Link
            to="/cluster"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white py-1.5 px-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <span className="text-base">&#x1f5fa;</span>
            Cluster Map
          </Link>
          <Link
            to="/inventory"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white py-1.5 px-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <span className="text-base">&#x1f4cb;</span>
            Full Page Inventory
          </Link>
        </div>
      </aside>
    </>
  );
}
