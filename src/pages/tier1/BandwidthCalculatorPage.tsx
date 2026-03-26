import { useState } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import Breadcrumb from '../../components/layout/Breadcrumb';
import PageHeader from '../../components/layout/PageHeader';
import HoverLegend from '../../components/hover/HoverLegend';
import HoverTrigger from '../../components/hover/HoverTrigger';
import DirectAnswerBlock from '../../components/content/DirectAnswerBlock';
import SchemaBlock from '../../components/content/SchemaBlock';
import FAQSection from '../../components/content/FAQSection';
import InternalLinkCard from '../../components/content/InternalLinkCard';
import { useSchema } from '../../hooks/useSchema';
import { bandwidthCalculatorSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Tools' },
  { label: 'Bandwidth Calculator' },
];

interface Activity {
  id: string;
  label: string;
  perUnit: number; // Mbps per employee/device using this
  description: string;
}

const activities: Activity[] = [
  { id: 'video', label: 'Video conferencing', perUnit: 6, description: 'Zoom, Teams, Google Meet' },
  { id: 'cloud', label: 'Cloud storage / sync', perUnit: 10, description: 'Dropbox, Google Drive, OneDrive' },
  { id: 'pos', label: 'POS terminals', perUnit: 3, description: 'Payment processing systems' },
  { id: 'cameras', label: 'Security cameras', perUnit: 15, description: '4K IP cameras (upload heavy)' },
  { id: 'voip', label: 'VoIP phones', perUnit: 1, description: 'Business phone lines' },
  { id: 'gaming', label: 'Gaming stations', perUnit: 15, description: 'Competitive gaming PCs' },
  { id: 'signage', label: 'Digital signage', perUnit: 5, description: 'Networked displays' },
  { id: 'vpn', label: 'Remote workers (VPN)', perUnit: 8, description: 'Full-tunnel VPN connections' },
];

type UptimePriority = 'standard' | 'high' | 'mission-critical';

const uptimeMultipliers: Record<UptimePriority, { mult: number; label: string }> = {
  standard: { mult: 1.0, label: 'Standard' },
  high: { mult: 1.3, label: 'High' },
  'mission-critical': { mult: 1.6, label: 'Mission-critical' },
};

const faqItems = [
  { question: 'How accurate is a bandwidth calculator for business internet?', answer: 'Bandwidth calculators provide estimates based on typical usage patterns. Actual needs vary based on simultaneous usage peaks, application-specific requirements, and network overhead. Use calculator results as a starting point, then consult with a network specialist for precise sizing.' },
  { question: 'Should I choose a plan with more bandwidth than the calculator recommends?', answer: 'Yes. We recommend 20-30% headroom above your calculated minimum to account for usage spikes, future growth, and network overhead. For mission-critical operations, 50-60% headroom is advisable.' },
  { question: 'Does the calculator account for upload speed needs?', answer: 'The recommendation includes both download and upload considerations. Activities like video conferencing, cloud sync, and security cameras are upload-heavy. If your calculated need exceeds 200 Mbps, consider dedicated internet for symmetrical speeds.' },
  { question: 'What if my business has multiple locations?', answer: 'Run the calculator separately for each location based on its specific employee count and activities. Multi-location businesses should also consider SD-WAN for centralized network management and consistent performance across sites.' },
  { question: 'How often should I reassess my bandwidth needs?', answer: 'Reassess quarterly or whenever you add employees, adopt new cloud applications, or change workflow patterns (e.g., shift to hybrid work). Bandwidth needs typically grow 20-30% year over year for growing businesses.' },
  { question: 'Is shared or dedicated internet better for my calculated bandwidth?', answer: 'For calculated needs under 500 Mbps with standard uptime priority, shared business internet is typically sufficient. Above 500 Mbps, or for high/mission-critical uptime needs, dedicated internet provides guaranteed performance without contention.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Tools', url: '/tools/bandwidth-calculator' },
  { name: 'Bandwidth Calculator', url: '/tools/bandwidth-calculator' },
]);

