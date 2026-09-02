import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Phone,
  Building2,
} from "lucide-react";
import { citiesData, servicesData, siteConfig, getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqSection } from "@/components/sections/FaqSection";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";

export const metadata: Metadata = {
  title: "نجار بالطائف | خدمات نجارة وفك وتركيب وصيانة أثاث المنازل بالطائف والحوية",
  description: "خدمات نجار بالطائف لأعمال فك وتركيب غرف النوم، تصليح الأثاث الخشبي، تفصيل الدواليب، صيانة الأبواب، والمطابخ في كافة أحياء مدينة الطائف والحوية.",
  alternates: {
    canonical: "/najjar-taif",
  },
  openGraph: {
    title: "نجار بالطائف | نجارة وصيانة أثاث المنازل",
    description: "فني نجار خبير في الطائف لفك وتركيب غرف النوم، الدواليب، الأبواب، والمطابخ.",
    url: `${siteConfig.siteUrl}/najjar-taif`,
    images: [{ url: citiesData.taif.image, alt: "نجار بالطائف" }],
  },
};

export default function NajjarTaifPage() {
  const city = citiesData.taif;
  const whatsappUrl = getWhatsAppUrl("السلام عليكم، أحتاج إلى فني نجار في مدينة الطائف.");
  const phoneUrl = getPhoneUrl();

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات نجار بالطائف",
    description: city.metaDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "الطائف",
      sameAs: "https://ar.wikipedia.org/wiki/الطائف",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      <Breadcrumbs items={[{ name: "نجار بالطائف" }]} />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-5 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold">
            <MapPin className="w-4 h-4 text-sand" />
            <span>مدينة الورد • الطائف والحوية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            نجار بالطائف لخدمات الأثاث والنجارة المنزلية
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {city.intro}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-wood text-warm-bg px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
            >
              <span>طلب نجار في الطائف</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب مباشر الطائف</span>
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-warm-white aspect-4/3">
            <Image
              src={city.image}
              alt={city.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Localized Overview */}
      <div className="bg-warm-white rounded-3xl p-6 sm:p-10 border border-border-subtle mb-16 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
          أعمال النجارة وصيانة الأثاث في مدينة الطائف
        </h2>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
          {city.uniqueContent.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-subtle/60 pt-6">
          {city.serviceHighlights.map((hl, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
              <CheckCircle2 className="w-4 h-4 text-wood shrink-0" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Taif Neighborhoods */}
      <div className="bg-sand-light/40 border border-sand/40 rounded-3xl p-6 sm:p-10 mb-16">
        <div className="max-w-2xl mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-wood" />
            <span>أحياء الطائف والحوية المخدومة</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted">
            نغطي مختلف أحياء الطائف وضواحيها السكنية والاستراحات:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {city.neighborhoods.map((nh, idx) => (
            <div
              key={idx}
              className="bg-warm-white p-3 rounded-xl text-center text-xs font-bold text-charcoal border border-border-subtle/60 shadow-2xs hover:border-wood transition-colors"
            >
              حي {nh}
            </div>
          ))}
        </div>
      </div>

      {/* Inter-City Navigation */}
      <div className="bg-warm-white rounded-2xl p-6 border border-border-subtle mb-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-wood shrink-0" />
          <div className="text-xs sm:text-sm font-bold text-charcoal">
            هل تبحث عن الخدمة في مدينة أخرى؟
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/najjar-makkah"
            className="px-4 py-2 rounded-xl bg-beige-subtle hover:bg-wood hover:text-warm-white text-xs font-bold text-charcoal transition-all border border-border-subtle"
          >
            ← نجار بمكة
          </Link>
          <Link
            href="/najjar-jeddah"
            className="px-4 py-2 rounded-xl bg-beige-subtle hover:bg-wood hover:text-warm-white text-xs font-bold text-charcoal transition-all border border-border-subtle"
          >
            ← نجار بجدة
          </Link>
        </div>
      </div>

      {/* FAQs */}
      <FaqSection
        title="أسئلة شائعة حول خدمات نجار بالطائف"
        subtitle="إجابات عن تغطية أحياء الطائف والحوية، صيانة الأبواب والأسرة الخشبية."
        faqs={city.faqs}
        id="taif-faqs"
      />

      {/* Large CTA */}
      <LargeCtaBanner />
    </div>
  );
}
