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
  { label: 'VoIP & Speed' },
];

const tableHeaders = ['Metric', 'Good', 'Acceptable', 'Poor', 'Impact on Calls'];
const tableRows = [
  ['Bandwidth per line', '0.5\u20131 Mbps', '0.3\u20130.5 Mbps', '<0.3 Mbps', 'Drops, one-way audio'],
  ['Jitter', '<15ms', '15\u201330ms', '>30ms', 'Choppy audio, echoing'],
  ['Latency', '<100ms', '100\u2013150ms', '>150ms', 'Delayed responses, talk-over'],
  ['Packet loss', '<0.5%', '0.5\u20131%', '>1%', 'Gaps in audio, robotic sound'],
];

const faqItems = [
  { question: 'How much bandwidth does a single VoIP line need?', answer: 'A single VoIP line uses 0.5\u20131 Mbps of bandwidth depending on the codec. G.711 (uncompressed) uses about 87 Kbps per direction, while G.729 (compressed) uses about 32 Kbps. With overhead, plan for roughly 0.5\u20131 Mbps per concurrent call.' },
  { question: 'Why do my VoIP calls sound choppy even with fast internet?', answer: 'Choppy VoIP audio is almost always caused by jitter or packet loss, not slow speeds. Jitter above 30ms causes audio packets to arrive out of order, creating choppiness. Packet loss above 1% creates gaps in audio. Both are caused by network congestion, not insufficient bandwidth.' },
  { question: 'Does VoIP work on WiFi or does it need a wired connection?', answer: 'VoIP works on WiFi but wired Ethernet provides significantly better call quality. WiFi introduces variable latency (jitter) and is susceptible to interference. For desk phones, always use Ethernet. For softphones on laptops, WiFi is acceptable if the network is uncongested and uses 5 GHz band.' },
  { question: 'Can I run VoIP and video conferencing on the same internet connection?', answer: 'Yes, but prioritize traffic using QoS settings. VoIP uses minimal bandwidth (0.5\u20131 Mbps per line) but is extremely sensitive to jitter and latency. Video conferencing uses much more bandwidth (3\u20138 Mbps per stream) but is slightly more tolerant of imperfections. QoS ensures VoIP packets get priority.' },
  { question: 'What is the difference between jitter and latency for VoIP?', answer: 'Latency is the time it takes for a voice packet to travel from speaker to listener \u2014 high latency causes noticeable delay. Jitter is the variation in latency between packets \u2014 high jitter causes packets to arrive out of order, creating choppy or robotic-sounding audio. Both must be low for quality VoIP.' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Does Internet Speed Affect VoIP Call Quality?',
  datePublished: '2026-02-10',
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
  { name: 'VoIP & Speed', url: '/learn/business-internet/voip-speed' },
]);

const relatedLinks = [
  { label: 'Speed & Bandwidth Guide', to: '/learn/business-internet/speed-guide', description: 'How much speed does your business need?' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Why dedicated connections provide consistent VoIP quality' },
  { label: 'Bandwidth Calculator', to: '/tools/bandwidth-calculator', description: 'Calculate your recommended speed by usage type' },
  { label: 'Bandwidth vs. Speed Glossary', to: '/learn/business-internet/glossary/bandwidth-vs-speed', description: 'Understanding the difference between bandwidth and speed' },
];

export default function VoIPSpeedPage() {
  useSchema(articleSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Does Internet Speed Affect VoIP Call Quality?"
        metaTitle="Does Internet Speed Affect VoIP Call Quality? | Comcast Business"
        metaDescription="VoIP depends on jitter and latency more than raw speed. A single line uses 0.5–1 Mbps but requires jitter under 30ms. Learn how to optimize your network for VoIP."
        lastUpdated="March 2026"
        tier={2}
        pageType="spoke"
        targetQueries={['VoIP internet speed requirements', 'does internet speed affect VoIP', 'jitter and VoIP']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          VoIP call quality depends more on jitter and latency than raw speed. A single VoIP line uses only 0.5&ndash;1 Mbps, but it requires jitter under 30ms and latency under 150ms. An office with 20 VoIP lines needs just 10&ndash;20 Mbps of dedicated bandwidth &mdash; but that bandwidth must be consistent, not bursty. Network congestion is the #1 cause of dropped VoIP calls.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="VoIP network quality metrics: good, acceptable, and poor thresholds"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Why Jitter and Latency Matter More Than Speed
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Voice data is transmitted as a continuous stream of small packets &mdash; typically 20&ndash;30ms apart. Unlike downloading a file where a brief delay is invisible, voice communication requires packets to arrive in order, on time, every 20ms. If packet #47 arrives before packet #46, or if there&rsquo;s a 200ms gap between packets, the listener hears choppy, garbled, or delayed audio.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This is why a 25 Mbps connection with low jitter and latency delivers better VoIP quality than a 500 Mbps connection with congestion. Raw speed determines how much data you can transfer per second. Jitter and latency determine whether that data arrives smoothly and on time &mdash; which is what voice communication demands.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Diagnosing VoIP Quality Issues
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          If callers report choppy audio, one-way audio, or echoing, the issue is almost always network-related, not phone-related. Start by running a jitter and latency test during peak office hours (not a simple speed test). Tools like <a href="/tools/bandwidth-calculator" className="text-cyan hover:text-white transition-colors">ping</a> and VoIP-specific test tools measure the metrics that actually affect call quality.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Common causes include: network congestion from large file downloads during calls, WiFi interference on 2.4 GHz networks, overloaded routers without QoS configuration, and shared internet connections where other tenants or businesses consume bandwidth unpredictably. Each has a different fix, but all point to network quality rather than phone hardware.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Dedicated Internet for Mission-Critical VoIP
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          For businesses where phone calls are revenue-critical &mdash; call centers, medical offices, law firms, sales teams &mdash; shared internet introduces unacceptable variability. <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> provides a guaranteed bandwidth allocation that isn&rsquo;t shared with other businesses. This eliminates congestion-related jitter and provides consistent call quality regardless of what neighbors on your circuit are doing.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          DIA also provides symmetrical speeds, which matters for VoIP. Voice calls use equal bandwidth in both directions (talking and listening). Asymmetrical plans with slow upload speeds can constrain outbound voice quality even when download speeds are fast.
        </p>
      </section>

      <section className="mb-8">
        <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
          <span>Written by the Comcast Business Network Solutions Team</span>
          <span>&middot;</span>
          <span>Last reviewed: March 2026</span>
          <span>&middot;</span>
          <span>Spoke page &mdash; Speed &amp; Bandwidth cluster</span>
        </div>
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
