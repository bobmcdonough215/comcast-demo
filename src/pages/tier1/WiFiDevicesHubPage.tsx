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

const wifiDevicesHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business WiFi and Device Management: Coverage, Capacity, and Security',
  datePublished: '2026-01-22',
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
  { label: 'WiFi & Devices' },
];

const tableHeaders = ['Feature', 'Standard Business WiFi', 'WiFi Pro'];
const tableRows = [
  ['Dual network (guest + business)', 'No', 'Yes'],
  ['Coverage area', 'Single room/floor', 'Multi-room, multi-floor'],
  ['Device capacity', '~30 concurrent', '100+ concurrent'],
  ['Centralized management', 'No', 'Yes'],
  ['Guest portal customization', 'No', 'Yes'],
  ['Security isolation', 'Basic', 'Full VLAN segmentation'],
];

const faqItems = [
  { question: 'How many devices can business WiFi support?', answer: 'Standard business routers support around 30 concurrent devices. WiFi Pro and enterprise access points support 100+ devices with proper coverage planning. The practical limit depends on bandwidth and activity type.' },
  { question: 'Do I need separate WiFi for customers and employees?', answer: 'Yes, for both security and performance. Guest traffic on the same network as your POS, VoIP, and business applications creates security risks and can degrade performance for critical systems.' },
  { question: 'What is WiFi Pro?', answer: 'Comcast Business WiFi Pro provides dual-network capability, extended coverage, and centralized management. It creates separate networks for business operations and guest access with full VLAN segmentation.' },
  { question: 'How far does business WiFi reach?', answer: 'A single business access point covers approximately 2,500\u20135,000 sq ft depending on building materials. Multi-floor or large spaces need multiple access points with centralized management.' },
  { question: 'Can I customize a guest WiFi login page?', answer: 'Yes, with WiFi Pro. You can create a branded guest portal with your business name, logo, and terms of service \u2014 turning guest WiFi into a branding touchpoint.' },
  { question: 'Is business WiFi more secure than home WiFi?', answer: 'Business WiFi solutions offer enterprise encryption (WPA3-Enterprise), VLAN segmentation, and managed security policies that consumer routers don\u2019t support. SecurityEdge adds network-level threat protection.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'WiFi & Devices', url: '/learn/business-internet/wifi-devices' },
]);

const relatedLinks = [
  { label: 'How Many Devices Can Connect?', to: '/learn/business-internet/how-many-devices', description: 'Device limits by plan speed and usage type' },
  { label: 'WiFi Pro', to: '/learn/business-internet/wifi-pro', description: 'Dual-network capability with centralized management' },
  { label: 'Guest WiFi Setup', to: '/learn/business-internet/guest-wifi-setup', description: 'How to configure branded guest networks' },
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed your business needs' },
  { label: 'Business Internet Pillar', to: '/learn/business-internet', description: 'The complete guide to business internet' },
];

export default function WiFiDevicesHubPage() {
  useSchema(wifiDevicesHubSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business WiFi and Device Management: Coverage, Capacity, and Security"
        metaTitle="Business WiFi & Device Management | WiFi Pro, Guest Networks | Comcast Business"
        metaDescription="Business WiFi needs to support dozens of devices, guest networks, and IoT equipment. Learn about WiFi Pro, network segmentation, and device capacity planning."
        lastUpdated="March 2026"
        tier={1}
        pageType="hub"
        targetQueries={['business wifi', 'how many devices business internet', 'business wifi setup', 'guest wifi for business']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Business WiFi must support high device density, separate guest and operations networks, and provide consistent coverage across your entire workspace. Comcast Business WiFi Pro delivers dual-network capability &mdash; a secure internal network for your team and a branded guest network for customers &mdash; with wider coverage than consumer routers and centralized management.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="WiFi solutions comparison &rarr; standard vs. WiFi Pro features"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Consumer WiFi Doesn&rsquo;t Work for Business
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Consumer WiFi routers are designed for a household of 5&ndash;10 devices doing basic browsing and streaming. A business environment is fundamentally different: dozens of laptops, phones, tablets, POS terminals, VoIP handsets, security cameras, IoT sensors, and printers all competing for airtime on the same access point. Consumer routers hit their device ceiling quickly, leading to dropped connections, slow speeds, and unreliable performance.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Beyond device limits, consumer routers lack network segmentation &mdash; the ability to separate guest traffic from business operations. They also lack centralized management, meaning you cannot monitor connected devices, set bandwidth policies, or push firmware updates across multiple access points from a single dashboard. For any business with more than a handful of employees, consumer WiFi is a liability.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="network-segmentation">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Network Segmentation: Separating Guest and Business Traffic
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Network segmentation uses VLANs (Virtual Local Area Networks) to create isolated traffic lanes on the same physical infrastructure. With segmentation, your guest WiFi and your business operations network are logically separated &mdash; a guest device cannot see or access your POS system, file servers, VoIP phones, or any internal resource. This is both a security requirement and a performance optimization.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Without segmentation, a customer streaming video on your guest network consumes bandwidth that your POS terminals and VoIP phones need. Worse, an infected guest device on an unsegmented network can scan and attack your business systems. WiFi Pro creates full VLAN segmentation automatically &mdash; your internal network and guest network operate as completely independent environments sharing the same physical access points.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          How Many Devices Can Your WiFi Support?
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Device capacity depends on three factors: the access point hardware, available bandwidth, and what each device is doing. A standard business router can technically connect 30 devices, but if 15 of them are on video calls, performance degrades rapidly. Enterprise access points support 100+ concurrent connections, but each device still needs its share of bandwidth and radio airtime.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          To plan properly, inventory every device type in your workspace: employee laptops, smartphones, tablets, IoT devices, security cameras, smart displays, POS terminals, and printers. Multiply by 1.5x to account for personal devices and future growth. If the total exceeds 30, you need WiFi Pro or enterprise access points. If it exceeds 100, you need multiple access points with centralized management and load balancing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          WiFi Coverage Planning for Different Business Types
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Coverage needs vary dramatically by business type. A small retail store (1,000 sq ft, open floor plan) may need a single access point. A restaurant with thick walls between dining room, kitchen, and patio may need three. A multi-floor office building needs access points on every floor with seamless roaming so devices switch between them without dropping connections.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Warehouses and industrial spaces present unique challenges &mdash; metal shelving, concrete walls, and long distances degrade WiFi signals rapidly. Hospitality venues need coverage in guest rooms, lobbies, conference spaces, and back-of-house areas. In every case, a professional site survey identifies dead zones and determines optimal access point placement. WiFi Pro includes professional installation with coverage assessment for your specific space.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="hub-page">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Hub page &mdash; WiFi &amp; Devices cluster</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore the WiFi & Devices Cluster" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={wifiDevicesHubSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
