import AppLayout from '../../components/layout/AppLayout';
import Breadcrumb from '../../components/layout/Breadcrumb';
import PageHeader from '../../components/layout/PageHeader';
import HoverLegend from '../../components/hover/HoverLegend';
import HoverTrigger from '../../components/hover/HoverTrigger';
import DirectAnswerBlock from '../../components/content/DirectAnswerBlock';
import DataTable from '../../components/content/DataTable';
import FAQSection from '../../components/content/FAQSection';
import SchemaBlock from '../../components/content/SchemaBlock';
import InternalLinkCard from '../../components/content/InternalLinkCard';
import { useSchema } from '../../hooks/useSchema';
import { buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Reliability & Backup' },
];

const tableHeaders = ['Reliability Level', 'Uptime Guarantee', 'Annual Downtime', 'Failover', 'Best For'];
const tableRows = [
  ['Standard', '99.9% best-effort', '~8.7 hours', 'None included', 'Low-risk SMB'],
  ['Enhanced', '99.9% + Wireless Connect', '~8.7 hours (mitigated)', 'Cellular backup (<30s)', 'Retail, restaurants, any POS'],
  ['Dedicated', '99.99% SLA', '~52 minutes', 'Built-in redundancy', 'Healthcare, financial, multi-location'],
  ['Enterprise', '99.99%+ SLA + SD-WAN', '<52 minutes', 'Multi-path redundancy', 'Mission-critical 24/7 operations'],
];

const faqItems = [
  { question: 'What does 99.9% uptime mean for business internet?', answer: '99.9% uptime allows approximately 8.7 hours of downtime per year. For a business open 12 hours daily, that could mean losing an entire business day to outages annually. Higher tiers (99.99%) reduce this to about 52 minutes.' },
  { question: 'How does wireless backup work?', answer: 'Wireless backup (cellular failover) automatically detects when your primary internet connection fails and switches to a 4G LTE cellular connection within seconds. No manual intervention required. Battery backup extends coverage during power outages.' },
  { question: 'Is business internet more reliable than residential?', answer: 'Yes. Business internet typically includes priority repair, dedicated support lines, and optional SLA guarantees. Residential plans have no uptime commitments and standard repair timelines.' },
  { question: 'How much does internet downtime cost a business?', answer: 'Downtime costs vary by industry. A retail business processing $500/hour in card transactions loses that revenue entirely during an outage. Healthcare, financial services, and e-commerce face even higher per-hour costs.' },
  { question: 'Do I need both dedicated internet and wireless backup?', answer: 'For maximum reliability, yes. Dedicated internet minimizes planned and unplanned downtime through SLA guarantees. Wireless backup covers the edge cases \u2014 cable cuts, weather events, and ISP-level outages that even DIA can\'t prevent.' },
  { question: 'What is SD-WAN and how does it improve reliability?', answer: 'SD-WAN (Software-Defined Wide Area Network) routes traffic across multiple internet connections automatically. If one path fails, traffic shifts to another in milliseconds. It\'s essential for multi-location businesses needing consistent performance.' },
];

const reliabilityHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Internet Reliability: Backup, Uptime, and Failover Solutions',
  datePublished: '2026-02-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Reliability & Backup', url: '/learn/business-internet/reliability' },
]);

