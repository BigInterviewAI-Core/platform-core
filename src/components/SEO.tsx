import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Big Interview AI | Premium Domain Assets",
        "url": "https://biginterview.ai",
        "logo": "https://biginterview.ai/Logo.svg",
        "description": "Exclusive portfolio of high-value digital assets including biginterview.ai, .co, .app, and .info.",
        "foundingDate": "2026"
      },
      {
        "@type": "WebPage",
        "name": "Premium Domain Acquisition Portal",
        "description": "Secure the future of your brand identity. Official acquisition portal for the Big Interview AI domain portfolio.",
        "keywords": "biginterview.ai, biginterview ai, domain for sale, premium domain assets, digital real estate, big interview, AI domain acquisition",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "offerCount": "4",
          "lowPrice": "49",
          "highPrice": "649",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Title Meta */}
      <title>Big Interview AI | Premium Domain Portfolio & Acquisition</title>
      <meta name="description" content="Secure the future of your brand. Official acquisition portal for Big Interview AI premium domains (.ai, .co, .app). Immediate transfer available via secure escrow." />
      
      {/* Search Engine Directives */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Social Media (Open Graph) */}
      <meta property="og:title" content="Big Interview AI | Premium Domain Portfolio" />
      <meta property="og:description" content="Immediate acquisition available for high-value digital assets. Secure escrow-protected transfers." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://biginterview.ai" />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}