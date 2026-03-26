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
  { label: 'WiFi & Devices', to: '/learn/business-internet/wifi-devices' },
  { label: 'WiFi Pro' },
];

const tableHeaders = ['Feature', 'Standard Router', 'WiFi Pro'];
const tableRows = [
  ['Networks', '1', '2 (business + guest)'],
  ['Coverage', '~1,500 sq ft', '~5,000 sq ft'],
  ['Max devices', '~30', '100+'],
  ['Guest portal', 'No', 'Branded, customizable'],
  ['VLAN segmentation', 'No', 'Yes'],
  ['Centralized management', 'No', 'Cloud dashboard'],
  ['Security isolation', 'Basic', 'Full network separation'],
];

const faqItems = [
  { question: 'What is the difference between WiFi Pro and a standard business router?', answer: 'WiFi Pro provides dual-network capability (separate business and guest networks), wider coverage (~5,000 sq ft vs. ~1,500 sq ft), support for 100+ concurrent devices, VLAN segmentation for security isolation, a branded customizable guest portal, and centralized cloud management. A standard router provides a single network with basic functionality suitable for small offices with fewer than 30 devices.' },
  { question: 'Do I need WiFi Pro if I already have business internet?', answer: 'Not every business needs WiFi Pro. If you have a small office with fewer than 30 devices, no customer-facing WiFi needs, and a simple network layout, a standard business router may suffice. WiFi Pro is designed for businesses that need guest WiFi (retail, restaurants, hotels), support more than 30 concurrent devices, require network segmentation for security, or need to cover a large floor plan.' },
  { question: 'Can I customize the guest WiFi login page with WiFi Pro?', answer: 'Yes. WiFi Pro includes a branded guest portal that you can customize with your business logo, colors, and messaging. You can also configure the portal to collect guest email addresses before granting access, set bandwidth limits for guest users, establish time-based access limits, and display promotions or announcements. This turns your guest WiFi into a marketing channel.' },
  { question: 'Does WiFi Pro keep my business network secure from guest traffic?', answer: 'Yes. WiFi Pro uses VLAN (Virtual Local Area Network) segmentation to completely isolate guest traffic from your internal business network. Guests connect to a separate network that shares your internet connection but cannot access your business devices, files, printers, or internal systems. This is essential for PCI compliance in retail and hospitality environments.' },
  { question: 'How much does WiFi Pro cost?', answer: 'WiFi Pro is available as an add-on to Comcast Business internet plans. Pricing varies based on the number of access points needed and your coverage requirements. Contact Comcast Business for a customized quote based on your floor plan and device count. Many businesses find that WiFi Pro pays for itself through improved customer experience and the marketing value of a branded guest portal.' },
];

const wifiProSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Comcast Business WiFi Pro',
  description: 'Enterprise WiFi solution with dual-network capability, branded guest portal, VLAN segmentation, and support for 100+ concurrent devices.',
  brand: { '@type': 'Organization', name: 'Comcast Business' },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'WiFi & Devices', url: '/learn/business-internet/wifi-devices' },
  { name: 'WiFi Pro', url: '/learn/business-internet/wifi-pro' },
]);

const relatedLinks = [
  { label: 'WiFi & Devices Hub', to: '/learn/business-internet/wifi-devices', description: 'Routers, access points, and device management for business WiFi' },
  { label: 'How Many Devices Can Connect?', to: '/learn/business-internet/how-many-devices', description: 'Device limits by plan speed and usage type' },
  { label: 'Internet for Restaurants', to: '/learn/business-internet/restaurants', description: 'WiFi, POS, and delivery platform solutions for restaurants' },
  { label: 'Hotels & Lodging', to: '/learn/business-internet/hotels', description: 'Per-room bandwidth allocation and property management systems' },
  { label: 'Industry Solutions', to: '/learn/business-internet/by-industry', description: 'Internet solutions tailored to your industry' },
];

export default function WiFiProPage() {
  useSchema(wifiProSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is WiFi Pro and Do I Need It for My Business?"
        metaTitle="What Is WiFi Pro? Business WiFi with Dual Networks | Comcast Business"
        metaDescription="WiFi Pro provides dual-network WiFi with a secure business network and branded guest portal. Covers 5,000+ sq ft, supports 100+ devices, with full VLAN segmentation."
        lastUpdated="March 2026"
        tier={2}
        pageType="add-on"
        targetQueries={['what is WiFi Pro', 'Comcast WiFi Pro', 'business WiFi dual network']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          WiFi Pro is Comcast Business&rsquo;s enterprise WiFi solution that provides dual-network capability &mdash; a secure internal network for your team and a customizable branded guest network for customers. It offers wider coverage than standard business routers, supports 100+ concurrent devices, and provides full VLAN segmentation to keep guest traffic isolated from business operations.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Standard router vs. WiFi Pro &rarr; networks &rarr; coverage &rarr; devices &rarr; guest portal &rarr; VLAN &rarr; management &rarr; security"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Dual Networks: Why Separating Business and Guest WiFi Matters
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Running your business devices and customer devices on the same network is a security risk. A guest connecting to your WiFi could potentially access shared drives, printers, POS systems, or internal applications. WiFi Pro solves this by creating two completely separate networks: a private business network for your team&rsquo;s devices and a public guest network for customers. These networks share your internet connection but are isolated at the network level using VLAN segmentation &mdash; meaning guest traffic can never reach your business systems.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This separation is especially important for businesses that handle payment card data. PCI DSS compliance requires that cardholder data environments be segmented from public-facing networks. WiFi Pro&rsquo;s VLAN architecture provides this segmentation out of the box, reducing your compliance burden and protecting your customers&rsquo; data.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            The Branded Guest Portal: Turn WiFi into a Marketing Channel
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          WiFi Pro&rsquo;s customizable guest portal does more than grant internet access. It&rsquo;s a customer touchpoint you can brand with your logo, colors, and messaging. Before guests connect, they see your branded splash page and can be asked to provide an email address, accept terms of service, or view a promotional offer. This turns every WiFi login into a lead capture opportunity and brand impression.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For <a href="/learn/business-internet/restaurants" className="text-cyan hover:text-white transition-colors">restaurants</a>, the guest portal can promote daily specials or loyalty programs. For <a href="/learn/business-internet/hotels" className="text-cyan hover:text-white transition-colors">hotels</a>, it can provide property information and upsell amenities. For retail stores, it can offer discount codes that drive immediate purchases. The portal is managed through a cloud dashboard, so you can update messaging and offers without touching the hardware.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="section-independence">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Coverage and Capacity: Built for Real Business Environments
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          A standard consumer or basic business router covers approximately 1,500 square feet and handles around 30 devices before performance degrades. WiFi Pro access points cover up to 5,000 square feet each and support 100+ concurrent devices with consistent performance. For larger spaces, multiple access points can be deployed and managed from a single cloud dashboard, creating seamless coverage across your entire location without dead zones.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This capacity is critical for businesses with high device density &mdash; restaurants where every table has customers on their phones, retail stores with dozens of IoT sensors and employee handhelds, or co-working spaces where every desk has multiple connected devices. WiFi Pro&rsquo;s enterprise-grade hardware handles this density without the dropped connections and slow speeds that plague consumer routers under heavy load.
        </p>
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>WiFi &amp; Devices &mdash; Add-on product page</span>
        </div>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Resources" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Product" json={wifiProSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
