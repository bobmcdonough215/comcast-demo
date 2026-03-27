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

const dedicatedInternetHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dedicated Internet for Business: Guaranteed Speed, Reliability, and SLAs',
  datePublished: '2026-01-20',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Dedicated Internet' },
];

const tableHeaders = ['Plan Tier', 'Speed', 'Symmetrical', 'SLA Uptime', 'Best For'];
const tableRows = [
  ['DIA Standard', '300 Mbps\u20131 Gbps', 'Yes', '99.99%', 'Mid-size businesses, 25\u2013100 employees'],
  ['DIA Enterprise', '1\u201310 Gbps', 'Yes', '99.99%', 'Multi-location, data-intensive operations'],
  ['DIA High Capacity', '10\u2013100 Gbps', 'Yes', '99.99%', 'Data centers, large campuses'],
  ['DIA Ultra', '100\u2013400 Gbps', 'Yes', '99.99%', 'Enterprise, hyperscale applications'],
];

const faqItems = [
  { question: 'What is the difference between dedicated and shared business internet?', answer: 'DIA provides an exclusive connection with guaranteed speeds. Shared internet distributes bandwidth among multiple businesses on the same network, leading to speed fluctuations during peak hours.' },
  { question: 'How much does dedicated internet cost?', answer: 'DIA pricing is custom-quoted based on speed tier, location, and contract terms. It costs more than shared business internet but provides guaranteed performance and contractual uptime guarantees.' },
  { question: 'What businesses need dedicated internet?', answer: 'Businesses with 50+ employees, multi-location operations, uptime-critical systems (healthcare, financial services), heavy video conferencing, or large cloud workloads benefit most from DIA.' },
  { question: 'What does a 99.99% uptime SLA mean?', answer: '99.99% uptime means a maximum of 52 minutes of downtime per year. If the provider exceeds this, you receive service credits as contractual financial remedies.' },
  { question: 'Can I get dedicated internet for a small business?', answer: 'Yes. DIA starts at 300 Mbps symmetrical and is available to businesses of any size. Small businesses with uptime-critical operations (medical offices, financial services) often benefit from DIA.' },
  { question: 'What is the difference between symmetrical and asymmetrical speeds?', answer: 'Symmetrical connections have equal upload and download speeds. Asymmetrical connections (like cable) have faster downloads than uploads. DIA is always symmetrical.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Dedicated Internet', url: '/learn/business-internet/dedicated-internet' },
]);

const relatedLinks = [
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Side-by-side comparison of DIA and shared business internet' },
  { label: 'SLA Explained', to: '/learn/business-internet/sla-uptime', description: 'What 99.99% uptime actually means and how remedies work' },
  { label: 'Symmetrical Speeds', to: '/learn/business-internet/symmetrical-speeds', description: 'Why equal upload and download matters for modern business' },
  { label: 'Multi-Location DIA', to: '/learn/business-internet/multi-location-dia', description: 'Dedicated internet across multiple business sites' },
  { label: 'Business Internet Pillar', to: '/learn/business-internet', description: 'The complete guide to business internet' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Get a personalized speed recommendation' },
];

export default function DedicatedInternetHubPage() {
  useSchema(dedicatedInternetHubSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Dedicated Internet for Business: Guaranteed Speed, Reliability, and SLAs"
        metaTitle="Dedicated Internet for Business | SLA-Backed, Symmetrical | Comcast Business"
        metaDescription="Dedicated internet access gives your business guaranteed symmetrical speeds, 99.99% uptime SLAs, and an exclusive connection. Plans from 300 Mbps to 400 Gbps."
        lastUpdated="March 2026"
        tier={1}
        pageType="hub"
        targetQueries={['dedicated internet for business', 'business DIA', 'dedicated internet access', 'enterprise dedicated internet']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Dedicated internet access (DIA) provides your business with an exclusive, unshared connection to the internet &mdash; guaranteeing consistent speeds, symmetrical upload and download, and contractual uptime SLAs. Unlike shared business internet, DIA bandwidth is not affected by neighboring businesses. Comcast Business offers DIA from 300 Mbps to 400 Gbps with 99.99% uptime guarantees.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="DIA plan tiers &rarr; speed &rarr; SLA uptime &rarr; best for"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            What Is Dedicated Internet Access?
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Dedicated Internet Access (DIA) is a business internet service that provides an exclusive, unshared connection between your business and the internet backbone. Unlike shared connections &mdash; where multiple businesses draw from the same pool of bandwidth &mdash; DIA reserves the full capacity of your circuit for your organization alone. This means the speed you pay for is the speed you get, 24/7, regardless of what neighboring businesses are doing.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          DIA circuits are delivered over fiber-optic infrastructure and come with contractual Service Level Agreements (SLAs) that guarantee uptime, latency, and packet delivery. If your provider fails to meet these commitments, you receive financial remedies in the form of service credits. This makes DIA the gold standard for businesses where internet performance directly impacts revenue.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          When Shared Internet Isn&rsquo;t Enough
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Shared business internet uses a contention-based model: your connection shares a larger pipe with other businesses in your building or area. During off-peak hours, this works fine &mdash; you may get close to your advertised speeds. But during peak business hours (9 AM&ndash;5 PM), when every business on your segment is running video calls, syncing cloud files, and processing transactions, your actual throughput can drop significantly.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This contention problem breaks specific use cases: real-time video conferencing stutters, VoIP calls drop, <a href="/learn/business-internet/cloud-storage-speed" className="text-cyan hover:text-white transition-colors">cloud backup windows</a> miss their targets, and POS terminals time out during lunch rush. If your business has experienced these problems despite having a &ldquo;fast&rdquo; internet plan, contention &mdash; not raw speed &mdash; is likely the issue. DIA eliminates contention entirely.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Understanding SLAs: What 99.99% Uptime Actually Means
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          A 99.99% uptime SLA means your provider guarantees no more than 52 minutes of total downtime per year. This is dramatically different from a 99.9% SLA (8.7 hours/year) or a 99% SLA (3.65 days/year). For businesses where every minute of downtime costs money &mdash; healthcare, financial services, e-commerce, hospitality &mdash; the difference between three nines and four nines is the difference between an annoyance and a crisis.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          SLAs are contractual commitments, not marketing claims. If your DIA provider fails to meet the guaranteed uptime, you receive financial remedies &mdash; typically service credits applied to your monthly bill. Comcast Business DIA includes 99.99% uptime SLAs with clearly defined credit schedules, so you have recourse if performance falls short.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Symmetrical Speeds: Why Upload Matters for Modern Business
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Standard business internet is asymmetrical &mdash; download speeds are much faster than upload. This made sense when businesses mostly consumed content. But modern business workflows are upload-heavy: video conferencing sends your camera feed upstream, cloud collaboration tools sync files in both directions, security cameras stream footage to cloud storage, and VoIP sends voice data in real time.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          DIA is always symmetrical: if you buy a 1 Gbps DIA circuit, you get 1 Gbps download <em>and</em> 1 Gbps upload. This eliminates the upload bottleneck that causes video calls to freeze, cloud backups to stall, and real-time collaboration to lag. For businesses that rely on <a href="/learn/business-internet/video-conferencing-bandwidth" className="text-cyan hover:text-white transition-colors">video conferencing</a>, cloud-first operations, or data-intensive workflows, symmetrical speeds are not a luxury &mdash; they&rsquo;re a requirement.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Hub page &mdash; Dedicated Internet cluster</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore the Dedicated Internet Cluster" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={dedicatedInternetHubSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
