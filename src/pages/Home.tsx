import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import HoverLegend from '../components/hover/HoverLegend';
import { clusterMap } from '../data/clusterMap';
import { pageInventory } from '../data/pageInventory';

const keyConcepts = [
  {
    title: 'What is a Topic Cluster?',
    body: 'A topic cluster is a content architecture pattern where one authoritative pillar page owns a broad topic, hub pages branch from it to cover mid-level subtopics, and spoke pages target narrow, specific queries. Every level links back up the chain. Google and AI systems reward this structure because it signals topical authority \u2014 comprehensive coverage of a subject, not just one good page.',
  },
  {
    title: 'SEO vs. AEO vs. GEO',
    body: 'SEO (Search Engine Optimization) gets you found in traditional search rankings. AEO (Answer Engine Optimization) gets you cited by AI assistants like ChatGPT, Perplexity, and Google AI Overviews. GEO (Generative Engine Optimization) gets your domain trusted as an authoritative source across multiple AI platforms. They\u2019re layered: build SEO first, add AEO on top, and GEO emerges from doing both well at scale.',
  },
  {
    title: 'The Hover Card System',
    body: 'Every major implementation decision on every page has an associated hover card that explains the why behind it. Green cards explain SEO rationale. Blue cards explain AEO/GEO rationale. Orange cards explain content strategy decisions. Purple cards explain conversion and UX choices. This transforms the demo from a content mockup into a consultative strategy presentation.',
  },
  {
    title: 'Schema Markup',
    body: 'Schema markup is JSON-LD structured data embedded in a page\u2019s HTML that tells search engines and AI systems what content means \u2014 not just what it says. In 2026, schema is mandatory infrastructure. A controlled experiment found that only pages with well-implemented schema appeared in AI Overviews. Every page in this demo implements appropriate schema types.',
  },
];

export default function Home() {
  const [openConcept, setOpenConcept] = useState<number | null>(null);

  return (
    <AppLayout>
      <div className="max-w-3xl">
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-4">
            B2B Content Strategy Demo
          </h1>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            This is a B2B content strategy demo for Comcast Business internet products, built to show how topic cluster architecture, SEO, and AEO best practices work together. Navigate the sidebar to explore 12 fully built Tier 1 pages. Hover over any highlighted element to see the strategy rationale behind it.
          </p>
          <HoverLegend />
        </div>

        {/* Mini cluster map — top 2 levels */}
        <div className="mb-10">
          <h2 className="text-xl font-heading font-semibold text-white mb-4">
            Content Architecture
          </h2>
          <div className="rounded-lg border border-white/5 bg-navy-light/30 p-5">
            <Link
              to={clusterMap.url}
              className="text-sm font-semibold text-cyan hover:text-white transition-colors"
            >
              {clusterMap.title}
            </Link>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {clusterMap.children?.map((hub) => (
                <Link
                  key={hub.id}
                  to={hub.url}
                  className="group flex items-center gap-2 p-2.5 rounded border border-white/5 hover:border-cyan/20 hover:bg-white/[0.03] transition-all"
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                    hub.tier === 1 ? 'bg-green-400' : hub.tier === 2 ? 'bg-amber-400' : 'bg-slate-500'
                  }`} />
                  <span className="text-xs text-slate-300 group-hover:text-white transition-colors truncate">
                    {hub.title}
                  </span>
                  {hub.children && (
                    <span className="text-[10px] text-slate-600 ml-auto shrink-0">
                      {hub.children.length} pages
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <Link
              to="/cluster"
              className="inline-block mt-4 text-xs text-cyan hover:text-white transition-colors"
            >
              View full cluster map &rarr;
            </Link>
          </div>
        </div>

        {/* Tier breakdown */}
        <div className="mb-10">
          <h2 className="text-xl font-heading font-semibold text-white mb-4">
            Page Inventory
          </h2>
          <div className="rounded-lg border border-white/5 bg-navy-light/30 p-5 space-y-2">
            {(() => {
              const builtCount = pageInventory.filter(p => p.built).length;
              const stubCount = pageInventory.filter(p => !p.built).length;
              return (
                <>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-white font-medium">Built</span>
                    </div>
                    <span className="text-slate-400">{builtCount} pages &mdash; Fully built &#x2713;</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                      <span className="text-white font-medium">Stub</span>
                    </div>
                    <span className="text-slate-400">{stubCount} pages &mdash; Architecture defined, stubs linked</span>
                  </div>
                </>
              );
            })()}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-sm">
              <span className="text-white font-semibold">Total</span>
              <span className="text-white font-semibold">{pageInventory.length} pages</span>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="mb-10">
          <h2 className="text-xl font-heading font-semibold text-white mb-4">
            Key Concepts
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {keyConcepts.map((concept, idx) => {
              const isOpen = openConcept === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setOpenConcept(isOpen ? null : idx)}
                  className="text-left rounded-lg border border-white/5 bg-navy-light/30 p-4 hover:bg-white/[0.03] hover:border-cyan/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-white">{concept.title}</h3>
                    <svg
                      className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {isOpen && (
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {concept.body}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
