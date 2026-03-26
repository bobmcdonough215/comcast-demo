// Schema examples from Section 6 of the strategy brief
// Each page injects its schema into <head> via the useSchema hook

export const pillarSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Internet: The Complete Guide for Growing Companies',
  datePublished: '2026-01-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

export const speedHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Internet Speed Does Your Business Need?',
  datePublished: '2026-01-15',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

export const devicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Devices Can Connect to Business Internet?',
  datePublished: '2026-01-20',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

export const dedicatedVsSharedSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dedicated vs. Shared Business Internet: What\'s the Difference?',
  datePublished: '2026-01-25',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

export const gamingVenueSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Internet for Gaming Venues',
  provider: { '@type': 'Organization', name: 'Comcast Business' },
  description: 'Dedicated, low-latency business internet for esports cafes, gaming bars, and LAN tournament venues.',
  areaServed: { '@type': 'Country', name: 'United States' },
};

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Internet for Restaurants',
  provider: { '@type': 'Organization', name: 'Comcast Business' },
  description: 'Reliable business internet for POS systems, guest WiFi, delivery platforms, and kitchen displays in restaurants and hospitality.',
  areaServed: { '@type': 'Country', name: 'United States' },
};

export const wirelessBackupSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Comcast Business Wireless Connect',
  description: 'Automatic cellular failover for business internet — switches to 4G LTE backup within seconds when primary internet goes down.',
  brand: { '@type': 'Organization', name: 'Comcast Business' },
};

export const bestProvidersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Business Internet Providers 2026',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Comcast Business', url: 'https://business.comcast.com' },
    { '@type': 'ListItem', position: 2, name: 'AT&T Business', url: 'https://www.att.com/business/' },
    { '@type': 'ListItem', position: 3, name: 'Verizon Business', url: 'https://www.verizon.com/business/' },
    { '@type': 'ListItem', position: 4, name: 'Lumen (CenturyLink)', url: 'https://www.lumen.com' },
    { '@type': 'ListItem', position: 5, name: 'Cox Business', url: 'https://www.cox.com/business/' },
  ],
};

export const healthcareSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Internet for Healthcare Providers',
  provider: { '@type': 'Organization', name: 'Comcast Business' },
  description: 'HIPAA-compliant dedicated business internet for healthcare providers — telemedicine, EHR/EMR, medical imaging, and IoT medical devices.',
  areaServed: { '@type': 'Country', name: 'United States' },
};

export const professionalServicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Internet for Professional Services',
  provider: { '@type': 'Organization', name: 'Comcast Business' },
  description: 'Secure, symmetrical business internet for law firms, financial services, accounting, and consulting — optimized for VPN, cloud documents, and client video conferencing.',
  areaServed: { '@type': 'Country', name: 'United States' },
};

export const hotelsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Internet for Hotels and Hospitality',
  provider: { '@type': 'Organization', name: 'Comcast Business' },
  description: 'High-capacity business internet for hotels and short-term rentals — scalable guest WiFi, PMS connectivity, and VLAN-segmented operations networks.',
  areaServed: { '@type': 'Country', name: 'United States' },
};

export const comcastVsAttSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Comcast Business vs. AT&T Business Internet 2026',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Comcast Business', url: 'https://business.comcast.com' },
    { '@type': 'ListItem', position: 2, name: 'AT&T Business', url: 'https://www.att.com/business/' },
  ],
};

export const bandwidthVsSpeedSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Bandwidth vs. Speed',
  description: 'Bandwidth is the maximum amount of data your internet connection can transfer per second. Speed is how fast data actually moves at a given moment. Bandwidth is the ceiling; speed is what you experience.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Business Internet Glossary' },
};

export const bandwidthCalculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Business Internet Bandwidth Calculator',
  applicationCategory: 'BusinessApplication',
  description: 'Calculate how much internet speed your business needs based on employee count and usage type.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export const customerStoriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Comcast Business Customer Stories',
  datePublished: '2026-02-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

export const aiToolsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Future-Proof Your Business Internet for AI Tools',
  datePublished: '2026-02-15',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Comcast Business' },
  publisher: {
    '@type': 'Organization',
    name: 'Comcast Business',
    logo: { '@type': 'ImageObject', url: 'https://business.comcast.com/logo.png' },
  },
};

// FAQ schema builder helper
export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Breadcrumb schema builder helper
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
