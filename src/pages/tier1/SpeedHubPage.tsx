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
import { speedHubSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Business Internet', to: '/learn/business-internet' },
  { label: 'Speed & Bandwidth' },
];

const tableHeaders = ['Business Activity', 'Bandwidth Per User/Device', 'Notes'];
const tableRows = [
  ['Email and web browsing', '1\u20133 Mbps', 'Very low demand'],
  ['HD video conferencing', '3\u20138 Mbps per stream', 'Zoom, Teams, Google Meet'],
  ['Cloud storage sync', '5\u201315 Mbps upload', 'Upload speed matters here'],
  ['VoIP phone calls', '0.5\u20131 Mbps per line', 'Jitter-sensitive'],
  ['POS terminal', '1\u20135 Mbps', 'Requires reliability, not speed'],
  ['4K security camera', '5\u201320 Mbps per camera', 'Upload heavy'],
  ['Competitive gaming', '3\u20136 Mbps + <20ms latency', 'Latency matters more than speed'],
];

const faqItems = [
  { question: 'How much internet speed does a 20-person office need?', answer: 'A 20-person office doing standard tasks (email, web browsing, video calls, cloud apps) should target 300\u2013500 Mbps. If most employees run simultaneous video calls or upload large files regularly, move closer to 500 Mbps or higher. Use our bandwidth calculator for a recommendation based on your specific mix of activities.' },
  { question: 'Is 100 Mbps enough for a small business?', answer: '100 Mbps can support a micro business of 1\u20135 employees doing basic tasks like email and web browsing. However, if your team uses video conferencing, cloud storage, or VoIP phones, you will likely experience slowdowns during peak usage. Most small businesses should start at 150\u2013300 Mbps for reliable performance.' },
  { question: 'What is the difference between download and upload speed for business?', answer: 'Download speed determines how fast you receive data (loading web pages, streaming, downloading files). Upload speed determines how fast you send data (video calls, uploading to cloud storage, sending email attachments, security camera feeds). Business internet typically offers faster upload speeds than residential plans, which is critical for cloud-dependent workflows.' },
  { question: 'How do I know if my business internet is too slow?', answer: 'Common signs include: video calls freezing or dropping, cloud files taking minutes to sync, VoIP calls with choppy audio, POS terminals timing out during transactions, and employees complaining about slow page loads. Run a speed test during peak hours \u2014 if actual speeds are consistently below 50% of your plan speed, contact your provider.' },
  { question: 'Does my business need symmetrical internet speeds?', answer: 'Symmetrical speeds (equal download and upload) matter most for businesses that upload as much as they download \u2014 video production studios, businesses with many security cameras, healthcare offices uploading medical imaging, and companies heavily reliant on cloud-based collaboration tools. Standard business internet is asymmetrical, with faster download than upload. Dedicated Internet Access (DIA) provides symmetrical speeds.' },
  { question: 'How much bandwidth does video conferencing use per person?', answer: 'HD video conferencing (Zoom, Teams, Google Meet) uses 3\u20138 Mbps per participant stream. A 10-person office with 5 simultaneous video calls needs 15\u201340 Mbps just for conferencing. Screen sharing adds 1\u20132 Mbps per stream. Group calls with gallery view use more bandwidth than 1-on-1 calls. Always budget for peak concurrent usage, not average.' },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Speed & Bandwidth', url: '/learn/business-internet/speed-guide' },
]);

const relatedLinks = [
  { label: 'How Many Devices Can Connect?', to: '/learn/business-internet/how-many-devices', description: 'Device limits by plan speed and usage type' },
  { label: 'Video Conferencing Bandwidth', to: '/learn/business-internet/video-conferencing-bandwidth', description: 'Zoom, Teams, and Google Meet requirements' },
  { label: 'Cloud Storage & Upload Speed', to: '/learn/business-internet/cloud-storage-speed', description: 'Why upload speed matters for cloud workflows' },
  { label: 'VoIP & Business Phone', to: '/learn/business-internet/voip-bandwidth', description: 'Bandwidth and jitter requirements for VoIP' },
  { label: 'POS System Connectivity', to: '/learn/business-internet/pos-internet-requirements', description: 'Reliability over speed for payment processing' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Get a personalized speed recommendation' },
];

export default function SpeedHubPage() {
  useSchema(speedHubSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="How Much Internet Speed Does Your Business Need?"
        metaTitle="Business Internet Speed Guide: How Much Does Your Office Need? | Comcast Business"
        metaDescription="Most small businesses need 150 Mbps\u20131 Gbps. The right amount depends on employee count, video calls, and cloud usage. Use our bandwidth calculator."
        lastUpdated="March 2026"
        tier={1}
        pageType="hub"
        targetQueries={['how much internet speed does a business need', 'business internet speed requirements', 'internet speed for office of 20 employees', 'how many Mbps for small business']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Most small businesses need between 150 Mbps and 1 Gbps of internet speed. The right amount depends on your employee count, the number of simultaneous video calls, cloud application usage, and whether you run bandwidth-heavy equipment like surveillance cameras or digital signage. Use our <a href="/tools/bandwidth-calculator" className="text-cyan hover:text-white transition-colors">bandwidth calculator</a> for a personalized recommendation.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Speed by business activity \u2192 bandwidth per user/device \u2192 notes"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How to Calculate the Right Speed for Your Office
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Start by listing every activity your team does daily: email, video calls, cloud file sync, VoIP, POS transactions, security cameras. Multiply each activity&rsquo;s per-user bandwidth by the number of people or devices doing it simultaneously. Add 20&ndash;30% headroom for traffic spikes and future growth. That total is your target bandwidth.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For example, a 20-person office where 10 people are on video calls (8 Mbps each), 15 use cloud storage (10 Mbps each), and 5 VoIP lines run constantly (1 Mbps each) needs roughly 80 + 150 + 5 = 235 Mbps at peak. With headroom, that points to a 300 Mbps plan. Our <a href="/tools/bandwidth-calculator" className="text-cyan hover:text-white transition-colors">bandwidth calculator</a> automates this math.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Why Upload Speed Matters More Than You Think
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Most speed tests and plan listings emphasize download speed, but many business activities are upload-heavy. Video conferencing sends your camera feed upstream. Cloud storage sync pushes files to servers. Security cameras stream footage to cloud recorders. VoIP sends your voice data in real time. If your upload speed is a fraction of your download speed, these activities suffer first.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Standard business internet plans offer asymmetrical speeds (faster download, slower upload). For businesses with heavy upload needs, <a href="/learn/business-internet/dedicated-internet" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> provides symmetrical speeds &mdash; the same bandwidth in both directions &mdash; with SLA-backed performance guarantees.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Speed vs. Latency: What Matters for Your Business
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Speed (bandwidth) is how much data your connection can move per second. Latency is the delay between sending and receiving data. For most office tasks, bandwidth is the bottleneck. But for real-time applications &mdash; VoIP calls, video conferencing, POS transactions, and online gaming &mdash; latency matters as much or more. A 1 Gbps connection with 100ms latency will feel sluggish on a VoIP call, while a 100 Mbps connection with 10ms latency will feel instant.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          If your business depends on real-time responsiveness, ask your provider about latency guarantees &mdash; not just speed tiers. Dedicated Internet plans typically offer lower, more consistent latency than shared plans.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="hub-page">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Hub page &mdash; Speed &amp; Bandwidth cluster</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Explore the Speed & Bandwidth Cluster" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={speedHubSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
