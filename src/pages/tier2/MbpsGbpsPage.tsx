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
  { label: 'Glossary' },
  { label: 'Mbps vs. Gbps' },
];

const tableHeaders = ['Unit', 'Full Name', 'Equals', 'Typical Use'];
const tableRows = [
  ['1 Mbps', 'Megabit per second', '1,000 Kbps', 'Single device browsing'],
  ['100 Mbps', '100 Megabits/second', '0.1 Gbps', 'Small office (5-10 people)'],
  ['500 Mbps', '500 Megabits/second', '0.5 Gbps', 'Mid-size office (15-30 people)'],
  ['1 Gbps', 'Gigabit per second', '1,000 Mbps', 'Large office (30-100 people)'],
  ['10 Gbps', '10 Gigabits/second', '10,000 Mbps', 'Enterprise / multi-location'],
  ['100 Gbps', '100 Gigabits/second', '100,000 Mbps', 'Data center / hyperscale'],
];

const faqItems = [
  { question: 'What is the difference between Mbps and MBps?', answer: 'Mbps (megabits per second) measures internet speed. MBps (megabytes per second) measures file transfer speed. There are 8 bits in a byte, so 100 Mbps equals approximately 12.5 MBps. ISPs advertise speeds in Mbps because the numbers are larger. When downloading a file, your computer typically shows progress in MBps or MB. To convert, divide Mbps by 8.' },
  { question: 'How many Mbps do I need for my business?', answer: 'It depends on your team size and usage. A small office with 5\u201310 employees doing email and web browsing needs 100\u2013200 Mbps. A mid-size office with 15\u201330 employees using cloud apps and video conferencing needs 300\u2013500 Mbps. Larger offices with 30+ employees or heavy cloud usage should consider 1 Gbps or higher. Use a bandwidth calculator for a recommendation based on your specific mix of activities.' },
  { question: 'Is 1 Gbps fast enough for a business?', answer: 'For most businesses, 1 Gbps is more than sufficient. It supports 50\u2013100+ employees doing typical business tasks including video conferencing, cloud applications, and file transfers. However, if your business involves large file transfers (video production, engineering), runs data-heavy applications, or has 100+ concurrent users, you may need 2\u201310 Gbps. Dedicated internet at 1 Gbps also performs better than shared internet at 1 Gbps because the bandwidth is uncontested.' },
  { question: 'Why does my 100 Mbps plan feel slow?', answer: 'Several factors can make a 100 Mbps plan feel slow: too many devices sharing the connection (20+ devices can saturate 100 Mbps during peak usage), asymmetrical upload speeds (your upload may only be 10\u201320 Mbps, limiting video calls and cloud sync), network congestion on shared connections during business hours, and WiFi bottlenecks from older routers or interference. A speed test during peak hours reveals your actual performance.' },
  { question: 'What is the fastest business internet speed available?', answer: 'Comcast Business offers dedicated internet speeds up to 100 Gbps for enterprise customers with fiber connections. Most businesses purchase plans between 200 Mbps and 10 Gbps. The fastest widely available standard business plans are typically 1\u20132 Gbps. Dedicated Internet Access (DIA) plans offer symmetrical speeds (equal upload and download) at 1 Gbps to 100 Gbps depending on location and infrastructure.' },
];

const mbpsGbpsSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Mbps vs. Gbps',
  description: 'Mbps (megabits per second) and Gbps (gigabits per second) measure internet speed. 1 Gbps equals 1,000 Mbps. Megabits are not megabytes \u2014 it takes 8 megabits to equal 1 megabyte.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Business Internet Glossary' },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Glossary', url: '/learn/business-internet/glossary' },
  { name: 'Mbps vs. Gbps', url: '/learn/business-internet/glossary/mbps-gbps' },
]);

