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
  { label: 'Speed & Bandwidth', to: '/learn/business-internet/speed-guide' },
  { label: 'POS Bandwidth' },
];

const tableHeaders = ['POS System', 'Bandwidth', 'Latency Requirement', 'Uptime Critical', 'Notes'];
const tableRows = [
  ['Credit card terminal', '1\u20133 Mbps', '<100ms', 'Yes', 'Transaction fails without connectivity'],
  ['Tablet POS (Square, Toast)', '2\u20135 Mbps', '<150ms', 'Yes', 'Includes menu/image loading'],
  ['Self-service kiosk', '3\u20138 Mbps', '<200ms', 'Yes', 'Heavier UI, periodic updates'],
  ['Kitchen display system', '1\u20133 Mbps', '<100ms', 'Yes', 'Real-time order data'],
  ['Inventory management', '5\u201310 Mbps', '<300ms', 'Moderate', 'Periodic sync, not real-time'],
];

const faqItems = [
  { question: 'How much internet speed does a POS terminal need?', answer: 'A single POS terminal needs just 1\u20135 Mbps of bandwidth. The critical factor isn\u2019t speed but reliability \u2014 a dropped connection during a credit card swipe causes a failed transaction and a frustrated customer.' },
  { question: 'Can POS systems work on WiFi or do they need wired connections?', answer: 'POS systems can work on WiFi, but wired Ethernet is strongly recommended for payment terminals. WiFi adds latency variability and is vulnerable to interference. Many modern tablet-based POS systems (Square, Toast) use WiFi by default but should be on a dedicated network segment.' },
  { question: 'What happens to my POS if the internet goes down?', answer: 'Most modern POS systems have an offline mode that stores transactions locally and processes them when connectivity returns. However, offline mode cannot validate gift cards, run loyalty programs, or process real-time inventory updates. A wireless backup connection eliminates this risk.' },
  { question: 'Do I need a separate internet connection for POS systems?', answer: 'Not a separate connection, but a separate network segment. Use VLAN or network segmentation to isolate POS traffic from guest WiFi and general office use. This ensures payment processing bandwidth is never consumed by customers streaming video on your guest network.' },
  { question: 'How many POS terminals can run on a 100 Mbps connection?', answer: 'A 100 Mbps connection can support 20\u201350 POS terminals from a pure bandwidth perspective. The real limit is latency and reliability. If those terminals share bandwidth with guest WiFi, streaming, and employee devices, even 5 terminals may experience slowdowns during peak hours.' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Internet Speed Does a POS System Need?',
  datePublished: '2026-02-05',
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
  { name: 'Speed & Bandwidth', url: '/learn/business-internet/speed-guide' },
  { name: 'POS Bandwidth', url: '/learn/business-internet/pos-bandwidth' },
]);

const relatedLinks = [
  { label: 'Internet for Restaurants', to: '/learn/business-internet/restaurants', description: 'Complete guide to restaurant internet needs including POS, kitchen displays, and guest WiFi' },
  { label: 'Wireless Backup & Failover', to: '/learn/business-internet/wireless-backup', description: 'Keep POS systems online during outages with automatic cellular failover' },
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'Reliability Hub', to: '/learn/business-internet/reliability', description: 'Uptime solutions for mission-critical business operations' },
];

export default function POSBandwidthPage() {
  useSchema(articleSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="How Much Internet Speed Does a POS System Need?"
        metaTitle="How Much Internet Speed Does a POS System Need? | Comcast Business"
        metaDescription="A single POS terminal needs 1–5 Mbps — but it needs 100% reliability. Compare POS system bandwidth requirements and plan for zero-downtime payment processing."
        lastUpdated="March 2026"
        tier={2}
        pageType="spoke"
        targetQueries={['POS system bandwidth', 'internet speed for point of sale', 'POS internet requirements']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          A single POS terminal needs just 1&ndash;5 Mbps of bandwidth &mdash; but it needs that bandwidth to be reliable 100% of the time. A dropped connection during a credit card transaction costs more than slow download speeds ever will. For restaurants and retail with 3+ terminals, pair business internet with wireless backup to ensure payment processing never goes offline.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="POS system types and their bandwidth, latency, and uptime requirements"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Why Reliability Matters More Than Speed for POS
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          A credit card transaction sends roughly 1&ndash;2 KB of data. Even on the slowest business internet plan, that transaction should complete in milliseconds. The problem is never raw speed &mdash; it&rsquo;s connectivity interruptions. A 3-second network dropout that you&rsquo;d never notice during web browsing causes a payment terminal to time out and display an error to your customer.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This is why POS-dependent businesses should invest in redundancy, not just bandwidth. A 100 Mbps plan with wireless backup is far more valuable than a 1 Gbps plan with no failover. When your primary connection drops, <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">Comcast Business Wireless Connect</a> switches to cellular backup within seconds, keeping transactions flowing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Network Architecture for Multi-Terminal Setups
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Restaurants and retail stores with multiple POS terminals should segment their network to isolate payment traffic. Guest WiFi, employee devices, music streaming, and digital signage all compete for the same bandwidth. Without segmentation, a customer streaming video on your guest WiFi can cause your payment terminal to lag during the lunch rush.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Use VLANs or separate SSIDs to create a dedicated POS network segment. Assign QoS priority to POS traffic so payment processing always gets first access to available bandwidth. Most business-grade routers and Comcast Business gateways support this configuration out of the box.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Cloud-Based vs. On-Premise POS: Bandwidth Implications
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Modern cloud-based POS systems like Square, Toast, and Clover process everything through the internet &mdash; transactions, menu updates, inventory sync, and reporting. This makes them more internet-dependent than legacy on-premise systems. A cloud POS terminal uses 2&ndash;5 Mbps because it&rsquo;s loading images, syncing menus, and processing analytics alongside payment data.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          On-premise POS systems handle most processing locally and only need internet for credit card authorization. They use just 1&ndash;2 Mbps per terminal. However, they lack the real-time analytics, remote management, and automatic updates that cloud systems provide. The trade-off is bandwidth dependency vs. feature richness.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Spoke page &mdash; Speed &amp; Bandwidth cluster</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Pages" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={articleSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
