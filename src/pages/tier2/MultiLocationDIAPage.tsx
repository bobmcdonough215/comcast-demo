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
  { label: 'Multi-Location DIA' },
];

const tableHeaders = ['Locations', 'Recommended Setup', 'Speed Per Site', 'Management', 'Monthly Complexity'];
const tableRows = [
  ['2\u20135 sites', 'DIA + basic SD-WAN', '300 Mbps\u20131 Gbps', 'Centralized portal', 'Low'],
  ['5\u201320 sites', 'DIA + ActiveCore SD-WAN', '500 Mbps\u201310 Gbps', 'Cloud-managed', 'Medium'],
  ['20\u2013100 sites', 'Enterprise DIA + full SD-WAN', '1\u2013100 Gbps', 'Dedicated account team', 'High'],
  ['100+ sites', 'Hyperscale DIA + SD-WAN', 'Custom', 'Fully managed', 'Enterprise'],
];

const faqItems = [
  { question: 'Can I get the same internet speed at every business location?', answer: 'Yes, with Dedicated Internet Access (DIA). Unlike shared internet plans where speeds vary by location and time of day, DIA provides guaranteed symmetrical bandwidth at each site. Combined with SD-WAN, you can ensure consistent performance across all locations regardless of geography.' },
  { question: 'What is the advantage of SD-WAN for multi-location businesses?', answer: 'SD-WAN provides centralized network management across all locations from a single cloud portal. It automatically routes traffic over the fastest available path, provides sub-second failover between connections, prioritizes critical applications like VoIP and POS, and eliminates the need for on-site IT at each branch.' },
  { question: 'How does Comcast Business support multi-location internet deployments?', answer: 'Comcast Business offers DIA combined with ActiveCore SD-WAN for multi-location businesses. This includes centralized network management, automatic failover, application-level traffic prioritization, and a dedicated account team for deployments over 20 sites. DIA is expanding to 1 million new business locations, making enterprise-grade connectivity available to mid-market businesses.' },
  { question: 'Do I need the same internet provider at every location?', answer: 'No, but using a single provider simplifies management, billing, and support. SD-WAN can work across multiple providers, but having one provider for all locations ensures consistent SLAs, unified support, and centralized billing. Comcast Business covers the largest U.S. footprint for business internet, making single-provider deployment feasible for most multi-location businesses.' },
  { question: 'What happens if internet goes down at one of my locations?', answer: 'With SD-WAN and proper failover configuration, traffic automatically reroutes through backup connections (cellular, secondary broadband, or another DIA link) within seconds. Critical applications like VoIP and POS continue operating without manual intervention. Without SD-WAN, each site operates independently, and an outage requires manual troubleshooting by on-site staff.' },
];

const multiLocationDIASchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dedicated Internet Access for Multi-Location Businesses',
  datePublished: '2026-02-10',
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
  { name: 'Multi-Location DIA', url: '/learn/business-internet/multi-location-dia' },
]);

const relatedLinks = [
  { label: 'Dedicated Internet Hub', to: '/learn/business-internet/dedicated-internet', description: 'Enterprise-grade DIA with guaranteed uptime and symmetrical speeds' },
  { label: 'What Is SD-WAN?', to: '/learn/business-internet/sd-wan', description: 'Cloud-managed networking for multi-location businesses' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Understand when shared internet is enough and when you need DIA' },
  { label: 'Business Internet Guide', to: '/learn/business-internet', description: 'The complete pillar guide for business internet decisions' },
];

export default function MultiLocationDIAPage() {
  useSchema(multiLocationDIASchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Dedicated Internet Access for Multi-Location Businesses"
        metaTitle="Dedicated Internet Access for Multi-Location Businesses | Comcast Business"
        metaDescription="Multi-location businesses need consistent internet at every site. Learn how DIA combined with SD-WAN delivers guaranteed speeds, centralized management, and automatic failover."
        lastUpdated="March 2026"
        tier={2}
        pageType="spoke"
        targetQueries={['dedicated internet multi-location', 'SD-WAN multi-location', 'enterprise internet multiple offices']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Multi-location businesses need consistent internet performance across every site &mdash; not just at headquarters. Comcast Business offers Dedicated Internet Access combined with SD-WAN for centralized network management, automatic failover between locations, and consistent speeds at every branch. With DIA expanding to 1 million new business locations, enterprise-grade connectivity is now available to mid-market businesses.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Location count &rarr; recommended setup &rarr; speed per site &rarr; management style &rarr; complexity"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            The Multi-Location Internet Challenge
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          When your business operates from a single location, internet management is straightforward &mdash; one connection, one router, one set of credentials. But as soon as you add a second location, complexity multiplies. Each site may have different providers, different speeds, different SLAs, and different support contacts. A network issue at one branch requires a separate troubleshooting process, often involving on-site staff who aren&rsquo;t IT specialists.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This fragmented approach breaks down at scale. Businesses with 5+ locations that rely on shared applications &mdash; cloud ERP, VoIP phone systems, centralized databases, inter-office video conferencing &mdash; need consistent performance across every site. A branch with inadequate bandwidth or frequent outages becomes a bottleneck for the entire organization.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How DIA + SD-WAN Solves Multi-Location Networking
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          <a href="/learn/business-internet/dedicated-internet" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access</a> provides guaranteed, symmetrical bandwidth at each location &mdash; no sharing, no congestion, no performance variance between sites. Combined with <a href="/learn/business-internet/sd-wan" className="text-cyan hover:text-white transition-colors">SD-WAN</a>, your entire multi-location network is managed from a single cloud portal. SD-WAN intelligently routes traffic across connections, automatically fails over to backup links when an outage occurs, and prioritizes critical applications like POS and VoIP over less time-sensitive traffic.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The Comcast Business ActiveCore platform enables IT teams to configure policies once and deploy them across all locations instantly. Need to prioritize video conferencing traffic at every branch? Set the policy centrally and it propagates in minutes. Need to add a new location? Provision it through the portal without sending a network engineer on-site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Scaling from 2 Sites to 100+: Choosing the Right Architecture
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          A two-location business can often manage with DIA at each site and basic SD-WAN for failover and traffic management. As you grow beyond 5 locations, cloud-managed SD-WAN becomes essential for maintaining visibility and control. At 20+ sites, a dedicated account team and fully managed deployment ensure that network changes, security updates, and capacity planning are handled proactively rather than reactively.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The key decision at each scale point is how much management you want to handle internally versus outsourcing to your provider. Comcast Business offers self-managed, co-managed, and fully managed options for multi-location DIA deployments, allowing you to match the management model to your internal IT capacity.
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
        <SchemaBlock schemaType="Article" json={multiLocationDIASchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
