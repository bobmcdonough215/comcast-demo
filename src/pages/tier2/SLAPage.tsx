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
  { label: 'Dedicated Internet', to: '/learn/business-internet/dedicated-internet' },
  { label: 'What Is an SLA?' },
];

const tableHeaders = ['SLA Tier', 'Uptime', 'Annual Downtime', 'Response Time', 'Remedy', 'Typical Plan'];
const tableRows = [
  ['Basic', '99.9%', '8.7 hours', 'Next business day', 'None', 'Shared business internet'],
  ['Standard', '99.95%', '4.4 hours', '4-hour response', 'Service credits', 'Business Internet Plus'],
  ['Premium', '99.99%', '52 minutes', '2-hour response', 'Service credits', 'Dedicated Internet'],
  ['Enterprise', '99.999%', '5 minutes', '1-hour response', 'Financial penalties', 'Enterprise DIA'],
];

const faqItems = [
  { question: 'What does 99.99% uptime actually mean?', answer: '99.99% uptime means your internet connection can be down for no more than 52 minutes per year, or about 4.3 minutes per month. This is the standard SLA tier for Dedicated Internet Access plans and is significantly more reliable than the 99.9% (8.7 hours/year) offered on most shared business plans.' },
  { question: 'What happens if my provider violates the SLA?', answer: 'Most SLAs include a remedy clause. For standard and premium tiers, this typically means service credits applied to your next bill. Enterprise-tier SLAs may include direct financial penalties. You usually need to file a claim within a specified window (often 30 days) and provide documentation of the outage.' },
  { question: 'Do all business internet plans include an SLA?', answer: 'No. Many basic shared business internet plans do not include a formal SLA or only include a best-effort commitment. Dedicated Internet Access (DIA) plans almost always include an uptime SLA with defined response times and remedies. Always ask for the SLA document before signing a contract.' },
  { question: 'What is the difference between an uptime SLA and a repair SLA?', answer: 'An uptime SLA guarantees a minimum percentage of time your connection will be operational (e.g., 99.99%). A repair SLA guarantees how quickly your provider will respond to and resolve an outage (e.g., 2-hour response time). The best business internet contracts include both.' },
  { question: 'Can I negotiate better SLA terms with my internet provider?', answer: 'Yes, especially for multi-year contracts or multi-location deployments. Providers are often willing to offer enhanced SLA tiers, faster response times, or larger service credits for enterprise customers. Comcast Business offers customizable SLA packages for Dedicated Internet Access customers with specific uptime and response requirements.' },
];

const slaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is an SLA? Service Level Agreements for Business Internet',
  datePublished: '2026-02-01',
  dateModified: '2026-03-15',
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
  { name: 'Dedicated Internet', url: '/learn/business-internet/dedicated-internet' },
  { name: 'What Is an SLA?', url: '/learn/business-internet/what-is-sla' },
]);

const relatedLinks = [
  { label: 'Dedicated Internet Hub', to: '/learn/business-internet/dedicated-internet', description: 'Enterprise-grade DIA with guaranteed uptime and symmetrical speeds' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Understand when shared internet is enough and when you need DIA' },
  { label: 'Reliability & Uptime Hub', to: '/learn/business-internet/reliability', description: 'Wireless backup, failover, and strategies to maximize uptime' },
  { label: 'Business Internet Guide', to: '/learn/business-internet', description: 'The complete pillar guide for business internet decisions' },
];

export default function SLAPage() {
  useSchema(slaSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is an SLA? Service Level Agreements for Business Internet"
        metaTitle="What Is an SLA? Service Level Agreements for Business Internet | Comcast Business"
        metaDescription="A Service Level Agreement (SLA) guarantees minimum uptime, response times, and remedies for business internet. Compare SLA tiers from 99.9% to 99.999%."
        lastUpdated="March 2026"
        tier={2}
        pageType="spoke"
        targetQueries={['what is an SLA', 'business internet SLA', 'service level agreement explained']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          A Service Level Agreement (SLA) is a contractual guarantee between your business and your internet provider that defines minimum performance standards &mdash; typically uptime percentage, repair response time, and financial remedies if standards aren&rsquo;t met. For business internet, the most important SLA metric is uptime: 99.99% means no more than 52 minutes of downtime per year.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="SLA tier &rarr; uptime guarantee &rarr; annual downtime &rarr; response time &rarr; remedy &rarr; typical plan"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Uptime SLAs Matter More Than Advertised Speed
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Most businesses focus on speed when shopping for internet, but uptime is the metric that determines whether your business stays operational. A 1 Gbps plan is worthless during an outage. The difference between 99.9% and 99.99% uptime sounds small, but it translates to 8.7 hours vs. 52 minutes of downtime per year &mdash; a gap that can cost thousands in lost revenue, especially for businesses running POS systems, VoIP phones, or cloud-based operations.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          When evaluating business internet providers, always ask for the SLA document &mdash; not the marketing page. The SLA should specify exact uptime percentages, how downtime is measured, response time commitments, and what remedies you receive if the provider fails to meet those standards.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Understanding SLA Remedies: Service Credits vs. Financial Penalties
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Not all SLA violations are treated equally. Basic and standard-tier SLAs typically offer no remedy or modest service credits &mdash; a percentage discount on your next bill. Premium SLAs attached to Dedicated Internet Access plans usually provide more substantial credits, often calculated as a percentage of your monthly fee multiplied by the hours of downtime.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Enterprise-tier SLAs may include direct financial penalties, meaning the provider pays you for failing to meet the agreed standards. These are typically reserved for large contracts with custom terms. Regardless of tier, you almost always need to proactively file a claim &mdash; providers rarely issue credits automatically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          How to Compare SLAs Across Business Internet Providers
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          When comparing SLAs, look beyond the uptime percentage. Key factors include: how downtime is defined (some providers exclude &ldquo;scheduled maintenance&rdquo; from the calculation), whether the SLA covers your last-mile connection or only the provider&rsquo;s backbone, the response time guarantee for outage resolution, and the claim process and remedy value.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Comcast Business <a href="/learn/business-internet/dedicated-internet" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access</a> plans include premium-tier SLAs with 99.99% uptime, 2-hour response times, and service credits. For businesses where downtime directly impacts revenue, this level of contractual protection is essential.
        </p>
      </section>

      <section className="mb-8">
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>Spoke page &mdash; Dedicated Internet cluster</span>
        </div>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Pages" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={slaSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
