import { categoryConfig } from '../../types';

export default function HoverLegend() {
  const categories = Object.entries(categoryConfig);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 rounded-lg bg-navy-light/60 border border-white/5 mb-6">
      {categories.map(([key, config]) => (
        <div key={key} className="flex items-center gap-1.5 text-xs text-slate-400">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ backgroundColor: config.color }}
          />
          <span className="font-medium">{config.label}</span>
        </div>
      ))}
      <span className="text-xs text-slate-500 ml-auto">
        Hover over highlighted elements to see the strategy rationale.
      </span>
    </div>
  );
}