const relatedLinks = [
  { label: 'Wireless Backup (Cellular Failover)', to: '/learn/business-internet/wireless-backup', description: 'How automatic cellular failover protects your business' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'SLA-backed reliability vs. best-effort performance' },
  { label: 'What Does Uptime Really Mean?', to: '/learn/business-internet/uptime-meaning', description: 'Translating uptime percentages into real-world downtime' },
  { label: 'What to Do When Internet Goes Down', to: '/learn/business-internet/internet-down', description: 'Immediate steps and long-term prevention strategies' },
  { label: 'Business Internet Pillar Page', to: '/learn/business-internet', description: 'Complete guide to business internet for growing companies' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Get a personalized speed and reliability recommendation' },
];

export default function ReliabilityHubPage() {
  useSchema(reliabilityHubSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet Reliability: Backup, Uptime, and Failover Solutions"
        metaTitle="Business Internet Reliability & Backup | Uptime Guarantees | Comcast Business"
        metaDescription="Business internet reliability depends on redundancy, cellular backup, and SLA-backed uptime guarantees. Learn how to protect your business from outages."
        lastUpdated="March 2026"
        tier={1}
        pageType="hub"
        targetQueries={['business internet reliability', 'backup internet for business', 'business internet uptime', 'internet failover for business']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Business internet reliability is measured by uptime percentage, failover speed, and redundancy layers. A standard business plan offers 99.9% best-effort uptime. Dedicated internet provides 99.99% contractual uptime with financial remedies. Adding wireless backup (cellular failover) ensures your POS, VoIP, and payment systems stay online even during primary connection outages &mdash; switching to 4G LTE within seconds.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Reliability tiers: uptime guarantee, annual downtime, failover method, and best fit"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            What Uptime Percentages Actually Mean in Practice
          </h2>
        </HoverTrigger>
        <HoverTrigger cardId="problem-first-framing">
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Uptime percentages sound impressive until you convert them to actual hours. 99.9% uptime means your connection can be down for 8.7 hours per year &mdash; that&rsquo;s a full business day gone. For a restaurant processing $800/hour in card transactions or a medical office running telemedicine appointments, those hours translate directly to lost revenue and patient trust.
          </p>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed">
          Moving to 99.99% uptime reduces annual downtime to roughly 52 minutes. That&rsquo;s the difference between &ldquo;our internet went down for a day&rdquo; and &ldquo;we had a brief blip last year.&rdquo; The jump from three nines to four nines requires <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet</a> with an SLA &mdash; shared connections cannot guarantee four-nine reliability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          The Real Cost of Business Internet Downtime
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Internet downtime costs more than just lost sales. When your connection goes down, employees can&rsquo;t access cloud applications, VoIP phones go silent, POS terminals stop processing payments, and security cameras go offline. A retail business processing $500/hour in card transactions loses that revenue entirely. Healthcare practices miss appointments. Restaurants turn away delivery orders.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Beyond immediate revenue loss, there&rsquo;s productivity cost (idle employees), reputation damage (frustrated customers), and recovery time (rebooting systems, re-syncing data). For many businesses, the cost of a single extended outage exceeds the annual price difference between standard and dedicated internet plans.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Wireless Backup: Your Insurance Policy Against Outages
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">Comcast Business Wireless Connect</a> acts as automatic insurance for your primary internet connection. When the main line fails &mdash; whether from a cable cut, weather event, or ISP-level issue &mdash; the system detects the outage and switches to 4G LTE cellular backup within seconds. No manual intervention required.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Wireless backup is especially critical for businesses running POS systems, VoIP phones, and alarm/security systems. These systems need connectivity, not necessarily high bandwidth. A cellular connection provides enough throughput to keep transactions processing, calls flowing, and security monitoring active until the primary connection is restored.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          When to Upgrade from Shared to Dedicated for Reliability
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Shared business internet works well for businesses where occasional slowdowns are tolerable. But if your business meets any of these criteria, it&rsquo;s time to consider <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet</a>: you process more than $1,000/day in electronic payments, you run telemedicine or healthcare applications, you operate multiple locations that depend on a central system, or downtime has cost you measurable revenue in the past year.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Dedicated Internet Access (DIA) provides a physically separate connection with contractual SLA guarantees, symmetrical speeds, and priority repair. The monthly cost is higher, but the reliability gap between shared and dedicated is the difference between best-effort and guaranteed performance.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Hub page &mdash; Reliability &amp; Backup cluster</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="cta-placement">
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-heading font-bold text-white mb-2">
            Protect your business from outages
          </h3>
          <p className="text-sm text-slate-300 mb-4">
            Talk to a Comcast Business specialist about reliability solutions &mdash; from wireless backup to dedicated internet with SLA guarantees.
          </p>
          <a
            href="https://business.comcast.com/shop/internet"
            className="inline-block bg-cyan text-slate-900 font-bold text-sm px-5 py-2.5 rounded hover:bg-white transition-colors"
          >
            Explore Reliability Options
          </a>
        </div>
      </HoverTrigger>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore the Reliability & Backup Cluster" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={reliabilityHubSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
