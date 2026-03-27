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
  { label: 'Latency' },
];

const tableHeaders = ['Latency Range', 'Experience', 'Good For', 'Problematic For'];
const tableRows = [
  ['<10ms', 'Imperceptible', 'Everything', 'Nothing'],
  ['10\u201330ms', 'Excellent', 'Gaming, video, VoIP', 'Nothing'],
  ['30\u201360ms', 'Good', 'Most business apps', 'Competitive gaming'],
  ['60\u2013100ms', 'Noticeable', 'Email, web browsing', 'Video calls, VoIP'],
  ['100\u2013200ms', 'Delayed', 'Basic tasks only', 'Most real-time apps'],
  ['>200ms', 'Poor', 'Almost nothing', 'Everything'],
];

const faqItems = [
  { question: 'What is a good latency for business internet?', answer: 'For most business applications, latency under 30ms is excellent. VoIP and video conferencing work best under 50ms. Real-time applications like gaming or live trading need under 20ms. If your business relies on cloud-based tools, POS systems, or video calls, aim for a plan that consistently delivers under 30ms latency during business hours.' },
  { question: 'What causes high latency on a business network?', answer: 'Common causes of high latency include: distance to the server (data traveling cross-country adds 30\u201370ms), network congestion on shared connections during peak hours, outdated or overloaded router/modem hardware, too many devices on the network, and ISP routing inefficiencies. Switching to dedicated internet eliminates congestion-related latency spikes.' },
  { question: 'Is latency the same as ping?', answer: 'Ping is one way to measure latency. When you run a ping test, it sends a small data packet to a server and measures the round-trip time in milliseconds. Latency is the broader concept \u2014 the delay in data transmission. Ping is the tool that measures it. A ping result of 15ms means your latency to that server is 15 milliseconds.' },
  { question: 'How does latency affect VoIP and video calls?', answer: 'Latency above 100ms causes noticeable delays in VoIP conversations \u2014 you hear the other person speak, then there is a gap before they hear your response. Above 150ms, conversations become difficult with constant cross-talk. Video conferencing is similarly affected, with audio/video sync issues and delayed screen sharing. Dedicated internet with latency under 30ms provides the best VoIP experience.' },
  { question: 'Can I reduce latency without upgrading my internet plan?', answer: 'Yes, in some cases. Connect critical devices via Ethernet instead of WiFi (saves 2\u201310ms). Use QoS (Quality of Service) settings on your router to prioritize VoIP and video traffic. Reduce the number of devices on your network. Restart your router/modem. However, if your latency issues stem from a congested shared connection, the real fix is upgrading to dedicated internet.' },
];

const latencySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Network Latency',
  description: 'Latency is the time it takes for data to travel from your device to a server and back, measured in milliseconds. Low latency (under 20ms) feels instant; high latency (over 100ms) creates noticeable delays.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Business Internet Glossary' },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Glossary', url: '/learn/business-internet/glossary' },
  { name: 'Latency', url: '/learn/business-internet/glossary/latency' },
]);

const relatedLinks = [
  { label: 'What Is Jitter?', to: '/learn/business-internet/glossary/jitter', description: 'How packet delivery variation disrupts VoIP and video' },
  { label: 'Bandwidth vs. Speed', to: '/learn/business-internet/glossary/bandwidth-vs-speed', description: 'Understand the difference between capacity and real-time performance' },
  { label: 'Internet for Gaming Venues', to: '/learn/business-internet/gaming-venues', description: 'Low-latency dedicated connections for esports and LAN centers' },
  { label: 'VoIP & Internet Speed', to: '/learn/business-internet/voip-speed', description: 'How internet quality affects VoIP call quality' },
];

export default function LatencyPage() {
  useSchema(latencySchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is Latency? A Business Internet Guide"
        metaTitle="What Is Latency? A Business Internet Guide | Comcast Business"
        metaDescription="Latency is the time it takes for data to travel from your device to a server and back. Learn how latency affects VoIP, video calls, and real-time business applications."
        lastUpdated="March 2026"
        tier={2}
        pageType="glossary"
        targetQueries={['what is latency', 'latency explained', 'network latency']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Latency is the time it takes for data to travel from your device to a server and back &mdash; measured in milliseconds (ms). Low latency (under 20ms) feels instant. High latency (over 100ms) creates noticeable delays in video calls, gaming, and real-time applications. Latency depends on distance to the server, network congestion, and connection type. Dedicated internet provides lower, more consistent latency than shared connections.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Latency range &rarr; experience quality &rarr; suitable use cases &rarr; problematic use cases"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How Latency Differs from Speed and Bandwidth
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Speed and bandwidth measure how much data your connection can move per second. Latency measures how quickly that data begins arriving. You can have a 1 Gbps connection (massive bandwidth) with 150ms latency &mdash; meaning data moves fast once it starts, but there&rsquo;s a noticeable delay before each response. For web browsing and file downloads, bandwidth matters most. For VoIP calls, video conferencing, and real-time collaboration tools, latency is the critical metric.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Think of it as the difference between a fire hose and a garden hose. The fire hose delivers more water per second (bandwidth), but if it takes 5 seconds for water to reach the nozzle after you turn it on (latency), that delay matters when every second counts.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Dedicated Internet Delivers Lower Latency
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          On a shared business internet connection, your data competes with traffic from other businesses and users on the same local network. During peak hours, this congestion adds latency &mdash; sometimes 50&ndash;100ms or more on top of the baseline. Your 15ms connection at 6 AM becomes an 80ms connection at 2 PM. For businesses running VoIP phone systems or video-heavy workflows, this inconsistency degrades call quality and collaboration.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">Dedicated Internet Access (DIA)</a> provides a private, unshared connection. Because no other users compete for your bandwidth, latency stays consistently low regardless of time of day. For businesses where real-time communication is mission-critical &mdash; call centers, telehealth providers, financial services &mdash; this consistency is worth the investment.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="section-independence">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Testing and Monitoring Your Business Latency
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          To measure latency, run a ping test to a server relevant to your business. If you use cloud tools like Microsoft 365, ping their servers during peak hours (10 AM&ndash;2 PM). Compare the results to off-peak times. A consistent gap of 30ms or more suggests network congestion. Tools like PingPlotter or the built-in traceroute command can show where latency is being introduced along the path between your office and the server.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For ongoing monitoring, many business routers provide latency dashboards. If your average latency during business hours exceeds 50ms and you rely on VoIP or video conferencing, consider upgrading to a plan with lower contention ratios or switching to dedicated internet for guaranteed performance.
        </p>
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>Business Internet Glossary</span>
          </div>
        </HoverTrigger>
      </section>

      <HoverTrigger cardId="internal-links">
        <InternalLinkCard title="Related Resources" links={relatedLinks} />
      </HoverTrigger>

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="DefinedTerm" json={latencySchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
