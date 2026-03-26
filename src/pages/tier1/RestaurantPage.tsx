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
import { restaurantSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Industry Verticals', to: '/learn/business-internet/by-industry' },
  { label: 'Restaurants' },
];

const tableHeaders = ['System', 'Bandwidth Needed', 'Uptime Critical?', 'Notes'];
const tableRows = [
  ['POS terminal', '1\u20135 Mbps', 'Yes', 'Needs reliability, not speed'],
  ['Guest WiFi', '25\u2013100 Mbps', 'Moderate', 'Separate from operations network'],
  ['Delivery tablets (3\u20135)', '5\u201315 Mbps', 'Yes', 'Always-on connectivity required'],
  ['Kitchen display', '1\u20133 Mbps', 'Yes', 'Low bandwidth, high reliability'],
  ['Security cameras (4K, x4)', '40\u201380 Mbps upload', 'Moderate', 'Upload heavy'],
  ['Online ordering system', '5\u201310 Mbps', 'Yes', 'Revenue-critical'],
];

const faqItems = [
  { question: 'How much internet speed does a restaurant need?', answer: 'A typical restaurant needs 100\u2013300 Mbps to support POS terminals, guest WiFi, delivery app tablets, kitchen displays, security cameras, and online ordering. The exact speed depends on how many systems run simultaneously and whether you offer guest WiFi. Reliability and uptime matter more than raw speed \u2014 a POS dropout during dinner rush costs far more than slower downloads.' },
  { question: 'Do I need separate WiFi for customers and operations?', answer: 'Yes. Network segmentation \u2014 running guest WiFi on a separate VLAN from your POS, kitchen displays, and delivery tablets \u2014 is essential for both security and performance. Guest traffic spikes (a full dining room streaming video) should never compete with payment processing or order management. Comcast Business WiFi Pro supports dual-network configuration out of the box.' },
  { question: 'What happens to my POS system if the internet goes down?', answer: 'Most modern POS systems have an offline mode that stores transactions locally and syncs when connectivity returns. However, credit card processing requires an active internet connection. Without backup connectivity, you cannot process card payments during an outage. Comcast Business Wireless Connect provides automatic cellular failover within seconds, keeping your POS online.' },
  { question: 'How much bandwidth do delivery app tablets need?', answer: 'Each delivery platform tablet (Grubhub, DoorDash, Uber Eats) uses 1\u20133 Mbps of bandwidth. A restaurant running 3\u20135 tablets simultaneously needs 5\u201315 Mbps dedicated to delivery operations. The critical requirement is always-on connectivity \u2014 a missed order notification during peak hours means lost revenue and lower platform rankings.' },
  { question: 'Can I use residential internet for my restaurant?', answer: 'Technically yes, but it is not recommended. Residential internet lacks SLA-backed uptime guarantees, has slower upload speeds (critical for security cameras), shares bandwidth with neighborhood users (causing slowdowns during peak hours), and does not support static IP addresses needed for some POS and security systems. Business internet costs more but protects your revenue-critical operations.' },
  { question: 'How many security cameras can my internet plan support?', answer: 'Each 4K security camera uses 5\u201320 Mbps of upload bandwidth when streaming to cloud storage. Four 4K cameras need 40\u201380 Mbps of upload speed. Most standard business internet plans offer 10\u201335 Mbps upload, which may not be sufficient for multiple 4K cameras. If surveillance is a priority, consider a plan with higher upload speeds or Dedicated Internet Access (DIA) for symmetrical bandwidth.' },
  { question: 'What internet plan do I need for a multi-location restaurant chain?', answer: 'Multi-location restaurants benefit from SD-WAN, which provides centralized network management across all sites with consistent performance and automatic failover. Each location typically needs its own 100\u2013300 Mbps business internet connection, but SD-WAN lets you manage bandwidth allocation, security policies, and network segmentation from a single dashboard. Comcast Business is the #1 U.S. SD-WAN provider by market share.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Industry Verticals', url: '/learn/business-internet/by-industry' },
  { name: 'Restaurants', url: '/learn/business-internet/restaurants' },
]);

const relatedLinks = [
  { label: 'Wireless Backup for Business', to: '/learn/business-internet/wireless-backup', description: 'Cellular failover to keep POS online during outages' },
  { label: 'POS System Connectivity', to: '/learn/business-internet/pos-internet-requirements', description: 'Bandwidth and reliability for payment processing' },
  { label: 'Guest WiFi Solutions', to: '/learn/business-internet/wifi-devices', description: 'WiFi Pro, guest networks, and device management' },
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed' },
];

