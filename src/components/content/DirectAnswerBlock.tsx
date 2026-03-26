import type { ReactNode } from 'react';

interface DirectAnswerBlockProps {
  children: ReactNode;
}

export default function DirectAnswerBlock({ children }: DirectAnswerBlockProps) {
  return (
    <div className="relative rounded-lg border-l-4 border-cyan bg-cyan/5 px-5 py-4 mb-8">
      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan/70 mb-2">
        Direct Answer
      </div>
      <div className="text-base md:text-lg leading-relaxed text-slate-200">
        {children}
      </div>
    </div>
  );
}
