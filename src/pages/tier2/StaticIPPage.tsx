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
  { label: 'Glossary' },
  { label: 'Static IP' },
];

const tableHeaders = ['Feature', 'Static IP', 'Dynamic IP'];
const tableRows = [
  ['Changes over time', 'No', 'Yes (periodically)'],
  ['Required for VPN', 'Yes', 'No (but less reliable)'],
  ['Required for server hosting', 'Yes', 'No'],
  ['Remote camera access', 'Reliable', 'Unreliable'],
  ['IP whitelisting', 'Works', 'Breaks when IP changes'],
  ['Included in business plans', 'Usually 1+', 'Residential only'],
];

const faqItems = [
  { question: 'How many static IPs do I need for my business?', answer: 'Most small businesses need 1\u20132 static IPs: one for VPN access and one for a security camera system or hosted server. If you run multiple servers, host your own email, or need separate IPs for different services (web server, mail server, VPN), you may need a block of 5 or more. Comcast Business dedicated internet plans include a block of static IPs by default.' },
  { question: 'What is the difference between a static IP and a dedicated IP?', answer: 'In most business internet contexts, "static IP" and "dedicated IP" mean the same thing \u2014 an IP address permanently assigned to your account that does not change. Some hosting providers use "dedicated IP" to mean an IP not shared with other websites. For business internet, the key distinction is static (permanent) vs. dynamic (changes periodically).' },
  { question: 'Do I need a static IP for remote work and VPN?', answer: 'A static IP makes VPN configuration significantly more reliable. With a dynamic IP, your VPN endpoint address changes periodically, breaking connections for remote workers until the configuration is updated. A static IP provides a permanent, consistent address that remote employees can always connect to without reconfiguration.' },
  { question: 'Can I get a static IP on a residential internet plan?', answer: 'Most residential ISPs do not offer static IPs. Even if available, residential plans typically lack the SLA, support, and performance guarantees that businesses need. Business internet plans from Comcast Business include at least one static IP, along with business-grade support and uptime commitments.' },
  { question: 'Does a static IP improve internet speed?', answer: 'No. A static IP does not directly affect internet speed. Speed is determined by your plan bandwidth and connection type. However, a static IP enables services that require consistent addressing \u2014 VPN, server hosting, remote access \u2014 which can indirectly improve workflow efficiency. If you need both speed and a static IP, dedicated internet plans provide both.' },
];

const staticIPSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Static IP Address',
  description: 'A static IP address is a permanent, unchanging internet address assigned to your business. Unlike dynamic IPs that change periodically, a static IP lets you host servers, run VPNs, and access security cameras remotely.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Business Internet Glossary' },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Glossary', url: '/learn/business-internet/glossary' },
  { name: 'Static IP', url: '/learn/business-internet/glossary/static-ip' },
]);

const relatedLinks = [
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Why dedicated plans include static IP blocks by default' },
  { label: 'SecurityEdge', to: '/learn/business-internet/security-edge', description: 'Network-level security that works with your static IP' },
  { label: 'Business Internet Guide', to: '/learn/business-internet', description: 'The complete pillar guide for business internet decisions' },
  { label: 'Bandwidth vs. Speed', to: '/learn/business-internet/glossary/bandwidth-vs-speed', description: 'Understand the difference between capacity and real-time performance' },
];

export default function StaticIPPage() {
  useSchema(staticIPSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is a Static IP Address? A Business Internet Guide"
        metaTitle="What Is a Static IP Address? A Business Internet Guide | Comcast Business"
        metaDescription="A static IP is a permanent internet address for your business. Learn why static IPs are essential for VPN, server hosting, security cameras, and IP whitelisting."
        lastUpdated="March 2026"
        tier={2}
        pageType="glossary"
        targetQueries={['what is a static IP', 'static IP for business', 'static vs dynamic IP']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          A static IP address is a permanent, unchanging internet address assigned to your business. Unlike dynamic IPs that change periodically, a static IP lets you host servers, run VPNs, access security cameras remotely, and whitelist your address for secure services. Most business internet plans include at least one static IP. Dedicated internet plans typically include a block of static IPs.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Static IP vs. dynamic IP &rarr; permanence &rarr; VPN &rarr; hosting &rarr; camera access &rarr; whitelisting &rarr; plan availability"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            When Your Business Needs a Static IP Address
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          If your business runs any service that other devices or people need to find at a consistent address, you need a static IP. The most common use cases include: hosting a VPN for remote employee access, running an on-premises server (web, email, or file server), accessing security cameras remotely from a phone or laptop, whitelisting your office IP for secure banking or compliance portals, and running point-of-sale systems that require a fixed network address.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          With a dynamic IP, your address changes periodically &mdash; sometimes every few hours, sometimes every few days. Each time it changes, any service pointing to that address breaks until it&rsquo;s updated. For businesses, this unreliability creates security gaps, remote access failures, and unnecessary IT overhead.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Static IPs and Business Security
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Static IPs play a critical role in business network security. IP whitelisting &mdash; restricting access to specific IP addresses &mdash; is a common security practice for banking portals, compliance systems, cloud admin panels, and partner APIs. With a dynamic IP, your address changes and you lose access until the whitelist is updated. With a static IP, your address is permanent and trusted.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Additionally, static IPs make it easier to configure firewalls, monitor network traffic, and investigate security incidents. When every device on your network routes through a known, permanent IP, your IT team can track traffic patterns and identify anomalies more effectively. Combined with <a href="/learn/business-internet/security-edge" className="text-cyan hover:text-white transition-colors">SecurityEdge</a>, a static IP provides a strong foundation for business network security.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="section-independence">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How Many Static IPs Does Your Business Need?
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Most small businesses with a single office need 1&ndash;2 static IPs: one for general business use (VPN, remote access) and one for a dedicated service like security cameras or a local server. Mid-size businesses with multiple services may need a block of 5&ndash;13 usable IPs. Enterprise operations with complex network architectures may require a full /24 block (253 usable IPs).
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Comcast Business plans include at least one static IP. <a href="/learn/business-internet/dedicated-internet" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> plans include a larger block by default, along with symmetrical speeds and a contractual SLA &mdash; making them the best choice for businesses with multiple static IP requirements.
        </p>
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>Business Internet Glossary</span>
        </div>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Resources" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="DefinedTerm" json={staticIPSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