const relatedLinks = [
  { label: 'Bandwidth vs. Speed', to: '/learn/business-internet/glossary/bandwidth-vs-speed', description: 'Understand the difference between capacity and real-time performance' },
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'Business Internet Guide', to: '/learn/business-internet', description: 'The complete pillar guide for business internet decisions' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed based on usage' },
];

export default function MbpsGbpsPage() {
  useSchema(mbpsGbpsSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is Mbps vs. Gbps? Internet Speed Units Explained"
        metaTitle="What Is Mbps vs. Gbps? Internet Speed Units Explained | Comcast Business"
        metaDescription="Mbps (megabits per second) and Gbps (gigabits per second) measure internet speed. 1 Gbps = 1,000 Mbps. Learn which speed unit and plan size your business needs."
        lastUpdated="March 2026"
        tier={2}
        pageType="glossary"
        targetQueries={['Mbps vs Gbps', 'megabits vs gigabits', 'internet speed units']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Mbps (megabits per second) and Gbps (gigabits per second) measure internet speed. 1 Gbps equals 1,000 Mbps. Most small businesses need 150&ndash;500 Mbps. Mid-size businesses need 500 Mbps&ndash;2 Gbps. Enterprise operations with dedicated internet may need 10 Gbps or more. Important: megabits (Mb) are not megabytes (MB) &mdash; it takes 8 megabits to equal 1 megabyte, so a 100 Mbps connection downloads at about 12.5 MB/second.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Speed unit &rarr; full name &rarr; equivalent &rarr; typical business use case"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Megabits vs. Megabytes: The Confusion That Costs Businesses Money
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          The most common source of confusion in internet speed is the difference between megabits (Mb) and megabytes (MB). Internet service providers advertise speeds in mega<em>bits</em> per second (Mbps) because the numbers are larger and more impressive. But when you download a file, your computer shows progress in mega<em>bytes</em>. Since there are 8 bits in a byte, you need to divide your Mbps speed by 8 to get your actual download rate in MBps.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This means a &ldquo;100 Mbps&rdquo; plan downloads files at roughly 12.5 megabytes per second &mdash; not 100. A 1 Gbps plan downloads at about 125 MBps. Understanding this conversion prevents unrealistic expectations and helps you accurately assess whether your current plan meets your business needs.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How to Choose the Right Speed Tier for Your Business
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Choosing between a 200 Mbps and a 1 Gbps plan isn&rsquo;t just about the number of employees. Consider your usage mix: how many simultaneous video calls your team runs, whether you use cloud-based applications that sync large files, whether you host servers or run VPN connections, and how many IoT devices (cameras, sensors, smart displays) are on your network. Each VoIP line needs about 100 Kbps. Each video conference needs 2&ndash;4 Mbps. Cloud file sync varies from negligible to 50+ Mbps during large uploads.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The general rule: add up your estimated peak concurrent usage, then buy a plan with at least 50% headroom above that number. A business that peaks at 300 Mbps of concurrent usage should have at least a 500 Mbps plan. Running consistently above 70% utilization leads to congestion, latency spikes, and degraded real-time application quality.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="section-independence">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            When to Jump from Mbps to Gbps
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          The leap from hundreds of Mbps to Gbps-class internet makes sense when your business hits certain thresholds: 30+ employees working concurrently, 10+ simultaneous video conferences, large file transfers that compete with real-time traffic, or plans to grow significantly over the next 2&ndash;3 years. Gigabit plans also provide more headroom for unexpected demand spikes &mdash; a new AI tool adoption, a marketing campaign driving traffic to your website, or a cloud migration that temporarily doubles upload demand.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          At the Gbps level, connection type matters as much as raw speed. A shared 1 Gbps plan may deliver only 400&ndash;600 Mbps during peak hours due to congestion. A <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated 1 Gbps plan</a> delivers the full gigabit consistently because the connection is unshared. For businesses investing in Gbps-class speeds, dedicated internet maximizes the return on that investment.
        </p>
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Business Internet Glossary</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Resources" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="DefinedTerm" json={mbpsGbpsSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
