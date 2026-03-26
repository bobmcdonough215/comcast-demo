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
import { bandwidthVsSpeedSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Glossary' },
  { label: 'Bandwidth vs. Speed' },
];

const tableHeaders = ['Concept', 'Bandwidth', 'Speed'];
const tableRows = [
  ['Definition', 'Maximum data capacity', 'Actual data transfer rate'],
  ['Analogy', 'Width of a highway', 'How fast cars are moving'],
  ['Measured in', 'Mbps or Gbps', 'Mbps or Gbps'],
  ['Fixed or variable?', 'Fixed (what you pay for)', 'Variable (fluctuates)'],
  ['Affected by congestion?', 'No (capacity stays same)', 'Yes (slows under load)'],
];

const faqItems = [
  { question: 'Is bandwidth the same as internet speed?', answer: 'No. Bandwidth is the maximum data transfer capacity of your connection — the ceiling. Speed is how fast data actually moves at any given moment — the real-time experience. You pay for bandwidth (e.g., a 500 Mbps plan), but your actual speed fluctuates based on network congestion, device limitations, and how many people share the connection.' },
  { question: 'What is a good bandwidth for a small business?', answer: 'Most small businesses with 5–25 employees need 150 Mbps to 1 Gbps of bandwidth. The right amount depends on your team\'s activities: basic email and web browsing requires less, while heavy video conferencing, cloud storage sync, and VoIP phones require more. Use a bandwidth calculator to get a recommendation tailored to your usage mix.' },
  { question: 'Why is my internet slow if I have high bandwidth?', answer: 'High bandwidth does not guarantee fast speeds. Common causes of slow internet on a high-bandwidth plan include: network congestion (too many users or devices sharing the connection), WiFi interference, outdated router or modem hardware, ISP throttling, server-side bottlenecks, and background applications consuming bandwidth. Run a speed test during peak hours to diagnose the gap between your plan bandwidth and actual speed.' },
  { question: 'Does bandwidth affect upload and download speeds equally?', answer: 'It depends on your plan type. Most standard business internet plans are asymmetrical — they offer more download bandwidth than upload bandwidth (e.g., 500 Mbps down / 50 Mbps up). Dedicated Internet Access (DIA) plans provide symmetrical bandwidth, meaning equal capacity in both directions. If your business relies on uploading large files, video conferencing, or cloud backups, symmetrical bandwidth matters.' },
  { question: 'How do I check my actual internet speed vs. my plan bandwidth?', answer: 'Run a speed test at speedtest.net or fast.com during peak business hours (10 AM–2 PM). Compare the results to your plan\'s advertised bandwidth. If your actual speed is consistently below 70% of your plan bandwidth, contact your provider. For the most accurate test, connect directly to your modem via Ethernet cable — WiFi introduces additional variables that can reduce measured speed.' },
  { question: 'What is the difference between Mbps and Gbps?', answer: '1 Gbps (gigabit per second) equals 1,000 Mbps (megabits per second). Mbps is the standard unit for most business internet plans. Gbps is used for high-speed enterprise connections. A 1 Gbps plan is 10 times faster than a 100 Mbps plan. Note that Mbps measures megabits, not megabytes — there are 8 bits in a byte, so a 100 Mbps connection transfers about 12.5 megabytes per second.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Glossary', url: '/learn/business-internet/glossary' },
  { name: 'Bandwidth vs. Speed', url: '/learn/business-internet/glossary/bandwidth-vs-speed' },
]);

const relatedLinks = [
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'How Many Devices Can Connect?', to: '/learn/business-internet/how-many-devices', description: 'Device limits by plan speed and usage type' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Understand DIA vs. shared business internet' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed' },
];

export default function GlossaryBandwidthPage() {
  useSchema(bandwidthVsSpeedSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Bandwidth vs. Speed: What's the Difference for Business Internet?"
        metaTitle="Bandwidth vs. Speed: What's the Difference? | Business Internet Glossary | Comcast Business"
        metaDescription="Bandwidth is the maximum data transfer capacity. Speed is what you actually experience. Understanding the difference helps you choose the right business plan."
        lastUpdated="March 2026"
        tier={1}
        pageType="glossary"
        targetQueries={['bandwidth vs speed', 'what is bandwidth', 'difference between bandwidth and speed']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Bandwidth is the maximum amount of data your internet connection can transfer per second &mdash; measured in Mbps or Gbps. Speed refers to how fast data actually moves at a given moment. Bandwidth is the ceiling; speed is what you experience. A high-bandwidth plan doesn&rsquo;t guarantee fast speed if the network is congested.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Bandwidth vs. speed &rarr; definition &rarr; analogy &rarr; measurement &rarr; variability &rarr; congestion impact"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="glossary-strategy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            The Highway Analogy: Bandwidth Is Width, Speed Is Traffic Flow
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Think of your internet connection as a highway. <strong>Bandwidth</strong> is the number of lanes &mdash; how many cars (data packets) can travel side by side at the same time. <strong>Speed</strong> is how fast those cars are actually moving at any given moment. A six-lane highway (high bandwidth) has the capacity to move a lot of traffic, but if it&rsquo;s rush hour and every lane is packed, the cars slow to a crawl. That&rsquo;s congestion &mdash; and it&rsquo;s exactly what happens to your internet when too many devices or users are consuming bandwidth simultaneously.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          When your internet provider sells you a &ldquo;500 Mbps plan,&rdquo; they are selling you bandwidth &mdash; a highway with enough lanes to handle 500 megabits of data per second. Your actual speed at any moment depends on how much of that capacity is being used by your team, your devices, and (on shared connections) your neighbors.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why This Matters for Your Business Internet Plan
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Understanding the difference between bandwidth and speed helps you make better purchasing decisions. If your team complains about &ldquo;slow internet,&rdquo; the problem might not be insufficient bandwidth &mdash; it could be congestion on a shared connection, WiFi interference, or outdated hardware. Upgrading to a higher-bandwidth plan won&rsquo;t fix those issues.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Conversely, if your business genuinely needs more capacity &mdash; more employees, more video calls, more cloud-based applications &mdash; then upgrading bandwidth is the right move. For businesses that need <em>guaranteed</em> speed (not just high bandwidth), <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> provides a private connection where your bandwidth is never shared with other users, so your speed stays consistently close to your plan&rsquo;s maximum.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="section-independence">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How Network Congestion Affects Speed but Not Bandwidth
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Network congestion occurs when more data is being transmitted than the network can handle at full speed. On a shared business internet connection, your bandwidth is pooled with other businesses or users in your area. During peak hours (typically 9 AM&ndash;5 PM), more users are online, and your actual speed drops even though your plan&rsquo;s bandwidth hasn&rsquo;t changed. Your 500 Mbps plan still has 500 Mbps of capacity &mdash; but you might only experience 200 Mbps because the network is congested.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          This is the core trade-off between shared and dedicated internet. Shared plans are more affordable but subject to congestion. Dedicated Internet Access (DIA) eliminates congestion entirely by giving your business a private, unshared connection. With DIA, your speed consistently matches your bandwidth because no one else is using your lanes.
        </p>
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>Business Internet Glossary</span>
        </div>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Resources" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="DefinedTerm" json={bandwidthVsSpeedSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
