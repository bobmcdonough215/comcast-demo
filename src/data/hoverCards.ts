import type { HoverCardData } from '../types';

export const hoverCards: Record<string, HoverCardData> = {
  // ─── AEO / GEO (Blue) ──────────────────────────────────────────
  'direct-answer-block': {
    id: 'direct-answer-block',
    category: 'aeo',
    title: 'AEO: Direct Answer Block',
    body: 'The first 40–60 words of this page directly answer the primary query. This is the exact block that Google AI Overviews extract for featured snippets and that AI assistants like ChatGPT and Perplexity read first when deciding whether to cite a page. No preamble. No "In this article..." Just the answer.',
  },
  'html-table': {
    id: 'html-table',
    category: 'aeo',
    title: 'AEO: HTML Table',
    body: 'This data is structured as an HTML table with explicit column headers, not as an image or screenshot. AI systems read HTML natively and extract table data to answer comparison queries. An image of this same table would be invisible to AI and to screen readers. HTML also renders faster, improving LCP scores.',
  },
  'faq-schema': {
    id: 'faq-schema',
    category: 'aeo',
    title: 'AEO: FAQ Schema',
    body: 'Each question in this section is formatted exactly how a user would speak it to a search engine or AI assistant. FAQ schema markup wraps each Q&A pair, making it extractable as a standalone answer unit. This section alone can capture dozens of long-tail queries that the main page body doesn\'t explicitly target.',
  },
  'stat-attribution': {
    id: 'stat-attribution',
    category: 'aeo',
    title: 'AEO: Sourced Statistics',
    body: 'Every factual claim includes a source attribution. A Princeton University study (Aggarwal et al., KDD 2024) found that adding statistics with source attribution boosts visibility in AI-generated responses by up to 40%. Unsourced stats are treated as unverified assertions and weighted lower.',
  },
  'content-freshness': {
    id: 'content-freshness',
    category: 'aeo',
    title: 'AEO: Content Freshness',
    body: 'The "Last updated" date is visible on the page AND embedded in the Article schema dateModified field. AI systems deprioritize stale content. For business internet — where speeds, prices, and product tiers change regularly — freshness signals are especially important for maintaining citation eligibility.',
  },
  'schema-markup': {
    id: 'schema-markup',
    category: 'aeo',
    title: 'AEO: Schema Markup',
    body: 'JSON-LD structured data is embedded in the page <head> and tells Google and AI systems what this page means — not just what it says. A 2025 controlled experiment found that only pages with well-implemented schema appeared in AI Overviews. Schema is mandatory infrastructure in 2026.',
  },
  'meta-description': {
    id: 'meta-description',
    category: 'aeo',
    title: 'AEO: Meta Description',
    body: 'The meta description follows a direct-answer formula: one sentence with the answer, one sentence with a differentiator, one CTA. AI Overviews pull meta descriptions into their context window when deciding whether to cite a page. Under 155 characters keeps it from being truncated in SERPs.',
  },
  'breadcrumb-schema': {
    id: 'breadcrumb-schema',
    category: 'aeo',
    title: 'SEO: BreadcrumbList Schema',
    body: 'Breadcrumbs do triple duty: UX wayfinding for the user, internal link equity for page authority, and BreadcrumbList schema that tells Google and AI assistants exactly where this page sits in the content hierarchy. This context improves relevance scoring for queries that match parent topics.',
  },
  'section-independence': {
    id: 'section-independence',
    category: 'aeo',
    title: 'AEO: Section Independence',
    body: 'Every H2 section on this page is independently comprehensible — it can be extracted and cited without needing context from other sections. AI systems often pull individual sections, not full pages. If a section depends on prior context, it loses citation eligibility.',
  },

  // ─── SEO (Green) ───────────────────────────────────────────────
  'url-structure': {
    id: 'url-structure',
    category: 'seo',
    title: 'SEO: URL Architecture',
    body: 'Clean, keyword-rich URL with logical hierarchy: /learn/business-internet/speed-guide. Each segment reinforces the topic cluster relationship to Google\'s crawler. No parameters, no session IDs, no dates that will age out. This URL is readable by humans and machines equally.',
  },
  'h1-format': {
    id: 'h1-format',
    category: 'seo',
    title: 'SEO: H1 as Question',
    body: 'The H1 is phrased as a question that matches the primary search query. When a heading matches a natural language query, the section it leads is far more likely to be extracted as a standalone answer by AI systems. "Speed Options" tells AI nothing. "How Much Speed Does Your Business Need?" matches thousands of monthly queries.',
  },
  'heading-hierarchy': {
    id: 'heading-hierarchy',
    category: 'seo',
    title: 'SEO: Heading Hierarchy',
    body: 'H2s and H3s read like the questions your audience is actually asking — not like section labels in a brochure. Google and AI systems use heading text as semantic signals for what a section answers. Each heading is a potential entry point for an AI-extracted answer.',
  },
  'meta-title': {
    id: 'meta-title',
    category: 'seo',
    title: 'SEO: Meta Title Formula',
    body: 'Meta titles follow the formula: [Primary Keyword] | [Differentiator] | Comcast Business. Question-format titles match question-format queries more reliably. As AI Overviews pull meta titles into their context window, a question-phrased title signals this page was built to answer that question.',
  },
  'internal-links': {
    id: 'internal-links',
    category: 'seo',
    title: 'SEO: Internal Linking',
    body: 'Internal links are the connective tissue of the cluster system. They distribute page authority, reinforce topical relationships, and signal to Google which pages matter most. Every link uses descriptive anchor text — "dedicated internet access for restaurants" not "learn more."',
  },
  'anchor-text': {
    id: 'anchor-text',
    category: 'seo',
    title: 'SEO: Descriptive Anchor Text',
    body: 'Anchor text that describes the destination page\'s topic ("full speed and bandwidth guide") outperforms generic text ("click here" or "learn more"). Google uses anchor text to understand what the linked page is about. Descriptive anchors are also better for screen readers and AI content extraction.',
  },
  'eeat-signals': {
    id: 'eeat-signals',
    category: 'seo',
    title: 'SEO: E-E-A-T Signals',
    body: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google\'s content quality framework. Author attribution, sourced stats, "last reviewed" dates, and third-party recognition signals tell AI systems this domain is trustworthy enough to cite. Low-authority domains lose citations to weaker answers on high-authority domains.',
  },
  'cluster-nav': {
    id: 'cluster-nav',
    category: 'seo',
    title: 'SEO: Cluster Navigation',
    body: 'The sidebar and in-page links mirror the cluster hierarchy — pillar links to hubs, hubs link to spokes, spokes link back up. This internal link graph is how Google builds its topical authority model. A site with 47 interconnected pages is more authoritative than a single great page on the same topic.',
  },

  // ─── Content Strategy (Orange) ─────────────────────────────────
  'pillar-page': {
    id: 'pillar-page',
    category: 'strategy',
    title: 'Strategy: Pillar Page',
    body: 'The pillar page owns the broadest topic in the cluster — "business internet." It links to every hub, making it the authority node that Google and AI systems treat as the definitive starting point. All internal link equity flows through here. It targets the highest-volume, most competitive queries in the category.',
  },
  'hub-page': {
    id: 'hub-page',
    category: 'strategy',
    title: 'Strategy: Hub Page',
    body: 'Hub pages sit between the pillar and spokes, owning mid-level topics like "Speed & Bandwidth." They aggregate spoke content upward, distribute pillar authority downward, and cross-link to adjacent hubs. This middle layer is where topical depth becomes visible to AI systems.',
  },
  'spoke-page': {
    id: 'spoke-page',
    category: 'strategy',
    title: 'Strategy: Spoke Page',
    body: 'Spoke pages target narrow, specific queries with high AEO value — the exact questions people ask AI assistants. They link back to their parent hub, creating the upward authority flow that strengthens the entire cluster. Each spoke captures queries the hub and pillar are too broad to rank for.',
  },
  'white-space-vertical': {
    id: 'white-space-vertical',
    category: 'strategy',
    title: 'Strategy: White Space Vertical',
    body: 'This page targets esports cafes and gaming venues, a business type with specific internet requirements (symmetrical speeds, sub-20ms latency, per-station bandwidth) that almost no ISP content addresses. Low competition, high commercial intent, and a natural DIA upsell path.',
  },
  'fan-out-coverage': {
    id: 'fan-out-coverage',
    category: 'strategy',
    title: 'Strategy: Fan-Out Query Coverage',
    body: 'When someone asks ChatGPT "what internet does a restaurant need?" the model fans out across 6–8 related sub-questions: POS bandwidth, guest WiFi, delivery tablets, kitchen displays, surveillance, online ordering. This page answers all of them. Partial coverage means partial citation.',
  },
  'competitor-comparison': {
    id: 'competitor-comparison',
    category: 'strategy',
    title: 'Strategy: Competitor Comparison',
    body: 'Including competitors by name isn\'t weakness — it\'s a query capture strategy. "Comcast Business vs. AT&T" is searched thousands of times monthly by buyers in active evaluation mode. Pages that honestly compare alternatives rank higher and get cited more by AI because they\'re treated as authoritative rather than promotional.',
  },
  'glossary-strategy': {
    id: 'glossary-strategy',
    category: 'strategy',
    title: 'Strategy: Glossary Pages',
    body: 'Glossary pages do three things: capture long-tail definition queries, provide clean internal link targets (other pages mention "bandwidth" and link here instead of re-explaining), and signal to AI systems that this domain comprehensively covers the topic — not just commercial angles.',
  },
  'tier-system': {
    id: 'tier-system',
    category: 'strategy',
    title: 'Strategy: Tier System',
    body: 'Tier 1 (12 pages) demonstrates every distinct page type and SEO/AEO mechanic. Tier 2 (20 pages) fills the cluster with necessary depth. Tier 3 (15 pages) are architectural stubs that show planned scale. The tier system communicates that this is a complete content strategy, not just a collection of pages.',
  },
  'stub-page-strategy': {
    id: 'stub-page-strategy',
    category: 'strategy',
    title: 'Strategy: Architecture Stub',
    body: 'This page is planned but not yet built. Its existence in the cluster map demonstrates intentional content architecture. Internal links pointing to this URL still distribute link equity to the cluster, and the URL is reserved for future content. Stub pages show scale and strategy — they\'re not placeholders, they\'re infrastructure.',
  },
  'query-targeting': {
    id: 'query-targeting',
    category: 'strategy',
    title: 'Strategy: Query Targeting',
    body: 'Every page in this cluster targets 3–5 specific search queries. These aren\'t guesses — they\'re based on keyword research, search volume data, and competitive analysis. Explicit query targeting ensures every page has a clear purpose in the content system. A page without a target query is a page without a job.',
  },
  'topical-authority': {
    id: 'topical-authority',
    category: 'strategy',
    title: 'Strategy: Topical Authority',
    body: 'Google and AI systems reward topical authority — the signal that a domain comprehensively covers a subject. One great page about business internet is less authoritative than 47 interconnected pages covering every dimension. The cluster structure builds topical authority systematically, not one page at a time.',
  },
  'restaurant-vertical': {
    id: 'restaurant-vertical',
    category: 'strategy',
    title: 'Strategy: Restaurant Vertical',
    body: 'Restaurants have a distinct internet requirements profile: POS reliability over raw speed, network segmentation for guest WiFi, always-on delivery tablet connectivity, and upload-heavy security cameras. This fan-out structure captures every sub-query an AI model would explore when asked "what internet does a restaurant need?"',
  },
  'problem-first-framing': {
    id: 'problem-first-framing',
    category: 'strategy',
    title: 'Strategy: Problem-First Framing',
    body: 'This page leads with the pain scenario — "what happens when your internet goes down" — not the product feature. Problem-first content performs better in AI citations because it matches how people actually phrase questions. Nobody searches "cellular failover features." They search "what happens if my business internet goes down."',
  },
  'trend-responsive': {
    id: 'trend-responsive',
    category: 'strategy',
    title: 'Strategy: Trend-Responsive Content',
    body: 'This page captures 2026-specific query volume around AI tool adoption in SMBs. Trend pages earn disproportionate citations because AI models weight recent, specific content over evergreen generalities. As AI tool adoption grows, this page ages into a cornerstone reference rather than becoming stale.',
  },
  'lateral-links': {
    id: 'lateral-links',
    category: 'strategy',
    title: 'Strategy: Lateral Linking',
    body: 'This spoke links laterally to other spokes under different hubs — creating a web, not just a tree. When the gaming venue page links to the reliability spoke, it reinforces both topics\' authority and gives Google more pathways to understand how these subjects relate. Lateral links are what distinguish a topic cluster from a flat site map.',
  },
  'long-tail-faq': {
    id: 'long-tail-faq',
    category: 'strategy',
    title: 'Strategy: Long-Tail FAQ Capture',
    body: 'The 8 FAQ questions on this spoke page target extremely specific queries that the main body doesn\'t address — "Is there a hard limit on devices?" "What happens when too many devices connect?" Each FAQ answer is a standalone citation opportunity. Spokes with deep FAQ sections can capture 20+ unique queries per page.',
  },

  // ─── Conversion / UX (Purple) ──────────────────────────────────
  'bandwidth-calculator': {
    id: 'bandwidth-calculator',
    category: 'conversion',
    title: 'Conversion: Interactive Tool',
    body: 'The calculator increases dwell time 3–5x over static pages, generates high-quality intent signals for sales teams, and outputs a text-based recommendation (not just a number) that is itself AEO-optimized. The output sentence "We recommend at least 500 Mbps for your team" is a citation-ready answer.',
  },
  'calculator-output': {
    id: 'calculator-output',
    category: 'conversion',
    title: 'Conversion: Text-Based Output',
    body: 'The calculator outputs a full sentence recommendation, not just a number. "Based on your inputs — 15 employees, video conferencing, cloud sync — we recommend at least 500 Mbps." This text output is itself AEO-optimized. When AI summarizes how to choose a plan, tools with clean text output get cited as the definitive resource.',
  },
  'downtime-calculator': {
    id: 'downtime-calculator',
    category: 'conversion',
    title: 'Conversion: Loss Framing Tool',
    body: 'Instead of showing what you gain, this calculator shows what you lose per hour of downtime. Users input hourly revenue and employee count; the tool outputs estimated cost per outage hour. This makes the ROI case for Dedicated Internet and Wireless Connect without a sales rep in the room.',
  },
  'cta-placement': {
    id: 'cta-placement',
    category: 'conversion',
    title: 'Conversion: CTA Placement',
    body: 'CTAs appear after the reader has received genuine value — not before. On educational content, premature CTAs signal promotional intent and reduce trust. After a table, calculator result, or FAQ section, the reader has enough context to evaluate whether a product fits. That\'s when the CTA earns its place.',
  },
  'tool-to-sales': {
    id: 'tool-to-sales',
    category: 'conversion',
    title: 'Conversion: Tool → Sales Funnel',
    body: 'The calculator result naturally leads to a plan recommendation, which leads to a "Talk to Sales" CTA. This three-step funnel (educate → calculate → convert) matches the B2B buyer journey. The tool generates intent data: employee count, bandwidth needs, uptime priority — exactly the information a sales rep needs for a personalized follow-up.',
  },
  'comparison-intent': {
    id: 'comparison-intent',
    category: 'conversion',
    title: 'Conversion: Comparison Page Intent',
    body: 'Comparison pages target buyers in active evaluation mode — the highest commercial intent in B2B. A user searching "best business internet providers" has already decided to buy; they\'re choosing from whom. Comparison pages convert at 2–3x the rate of educational content because the visitor is further along the buying journey.',
  },
  'case-study-trust': {
    id: 'case-study-trust',
    category: 'conversion',
    title: 'Conversion: Case Study Trust',
    body: 'Case studies with measurable outcomes ("reduced downtime from 4 hours/month to under 15 minutes") are the highest-trust content type in B2B. AI systems cite real-world examples when asked "does X work for Y industry?" Each case study links to its vertical page, creating bidirectional authority.',
  },
  'dia-upsell': {
    id: 'dia-upsell',
    category: 'conversion',
    title: 'Conversion: Natural DIA Upsell',
    body: 'This page educates about a specific business need that naturally requires Dedicated Internet — without being a product page. The content builds the case through requirements (SLA, symmetrical speeds, latency guarantees) so the DIA recommendation feels like a logical conclusion, not a sales pitch.',
  },
  'network-segmentation': {
    id: 'network-segmentation',
    category: 'conversion',
    title: 'Conversion: Network Segmentation',
    body: 'Introducing network segmentation (guest WiFi separate from operations) creates a natural product upsell to WiFi Pro, which supports dual-network operation. The reader learns why segmentation matters for security and performance, making the product recommendation feel like expert advice rather than advertising.',
  },
};
