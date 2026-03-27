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
import { hotelsSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'By Industry', to: '/learn/business-internet/by-industry' },
  { label: 'Hotels' },
];

const tableHeaders = ['Hotel System', 'Bandwidth Per Unit', 'Scale Factor', 'Uptime', 'Notes'];
const tableRows = [
  ['Guest WiFi (per room)', '10\u201325 Mbps', 'x total rooms', 'High', 'Peak = evening hours'],
  ['Property Mgmt System (PMS)', '5\u201310 Mbps', 'Fixed', 'Critical', 'Booking, check-in/out'],
  ['Streaming (per room)', '15\u201325 Mbps', 'x active rooms', 'Moderate', 'Netflix, YouTube at peak'],
  ['Conference center WiFi', '50\u2013100 Mbps', 'Per event', 'High', 'Events drive reputation'],
  ['Security cameras', '10\u201320 Mbps per camera', 'x camera count', 'Moderate', 'Upload heavy'],
  ['Staff communications', '5\u201310 Mbps', 'Fixed', 'Moderate', 'Radios, messaging, scheduling'],
];

const faqItems = [
  { question: 'How much internet bandwidth does a hotel need per room?', answer: 'Plan for 25\u201350 Mbps per room to cover guest WiFi, streaming, and IoT devices. A 50-room hotel should target at least 500 Mbps of total bandwidth with the ability to scale during peak evening hours when most guests are streaming simultaneously. Premium properties may need more for 4K streaming expectations.' },
  { question: 'Should hotel guest WiFi be on a separate network from operations?', answer: 'Absolutely. Guest WiFi must be isolated from the operations network using VLAN segmentation. The PMS (property management system) handles reservations, billing, and guest data \u2014 it should never be accessible from the guest network. Comcast Business WiFi Pro supports multiple SSIDs with independent VLANs and bandwidth limits.' },
  { question: 'What internet does a short-term rental property need?', answer: 'Short-term rentals (Airbnb, VRBO) should provide at least 100\u2013200 Mbps for a single unit with fast, reliable WiFi as a top amenity. Guests expect streaming-ready connections. For multi-unit properties, scale proportionally and consider a managed WiFi solution with a branded login portal for a professional guest experience.' },
  { question: 'How do hotels handle bandwidth during peak evening hours?', answer: 'Peak evening hours (7\u201311 PM) can see 70\u201390% of guests streaming simultaneously. The solution is oversizing your connection for peak load, not average load. QoS rules should prioritize PMS and booking systems over guest streaming. Burstable DIA options let you scale for peak without paying for maximum capacity 24/7.' },
  { question: 'Does conference center WiFi need separate bandwidth?', answer: 'Yes. A single conference event with 200 attendees on WiFi can consume 50\u2013100 Mbps or more. This traffic should be on a dedicated VLAN with its own bandwidth allocation so events do not impact guest room WiFi or hotel operations. Properties that host frequent events should size their internet for event peak load as a baseline.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'By Industry', url: '/learn/business-internet/by-industry' },
  { name: 'Hotels', url: '/learn/business-internet/hotels' },
]);

const relatedLinks = [
  { label: 'WiFi & Connected Devices', to: '/learn/business-internet/wifi-devices', description: 'WiFi Pro and managed access points' },
  { label: 'Guest WiFi Solutions', to: '/learn/business-internet/guest-wifi', description: 'Branded portals and VLAN isolation' },
  { label: 'Internet for Restaurants', to: '/learn/business-internet/restaurants', description: 'POS, delivery, and guest WiFi for dining' },
  { label: 'Industry Verticals Hub', to: '/learn/business-internet/by-industry', description: 'Internet solutions by industry' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed' },
];

export default function HotelsPage() {
  useSchema(hotelsSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet for Hotels and Short-Term Rentals"
        metaTitle="Business Internet for Hotels & Short-Term Rentals | Guest WiFi | Comcast Business"
        metaDescription="Hotels and short-term rentals need scalable guest WiFi, isolated operations networks, and peak-capacity bandwidth. See recommended plans by room count."
        lastUpdated="March 2026"
        tier={2}
        pageType="vertical"
        targetQueries={['hotel internet requirements', 'short-term rental WiFi', 'guest WiFi for hotels']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Hotels and short-term rentals need high-capacity guest WiFi that scales per room, a separate operations network for PMS and booking systems, and enough bandwidth to handle peak occupancy without degradation. A 50-room hotel should target at least 500 Mbps with WiFi Pro for branded guest portals and VLAN segmentation between guest and staff networks.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Hotel system &rarr; bandwidth &rarr; scale factor &rarr; uptime"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Sizing Internet by Room Count: The Per-Room Multiplier
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Hotel internet planning starts with a simple formula: bandwidth per room multiplied by total rooms, plus fixed operational overhead. Each occupied room can consume 25&ndash;50 Mbps during peak evening hours when guests are streaming, video calling, and browsing simultaneously. A 50-room property at 70% occupancy during peak hours needs 875&ndash;1,750 Mbps just for guest WiFi.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          On top of guest traffic, add fixed operational bandwidth: PMS (5&ndash;10 Mbps), security cameras (10&ndash;20 Mbps per camera), staff communications (5&ndash;10 Mbps), and any conference or event spaces. The total typically exceeds what a single shared broadband connection can reliably deliver, which is why hotels increasingly deploy dedicated internet for operations and high-capacity shared connections for guest WiFi.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Guest WiFi as a Revenue and Reputation Driver
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Guest WiFi is no longer an amenity &mdash; it is an expectation. Slow or unreliable WiFi is the number-one complaint in hotel reviews on every major booking platform. A property with 4.5-star reviews that drops to 4.0 because of WiFi complaints loses bookings. Conversely, fast and reliable WiFi generates positive mentions that drive future reservations.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          WiFi Pro enables branded guest portals with customizable splash pages, tiered access (free basic vs. premium speeds), and analytics on guest usage patterns. For short-term rental properties, a professional WiFi setup with clear instructions and fast speeds consistently appears in top-rated listings. The internet connection is part of the guest experience, and it should be treated with the same attention as room cleanliness and front desk service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Network Architecture: Separating Guest, Operations, and Events
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          A hotel network should be segmented into at least three zones. The operations VLAN carries PMS, booking engine, payment processing, and staff communications &mdash; this network must be invisible to guests and secured with access controls. The guest WiFi VLAN provides internet access through a captive portal with bandwidth limits per device to prevent any single guest from monopolizing the connection.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Properties with conference or event spaces should add a dedicated events VLAN with its own bandwidth allocation. A 200-person conference can consume 50&ndash;100 Mbps, and that traffic should never compete with guest room WiFi or hotel operations. Security cameras and IoT devices (smart locks, thermostats, lighting) can share the operations VLAN or run on a separate IoT VLAN depending on the property&rsquo;s security posture.
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
        <SchemaBlock schemaType="Service" json={hotelsSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
