import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Hammer, Wrench, Bed, DoorClosed, Layers } from "lucide-react";
import { servicesData, siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "خدمات النجارة والأثاث في مكة وجدة والطائف | دليل الخدمات الشامل",
  description: "دليل شامل لكافة خدمات النجارة والأثاث: فك وتركيب غرف النوم، تصليح الأثاث، تفصيل الدواليب والخزائن، تركيب الأبواب، المطابخ، وأثاث ايكيا في مكة وجدة والطائف.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const categories = [
    { id: "all", name: "كافة الخدمات (10)" },
    { id: "furniture", name: "الأثاث والفك والتركيب" },
    { id: "bedrooms", name: "غرف النوم والدواليب" },
    { id: "home", name: "أعمال المنزل والأبواب والمطابخ" },
    { id: "custom", name: "التفصيل والتخصيص" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs items={[{ name: "خدمات النجارة المتكاملة" }]} />

      {/* Page Header */}
      <div className="max-w-3xl mb-12 text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold mb-3">
          <Hammer className="w-4 h-4 text-wood" />
          <span>خدمات متخصصة ومعايير هندسية</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight leading-tight mb-4">
          خدمات النجارة والأثاث في مكة وجدة والطائف
        </h1>
        <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
          نقدم حلولاً حرفية متكاملة تشمل الفك والتركيب، التفصيل المخصص، الصيانة المنزلية، وتعديل مختلف أنواع الأثاث الخشبي والمودرن.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className="group rounded-3xl overflow-hidden bg-warm-white border border-border-subtle hover:border-wood/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-beige-subtle">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-charcoal/85 text-warm-bg text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  {service.categoryNameAr}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-wood transition-colors">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h2>

                <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 border-t border-border-subtle/60 pt-4">
                  <div className="text-xs font-bold text-charcoal">ما تشمله الخدمة:</div>
                  <ul className="space-y-1 text-xs text-charcoal-muted">
                    {service.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-wood shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                href={`/services/${service.slug}`}
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-beige-subtle group-hover:bg-wood group-hover:text-warm-white text-xs font-bold text-charcoal transition-all"
              >
                <span>تفاصيل الخدمة وحجز موعد</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Global FAQ Section */}
      <FaqSection />

      {/* CTA */}
      <LargeCtaBanner />
    </div>
  );
}
