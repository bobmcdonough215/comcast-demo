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
import { wirelessBackupSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Reliability & Backup', to: '/learn/business-internet/reliability' },
  { label: 'Wireless Backup' },
];

const tableHeaders = ['Downtime Scenario', 'Business Impact', 'Wireless Connect Response', 'Recovery Time'];
const tableRows = [
  ['ISP outage', 'POS down, no payments', 'Auto-switches to LTE', '<30 seconds'],
  ['Power outage', 'Full network down', 'Battery + LTE backup', '<30 seconds, 8\u201316 hrs'],
  ['Cable cut', 'Internet loss, VoIP down', 'LTE takeover', '<30 seconds'],
  ['Weather event', 'Extended multi-hour outage', 'LTE sustained backup', 'Duration of battery'],
];

const faqItems = [
  { question: 'How does wireless backup work for business internet?', answer: 'Wireless backup (cellular failover) is a secondary internet connection that uses 4G LTE cellular networks. The Comcast Business Wireless Connect device monitors your primary internet connection continuously. When it detects an outage, it automatically switches your network to the LTE backup within seconds \u2014 no manual intervention required. When the primary connection restores, traffic switches back automatically.' },
  { question: 'How fast does cellular failover activate?', answer: 'Comcast Business Wireless Connect typically activates within 30 seconds of detecting a primary internet outage. The device continuously monitors connectivity and performs the switchover automatically. Most business systems \u2014 POS terminals, VoIP phones, payment processing \u2014 experience a brief interruption of under a minute before resuming on the backup connection.' },
  { question: 'Can I process credit card payments during an internet outage with wireless backup?', answer: 'Yes. With wireless backup active, your POS system maintains an internet connection through 4G LTE, allowing credit card transactions to process normally. Without wireless backup, most POS systems enter an offline mode that stores transactions locally but cannot authorize credit cards in real time \u2014 meaning you either turn away card-paying customers or accept the risk of declined cards being discovered later.' },
  { question: 'How long does cellular backup battery last?', answer: 'The Comcast Business Wireless Connect device includes battery backup that provides 8\u201316 hours of cellular connectivity during a power outage. Actual duration depends on network traffic volume and the number of connected devices. For businesses in areas prone to extended outages, pairing wireless backup with an uninterruptible power supply (UPS) for your router and critical devices extends protection further.' },
  { question: 'Is wireless backup the same as having a second internet provider?', answer: 'No. A second ISP (dual-WAN) provides a completely independent internet connection, typically with full bandwidth and no time limits. Wireless backup via LTE provides reduced bandwidth (sufficient for POS, VoIP, and payment processing but not for bandwidth-heavy operations) and is designed for short-to-medium outages, not as a permanent second line. For businesses needing always-on, full-bandwidth redundancy, SD-WAN with dual providers is the better solution.' },
  { question: 'What is the difference between wireless backup and SD-WAN redundancy?', answer: 'Wireless backup is a single failover device that switches to LTE when your primary internet drops. SD-WAN is a network architecture that actively manages traffic across multiple internet connections (fiber, cable, LTE, etc.), load-balancing in real time and routing around failures automatically. SD-WAN provides better redundancy, more bandwidth during failover, and centralized management for multi-location businesses. Wireless backup is simpler and more affordable for single-location businesses that need basic outage protection.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Reliability & Backup', url: '/learn/business-internet/reliability' },
  { name: 'Wireless Backup', url: '/learn/business-internet/wireless-backup' },
]);

const relatedLinks = [
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Guaranteed speeds with SLA-backed uptime' },
  { label: 'Reliability & Backup Hub', to: '/learn/business-internet/reliability', description: 'Uptime guarantees, failover, and redundancy' },
  { label: 'Business Internet for Gaming Venues', to: '/learn/business-internet/gaming-venues', description: 'Low-latency internet for esports and gaming' },
  { label: 'Business Internet for Restaurants', to: '/learn/business-internet/restaurants', description: 'POS, guest WiFi, and delivery tablet connectivity' },
  { label: 'Customer Stories', to: '/resources/customer-stories', description: 'Real businesses, real results with Comcast Business' },
];

