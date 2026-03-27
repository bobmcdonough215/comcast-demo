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
  { label: 'By Industry' },
];

const tableHeaders = ['Industry', 'Key Requirement', 'Recommended Minimum', 'Critical System', 'Page'];
const tableRows = [
  ['Gaming & Esports', 'Low latency, symmetrical speeds', '500 Mbps DIA', 'Gaming stations', 'Built'],
  ['Restaurants', 'POS reliability, guest WiFi', '100\u2013300 Mbps', 'POS terminals', 'Built'],
  ['Healthcare', 'HIPAA compliance, telemedicine', '500 Mbps+ DIA', 'EHR/EMR systems', 'Planned'],
  ['Retail', 'Multi-location, digital signage', '300 Mbps\u20131 Gbps', 'Inventory management', 'Planned'],
  ['Professional Services', 'VPN throughput, data security', '500 Mbps DIA', 'VPN, billing systems', 'Planned'],
  ['Education', 'Content filtering, per-device', '300 Mbps\u20131 Gbps', 'Learning platforms', 'Planned'],
  ['Hotels', 'Per-room allocation, PMS', '500 Mbps+', 'Guest WiFi, PMS', 'Planned'],
  ['Gyms & Fitness', 'IoT density, check-in systems', '150\u2013300 Mbps', 'Wearable integrations', 'Planned'],
];

const faqItems = [
  { question: 'Does my industry affect what business internet plan I need?', answer: 'Yes. Industries like healthcare require dedicated internet for compliance and telemedicine. Restaurants prioritize POS reliability. Gaming venues need low latency. Your industry\'s critical systems determine your internet requirements.' },
  { question: 'Which industries need dedicated internet?', answer: 'Healthcare, financial services, gaming venues, and multi-location retail typically require dedicated internet. Any industry where minutes of downtime cost significant revenue or create compliance risks benefits from DIA.' },
  { question: 'Can I use the same internet plan for multiple business types?', answer: 'You can, but it\'s not optimal. A shared 300 Mbps plan works for a basic office but would underperform for a gaming venue or healthcare practice. Match your plan to your highest-demand use case.' },
  { question: 'What internet speed does a restaurant need?', answer: 'A typical restaurant needs 100\u2013300 Mbps for POS terminals, guest WiFi, delivery tablets, kitchen displays, and security cameras. Reliability matters more than raw speed \u2014 consider wireless backup for POS protection.' },
  { question: 'How do I know if my business needs symmetrical internet?', answer: 'If your business uploads large files, runs video conferencing, streams security footage, or serves online customers, you need significant upload bandwidth. Symmetrical internet (DIA) ensures upload matches download.' },
  { question: 'What is the most common internet mistake businesses make?', answer: 'Underestimating bandwidth needs and not planning for growth. Businesses often buy the minimum plan and suffer performance issues within 6-12 months as they add employees, devices, and cloud applications.' },
];

const industryVerticalsHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Internet by Industry: Solutions for Every Business Type',
  datePublished: '2026-02-01',
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
  { name: 'By Industry', url: '/learn/business-internet/by-industry' },
]);

const industryVerticals = [
  { label: 'Gaming & Esports Venues', to: '/learn/business-internet/gaming-venues', description: 'Low-latency DIA for esports cafes, gaming bars, and LAN centers', built: true },
  { label: 'Restaurants & Hospitality', to: '/learn/business-internet/restaurants', description: 'POS reliability, guest WiFi, and delivery platform connectivity', built: true },
  { label: 'Healthcare & Medical', to: '/learn/business-internet/healthcare', description: 'HIPAA-compliant networks for telemedicine and EHR systems', built: false },
  { label: 'Retail & Multi-Location', to: '/learn/business-internet/retail', description: 'Inventory management, digital signage, and multi-site networking', built: false },
  { label: 'Professional Services', to: '/learn/business-internet/professional-services', description: 'VPN throughput, data security, and billing system connectivity', built: false },
  { label: 'Education & Training', to: '/learn/business-internet/education', description: 'Content filtering, per-device allocation, and learning platforms', built: false },
  { label: 'Hotels & Lodging', to: '/learn/business-internet/hotels', description: 'Per-room bandwidth allocation and property management systems', built: false },
  { label: 'Gyms & Fitness Centers', to: '/learn/business-internet/gyms', description: 'IoT device density, check-in systems, and wearable integrations', built: false },
];

