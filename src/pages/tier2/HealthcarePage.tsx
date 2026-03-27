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
import { healthcareSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'By Industry', to: '/learn/business-internet/by-industry' },
  { label: 'Healthcare' },
];

const tableHeaders = ['Healthcare System', 'Bandwidth', 'Uptime Critical', 'Compliance', 'Notes'];
const tableRows = [
  ['EHR/EMR (Epic, Cerner)', '10\u201325 Mbps per user', 'Yes', 'HIPAA', 'Always-on, cloud-hosted'],
  ['Telemedicine video', '5\u201315 Mbps per session', 'Yes', 'HIPAA', 'Symmetrical speeds required'],
  ['Medical imaging (PACS)', '50\u2013200 Mbps', 'Yes', 'HIPAA', 'Large file transfers'],
  ['Patient portal', '5\u201310 Mbps', 'Moderate', 'HIPAA', 'Web-based, low bandwidth'],
  ['IoT medical devices', '1\u20135 Mbps per device', 'Yes', 'FDA/HIPAA', 'Vital sign monitors, pumps'],
  ['Guest WiFi', '25\u201350 Mbps', 'Low', 'N/A', 'Must be isolated from clinical network'],
];

const faqItems = [
  { question: 'What internet speed does a healthcare practice need?', answer: 'A multi-physician practice should target at least 500 Mbps of dedicated internet. EHR systems require 10\u201325 Mbps per concurrent user, telemedicine video needs 5\u201315 Mbps per session, and medical imaging transfers can consume 50\u2013200 Mbps. Add overhead for IoT medical devices, guest WiFi, and administrative systems.' },
  { question: 'Is HIPAA compliance related to internet service?', answer: 'Yes. While HIPAA compliance is broader than internet connectivity, your network architecture must support HIPAA requirements. This includes network segmentation to isolate patient data traffic, encryption of data in transit, access controls, and audit logging. Dedicated internet with VLAN support enables compliant network segmentation.' },
  { question: 'Why do healthcare providers need symmetrical internet speeds?', answer: 'Telemedicine video requires equal upload and download bandwidth for smooth two-way video. Medical imaging uploads (PACS) send large files to cloud storage. EHR systems sync data bidirectionally with cloud servers. Asymmetrical connections with slow uploads create bottlenecks in all three use cases.' },
  { question: 'How should a healthcare network be segmented?', answer: 'Best practice is at least three network segments: a clinical network for EHR, telemedicine, and medical devices with the highest priority and HIPAA-compliant encryption; an administrative network for billing, email, and office applications; and an isolated guest WiFi network with no access to clinical or administrative systems.' },
  { question: 'What uptime SLA should healthcare providers require?', answer: 'Healthcare providers should target a 99.99% uptime SLA, which allows less than 53 minutes of downtime per year. EHR systems and connected medical devices require near-continuous connectivity. A 99.9% SLA allows nearly 9 hours of annual downtime, which is unacceptable for patient care environments. Wireless backup provides automatic failover during outages.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'By Industry', url: '/learn/business-internet/by-industry' },
  { name: 'Healthcare', url: '/learn/business-internet/healthcare' },
]);

const relatedLinks = [
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Why DIA matters for healthcare uptime' },
  { label: 'SecurityEdge', to: '/learn/business-internet/security-edge', description: 'Network-level threat protection' },
  { label: 'Reliability & Uptime', to: '/learn/business-internet/reliability', description: '99.99% SLA and wireless backup' },
  { label: 'Industry Verticals Hub', to: '/learn/business-internet/by-industry', description: 'Internet solutions by industry' },
  { label: 'Customer Stories', to: '/resources/customer-stories', description: 'Real healthcare businesses on Comcast Business' },
];

export default function HealthcarePage() {
  useSchema(healthcareSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Business Internet for Healthcare Providers"
        metaTitle="Business Internet for Healthcare Providers | HIPAA-Compliant Network | Comcast Business"
        metaDescription="Healthcare providers need HIPAA-compliant network segmentation, symmetrical speeds for telemedicine, and near-zero downtime for EHR systems. See recommended plans."
        lastUpdated="March 2026"
        tier={2}
        pageType="vertical"
        targetQueries={['internet for healthcare', 'telemedicine bandwidth', 'HIPAA compliant internet']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Healthcare providers need dedicated internet with HIPAA-compliant network segmentation, symmetrical speeds for telemedicine video, and near-zero downtime for electronic health records (EHR/EMR). A multi-physician practice should target at least 500 Mbps of dedicated internet with 99.99% uptime SLA. Network segmentation isolates patient data traffic from guest WiFi and IoT medical devices.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Healthcare system &rarr; bandwidth &rarr; uptime &rarr; compliance"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Healthcare Networks Require Dedicated Internet
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          A shared internet connection in a healthcare setting creates both performance and compliance risks. When a provider is mid-telemedicine consult and the front desk starts uploading patient intake forms while the waiting room streams video on guest WiFi, shared bandwidth leads to video freezes and dropped connections. For a patient describing symptoms over video, that degradation is not just inconvenient &mdash; it compromises care quality.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Dedicated Internet Access (DIA) provides guaranteed, symmetrical bandwidth that is not shared with other businesses or tenants in your building. Combined with VLAN segmentation, DIA ensures that clinical traffic &mdash; EHR, telemedicine, and connected medical devices &mdash; always has priority over lower-priority traffic like guest WiFi and administrative browsing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Network Segmentation for HIPAA Compliance
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          HIPAA requires that electronic protected health information (ePHI) be safeguarded during transmission. Network segmentation is the foundational technical control that makes this possible. By isolating clinical systems onto a dedicated VLAN with encryption and access controls, you prevent unauthorized access from guest devices, personal phones, and non-clinical staff.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          A properly segmented healthcare network typically includes at least three zones: a clinical VLAN for EHR terminals, telemedicine endpoints, and medical IoT devices; an administrative VLAN for billing, scheduling, and office productivity; and a completely isolated guest WiFi VLAN with no route to clinical or administrative resources. Comcast Business WiFi Pro supports multiple SSIDs with independent VLAN tagging and bandwidth allocation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Telemedicine Bandwidth and Quality Requirements
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Telemedicine has moved from a convenience to a standard of care. Each video session consumes 5&ndash;15 Mbps symmetrically, depending on resolution and whether screen sharing or medical imaging is involved. A practice running 10 simultaneous telemedicine sessions needs 50&ndash;150 Mbps of guaranteed symmetrical bandwidth just for video &mdash; before accounting for EHR access, medical device data, and other concurrent usage.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Upload speed is the critical bottleneck. Standard cable broadband may advertise 1 Gbps download but only provide 35 Mbps upload. Ten telemedicine sessions competing for 35 Mbps upstream means choppy video, frozen screens, and frustrated patients. Symmetrical DIA eliminates this bottleneck entirely, providing equal upload and download bandwidth that scales predictably with concurrent sessions.
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
        <SchemaBlock schemaType="Service" json={healthcareSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
