import React from "react";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  id?: string;
}

export function Breadcrumbs({ items, id = "page-breadcrumbs" }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { name: "الرئيسية", url: "/" },
    ...items,
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteConfig.siteUrl}${item.url}` : undefined,
    })),
  };

  return (
    <nav id={id} aria-label="مسار التنقل" className="py-3 px-4 rounded-xl bg-warm-white/80 border border-border-subtle/70 mb-6 backdrop-blur-xs text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ol className="flex items-center flex-wrap gap-2 text-charcoal-muted">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index === 0 ? (
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-wood transition-colors text-charcoal font-medium"
                >
                  <Home className="w-4 h-4 text-wood" />
                  <span>الرئيسية</span>
                </Link>
              ) : item.url && !isLast ? (
                <Link
                  href={item.url}
                  className="hover:text-wood transition-colors text-charcoal-muted hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="font-semibold text-charcoal">{item.name}</span>
              )}

              {!isLast && (
                <ChevronLeft className="w-4 h-4 text-sand" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
