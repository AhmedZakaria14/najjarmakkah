"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wrench, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/site-config";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function MainServicesGrid() {
  return (
    <section
      id="services-section"
      aria-label="خدمات النجارة المتكاملة"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4 text-wood" />
            <span>حلول خشبية وحرفية شاملة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">
            خدمات النجارة المتكاملة
          </h2>
        </div>
        <p className="text-sm md:text-base text-charcoal-muted max-w-md leading-relaxed">
          نقدم باقة واسعة من خدمات النجارة المنزلية والمكتبية المنفذة بمعايير معمارية راقية لحماية الأثاث وضمان متانته.
        </p>
      </ScrollReveal>

      {/* Editorial Grid: Asymmetric Layout with Stagger */}
      <ScrollStagger
        staggerDelay={0.07}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {servicesData.map((service, index) => {
          const isFeatured = index === 1 || index === 3; // Bedroom & Custom Wardrobes get subtle visual accent
          return (
            <ScrollStaggerItem key={service.id} className="h-full">
              <article
                className={`group rounded-3xl overflow-hidden bg-warm-white border transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-4px] ${
                  isFeatured
                    ? "border-wood/30 shadow-md ring-1 ring-wood/10 hover:shadow-xl"
                    : "border-border-subtle hover:border-sand hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-beige-subtle">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-xs text-warm-bg text-[11px] font-bold px-3 py-1 rounded-full">
                      {service.categoryNameAr}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2.5 group-hover:text-wood transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-1.5 mb-6 text-xs text-charcoal/80 border-t border-border-subtle/50 pt-3">
                      {service.includes.slice(0, 2).map((inc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-wood shrink-0" />
                          <span className="truncate">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-beige-subtle group-hover:bg-wood group-hover:text-warm-white text-xs font-bold text-charcoal transition-all shadow-2xs"
                  >
                    <span>تفاصيل الخدمة وحجز فني</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            </ScrollStaggerItem>
          );
        })}
      </ScrollStagger>

      {/* Bottom Hub CTA */}
      <ScrollReveal delay={0.2} className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-warm-white border border-border-subtle hover:border-wood text-sm font-bold text-charcoal hover:text-wood shadow-xs hover:shadow-md transition-all active:scale-98"
        >
          <span>استعراض الفهرس الكامل لخدمات النجارة في مكة وجدة والطائف</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