export default function WirelessBackupPage() {
  useSchema(wirelessBackupSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Wireless Backup for Business: How Cellular Failover Works"
        metaTitle="Wireless Backup for Business Internet | Cellular Failover | Comcast Business"
        metaDescription="Wireless backup auto-switches to 4G LTE when your business internet goes down — within seconds. Protects POS, VoIP, and payments from outages."
        lastUpdated="March 2026"
        tier={1}
        pageType="add-on"
        targetQueries={['wireless backup for business', 'cellular failover business internet', 'business internet backup', 'what happens when business internet goes down']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Wireless backup (or cellular failover) automatically switches your business to a 4G LTE cellular connection when your primary internet goes down &mdash; typically within seconds. Comcast Business Wireless Connect provides up to 8&ndash;16 hours of backup connectivity, protecting your POS, VoIP phones, and payment processing from outages. No manual intervention required.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Downtime scenario &rarr; business impact &rarr; wireless response &rarr; recovery time"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="problem-first-framing">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            What Downtime Really Costs Your Business
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          An internet outage is not just an inconvenience &mdash; it is a revenue event. When your connection drops, credit card processing stops, VoIP phones go silent, cloud applications freeze, and customer-facing systems go offline. For a restaurant, that means no card payments during dinner service. For a retail store, it means a line of frustrated customers. For a medical office, it means appointment systems and patient portals go dark.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The average cost of IT downtime for small businesses ranges from $137 to $427 per minute, depending on the industry (Gartner). Even a 30-minute outage during peak hours can cost thousands. Wireless backup does not prevent the outage &mdash; it prevents the business impact of the outage by keeping your critical systems online within seconds.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How Wireless Connect Automatically Activates
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          The Comcast Business Wireless Connect device sits on your network and continuously monitors your primary internet connection. It sends periodic health checks &mdash; if the primary connection fails to respond, the device automatically routes traffic through its built-in 4G LTE cellular modem. The switchover happens in under 30 seconds, fast enough that most business systems experience only a brief interruption rather than a full outage.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          When primary connectivity restores, traffic switches back automatically. The entire process &mdash; detection, failover, recovery &mdash; requires zero manual intervention. There is no need to call IT, restart routers, or reconfigure anything. The device handles it all, 24/7, whether the outage happens at 2 PM on a Tuesday or 3 AM on a Sunday.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Which Business Systems Stay Online During Failover?
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Cellular failover provides enough bandwidth to keep your most critical systems running, but it is not a full replacement for your primary internet. LTE backup typically delivers 5&ndash;30 Mbps &mdash; sufficient for POS terminals, VoIP phone calls, credit card processing, cloud-based email, and basic web browsing. Systems that require high bandwidth, like 4K security camera uploads or large file transfers, will operate at reduced capacity or may need to be deprioritized during failover.
        </p>
        <HoverTrigger cardId="cta-placement">
          <p className="text-sm text-slate-300 leading-relaxed">
            For businesses where every system must operate at full capacity even during an outage, <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dual-WAN with SD-WAN</a> provides true redundancy with full bandwidth from a second provider. Wireless backup is the right solution for businesses that need to protect revenue-critical operations (payments, phones, ordering) without the cost of a second full internet connection.
          </p>
        </HoverTrigger>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Battery Backup vs. Cellular Backup: Both Matter
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Internet outages and power outages are two different problems that require two different solutions. Cellular backup protects against internet outages &mdash; when your ISP goes down but your building still has power. Battery backup protects against power outages &mdash; keeping your network equipment running when electricity cuts out. During a power outage without battery backup, cellular failover cannot help because your router, switches, and devices are all off.
        </p>
        <HoverTrigger cardId="internal-links">
          <p className="text-sm text-slate-300 leading-relaxed">
            Comcast Business Wireless Connect includes an integrated battery that provides 8&ndash;16 hours of operation during a combined power and internet outage. For maximum protection, pair the Wireless Connect device with an uninterruptible power supply (UPS) for your POS system, VoIP phones, and network switches. This dual-layer approach &mdash; battery power plus cellular internet &mdash; keeps your business running through the most common outage scenarios.
          </p>
        </HoverTrigger>
      </section>

      <section className="mb-8">
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>Product add-on &mdash; Wireless backup &amp; cellular failover</span>
        </div>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Pages" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Product" json={wirelessBackupSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
