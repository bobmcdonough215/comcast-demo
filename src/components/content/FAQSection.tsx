import { useState } from 'react';
import type { FAQItem } from '../../types';

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-heading font-bold text-white mb-4">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-white/5 border border-white/5 rounded-lg overflow-hidden">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="bg-navy-light/30">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium text-white pr-4">
                  {item.question}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[9px] font-mono text-cat-aeo/60 bg-cat-aeo/10 px-1.5 py-0.5 rounded">
                    FAQPage Schema &#x2713;
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-sm text-slate-300 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
