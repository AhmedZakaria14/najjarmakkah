"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Maximize2, Tv, Shield } from "lucide-react";
import { photography } from "@/lib/site-config";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function CustomCarpentrySolutions() {
  const solutions = [
    {
      title: "دواليب وخزائن ممتدة للسقف",
      desc: "استغلال الارتفاعات الرأسية لتوفير مساحة تخزين موسمي مع مظهر مودرن فاخر يمنع تجمع الغبار.",
      image: photography.customWardrobes,
      alt: "خزانة ملابس ممتدة للسقف بتصميم مودرن",
      link: "/services/custom-wardrobes",
    },
    {
      title: "وحدات تلفزيون معلقة",
      desc: "إخفاء فوضى الكابلات وتوفير مساحة أرضية مفتوحة تمنح المجالس والصالات اتساعاً وجمالية.",
      image: photography.tvUnits,
      alt: "وحدة تلفزيون جدارية معلقة مع إضاءة مخفية",
      link: "/services/tv-units",
    },
    {
      title: "تخزين ذكي تحت الدرج والممرات",
      desc: "تحويل المساحات الميتة أسفل الدرج إلى أدراج سحب عميقة وخزائن للأحذية والعبايات.",
      image: photography.storageUnits,
      alt: "وحدات تخزين واستغلال مساحات تحت الدرج",
      link: "/services/storage-units",
    },
    {
      title: "ديكورات وكسوات بديل الخشب",
      desc: "شرائح جدارية وقواطع بارتشن عصرية تضفي دفئاً للمداخل والصالات وتفصل المساحات بأناقة.",
      image: photography.woodDecoration,
      alt: "ديكورات بديل الخشب وكسوات جدارية عصرية",
      link: "/services/wood-decoration",
    },
  ];

  return (
    <section
      id="custom-carpentry-solutions"
      aria-label="حلول نجارة حسب مساحة المنزل"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
          <Maximize2 className="w-4 h-4 text-sand" />
          <span>تخصيص المساحات المعمارية</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
          حلول نجارة حسب مساحة منزلك
        </h2>
        <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
          نصمم ونعدل الأثاث ليتناغم تماماً مع أبعاد الغرف وزوايا الشقق والفلل في مكة وجدة والطائف، محولين المساحات الشاغرة إلى مساحات تخزين عملية وجمالية.
        </p>
      </ScrollReveal>

      <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((item, index) => (
          <ScrollStaggerItem key={index} className="h-full">
            <div
              className="group rounded-3xl overflow-hidden bg-warm-white border border-border-subtle hover:border-wood/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-3px]"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-beige-subtle">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-wood transition-colors">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={item.link}
                  className="flex items-center justify-between text-xs font-bold text-wood hover:text-wood-dark pt-2 border-t border-border-subtle/60"
                >
                  <span>تفاصيل الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>
    </section>
  );
}
