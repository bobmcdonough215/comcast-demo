import { Link } from 'react-router-dom';
import type { BreadcrumbItem } from '../../types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-slate-600">/</span>}
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-cyan transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
