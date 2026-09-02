"use client";

import React from "react";
import { Check, Shield, Layers, Home, MapPin, Wrench, Hammer, Award } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Layers,
      title: "التعامل مع مختلف أنواع الأثاث",
      desc: "دراية بخصائص الخشب الطبيعي، خشب الـ MDF، أثاث ايكيا، والموديلات التركية والإيطالية.",
    },
    {
      icon: Hammer,
      title: "فك وتركيب متقن مع الحماية",
      desc: "ترقيم القطع وحفظ البراغي واستخدام مفارش واقية لحماية الأرضيات والباركيه أثناء العمل.",
    },
    {
      icon: Wrench,
      title: "صيانة وإصلاح بأحدث الإكسسوارات",
      desc: "استخدام مفصلات هيدروليكية ومجاري أدراج متينة مقاومة للصدأ والتآكل اليومي.",
    },
    {
      icon: Home,
      title: "حلول للمساحات والشقق والفلل",
      desc: "تصميم وتنفيذ وحدات تخزين مدمجة تستثمر كل سنتيمتر متاح في المنزل.",
    },
    {
      icon: Shield,
      title: "أمان التثبيت والاتزان",
      desc: "وزن الأبواب بموازين دقيقة وتثبيت الخزائن المرتفعة بالجدران لحماية العائلة.",
    },
    {
      icon: MapPin,
      title: "تغطية مكة وجدة والطائف",
      desc: "تنسيق سلس للمواعيد ووصول مباشر لمختلف الأحياء السكنية في المنطقة الغربية.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      aria-label="مميزات الاستعانة بفني نجارة متخصص"
      className="py-16 md:py-24 bg-warm-white border-y border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
            <span>جودة وثقة ومسؤولية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
            لماذا تختار فني نجارة متخصص؟
          </h2>
          <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
            الاستعانة بفني نجارة خبير يوفر عليك الوقت والجهد ويحمي قطع أثاثك من التلف الناتج عن الفك الخاطئ أو التجميع غير المتزن.
          </p>
        </ScrollReveal>

        <ScrollStagger
          staggerDelay={0.07}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollStaggerItem key={index} className="h-full">
                <div className="bg-warm-bg rounded-3xl p-6 border border-border-subtle hover:border-wood/40 transition-all duration-300 flex items-start gap-4 h-full hover:translate-y-[-3px] hover:shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-sand-light text-wood flex items-center justify-center shrink-0 border border-sand/30 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-charcoal mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
}
