import { Link } from 'react-router-dom';
import AppLayout from '../../components/layout/AppLayout';
import Breadcrumb from '../../components/layout/Breadcrumb';
import PageHeader from '../../components/layout/PageHeader';
import HoverLegend from '../../components/hover/HoverLegend';
import HoverTrigger from '../../components/hover/HoverTrigger';
import DirectAnswerBlock from '../../components/content/DirectAnswerBlock';
import FAQSection from '../../components/content/FAQSection';
import SchemaBlock from '../../components/content/SchemaBlock';
import InternalLinkCard from '../../components/content/InternalLinkCard';
import { useSchema } from '../../hooks/useSchema';
import { customerStoriesSchema, buildFAQSchema, buildBreadcrumbSchema } from '../../data/schemaExamples';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Resources' },
  { label: 'Customer Stories' },
];

interface CaseStudy {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  highlight: string;
  linkTo: string;
  linkLabel: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'Restaurants & Hospitality',
    title: 'Regional Restaurant Chain',
    challenge:
      '30 locations with inconsistent POS connectivity, frequent payment processing failures during peak hours.',
    solution: 'SD-WAN + Wireless Connect across all locations.',
    result:
      'Reduced downtime from 4 hours/month to under 15 minutes. Payment processing reliability improved to 99.99%.',
    highlight: '99.99% payment processing reliability',
    linkTo: '/learn/business-internet/restaurants',
    linkLabel: 'See Internet Solutions for Restaurants',
  },
  {
    industry: 'Healthcare',
    title: 'Healthcare Group',
    challenge:
      'Telemedicine adoption required symmetrical bandwidth for video consultations. HIPAA compliance needed network segmentation.',
    solution: 'Dedicated Internet + SecurityEdge across 5 clinic locations.',
    result:
      'Enabled 200+ weekly telemedicine sessions. Achieved HIPAA-compliant network architecture without additional hardware.',
    highlight: '200+ weekly telemedicine sessions enabled',
    linkTo: '/learn/business-internet/healthcare',
    linkLabel: 'See Internet Solutions for Healthcare',
  },
  {
    industry: 'Gaming & Entertainment',
    title: 'Esports Venue',
    challenge:
      '40-station LAN center experiencing latency spikes during tournaments. Shared business internet couldn\u2019t deliver consistent sub-20ms ping.',
    solution: 'Dedicated Internet (1 Gbps symmetrical) + WiFi Pro for guest network.',
    result:
      'Tournament latency reduced to consistent 8ms. Guest WiFi separated from gaming traffic. Revenue increased 35% from tournament hosting.',
    highlight: '8ms consistent tournament latency',
    linkTo: '/learn/business-internet/gaming-venues',
    linkLabel: 'See Internet Solutions for Gaming Venues',
  },
  {
    industry: 'Professional Services',
    title: 'Law Firm',
    challenge:
      '25-attorney firm needed high VPN throughput for remote workers, secure client data handling, and zero downtime for billing systems.',
    solution: 'DIA (500 Mbps symmetrical) + SecurityEdge Preferred + Wireless Connect.',
    result:
      'VPN performance improved 4x. Zero unplanned outages in 12 months. SecurityEdge blocked 12,000+ threats in the first quarter.',
    highlight: 'Zero unplanned outages in 12 months',
    linkTo: '/learn/business-internet/professional-services',
    linkLabel: 'See Internet Solutions for Professional Services',
  },
];