const relatedLinks = industryVerticals.map((v) => ({
  label: v.label,
  to: v.to,
  description: v.description,
}));

export default function IndustryVerticalsHubPage() {
  useSchema(industryVerticalsHubSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet by Industry: Solutions for Every Business Type"
        metaTitle="Business Internet by Industry | Tailored Solutions | Comcast Business"
        metaDescription="Every industry has unique internet requirements. Find internet solutions tailored to restaurants, gaming venues, healthcare, retail, hotels, gyms, and more."
        lastUpdated="March 2026"
        tier={1}
        pageType="hub"
        targetQueries={['internet for [industry type]', 'business internet by industry', 'industry-specific internet solutions']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Every industry has distinct internet requirements. A restaurant needs reliable POS connectivity and guest WiFi segmentation. A gaming venue needs symmetrical speeds and sub-20ms latency. A healthcare provider needs HIPAA-compliant network isolation. This guide covers internet solutions tailored to each business type &mdash; because a one-size-fits-all recommendation misses the requirements that actually matter.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Industry requirements: key needs, recommended minimums, critical systems, and page status"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Industry-Specific Internet Recommendations Matter
          </h2>
        </HoverTrigger>
        <HoverTrigger cardId="fan-out-coverage">
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            A &ldquo;300 Mbps business plan&rdquo; means something entirely different to a restaurant than to a gaming venue. The restaurant needs rock-solid POS connectivity and enough bandwidth to keep guest WiFi from interfering with payment processing. The gaming venue needs sub-20ms latency and symmetrical speeds so 40 concurrent players don&rsquo;t lag. Same speed tier, completely different requirements.
          </p>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed">
          Industry-specific recommendations account for the systems that matter most to your business: the POS terminals that process your revenue, the EHR systems that store patient data, the gaming stations that define your customer experience. Generic speed recommendations miss these details entirely.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Common Requirements Across All Industries
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          While each industry has unique needs, some requirements are universal. Every business needs reliable connectivity &mdash; downtime costs revenue regardless of your industry. Every growing business needs scalable bandwidth that can handle more employees, devices, and cloud applications over time. And every business benefits from responsive support when issues arise.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The foundation is always the same: a connection that&rsquo;s fast enough for your peak demand, reliable enough for your critical systems, and supported by a provider that understands business needs. The differences lie in how much of each you need and which specific features &mdash; like <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">wireless backup</a> or <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet</a> &mdash; become essential vs. optional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          How to Evaluate Internet Needs for Your Industry
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Start with three questions: What are your critical systems? (POS, EHR, gaming stations, VPN, etc.) When is your peak demand? (Lunch rush, tournament nights, Monday mornings, etc.) What is your tolerance for downtime? (Zero for healthcare, low for retail, moderate for back-office.)
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Your answers determine your plan type. Critical systems that cannot tolerate any downtime point to <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet with SLA guarantees</a>. High peak demand with many concurrent users points to higher bandwidth tiers. Low downtime tolerance points to <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">wireless backup</a> as an insurance layer. Use our <a href="/tools/bandwidth-calculator" className="text-cyan hover:text-white transition-colors">bandwidth calculator</a> for a tailored recommendation based on your specific industry and usage patterns.
        </p>
      </section>

      {/* Industry verticals grid */}
      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-4">
          Explore Industry Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industryVerticals.map((vertical) => (
            <a
              key={vertical.to}
              href={vertical.to}
              className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-heading font-bold text-white">
                  {vertical.label}
                </h3>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                    vertical.built
                      ? 'bg-green-900/40 text-green-400 border border-green-800'
                      : 'bg-slate-700/40 text-slate-400 border border-slate-600'
                  }`}
                >
                  {vertical.built ? 'Built' : 'Planned'}
                </span>
              </div>
              <p className="text-xs text-slate-400">{vertical.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Hub page &mdash; Industry Verticals cluster</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore All Industry Verticals" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={industryVerticalsHubSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
