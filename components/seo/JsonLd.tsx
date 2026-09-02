import React from "react";
import { siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  type: "WebSite" | "LocalBusiness" | "Service" | "BreadcrumbList" | "Article" | "FAQPage";
  data?: Record<string, any>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, any> = {};

  if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
      description: siteConfig.defaultDescription,
      inLanguage: "ar",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.siteUrl}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  } else if (type === "LocalBusiness") {
    // Only output genuine configured info - no fake ratings or fake numbers
    schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
      description: siteConfig.defaultDescription,
      areaServed: [
        {
          "@type": "City",
          name: "مكة المكرمة",
          sameAs: "https://ar.wikipedia.org/wiki/مكة_المكرمة",
        },
        {
          "@type": "City",
          name: "جدة",
          sameAs: "https://ar.wikipedia.org/wiki/جدة",
        },
        {
          "@type": "City",
          name: "الطائف",
          sameAs: "https://ar.wikipedia.org/wiki/الطائف",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
      priceRange: "$$",
      ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
      ...(siteConfig.email ? { email: siteConfig.email } : {}),
    };
  } else if (data) {
    schema = {
      "@context": "https://schema.org",
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
