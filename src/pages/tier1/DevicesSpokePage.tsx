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
import { devicesSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Speed & Bandwidth', to: '/learn/business-internet/speed-guide' },
  { label: 'How Many Devices' },
];

const tableHeaders = ['Activity Type', 'Bandwidth Per Device', 'Supported on 300 Mbps', 'Supported on 1 Gbps'];
const tableRows = [
  ['Email / web browsing', '1\u20133 Mbps', '100\u2013300 devices', '333\u20131,000 devices'],
  ['HD video conferencing', '3\u20138 Mbps', '37\u2013100 devices', '125\u2013333 devices'],
  ['Cloud file sync', '5\u201315 Mbps', '20\u201360 devices', '66\u2013200 devices'],
  ['4K video streaming', '15\u201325 Mbps', '12\u201320 devices', '40\u201366 devices'],
  ['Competitive gaming', '3\u20136 Mbps + low latency', '50\u2013100 devices', '166\u2013333 devices'],
  ['POS terminals', '1\u20135 Mbps', '60\u2013300 devices', '200\u20131,000 devices'],
];

const faqItems = [
  { question: 'How many devices can connect to a 500 Mbps business internet plan?', answer: 'A 500 Mbps plan can support 30\u201350 simultaneously active devices depending on usage intensity. Light tasks like email use roughly 1\u20135 Mbps per device, while HD video conferencing uses 3\u20138 Mbps per stream.' },
  { question: 'Is there a hard limit on how many devices can connect to business WiFi?', answer: 'No. Most business internet plans don\u2019t impose a hard device cap. The practical limit is determined by your total bandwidth divided by per-device usage. Router hardware may have connection limits (typically 128\u2013254 devices) but bandwidth runs out first.' },
  { question: 'Does connecting more devices slow down internet speed?', answer: 'Yes. Each active device consumes bandwidth. Adding a device running HD video conferencing uses 3\u20138 Mbps that is no longer available to other devices. Inactive or idle devices consume negligible bandwidth.' },
  { question: 'What is the difference between connected devices and active devices?', answer: 'A connected device is on the network but may be idle. An active device is currently sending or receiving data. A laptop in sleep mode is connected but not active. Bandwidth planning should focus on peak active device count, not total connected devices.' },
  { question: 'Can I add more bandwidth if my team is growing?', answer: 'Yes. Comcast Business plans can be upgraded without changing equipment in most cases. If your team is growing rapidly, consider starting with a higher tier or exploring Dedicated Internet for guaranteed scalability.' },
  { question: 'Does a WiFi extender increase how many devices I can connect?', answer: 'A WiFi extender increases coverage area but does not increase bandwidth. It allows devices in distant areas to connect, but all devices still share the same total bandwidth from your internet plan.' },
  { question: 'What happens when too many devices are on the network at once?', answer: 'Performance degrades: slower page loads, buffering video calls, dropped VoIP connections, and POS timeout errors. Network congestion is the most common cause of \u201cslow internet\u201d complaints in offices.' },
  { question: 'Should I get a dedicated internet plan if I have 50+ devices?', answer: 'For 50+ simultaneously active devices, Dedicated Internet Access (DIA) provides guaranteed bandwidth that isn\u2019t shared with other businesses. This eliminates congestion-related performance issues and comes with uptime SLAs.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Speed & Bandwidth', url: '/learn/business-internet/speed-guide' },
  { name: 'How Many Devices', url: '/learn/business-internet/how-many-devices' },
]);

const relatedLinks = [
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'Internet for Gaming Venues', to: '/learn/business-internet/gaming-venues', description: 'Low-latency, high-device-count setups for esports and LAN centers' },
  { label: 'Wireless Backup & Failover', to: '/learn/business-internet/reliability', description: 'Keep devices connected during outages' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed by device count' },
];

export default function DevicesSpokePage() {
  useSchema(devicesSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="How Many Devices Can Connect to Business Internet?"
        metaTitle="How Many Devices Can Connect to Business Internet? | Comcast Business"
        metaDescription="A 300 Mbps business plan supports 20\u201340 active devices. Compare by usage type and find the right plan for your team size."
        lastUpdated="March 2026"
        tier={1}
        pageType="spoke"
        targetQueries={['how many devices can connect to business internet', 'how many devices on 500 Mbps business plan', 'business internet device limit', 'can I connect 50 devices to business WiFi']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          There is no hard device limit on most business internet plans &mdash; the practical limit is set by your bandwidth. A 300 Mbps plan supports roughly 20&ndash;40 simultaneously active devices for typical office tasks. Each additional heavy user (video conferencing, cloud uploads, 4K streaming) reduces that number. WiFi Pro extends your network range and supports dual-network operation for guest and business traffic.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Activity type \u2192 bandwidth per device \u2192 supported device counts by plan speed"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How to Estimate Your Device Capacity
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          The formula is straightforward: divide your total bandwidth by the average bandwidth each device consumes. A 300 Mbps plan with devices averaging 10 Mbps each supports roughly 30 simultaneous active devices. The challenge is that &ldquo;average&rdquo; varies wildly &mdash; an idle laptop uses near-zero bandwidth while an HD video call consumes 3&ndash;8 Mbps.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Focus on peak concurrent usage, not total device count. A 50-person office where only 20 people are active at any given time needs bandwidth for 20 active devices, not 50. Audit your peak usage window (typically 10&ndash;11 AM) and plan around that number with 20&ndash;30% headroom.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Connected Devices vs. Active Devices
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Every smartphone, laptop, tablet, printer, security camera, smart thermostat, and IoT sensor on your network counts as a connected device. But only devices actively sending or receiving data consume meaningful bandwidth. A smartphone in someone&rsquo;s pocket may be connected to WiFi but using near-zero bandwidth until they open an app.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This distinction matters because router hardware limits (typically 128&ndash;254 connections) are rarely the bottleneck &mdash; bandwidth is. If you have 100 connected devices but only 25 are active at peak, your bandwidth planning should target 25 devices, not 100.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          When to Upgrade Your Plan or Switch to Dedicated Internet
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          If you consistently see slow performance during peak hours, dropped video calls, or POS timeouts, your device count may have outgrown your bandwidth. Upgrading your plan is the simplest fix &mdash; Comcast Business plans can be upgraded without equipment changes in most cases.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For businesses with 50+ simultaneously active devices, or environments where every device is mission-critical (healthcare, financial services, large retail), <a href="/learn/business-internet/dedicated-internet" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> provides guaranteed bandwidth that is not shared with other businesses on the same infrastructure. DIA also comes with uptime SLAs and symmetrical speeds.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Network Segmentation: Separating Guest and Business Traffic
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Guest devices (customer phones, visitor laptops) compete for the same bandwidth as your business-critical systems unless you segment your network. WiFi Pro from Comcast Business supports dual-network operation, creating separate SSIDs for guest and business traffic. Guest devices get internet access without touching your internal network or consuming bandwidth needed for POS, VoIP, or cloud applications.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Network segmentation also improves security. Guest devices cannot access your internal printers, file servers, or surveillance systems. For retail, hospitality, and healthcare businesses, this separation is often a compliance requirement.
        </p>
      </section>

      <section className="mb-8">
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>Spoke page &mdash; Speed &amp; Bandwidth cluster</span>
        </div>
      </section>

      <HoverTrigger cardId="lateral-links">
        <InternalLinkCard title="Related Pages" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="long-tail-faq">
        <HoverTrigger cardId="faq-schema">
          <FAQSection items={faqItems} />
        </HoverTrigger>
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={devicesSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
