import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowLeft,
  Wrench,
  MapPin,
  MessageCircle,
  Phone,
  Layers,
  HelpCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { servicesData, siteConfig, getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqSection } from "@/components/sections/FaqSection";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      images: [{ url: service.image, alt: service.alt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(
    `السلام عليكم، أرغب في الاستفسار عن خدمة (${service.title}) في المنطقة الغربية.`
  );
  const phoneUrl = getPhoneUrl();

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    areaServed: [
      { "@type": "City", name: "مكة المكرمة" },
      { "@type": "City", name: "جدة" },
      { "@type": "City", name: "الطائف" },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "خدمات النجارة", url: "/services" },
          { name: service.title },
        ]}
      />

      {/* Hero Section of Service */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-5 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold">
            <Wrench className="w-4 h-4 text-wood" />
            <span>{service.categoryNameAr}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            {service.h1}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {service.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-wood text-warm-bg px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
            >
              <span>اطلب الخدمة الآن</span>
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
                <span>واتساب فوري</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2 pt-2 text-xs text-charcoal-muted">
            <MapPin className="w-3.5 h-3.5 text-wood shrink-0" />
            <span>متوفر في: مكة المكرمة • جدة • الطائف</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-warm-white aspect-4/3">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* 2-Column Content Layout: Includes & Customer Needs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Box 1: What is included */}
        <div className="bg-warm-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-xs">
          <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-wood" />
            <span>ما تشمله خدمة {service.shortTitle}</span>
          </h2>
          <ul className="space-y-3 text-sm text-charcoal-muted leading-relaxed">
            {service.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-sand-light text-wood flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 2: Common Customer Needs */}
        <div className="bg-warm-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-xs">
          <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-wood" />
            <span>حالات وحلول شائعة نلبيها</span>
          </h2>
          <ul className="space-y-3 text-sm text-charcoal-muted leading-relaxed">
            {service.customerNeeds.map((need, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-sand-light text-wood flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  •
                </span>
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How Work is Performed (Process Steps) */}
      <div className="bg-warm-white rounded-3xl p-8 border border-border-subtle mb-16 shadow-xs">
        <div className="max-w-2xl mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
            كيف يتم تنفيذ أعمال {service.shortTitle}؟
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted">
            خطوات هندسية مدروسة تضمن تثبيتاً آمناً وتشطيباً معمارياً متقناً.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-warm-bg border border-border-subtle/70"
            >
              <div className="text-2xl font-extrabold text-wood mb-2 font-mono">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-charcoal mb-1.5">{step.title}</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When Needed Section */}
      <div className="bg-sand-light/40 border border-sand/40 rounded-3xl p-6 sm:p-8 mb-16">
        <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-wood" />
          <span>متى تحتاج إلى هذه الخدمة تحديداً؟</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {service.whenNeeded.map((item, idx) => (
            <div key={idx} className="bg-warm-white p-4 rounded-xl text-xs sm:text-sm text-charcoal font-medium border border-border-subtle/50">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* City Coverage Links */}
      <div className="bg-warm-white rounded-3xl p-6 sm:p-8 border border-border-subtle mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-1">
              تغطية الخدمة في مكة وجدة والطائف
            </h2>
            <p className="text-xs text-charcoal-muted">
              نصل إلى مختلف الأحياء السكنية والفلل والشقق
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/najjar-makkah"
            className="p-4 rounded-2xl bg-warm-bg hover:bg-sand-light/60 border border-border-subtle transition-all text-right group"
          >
            <div className="text-xs font-bold text-wood mb-1">المنطقة الأولى</div>
            <div className="font-extrabold text-charcoal text-base group-hover:text-wood mb-1">
              خدمات {service.shortTitle} بمكة
            </div>
            <p className="text-xs text-charcoal-muted">
              العوالي، الشوقية، بطحاء قريش، الشرائع، العزيزية وكافة الأحياء.
            </p>
          </Link>

          <Link
            href="/najjar-jeddah"
            className="p-4 rounded-2xl bg-warm-bg hover:bg-sand-light/60 border border-border-subtle transition-all text-right group"
          >
            <div className="text-xs font-bold text-wood mb-1">المنطقة الثانية</div>
            <div className="font-extrabold text-charcoal text-base group-hover:text-wood mb-1">
              خدمات {service.shortTitle} بجدة
            </div>
            <p className="text-xs text-charcoal-muted">
              الروضة، الحمدانية، أبحر الشمالية، الصفا، السلامة والمحمدية.
            </p>
          </Link>

          <Link
            href="/najjar-taif"
            className="p-4 rounded-2xl bg-warm-bg hover:bg-sand-light/60 border border-border-subtle transition-all text-right group"
          >
            <div className="text-xs font-bold text-wood mb-1">المنطقة الثالثة</div>
            <div className="font-extrabold text-charcoal text-base group-hover:text-wood mb-1">
              خدمات {service.shortTitle} بالطائف
            </div>
            <p className="text-xs text-charcoal-muted">
              شهار، الحوية، الفيصلية، القمرية، الوسام والردف.
            </p>
          </Link>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-6">
            خدمات نجارة مرتبطة قد تحتاجها
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="group p-5 rounded-2xl bg-warm-white border border-border-subtle hover:border-wood/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-wood transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-border-subtle/50 flex items-center justify-between text-xs font-bold text-wood">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Service Specific FAQs */}
      <FaqSection
        title={`أسئلة شائعة حول ${service.title}`}
        subtitle="إجابات واضحة ومباشرة عن تفاصيل تنفيذ الخدمة وطريقة التنسيق."
        faqs={service.faqs}
        id="service-faqs"
      />

      {/* Large CTA */}
      <LargeCtaBanner />
    </div>
  );
}
