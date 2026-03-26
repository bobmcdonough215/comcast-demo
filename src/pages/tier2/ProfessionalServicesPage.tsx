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
import { professionalServicesSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'By Industry', to: '/learn/business-internet/by-industry' },
  { label: 'Professional Services' },
];

const tableHeaders = ['Use Case', 'Bandwidth Need', 'Priority', 'Security Requirement', 'Notes'];
const tableRows = [
  ['VPN (full tunnel)', '8\u201315 Mbps per user', 'High', 'Encryption mandatory', 'DIA recommended for consistency'],
  ['Cloud documents (365, GDrive)', '5\u201310 Mbps per user', 'High', 'At-rest encryption', 'Upload speed matters'],
  ['Video conferencing (client calls)', '5\u201310 Mbps per call', 'High', 'End-to-end encryption', 'Quality = professionalism'],
  ['Billing/practice management', '3\u20135 Mbps', 'Critical', 'Access controls', 'Revenue system'],
  ['Client portal / file sharing', '10\u201325 Mbps upload', 'Moderate', 'SFTP or encrypted transfer', 'Large legal/financial files'],
];

const faqItems = [
  { question: 'What internet speed does a law firm need?', answer: 'A 25-person law firm should target at least 500 Mbps of dedicated internet with symmetrical speeds. Full-tunnel VPN consumes 8\u201315 Mbps per user, cloud document platforms need 5\u201310 Mbps per user, and client video calls require 5\u201310 Mbps each. Add overhead for large file uploads to client portals and concurrent usage during peak hours.' },
  { question: 'Why do professional services firms need symmetrical upload speeds?', answer: 'Professional services firms upload constantly: VPN tunnels send encrypted data upstream, cloud documents sync bidirectionally, and large legal or financial files are shared through client portals. Asymmetrical connections with slow uploads create bottlenecks that degrade VPN performance, slow document collaboration, and make client video calls choppy.' },
  { question: 'Is dedicated internet necessary for a small professional services firm?', answer: 'For firms handling sensitive client data over VPN and conducting client video calls, dedicated internet is strongly recommended. Shared broadband introduces latency spikes during peak hours that degrade VPN throughput and video quality. A dropped video call with a client reflects poorly on the firm. DIA provides consistent performance that matches the professional standards clients expect.' },
  { question: 'How does SecurityEdge protect professional services firms?', answer: 'SecurityEdge provides network-level threat protection at the router level, blocking malicious domains, botnet communications, and phishing attempts before they reach any device on the network. For law firms and financial services firms handling sensitive client data, this adds a layer of protection without requiring additional hardware or software on every endpoint.' },
  { question: 'Can a professional services firm use shared internet with QoS?', answer: 'QoS (Quality of Service) can prioritize certain traffic types on a shared connection, but it cannot create bandwidth that is not there. During peak congestion on shared broadband, even prioritized traffic experiences degradation. For mission-critical VPN and client-facing video calls, dedicated internet provides the only guaranteed performance. Shared internet with QoS is a reasonable option for firms with lower concurrent usage.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'By Industry', url: '/learn/business-internet/by-industry' },
  { name: 'Professional Services', url: '/learn/business-internet/professional-services' },
]);

const relatedLinks = [
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Why DIA matters for VPN and client calls' },
  { label: 'VoIP & Video Speed Requirements', to: '/learn/business-internet/voip-speed', description: 'Bandwidth for voice and video calls' },
  { label: 'SecurityEdge', to: '/learn/business-internet/security-edge', description: 'Network-level threat protection' },
  { label: 'Industry Verticals Hub', to: '/learn/business-internet/by-industry', description: 'Internet solutions by industry' },
  { label: 'Business Internet Pillar', to: '/learn/business-internet', description: 'The complete guide for growing companies' },
];

export default function ProfessionalServicesPage() {
  useSchema(professionalServicesSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet for Professional Services: Law Firms, Finance, and Consulting"
        metaTitle="Business Internet for Law Firms, Finance & Consulting | Comcast Business"
        metaDescription="Professional services firms need secure VPN, fast cloud access, and reliable video conferencing. See dedicated internet options for law, finance, and consulting."
        lastUpdated="March 2026"
        tier={2}
        pageType="vertical"
        targetQueries={['internet for law firms', 'internet for financial services', 'VPN throughput for professional services']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Professional services firms &mdash; law, finance, accounting, and consulting &mdash; depend on secure VPN connections, fast cloud document access, and uninterrupted video conferencing with clients. A 25-person firm should target 500 Mbps of dedicated internet with symmetrical speeds for VPN throughput and real-time collaboration. SecurityEdge provides network-level threat protection without additional hardware.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Use case &rarr; bandwidth &rarr; priority &rarr; security"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            VPN Performance: The Hidden Bottleneck for Professional Services
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Most professional services firms route all traffic through a full-tunnel VPN for security and compliance. This means every byte of data &mdash; email, document edits, video calls, web browsing &mdash; travels through the encrypted tunnel. VPN encryption adds 10&ndash;15% overhead to bandwidth consumption, and the tunnel is only as fast as the slowest link in the chain. If your office internet has 35 Mbps upload, 25 users sharing that pipe through VPN get less than 1.5 Mbps upstream each after encryption overhead.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Symmetrical DIA eliminates the upload bottleneck entirely. With 500 Mbps symmetrical, each of 25 VPN users gets 20 Mbps upstream &mdash; more than enough for concurrent document uploads, video calls, and real-time collaboration. The result is a VPN that feels transparent rather than throttling.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Client-Facing Video: Why Quality Equals Professionalism
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          When a partner at a law firm joins a client call and the video freezes, pixelates, or drops audio, it undermines confidence. Clients expect the same production quality from a professional services firm that they get from their own corporate video setup. A single dropped call during a deal negotiation or earnings review can damage a relationship that took years to build.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Each HD video call consumes 5&ndash;10 Mbps symmetrically. A firm running 10 simultaneous client calls during peak hours needs 50&ndash;100 Mbps of guaranteed symmetrical bandwidth just for video &mdash; on top of VPN, document access, and other concurrent traffic. Shared broadband cannot guarantee this during congestion windows, which is why professional services firms increasingly treat DIA as a cost of doing business rather than a premium upgrade.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Security Layers: Protecting Sensitive Client Data
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Professional services firms are high-value targets for cyberattacks. Law firms hold privileged client communications. Financial advisors manage investment data. Consulting firms access client systems and proprietary strategies. A breach does not just cost money &mdash; it costs trust, and trust is the product these firms sell.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Defense in depth starts at the network level. SecurityEdge blocks malicious domains and botnet traffic at the router before threats reach any device. VLAN segmentation isolates guest WiFi from the corporate network. Dedicated internet reduces the attack surface by eliminating shared infrastructure. These layers complement &mdash; but do not replace &mdash; endpoint security, email filtering, and employee training. Together, they create a security posture that matches the sensitivity of the data being protected.
        </p>
      </section>

      <section className="mb-8">
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
        </div>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore Related Pages" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Service" json={professionalServicesSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
