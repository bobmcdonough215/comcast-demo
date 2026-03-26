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
  { label: 'Jitter' },
];

const tableHeaders = ['Jitter Level', 'Milliseconds', 'VoIP Impact', 'Video Impact', 'Fix'];
const tableRows = [
  ['Excellent', '<5ms', 'Crystal clear', 'Smooth', 'No action needed'],
  ['Good', '5\u201315ms', 'Clear', 'Smooth', 'No action needed'],
  ['Acceptable', '15\u201330ms', 'Minor artifacts', 'Occasional stutter', 'Monitor, consider QoS'],
  ['Poor', '30\u201350ms', 'Choppy audio', 'Frequent stutter', 'Upgrade or add QoS'],
  ['Unacceptable', '>50ms', 'Dropped calls', 'Unwatchable', 'Dedicated internet required'],
];

const faqItems = [
  { question: 'What is jitter in simple terms?', answer: 'Jitter is the inconsistency in data delivery timing across your network. Imagine receiving a package delivery every day at noon. If one day it arrives at 11:50 AM and the next at 12:30 PM, that variation is "jitter." On a network, jitter means data packets arrive at irregular intervals, causing audio gaps in VoIP calls and stuttering in video streams.' },
  { question: 'What causes jitter on a business network?', answer: 'The most common causes of jitter are: network congestion (too many users sharing bandwidth), insufficient bandwidth for real-time applications, poor QoS (Quality of Service) configuration that doesn\u2019t prioritize voice and video traffic, outdated or overloaded network equipment, and wireless interference on WiFi connections. Shared internet connections are particularly prone to jitter during peak hours.' },
  { question: 'How do I test for jitter on my network?', answer: 'Use a jitter test tool like PingPlotter, the Ookla speed test (which includes jitter measurement), or run a continuous ping test and calculate the variation between response times. For the most accurate results, test during peak business hours (10 AM\u20132 PM) and compare to off-peak results. Jitter above 30ms during business hours indicates a problem worth addressing.' },
  { question: 'What is the difference between jitter and latency?', answer: 'Latency is the total time it takes for data to travel from point A to point B. Jitter is the variation in that travel time. Consistent 30ms latency is fine for most applications. But latency that fluctuates between 10ms and 80ms (70ms of jitter) causes VoIP audio to cut in and out, video to stutter, and real-time applications to behave unpredictably.' },
  { question: 'Can QoS settings fix jitter problems?', answer: 'QoS (Quality of Service) settings can significantly reduce jitter by prioritizing real-time traffic (VoIP, video) over less time-sensitive traffic (file downloads, backups). However, QoS only works if you have sufficient total bandwidth. If your connection is consistently maxed out, QoS can only rearrange the queue \u2014 it can\u2019t create more capacity. For persistent jitter issues, upgrading to dedicated internet is the most effective solution.' },
];

const jitterSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Network Jitter',
  description: 'Jitter is the variation in packet delivery time across a network, measured in milliseconds. Jitter above 30ms causes choppy VoIP calls, stuttering video, and unreliable real-time applications.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Business Internet Glossary' },
};

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Business Internet', url: '/learn/business-internet' },
  { name: 'Glossary', url: '/learn/business-internet/glossary' },
  { name: 'Jitter', url: '/learn/business-internet/glossary/jitter' },
]);

const relatedLinks = [
  { label: 'What Is Latency?', to: '/learn/business-internet/glossary/latency', description: 'How data travel time affects business applications' },
  { label: 'VoIP & Internet Speed', to: '/learn/business-internet/voip-speed', description: 'How internet quality affects VoIP call quality' },
  { label: 'Bandwidth vs. Speed', to: '/learn/business-internet/glossary/bandwidth-vs-speed', description: 'Understand the difference between capacity and real-time performance' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'Why dedicated connections eliminate jitter from congestion' },
];

export default function JitterPage() {
  useSchema(jitterSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="What Is Network Jitter? Why It Matters for VoIP and Video"
        metaTitle="What Is Network Jitter? Why It Matters for VoIP and Video | Comcast Business"
        metaDescription="Jitter is the variation in packet delivery time. Learn how jitter affects VoIP calls and video conferencing, and how to fix it with QoS and dedicated internet."
        lastUpdated="March 2026"
        tier={2}
        pageType="glossary"
        targetQueries={['what is jitter', 'network jitter explained', 'jitter and VoIP']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Jitter is the variation in packet delivery time across a network &mdash; measured in milliseconds. Consistent 20ms latency is fine; latency that bounces between 10ms and 80ms creates jitter. Jitter above 30ms causes choppy VoIP calls, stuttering video conferences, and unreliable real-time applications. Dedicated internet provides lower jitter than shared connections because bandwidth isn&rsquo;t contested.
        </DirectAnswerBlock>
      </HoverTrigger>

      <HoverTrigger cardId="html-table">
        <DataTable
          caption="Jitter level &rarr; milliseconds &rarr; VoIP impact &rarr; video impact &rarr; recommended fix"
          headers={tableHeaders}
          rows={tableRows}
        />
      </HoverTrigger>

      {/* Body content sections */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Jitter Is the Hidden Killer of VoIP Quality
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Most businesses troubleshoot slow internet by looking at speed test results. But speed tests measure throughput &mdash; not consistency. A connection that delivers 200 Mbps average speed can still have terrible VoIP quality if packet delivery timing is erratic. VoIP systems expect data packets to arrive at regular intervals. When packets arrive early, late, or out of order, the phone system has to compensate by using a jitter buffer &mdash; essentially holding packets and reordering them. Small amounts of jitter (under 15ms) are easily buffered. Above 30ms, the buffer can&rsquo;t keep up, and you hear choppy audio, gaps in conversation, or the call drops entirely.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          This is why a business with a 500 Mbps plan can still have terrible phone call quality. The problem isn&rsquo;t bandwidth &mdash; it&rsquo;s jitter. And jitter is almost always caused by network congestion on shared connections.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="spoke-page">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            QoS Settings: Your First Line of Defense Against Jitter
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Quality of Service (QoS) configuration on your router tells your network to prioritize certain types of traffic. By giving VoIP and video conferencing packets priority over file downloads and web browsing, you ensure that real-time traffic gets processed first &mdash; even when the network is busy. Most business-grade routers support QoS settings, and configuring them correctly can reduce effective jitter by 50% or more on a moderately congested network.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          However, QoS has limits. It works by reordering the queue, not by creating more capacity. If your connection is consistently saturated (running at 90%+ utilization during business hours), QoS can only do so much. At that point, you need either more bandwidth or a <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet connection</a> that eliminates congestion at the source.
        </p>
      </section>

      <section className="mb-8">
        <HoverTrigger cardId="section-independence">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            How Dedicated Internet Eliminates Jitter
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          The primary cause of jitter on business networks is contention &mdash; multiple users and businesses sharing the same upstream connection. During peak hours, everyone&rsquo;s traffic competes for the same bandwidth, and packet delivery becomes irregular. Dedicated Internet Access (DIA) solves this by providing a private, unshared connection between your business and the provider&rsquo;s network. With no contention, packet delivery timing stays consistent, and jitter stays below 5ms in most cases.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For businesses running 10+ VoIP lines, hosting video conferences with clients, or operating real-time collaboration platforms, dedicated internet is the most reliable way to eliminate jitter. Combined with QoS for internal traffic management, it provides the consistent packet delivery that real-time applications require.
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
        <SchemaBlock schemaType="DefinedTerm" json={jitterSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
