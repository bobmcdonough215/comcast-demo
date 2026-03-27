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
  { label: 'Speed & Bandwidth', to: '/learn/business-internet/speed-guide' },
  { label: 'Video Conferencing' },
];

const tableHeaders = ['Platform', 'HD Call (1:1)', 'HD Group Call', 'Screen Sharing', 'Recommended Upload'];
const tableRows = [
  ['Zoom', '3.8 Mbps', '3\u20138 Mbps', '+2\u20134 Mbps', '3 Mbps min'],
  ['Microsoft Teams', '2.5 Mbps', '4\u20138 Mbps', '+2\u20135 Mbps', '3.5 Mbps min'],
  ['Google Meet', '3.2 Mbps', '3.2\u20138 Mbps', '+2\u20133 Mbps', '3.2 Mbps min'],
  ['Webex', '2.5 Mbps', '3\u20138 Mbps', '+2\u20135 Mbps', '3 Mbps min'],
];

const faqItems = [
  { question: 'How much bandwidth does a Zoom meeting use?', answer: 'A single 1:1 HD Zoom call uses about 3.8 Mbps. A group HD call with gallery view uses 3\u20138 Mbps depending on participant count and resolution. Adding screen sharing increases per-person usage by 2\u20134 Mbps.' },
  { question: 'Can 10 employees use video conferencing on a 100 Mbps plan?', answer: 'Yes, but barely. Ten simultaneous HD video calls consume 30\u201380 Mbps, leaving little headroom for other office tasks like email, cloud sync, and web browsing. A 300 Mbps plan provides much more comfortable margins for a 10-person team.' },
  { question: 'Does Microsoft Teams use more bandwidth than Zoom?', answer: 'Teams and Zoom are comparable. Teams uses 2.5 Mbps for a 1:1 HD call vs. Zoom\u2019s 3.8 Mbps, but group calls are similar at 4\u20138 Mbps. Real-world usage depends on resolution settings, gallery view, and screen sharing.' },
  { question: 'Why do video calls drop even though my speed test looks fine?', answer: 'Speed tests measure peak throughput, not consistency. Video conferencing requires low jitter (under 30ms) and low latency (under 150ms) continuously. Network congestion from other users or devices causes micro-interruptions that speed tests miss but video calls expose immediately.' },
  { question: 'Should I use wired or WiFi connections for video conferencing?', answer: 'Wired Ethernet is always more reliable for video calls. WiFi introduces variable latency and potential interference from other devices. For conference rooms and frequent presenters, a direct Ethernet connection eliminates most call-quality issues.' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Bandwidth Does Video Conferencing Use?',
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
  { name: 'Speed & Bandwidth', url: '/learn/business-internet/speed-guide' },
  { name: 'Video Conferencing', url: '/learn/business-internet/video-conferencing-bandwidth' },
]);

const relatedLinks = [
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'How Many Devices', to: '/learn/business-internet/how-many-devices', description: 'Device count and bandwidth planning for your office' },
  { label: 'VoIP & Speed', to: '/learn/business-internet/voip-speed', description: 'How internet quality affects VoIP call quality' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed by usage type' },
];

export default function VideoConferencingPage() {
  useSchema(articleSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="How Much Bandwidth Does Video Conferencing Use?"
        metaTitle="How Much Bandwidth Does Video Conferencing Use? | Comcast Business"
        metaDescription="A single HD video call uses 3–8 Mbps. Compare Zoom, Teams, Meet, and Webex bandwidth requirements and plan your business internet accordingly."
        lastUpdated="March 2026"
        tier={2}
        pageType="spoke"
        targetQueries={['video conferencing bandwidth requirements', 'how much bandwidth for Zoom', 'Teams bandwidth requirements']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          A single HD video call uses 3&ndash;8 Mbps. A team of 10 on simultaneous Zoom or Teams calls needs 30&ndash;80 Mbps just for video. Add screen sharing, and per-person usage jumps to 8&ndash;15 Mbps. For offices running 20+ concurrent video streams, plan for at least 300 Mbps with low-jitter connectivity.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Video conferencing platform bandwidth requirements comparison"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Why Video Conferencing Is the Biggest Bandwidth Consumer
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Video conferencing is unique because it requires sustained, bidirectional bandwidth. Unlike downloading a file (which is a burst of data that finishes), a video call demands continuous upload and download simultaneously for the entire duration. A 30-minute team standup with 8 participants consumes more sustained bandwidth than downloading a 500 MB file.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This is why businesses that rely heavily on video conferencing often experience slowdowns that aren&rsquo;t visible in speed tests. Speed tests measure peak throughput in one direction. Video calls need consistent throughput in both directions, plus low jitter and latency, for 30&ndash;60 minutes straight.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Calculating Bandwidth for Your Team&rsquo;s Video Usage
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Start with your peak concurrent call count &mdash; the maximum number of employees on video calls at the same time. Multiply by 8 Mbps (HD group call with screen sharing) for a conservative estimate. A team of 15 with up to 10 concurrent calls needs roughly 80 Mbps dedicated to video alone.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Then add 50&ndash;100% headroom for other office traffic: email, cloud file sync, web browsing, and SaaS applications. That 80 Mbps video requirement becomes a 160 Mbps total need. Factor in growth and you&rsquo;re looking at a 300 Mbps plan minimum for a 15-person team that lives on video calls.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Network Optimization Tips for Better Video Calls
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Quality of Service (QoS) settings on your router can prioritize video traffic over background downloads and cloud sync. This ensures video calls get first access to available bandwidth even during peak usage. Most business-grade routers support QoS configuration, and Comcast Business gateways include traffic management features.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For conference rooms, always use wired Ethernet connections rather than WiFi. WiFi adds variable latency and is susceptible to interference from neighboring networks, microwaves, and Bluetooth devices. A single Ethernet cable to your conference room eliminates the most common source of &ldquo;why is my call choppy?&rdquo; complaints.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Spoke page &mdash; Speed &amp; Bandwidth cluster</span>
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
        <SchemaBlock schemaType="Article" json={articleSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