export default function RestaurantPage() {
  useSchema(restaurantSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet for Restaurants: POS, Guest WiFi, and More"
        metaTitle="Business Internet for Restaurants | POS, Guest WiFi & More | Comcast Business"
        metaDescription="Restaurants need reliable POS connectivity, separate guest WiFi, and bandwidth for delivery tablets. See recommended speeds by restaurant system type."
        lastUpdated="March 2026"
        tier={1}
        pageType="vertical"
        targetQueries={['business internet for restaurants', 'restaurant internet requirements', 'POS system internet for restaurant', 'guest WiFi for restaurant']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          A typical restaurant needs 100&ndash;300 Mbps of business internet to support POS terminals, guest WiFi, delivery platform tablets, kitchen displays, security cameras, and online ordering systems. The critical factor is reliability, not raw speed &mdash; a POS system that drops during dinner service costs more than a few seconds of slow downloads. Network segmentation (separating guest WiFi from operations) is essential for security and performance.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Restaurant system &rarr; bandwidth needed &rarr; uptime criticality &rarr; notes"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="restaurant-vertical">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            POS Terminal Reliability: Why Uptime Matters More Than Speed
          </h2>
        </HoverTrigger>
        <HoverTrigger cardId="fan-out-coverage">
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            A POS terminal uses only 1&ndash;5 Mbps of bandwidth &mdash; less than a single Zoom call. Speed is not the issue. The issue is what happens when that connection drops for even 30 seconds during a Friday dinner rush. Credit card transactions fail. Tabs cannot be closed. Kitchen tickets stop printing. The line backs up. One outage during peak service can cost hundreds of dollars in lost revenue and customer frustration.
          </p>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed">
          Business internet with SLA-backed uptime guarantees and <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">wireless cellular backup</a> ensures your POS stays connected even when the primary line goes down. For restaurants, uptime is not an IT concern &mdash; it is a revenue protection strategy.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Guest WiFi Segmentation: Keeping Customer Traffic Separate
          </h2>
        </HoverTrigger>
        <HoverTrigger cardId="network-segmentation">
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Offering free WiFi to diners is a customer expectation in 2026, but running guest traffic on the same network as your POS and kitchen systems is a security and performance risk. A dining room full of guests streaming video can saturate your bandwidth, slowing payment processing and order management. Worse, an unsegmented network exposes your operational systems to potential security threats from customer devices.
          </p>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed">
          Network segmentation creates separate VLANs for guest WiFi and business operations. Guest traffic gets its own bandwidth allocation (typically 25&ndash;100 Mbps) that cannot interfere with your POS, kitchen displays, or delivery tablets. Comcast Business <a href="/learn/business-internet/wifi-devices" className="text-cyan hover:text-white transition-colors">WiFi Pro</a> supports dual-network configuration with separate SSIDs, bandwidth limits, and security policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Delivery Platform Tablets: Bandwidth for Grubhub, DoorDash, Uber Eats
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Third-party delivery platforms are now a major revenue channel for restaurants of all sizes. Each tablet &mdash; Grubhub, DoorDash, Uber Eats, and others &mdash; maintains a persistent connection, receiving order notifications in real time. A single tablet uses 1&ndash;3 Mbps, but a restaurant running 3&ndash;5 platforms simultaneously needs 5&ndash;15 Mbps of dedicated, always-on bandwidth for delivery operations alone.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The real cost of a dropped connection is not just one missed order &mdash; it is lower rankings on the platform. Delivery apps deprioritize restaurants with slow acceptance times or missed orders, reducing your visibility to future customers. Reliable, uninterrupted connectivity for delivery tablets directly protects your ranking and order volume.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Kitchen Display Systems: Real-Time Order Data Reliability
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Kitchen display systems (KDS) have replaced paper ticket printers in many restaurants, showing orders on screens that update in real time as they come in from POS terminals and delivery platforms. Each display uses minimal bandwidth (1&ndash;3 Mbps) but requires absolute reliability &mdash; a frozen kitchen screen during a dinner rush creates confusion, delays, and errors that cascade through the entire service.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          KDS reliability depends on your internal network quality, not just your internet speed. A properly configured business network with QoS (Quality of Service) settings can prioritize KDS traffic alongside POS data, ensuring these systems never compete with guest WiFi or background updates for bandwidth.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Security Camera Bandwidth: Monitoring Your Entire Floor
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Security cameras are upload-intensive, not download-intensive. Each 4K camera streaming to cloud storage uses 5&ndash;20 Mbps of upload bandwidth. A restaurant with four cameras needs 40&ndash;80 Mbps of upload speed &mdash; a requirement that most standard business internet plans struggle to meet, since plans typically emphasize download speed over upload.
        </p>
        <HoverTrigger cardId="problem-first-framing">
          <p className="text-sm text-slate-300 leading-relaxed">
            If your camera system cannot upload footage fast enough, you get choppy recordings with gaps &mdash; exactly the moments you need to review when an incident occurs. For restaurants with extensive camera coverage, consider a plan with higher upload speeds or <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> for symmetrical upload and download bandwidth.
          </p>
        </HoverTrigger>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Online Ordering Systems: When Your Website IS Your Revenue
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Many restaurants now operate their own online ordering systems &mdash; either through their website or through integrated platforms &mdash; to avoid third-party delivery commissions of 15&ndash;30%. These systems need 5&ndash;10 Mbps of reliable bandwidth and are revenue-critical: if your online ordering goes down during peak hours, you lose orders you cannot recover.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The internet connection supporting your online ordering system should be on the same protected, segmented network as your POS &mdash; not competing with guest WiFi for bandwidth. Combined with <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">wireless backup</a>, this ensures your direct ordering channel stays operational even during ISP outages.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Industry vertical &mdash; Restaurant internet requirements</span>
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
        <SchemaBlock schemaType="Service" json={restaurantSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
