import { Link } from 'react-router-dom';

interface LinkItem {
  label: string;
  to: string;
  description?: string;
}

interface InternalLinkCardProps {
  title?: string;
  links: LinkItem[];
}

export default function InternalLinkCard({ title = 'Related Pages', links }: InternalLinkCardProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-heading font-semibold text-white mb-3">{title}</h3>
      <div className="grid gap-2 sm:grid-cols-2">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="group flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-navy-light/30 hover:bg-white/5 hover:border-cyan/20 transition-all"
          >
            <span className="text-cyan text-sm mt-0.5 shrink-0">&rarr;</span>
            <div>
              <div className="text-sm font-medium text-white group-hover:text-cyan transition-colors">
                {link.label}
              </div>
              {link.description && (
                <div className="text-xs text-slate-500 mt-0.5">{link.description}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