export default function BandwidthCalculatorPage() {
  useSchema(bandwidthCalculatorSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  const [employees, setEmployees] = useState(15);
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set(['video', 'cloud']));
  const [uptime, setUptime] = useState<UptimePriority>('standard');
  const [showResult, setShowResult] = useState(false);

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setShowResult(false);
  };

  // Calculate recommendation
  const selectedList = activities.filter((a) => selectedActivities.has(a.id));
  const baseBandwidth = selectedList.reduce((sum, a) => {
    // For POS, cameras, signage — use fixed counts, not employee multiplier
    if (['pos', 'cameras', 'signage'].includes(a.id)) {
      return sum + a.perUnit * Math.ceil(employees / 10); // rough: 1 per 10 employees
    }
    return sum + a.perUnit * employees;
  }, 0);

  const multiplier = uptimeMultipliers[uptime].mult;
  const recommended = Math.ceil(baseBandwidth * multiplier);

  // Round to nearest nice plan tier
  const planTiers = [150, 300, 500, 750, 1000, 2000, 5000, 10000];
  const suggestedPlan = planTiers.find((t) => t >= recommended) || planTiers[planTiers.length - 1];
  const isDIA = recommended > 500 || uptime === 'mission-critical';

  const activityLabels = selectedList.map((a) => a.label.toLowerCase()).join(', ');

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet Bandwidth Calculator"
        metaTitle="Business Internet Bandwidth Calculator | Comcast Business"
        metaDescription="Calculate how much internet speed your business needs based on employee count and usage type. Free bandwidth calculator with personalized recommendations."
        lastUpdated="March 2026"
        tier={1}
        pageType="tool"
        targetQueries={['business internet bandwidth calculator', 'how much internet speed do I need calculator', 'business bandwidth calculator']}
      />

      <HoverTrigger cardId="bandwidth-calculator">
        <DirectAnswerBlock>
          Use this calculator to estimate your business internet bandwidth needs. Input your employee count, select your daily activities, and choose your uptime priority. The output is a text-based recommendation designed to help you choose the right plan &mdash; not just a number.
        </DirectAnswerBlock>
      </HoverTrigger>

      {/* Calculator */}
      <div className="rounded-lg border border-white/5 bg-navy-light/30 p-6 mb-8 space-y-8">
        {/* Step 1: Employee count */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Step 1: How many employees?
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={500}
              value={employees}
              onChange={(e) => { setEmployees(Number(e.target.value)); setShowResult(false); }}
              className="flex-1 accent-cyan h-2 bg-navy-mid rounded-full"
            />
            <div className="w-20 text-center">
              <input
                type="number"
                min={1}
                max={500}
                value={employees}
                onChange={(e) => { setEmployees(Math.min(500, Math.max(1, Number(e.target.value)))); setShowResult(false); }}
                className="w-full bg-navy-mid border border-white/10 rounded px-2 py-1 text-center text-white text-sm font-mono"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Activities */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Step 2: What does your team do daily?
          </label>
          <div className="grid gap-2 sm:grid-cols-2">
            {activities.map((a) => {
              const checked = selectedActivities.has(a.id);
              return (
                <button
                  key={a.id}
                  onClick={() => toggleActivity(a.id)}
                  className={`flex items-start gap-3 p-3 rounded-lg border text-left transition-all ${
                    checked
                      ? 'border-cyan/30 bg-cyan/5'
                      : 'border-white/5 bg-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    checked ? 'border-cyan bg-cyan text-navy' : 'border-white/20'
                  }`}>
                    {checked && (
                      <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                        <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{a.label}</div>
                    <div className="text-xs text-slate-500">{a.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Uptime priority */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Step 3: How important is uptime?
          </label>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(uptimeMultipliers) as [UptimePriority, { mult: number; label: string }][]).map(([key, config]) => (
              <button
                key={key}
                onClick={() => { setUptime(key); setShowResult(false); }}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                  uptime === key
                    ? 'border-cyan/30 bg-cyan/5 text-cyan'
                    : 'border-white/5 text-slate-400 hover:bg-white/[0.02]'
                }`}
              >
                {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculate button */}
        <button
          onClick={() => setShowResult(true)}
          className="w-full py-3 rounded-lg bg-electric hover:bg-electric/80 text-white font-semibold text-sm transition-colors"
        >
          Calculate Recommended Bandwidth
        </button>
      </div>

      {/* Result */}
      {showResult && (
        <HoverTrigger cardId="calculator-output">
          <div className="relative rounded-lg border-l-4 border-cyan bg-cyan/5 px-5 py-4 mb-8">
            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan/70 mb-2">
              Recommendation
            </div>
            <p className="text-base md:text-lg leading-relaxed text-slate-200 mb-3">
              Based on your inputs &mdash; {employees} employee{employees !== 1 ? 's' : ''}, {activityLabels || 'no specific activities'}, {uptimeMultipliers[uptime].label.toLowerCase()} uptime priority &mdash; we recommend at least <strong className="text-white">{suggestedPlan >= 1000 ? `${suggestedPlan / 1000} Gbps` : `${suggestedPlan} Mbps`}</strong>.
              {isDIA && (
                <> For reliability guarantees and symmetrical upload speeds, consider a <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">Dedicated Internet</a> plan.</>
              )}
            </p>
            <div className="text-xs text-slate-500">
              Estimated minimum: {recommended} Mbps download{isDIA ? `, ${Math.ceil(recommended * 0.5)} Mbps upload (symmetrical recommended)` : ''}
            </div>
          </div>
        </HoverTrigger>
      )}

      <HoverTrigger cardId="tool-to-sales">
        <InternalLinkCard
          title="Next Steps"
          links={[
            { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'Understand speed recommendations by activity' },
            { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Compare shared and dedicated options' },
            { label: 'How Many Devices Can Connect?', to: '/learn/business-internet/how-many-devices', description: 'Device capacity by plan speed' },
            { label: 'Business Internet — Complete Guide', to: '/learn/business-internet', description: 'Start from the pillar page' },
          ]}
        />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="WebApplication" json={bandwidthCalculatorSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
