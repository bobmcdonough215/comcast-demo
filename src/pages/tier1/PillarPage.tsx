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
import { pillarSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet' },
];

const tableHeaders = ['Business Size', 'Employees', 'Recommended Speed', 'Plan Type'];
const tableRows = [
  ['Micro business', '1\u20135', '150\u2013300 Mbps', 'Essential / Standard'],
  ['Small business', '5\u201325', '300 Mbps\u20131 Gbps', 'Business Internet'],
  ['Mid-size', '25\u2013100', '1\u201310 Gbps', 'Business Internet or DIA'],
  ['Multi-location / Enterprise', '100+', '10 Gbps+', 'Dedicated Internet (DIA)'],
];

const faqItems = [
  { question: 'What is the difference between business internet and residential internet?', answer: 'Business internet offers dedicated bandwidth, static IP addresses, SLA-backed uptime guarantees, and faster upload speeds designed for commercial operations. Residential plans are shared among neighborhood users and typically have slower upload speeds and no uptime commitments.' },
  { question: 'How much does business internet cost per month?', answer: 'Comcast Business internet plans range from $79.99/month for 150 Mbps Essential Internet to $269.99/month for up to 2 Gbps. Dedicated Internet Access (DIA) pricing is custom-quoted based on speed and location requirements.' },
  { question: 'Do I need dedicated internet or is shared business internet enough?', answer: 'Shared business internet is sufficient for most SMBs with 1\u201350 employees doing standard office tasks. Businesses that require guaranteed speeds, symmetrical upload/download, or contractual uptime SLAs should consider Dedicated Internet Access (DIA).' },
  { question: 'What is an SLA and why does it matter for business internet?', answer: 'A Service Level Agreement (SLA) is a contractual guarantee of network performance \u2014 typically 99.99% uptime. If the provider fails to meet the SLA, you receive service credits. SLAs matter because they create financial accountability for reliability.' },
  { question: 'How many employees can use a 500 Mbps business internet plan?', answer: 'A 500 Mbps plan can support 30\u201350 employees doing typical office work (email, web, video calls). The exact number depends on usage intensity \u2014 teams with heavy video conferencing or cloud workloads will need more bandwidth per person.' },
  { question: 'Does Comcast Business offer internet for multiple office locations?', answer: 'Yes. Comcast Business offers SD-WAN and Dedicated Internet solutions for multi-location businesses, with centralized network management and consistent performance across sites. Comcast is the #1 U.S. SD-WAN provider by market share.' },
  { question: 'What happens to my business internet if there is an outage?', answer: 'Comcast Business Wireless Connect provides automatic cellular failover \u2014 switching to 4G LTE within seconds if your primary connection goes down. This protects POS, VoIP, and payment processing from outages without manual intervention.' },
  { question: 'How fast can I get business internet installed?', answer: 'Installation timelines depend on location and service type. Standard business internet can often be installed within 5\u20137 business days. Dedicated Internet Access may require longer lead times due to infrastructure provisioning.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
]);

const relatedLinks = [
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'Dedicated Internet (DIA)', to: '/learn/business-internet/dedicated-internet', description: 'Guaranteed speeds with SLA backing' },
  { label: 'Industry Solutions', to: '/learn/business-internet/by-industry', description: 'Internet solutions by business type' },
  { label: 'Reliability & Backup', to: '/learn/business-internet/reliability', description: 'Wireless backup and uptime guarantees' },
  { label: 'WiFi & Devices', to: '/learn/business-internet/wifi-devices', description: 'WiFi Pro, guest networks, device management' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed' },
];

export default function PillarPage() {
  useSchema(pillarSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet: The Complete Guide for Growing Companies"
        metaTitle="Business Internet: The Complete Guide for Growing Companies | Comcast Business"
        metaDescription="Business internet provides dedicated bandwidth, SLA-backed uptime, and static IPs for commercial use. Plans from 150 Mbps to 400 Gbps."
        lastUpdated="March 2026"
        tier={1}
        pageType="pillar"
        targetQueries={['business internet', 'internet for business', 'what is business internet', 'business internet vs residential']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Business internet provides dedicated bandwidth, faster upload speeds, SLA-backed uptime, and static IP addresses designed for commercial use. Unlike residential plans, business internet prioritizes reliability &mdash; often backed by service level agreements guaranteeing 99.9%+ uptime. Plans range from 150 Mbps for small offices to 400 Gbps for large enterprises.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Business size \u2192 recommended speed \u2192 plan type"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            What Makes Business Internet Different from Residential?
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Residential internet shares bandwidth among all users in a neighborhood. During peak hours, speeds can drop significantly. Business internet offers dedicated capacity, meaning your office gets consistent performance regardless of what your neighbors are doing. Key differentiators include faster upload speeds (critical for cloud applications and video conferencing), static IP addresses (required for VPNs, servers, and security cameras), and SLA-backed uptime guarantees.
        </p>
        <HoverTrigger cardId="stat-attribution">
          <p className="text-sm text-slate-300 leading-relaxed">
            According to FCC broadband speed guidelines, small businesses should target a minimum of 100 Mbps download and 25 Mbps upload. The Comcast Business network serves over 2.5 million business customers across a network backed by over $80 billion in infrastructure investment over the last decade.
          </p>
        </HoverTrigger>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          How to Choose the Right Business Internet Plan
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          The right plan depends on three factors: employee count, the types of applications your team uses daily, and your uptime requirements. A 5-person accounting firm with basic email and web browsing needs very different bandwidth than a 50-person design agency running cloud-based creative tools and constant video calls.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Start with our <a href="/tools/bandwidth-calculator" className="text-cyan hover:text-white transition-colors">Bandwidth Calculator</a> for a personalized recommendation. For businesses where even minutes of downtime cost money, explore <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet options</a> with contractual uptime guarantees.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>#1 U.S. SD-WAN Provider &mdash; Vertical Systems Group 2024</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore the Content Cluster" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={pillarSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
