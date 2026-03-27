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
  { label: 'SD-WAN' },
];

const tableHeaders = ['Feature', 'Traditional WAN (MPLS)', 'SD-WAN'];
const tableRows = [
  ['Cost', 'High (dedicated circuits)', 'Lower (uses broadband + DIA)'],
  ['Deployment time', 'Weeks to months', 'Days to weeks'],
  ['Cloud optimization', 'Poor (backhauled)', 'Direct cloud access'],
  ['Failover', 'Manual', 'Automatic, sub-second'],
  ['Management', 'Per-site configuration', 'Centralized cloud portal'],
  ['Scalability', 'Slow, expensive', 'Rapid, cost-effective'],
];

const faqItems = [
  { question: 'What does SD-WAN stand for?', answer: 'SD-WAN stands for Software-Defined Wide Area Network. It is a cloud-managed networking technology that uses software to intelligently route traffic across multiple internet connections (broadband, DIA, LTE, MPLS) based on real-time network conditions. The "software-defined" part means network policies are set centrally and applied automatically, replacing manual per-site configuration.' },
  { question: 'How is SD-WAN different from MPLS?', answer: 'MPLS (Multi-Protocol Label Switching) uses dedicated private circuits to connect locations, offering reliable but expensive and inflexible connectivity. SD-WAN routes traffic over any available connection — broadband, DIA, cellular — using intelligent software to choose the best path. SD-WAN is typically 50–70% cheaper than MPLS, deploys in days instead of weeks, and provides direct cloud access instead of backhauling traffic through a central hub.' },
  { question: 'Does SD-WAN replace my internet connection?', answer: 'No. SD-WAN is an overlay technology that works on top of your existing internet connections. It manages and optimizes how traffic flows across those connections but does not replace the underlying broadband, DIA, or cellular links. Think of SD-WAN as the intelligent routing layer that makes your existing connections work better together.' },
  { question: 'What is Comcast Business ActiveCore?', answer: 'ActiveCore is the Comcast Business SD-WAN platform that provides centralized network management, application-level traffic prioritization, real-time analytics, and automatic failover across all connected locations. It allows IT teams to set policies once and deploy them across every site, monitor network performance from a single dashboard, and troubleshoot issues remotely.' },
  { question: 'How many locations do I need to benefit from SD-WAN?', answer: 'SD-WAN provides value starting at just 2 locations, but the benefits compound as you add more sites. With 2 locations, SD-WAN provides failover and traffic optimization. With 5+ locations, centralized management saves significant IT time. With 20+ locations, SD-WAN becomes essential for maintaining consistent performance and security policies across the network.' },
];

const sdwanSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'SD-WAN (Software-Defined Wide Area Network)',
  description: 'SD-WAN is a cloud-managed networking technology that routes traffic across multiple internet connections automatically, replacing expensive MPLS links with intelligent software that chooses the fastest path for each packet.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Business Internet Glossary' },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Dedicated Internet', url: '/learn/business-internet/dedicated-internet' },
  { name: 'SD-WAN', url: '/learn/business-internet/sd-wan' },
]);

const relatedLinks = [
  { label: 'Multi-Location DIA', to: '/learn/business-internet/multi-location-dia', description: 'Dedicated internet for businesses with multiple offices and branches' },
  { label: 'Dedicated Internet Hub', to: '/learn/business-internet/dedicated-internet', description: 'Enterprise-grade DIA with guaranteed uptime and symmetrical speeds' },
  { label: 'Reliability & Uptime Hub', to: '/learn/business-internet/reliability', description: 'Wireless backup, failover, and strategies to maximize uptime' },
  { label: 'Business Internet Guide', to: '/learn/business-internet', description: 'The complete pillar guide for business internet decisions' },
];

export default function SDWANPage() {
  useSchema(sdwanSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is SD-WAN and How Does It Help Multi-Location Businesses?"
        metaTitle="What Is SD-WAN? Software-Defined WAN for Business | Comcast Business"
        metaDescription="SD-WAN replaces expensive MPLS with intelligent software that routes traffic across multiple connections. Learn how it reduces costs and improves multi-location networking."
        lastUpdated="March 2026"
        tier={2}
        pageType="add-on"
        targetQueries={['what is SD-WAN', 'SD-WAN for business', 'software defined WAN']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          SD-WAN (Software-Defined Wide Area Network) is a cloud-managed networking technology that routes traffic across multiple internet connections automatically. It replaces expensive MPLS links with intelligent software that chooses the fastest path for each packet. Comcast Business is the #1 U.S. SD-WAN provider, managing enterprise networks through the ActiveCore platform.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Feature comparison &rarr; traditional WAN (MPLS) vs. SD-WAN"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How SD-WAN Works: Intelligent Traffic Routing
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Traditional WANs route all traffic through a central hub, forcing cloud-bound data to travel from a branch office to headquarters and then back out to the internet. This &ldquo;backhauling&rdquo; adds latency and wastes bandwidth. SD-WAN eliminates this inefficiency by analyzing each packet&rsquo;s destination and routing it over the optimal path in real time. A video call to Microsoft Teams goes directly to the nearest Microsoft data center. A file transfer to a branch office routes over DIA. A software update downloads over the cheapest available broadband link.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This intelligent routing happens automatically based on policies you define once in the centralized management portal. You set rules like &ldquo;prioritize VoIP and video conferencing over all other traffic&rdquo; or &ldquo;route POS transactions over DIA only,&rdquo; and SD-WAN enforces those policies across every location without per-site configuration.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            SD-WAN vs. MPLS: Why Businesses Are Switching
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          MPLS has been the enterprise networking standard for decades, but it was designed for a pre-cloud world. MPLS circuits are expensive (often $500&ndash;$2,000+ per site per month), take weeks to provision, and perform poorly with cloud applications because they backhaul all traffic through a central point. As businesses have moved to cloud-first operations &mdash; SaaS applications, cloud storage, hosted VoIP &mdash; MPLS has become a bottleneck.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          SD-WAN provides equivalent or better reliability at a fraction of the cost by leveraging commodity broadband and DIA connections. It offers direct cloud access from each site, automatic sub-second failover when a connection drops, and centralized management that scales from 2 locations to 1,000+. Most businesses that switch from MPLS to SD-WAN see 50&ndash;70% cost savings while improving application performance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          The Comcast Business ActiveCore SD-WAN Platform
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Comcast Business is the #1 SD-WAN provider in the United States, managing enterprise networks through the ActiveCore platform. ActiveCore provides a single-pane-of-glass view across all locations, allowing IT teams to monitor bandwidth utilization, application performance, and connection health in real time. When a connection degrades or fails, ActiveCore automatically reroutes traffic to the next best available path &mdash; often before users notice any disruption.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          ActiveCore integrates natively with Comcast Business <a href="/learn/business-internet/dedicated-internet" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access</a>, providing the ideal combination of guaranteed bandwidth (DIA) and intelligent network management (SD-WAN). For businesses that need both performance and flexibility across multiple locations, this combination eliminates the trade-offs that previously required expensive MPLS circuits.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Add-on page &mdash; Dedicated Internet cluster</span>
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
        <SchemaBlock schemaType="DefinedTerm" json={sdwanSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
