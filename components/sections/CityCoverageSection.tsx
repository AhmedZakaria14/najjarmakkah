"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowLeft, Building2, CheckCircle2 } from "lucide-react";
import { citiesData } from "@/lib/site-config";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function CityCoverageSection() {
  const cities = Object.values(citiesData);

  return (
    <section
      id="city-coverage-section"
      aria-label="تغطية المدن مكة وجدة والطائف"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-4 h-4 text-sand" />
          <span>تغطية مباشرة للمنطقة الغربية</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
          خدمات النجارة في مكة وجدة والطائف
        </h2>
        <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
          نغطي الشقق والفلل السكنية والمنازل العائلية في كبرى مدن المنطقة الغربية بفنيين محترفين جاهزين لتنفيذ مختلف أعمال الأثاث والفك والتركيب.
        </p>
      </ScrollReveal>

      {/* 3 Large City Cards with Stagger */}
      <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cities.map((city) => (
          <ScrollStaggerItem key={city.id} className="h-full">
            <div
              className="group rounded-3xl overflow-hidden bg-warm-white border border-border-subtle hover:border-wood/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-4px]"
            >
              <div>
                {/* City Image */}
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-4 right-4 text-warm-white">
                    <span className="text-xs text-sand font-bold block mb-0.5">المدينة</span>
                    <span className="text-xl font-extrabold">{city.name}</span>
                  </div>
                </div>

                {/* City Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-wood transition-colors">
                    <Link href={`/${city.slug}`}>
                      {city.title}
                    </Link>
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed mb-4">
                    {city.intro}
                  </p>

                  {/* Neighborhood Highlights */}
                  <div className="border-t border-border-subtle/60 pt-4 mb-4">
                    <div className="text-[11px] font-bold text-charcoal-muted mb-2">أبرز الأحياء المخدومة:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {city.neighborhoods.slice(0, 5).map((nh, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-beige-subtle text-charcoal font-medium"
                        >
                          {nh}
                        </span>
                      ))}
                      <span className="text-[11px] px-2 py-1 text-wood font-bold">+ أحياء أخرى</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link Button */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/${city.slug}`}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-beige-subtle group-hover:bg-wood group-hover:text-warm-white text-xs font-bold text-charcoal transition-all shadow-2xs"
                >
                  <span>خدمات النجارة في {city.shortName}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>

      {/* Internal Navigation Assistant Bar */}
      <ScrollReveal delay={0.2} className="mt-12 bg-sand-light/50 border border-sand/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-right">
          <Building2 className="w-5 h-5 text-wood shrink-0" />
          <div>
            <div className="text-xs md:text-sm font-bold text-charcoal">
              هل تبحث عن خدمات النجارة في مدينة محددة؟
            </div>
            <div className="text-xs text-charcoal-muted">
              تنقل مباشرة إلى صفحة مدينتك للاطلاع على الأحياء والخدمات المتوفرة
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/najjar-makkah"
            className="px-4 py-2 rounded-xl bg-warm-white hover:bg-wood hover:text-warm-white text-xs font-bold text-charcoal border border-border-subtle transition-all"
          >
            نجار بمكة
          </Link>
          <Link
            href="/najjar-jeddah"
            className="px-4 py-2 rounded-xl bg-warm-white hover:bg-wood hover:text-warm-white text-xs font-bold text-charcoal border border-border-subtle transition-all"
          >
            نجار بجدة
          </Link>
          <Link
            href="/najjar-taif"
            className="px-4 py-2 rounded-xl bg-warm-white hover:bg-wood hover:text-warm-white text-xs font-bold text-charcoal border border-border-subtle transition-all"
          >
            نجار بالطائف
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