const faqItems = [
  {
    question: 'Does Comcast Business serve multi-location businesses?',
    answer:
      'Yes. Comcast Business provides SD-WAN, Dedicated Internet, and centralized network management for multi-location businesses. Solutions scale from 2 locations to hundreds, with consistent performance, unified security policies, and a single point of contact for support across all sites.',
  },
  {
    question: 'What industries does Comcast Business support?',
    answer:
      'Comcast Business serves every industry including restaurants and hospitality, healthcare, professional services, retail, gaming and entertainment, education, and manufacturing. Each vertical has specific connectivity requirements, and Comcast Business offers tailored solutions for POS reliability, HIPAA compliance, low-latency gaming, and more.',
  },
  {
    question: 'How does Comcast Business help with HIPAA compliance?',
    answer:
      'Comcast Business supports HIPAA compliance through network segmentation, SecurityEdge threat protection, and Dedicated Internet with SLA-backed uptime. Network segmentation isolates patient data traffic from guest WiFi and general office use. SecurityEdge blocks malicious domains at the network level before they reach endpoints.',
  },
  {
    question: 'Can Comcast Business support esports and gaming venues?',
    answer:
      'Yes. Comcast Business offers Dedicated Internet with symmetrical speeds up to 10 Gbps and sub-10ms latency for competitive gaming environments. WiFi Pro provides separate guest networks so spectator traffic never impacts gaming stations. These solutions support LAN centers, esports arenas, and gaming bars.',
  },
  {
    question: 'What is the typical setup time for Comcast Business enterprise solutions?',
    answer:
      'Standard business internet can be installed within 5\u20137 business days. Dedicated Internet Access and SD-WAN deployments for multi-location businesses may require 2\u20134 weeks depending on infrastructure availability and site survey requirements. Comcast Business assigns a dedicated project manager for enterprise installations.',
  },
  {
    question: 'Does Comcast Business offer SLA-backed uptime guarantees?',
    answer:
      'Yes. Dedicated Internet Access (DIA) plans include contractual SLAs guaranteeing 99.99% uptime. If the SLA is not met, customers receive service credits. Standard business internet plans include Wireless Connect cellular failover as an add-on for automatic backup connectivity during outages.',
  },
];

const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://business.comcast.com' },
  { name: 'Resources', url: '/resources' },
  { name: 'Customer Stories', url: '/resources/customer-stories' },
]);

const relatedLinks = [
  { label: 'Business Internet: The Complete Guide', to: '/learn/business-internet', description: 'Pillar page covering all business internet topics' },
  { label: 'Internet for Gaming Venues', to: '/learn/business-internet/gaming-venues', description: 'Low-latency solutions for esports and LAN centers' },
  { label: 'Internet for Restaurants', to: '/learn/business-internet/restaurants', description: 'POS reliability, guest WiFi, and delivery platforms' },
  { label: 'Dedicated vs. Shared Internet', to: '/learn/business-internet/dedicated-vs-shared', description: 'When to upgrade to dedicated bandwidth' },
  { label: 'Wireless Backup (Wireless Connect)', to: '/learn/business-internet/wireless-backup', description: 'Automatic cellular failover for zero downtime' },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-lg border border-white/5 bg-navy-light/30 overflow-hidden">
      {/* Industry label */}
      <div className="px-5 pt-4 pb-2">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan/80 bg-cyan/10 px-2.5 py-1 rounded">
          {study.industry}
        </span>
      </div>

      {/* Title */}
      <div className="px-5 pb-3">
        <h3 className="text-lg font-heading font-bold text-white">
          {study.title}
        </h3>
      </div>

      {/* Challenge / Solution / Result */}
      <div className="px-5 pb-4 space-y-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-red-400/80 mb-1">
            Challenge
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.challenge}
          </p>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400/80 mb-1">
            Solution
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.solution}
          </p>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-green-400/80 mb-1">
            Result
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.result}
          </p>
        </div>
      </div>

      {/* Highlighted outcome */}
      <div className="mx-5 mb-4 rounded-md bg-cyan/5 border border-cyan/20 px-4 py-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan/70 mb-1">
          Key Outcome
        </div>
        <div className="text-base font-heading font-bold text-cyan">
          {study.highlight}
        </div>
      </div>

      {/* Link */}
      <div className="px-5 pb-4">
        <Link
          to={study.linkTo}
          className="inline-flex items-center gap-2 text-sm text-cyan hover:text-white transition-colors"
        >
          <span>&rarr;</span>
          <span>{study.linkLabel}</span>
        </Link>
      </div>
    </div>
  );
}

