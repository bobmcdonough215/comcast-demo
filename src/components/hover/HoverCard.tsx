import type { HoverCardData } from '../../types';
import { categoryConfig } from '../../types';

interface HoverCardProps {
  card: HoverCardData;
  position: 'above' | 'below';
  visible: boolean;
}

export default function HoverCard({ card, position, visible }: HoverCardProps) {
  const config = categoryConfig[card.category];

  return (
    <div
      role="tooltip"
      className={`
        absolute z-50 w-80 rounded-lg bg-navy-light border border-white/10 shadow-2xl
        transition-all duration-150 pointer-events-auto
        ${position === 'above' ? 'bottom-full mb-2' : 'top-full mt-2'}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}
      `}
      style={{ borderLeftWidth: '3px', borderLeftColor: config.color }}
    >
      <div className="p-4">
        {/* Category pill */}
        <div className="flex items-center gap-1.5 mb-2">
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase"
            style={{ backgroundColor: config.color + '20', color: config.color }}
          >
            <span className="text-xs">{config.icon}</span>
            {config.label}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-sm font-semibold text-white mb-1.5 font-heading">
          {card.title}
        </h4>

        {/* Body */}
        <p className="text-xs leading-relaxed text-slate-300">
          {card.body}
        </p>
      </div>
    </div>
  );
}
