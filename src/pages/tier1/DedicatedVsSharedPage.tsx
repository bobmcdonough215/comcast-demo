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
import { dedicatedVsSharedSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Dedicated Internet', to: '/learn/business-internet/dedicated-internet' },
  { label: 'Dedicated vs. Shared' },
];

const tableHeaders = ['Feature', 'Shared Business Internet', 'Dedicated Internet (DIA)'];
const tableRows = [
  ['Speed guarantee', 'No (contention-based)', 'Yes (SLA-backed)'],
  ['Symmetrical speeds', 'No', 'Yes'],
  ['Uptime SLA', '99.9% best-effort', '99.99% contractual'],
  ['Static IP included', 'Optional add-on', 'Included'],
  ['Max speed (Comcast)', 'Up to 2 Gbps (HFC)', 'Up to 400 Gbps'],
  ['Price range', '$79.99\u2013$269.99/mo', 'Custom quote'],
  ['Best for', 'SMB 1\u201350 employees', '50+ / multi-location / uptime-critical'],
];

const faqItems = [
  { question: 'What does "dedicated internet" mean for a business?', answer: 'A dedicated internet connection provides your business with an exclusive, unshared link to the internet. Unlike cable broadband that shares capacity with nearby businesses, DIA guarantees that all advertised bandwidth is available exclusively to your business at all times.' },
  { question: 'Is dedicated internet faster than regular business internet?', answer: 'Not necessarily in raw download speed, but DIA guarantees consistent performance. Shared internet may advertise 1 Gbps but deliver less during peak hours due to contention. DIA delivers the exact speed purchased, with symmetrical upload/download.' },
  { question: 'How much does dedicated internet access cost?', answer: 'DIA pricing depends on speed tier, location, and contract terms. Plans start at 300 Mbps symmetrical and scale to 400 Gbps. Contact Comcast Business for a custom quote based on your specific requirements.' },
  { question: 'Do I need dedicated internet for video conferencing?', answer: 'For occasional video calls, shared business internet is usually sufficient. For businesses running 10+ simultaneous video streams, conducting telemedicine, or hosting live events, DIA provides the symmetrical speeds and low jitter that video quality depends on.' },
  { question: 'What is the difference between symmetrical and asymmetrical internet speeds?', answer: 'Asymmetrical connections (like cable) have faster download than upload speeds \u2014 e.g., 1 Gbps down / 35 Mbps up. Symmetrical connections (like DIA) have equal speeds in both directions. Symmetrical matters for cloud uploads, video conferencing, and backup operations.' },
  { question: 'What SLA should I require from a business ISP?', answer: 'For most businesses, 99.9% uptime (8.7 hours of downtime per year) is acceptable. For mission-critical operations \u2014 healthcare, financial services, 24/7 retail \u2014 look for 99.99% (52 minutes per year) with financial remedies for SLA violations.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Dedicated Internet', url: '/learn/business-internet/dedicated-internet' },
  { name: 'Dedicated vs. Shared', url: '/learn/business-internet/dedicated-vs-shared' },
]);

const relatedLinks = [
  { label: 'Business Internet: The Complete Guide', to: '/learn/business-internet', description: 'Pillar page \u2014 plans from 150 Mbps to 400 Gbps' },
  { label: 'SLA & Uptime Guarantees', to: '/learn/business-internet/sla-uptime', description: 'What your SLA actually guarantees' },
  { label: 'Symmetrical Speeds Explained', to: '/learn/business-internet/symmetrical-speeds', description: 'Why upload speed matters for business' },
  { label: 'Wireless Backup & Failover', to: '/learn/business-internet/wireless-backup', description: 'Automatic 4G LTE failover for outages' },
  { label: 'Gaming Venues', to: '/learn/business-internet/gaming-venues', description: 'Dedicated internet for esports and LAN cafes' },
];

export default function DedicatedVsSharedPage() {
  useSchema(dedicatedVsSharedSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Dedicated vs. Shared Business Internet: What's the Difference?"
        metaTitle="Dedicated vs. Shared Business Internet: Key Differences | Comcast Business"
        metaDescription="Dedicated internet provides SLA-backed, symmetrical speeds with no shared congestion. Compare plans starting at 300 Mbps symmetrical."
        lastUpdated="March 2026"
        tier={1}
        pageType="spoke"
        targetQueries={['dedicated vs shared business internet', 'what is dedicated internet', 'is dedicated internet worth it for business', 'difference between cable and dedicated internet']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Shared business internet uses bandwidth that is distributed across multiple customers on the same network. Dedicated internet access (DIA) gives your business an exclusive connection &mdash; guaranteed speeds, symmetrical upload and download, and an SLA that holds the provider accountable for uptime. For businesses where downtime costs money, DIA is worth the investment.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Shared business internet vs. dedicated internet (DIA) feature comparison"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="comparison-intent">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Businesses Switch from Shared to Dedicated Internet
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Most businesses start with shared broadband because it is affordable and fast enough for basic operations. The trigger to switch is almost always a reliability event: a peak-hour slowdown that killed a client video call, a POS outage during a lunch rush, or a cloud backup that failed overnight because upload speeds dropped below usable thresholds. Shared internet is &ldquo;fast enough, most of the time.&rdquo; Dedicated internet is fast enough, all of the time &mdash; backed by a contract that says so.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            What &ldquo;Contention-Based&rdquo; Actually Means for Your Business
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Shared business internet operates on a contention ratio &mdash; the number of customers sharing the same local capacity. A 20:1 contention ratio means 20 businesses share the same upstream bandwidth. During off-peak hours, you get the full advertised speed. During peak hours (9&ndash;11 AM, 1&ndash;3 PM), each business competes for capacity. This is why speed tests at 6 AM look great but real-world performance at 10 AM disappoints.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Dedicated internet has a contention ratio of 1:1. You are the only customer on your connection. The speed you purchase is the speed you get, 24/7/365.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="dia-upsell">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            When Dedicated Internet Is Worth the Investment
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          DIA makes financial sense when the cost of downtime exceeds the cost of the connection. Calculate your hourly revenue, multiply by the number of internet-dependent operations, and compare that to the difference between your current plan and a DIA quote. For businesses processing payments, running VoIP phone systems, or relying on cloud-based operations, the math almost always favors DIA.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Comcast Business offers Dedicated Internet starting at 300 Mbps symmetrical and scaling to 400 Gbps, with 99.99% uptime SLAs and proactive network monitoring. <a href="/tools/bandwidth-calculator" className="text-cyan hover:text-white transition-colors">Use the Bandwidth Calculator</a> to estimate your requirements.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore Related Pages" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={dedicatedVsSharedSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