export default function CustomerStoriesPage() {
  useSchema(customerStoriesSchema);
  useSchema(faqSchema);
  useSchema(breadcrumbSchema);

  return (
    <AppLayout>
      <HoverLegend />
      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        h1="Comcast Business Customer Stories"
        metaTitle="Comcast Business Customer Stories | Real Results | Comcast Business"
        metaDescription="See how businesses across industries — restaurants, healthcare, esports, and legal — improved performance with Comcast Business internet solutions."
        lastUpdated="March 2026"
        tier={1}
        pageType="trust"
        targetQueries={['Comcast Business customer stories', 'Comcast Business case studies', 'Comcast Business reviews']}
      />

      <HoverTrigger cardId="direct-answer-block">
        <DirectAnswerBlock>
          Comcast Business serves over 2.5 million business customers across every industry &mdash; from single-location restaurants to multi-site healthcare networks. These case studies show measurable outcomes: reduced downtime, faster operations, and reliable connectivity that supports real business growth.
        </DirectAnswerBlock>
      </HoverTrigger>

      {/* Case study cards */}
      <HoverTrigger cardId="case-study-trust">
        <section className="mb-8">
          <h2 className="text-xl font-heading font-bold text-white mb-4">
            Real Results Across Industries
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} />
            ))}
          </div>
        </section>
      </HoverTrigger>

      {/* E-E-A-T signals */}
      <section className="mb-8">
        <HoverTrigger cardId="eeat-signals">
          <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-3">
            <span>Written by the Comcast Business Network Solutions Team</span>
            <span>&middot;</span>
            <span>Last reviewed: March 2026</span>
            <span>&middot;</span>
            <span>2.5 million+ business customers served</span>
          </div>
        </HoverTrigger>
      </section>

      {/* Body section: Why case studies matter */}
      <section className="mb-8">
        <HoverTrigger cardId="heading-hierarchy">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Why Customer Stories Matter for Business Internet Decisions
          </h2>
        </HoverTrigger>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Business internet isn&rsquo;t a commodity &mdash; the right solution depends on your industry, employee count, application mix, and uptime requirements. Customer stories show how businesses with challenges similar to yours achieved measurable results. They move the conversation from speeds and feeds to real-world outcomes.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Every case study above links to a dedicated vertical page where you can explore solutions tailored to your industry. Whether you run a <a href="/learn/business-internet/restaurants" className="text-cyan hover:text-white transition-colors">restaurant chain</a>, a <a href="/learn/business-internet/healthcare" className="text-cyan hover:text-white transition-colors">healthcare practice</a>, or a <a href="/learn/business-internet/gaming-venues" className="text-cyan hover:text-white transition-colors">gaming venue</a>, Comcast Business has a solution built for your operational requirements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-heading font-bold text-white mb-3">
          Common Patterns Across Industries
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Despite different verticals, these customer stories share common threads. Businesses that switched to Comcast Business solutions consistently report three outcomes: dramatically reduced downtime (often 95%+ improvement), simplified network management across multiple locations, and measurable revenue impact tied directly to connectivity reliability.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The combination of <a href="/learn/business-internet/dedicated-vs-shared" className="text-cyan hover:text-white transition-colors">dedicated internet</a> for mission-critical operations and <a href="/learn/business-internet/wireless-backup" className="text-cyan hover:text-white transition-colors">Wireless Connect</a> for failover protection appears in nearly every enterprise deployment. This layered approach ensures that a single point of failure never takes down business operations.
        </p>
      </section>

      <InternalLinkCard title="Explore Related Pages" links={relatedLinks} />

      <HoverTrigger cardId="faq-schema">
        <FAQSection items={faqItems} />
      </HoverTrigger>

      <HoverTrigger cardId="schema-markup">
        <SchemaBlock schemaType="Article" json={customerStoriesSchema} />
      </HoverTrigger>
    </AppLayout>
  );
}
