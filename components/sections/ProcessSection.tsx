"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ClipboardList, Ruler, CheckCircle, ArrowLeft, PhoneCall } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "تواصل معنا",
      description: "اختر الاتصال الهاتفي المباشر أو المحادثة السريعة عبر واتساب.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "اشرح الخدمة المطلوبة",
      description: "حدد نوع قطعة الأثاث أو أعمال النجارة والفك والتركيب المطلوبة في منزلك.",
    },
    {
      number: "03",
      icon: Ruler,
      title: "تحديد التفاصيل",
      description: "يمكن إرسال صور القطع أو المقاسات وموقع الحي لتحديد المتطلبات بدقة.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "تنفيذ الخدمة",
      description: "يتم تنفيذ أعمال النجارة بأدوات احترافية حسب طبيعة طلبك وضمان الاتزان.",
    },
  ];

  return (
    <section
      id="process-section"
      aria-label="خطوات طلب خدمة النجارة"
      className="py-16 md:py-24 bg-warm-white border-y border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
            <span>سهولة ووضوح</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
            كيف تطلب خدمة النجارة؟
          </h2>
          <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
            خطوات بسيطة وواضحة لتنسيق أعمال النجارة والأثاث في مكة المكرمة وجدة والطائف دون تعقيد.
          </p>
        </ScrollReveal>

        <ScrollStagger
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollStaggerItem key={index} className="h-full">
                <div className="relative bg-warm-bg rounded-3xl p-6 border border-border-subtle hover:border-wood/30 transition-all duration-300 group flex flex-col justify-between h-full hover:translate-y-[-4px] hover:shadow-lg">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sand-light text-wood flex items-center justify-center font-bold group-hover:bg-wood group-hover:text-warm-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-extrabold text-sand/60 group-hover:text-wood/40 transition-colors font-mono">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>

        {/* Action Button */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-charcoal hover:bg-wood text-warm-bg text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98"
          >
            <span>ابدأ بطلب الخدمة الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
