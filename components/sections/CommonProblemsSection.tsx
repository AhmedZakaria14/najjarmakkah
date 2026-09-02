"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Wrench, Bed, DoorClosed, Layers, Package, Tv } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function CommonProblemsSection() {
  const problems = [
    {
      title: "باب دولاب لا يغلق أو يتدلى",
      solution: "وزن المفصلات وتدعيم ثقوب البراغي التالفة",
      serviceSlug: "custom-wardrobes",
      icon: Layers,
    },
    {
      title: "مفصلات مكسورة أو صدئة",
      solution: "استبدال بمفصلات هيدروليكية ناعمة الإغلاق",
      serviceSlug: "furniture-repair",
      icon: Wrench,
    },
    {
      title: "أدراج عالقة لا تفتح بسلاسة",
      solution: "تغيير مجاري وسحابات الأدراج بسحابات رومان ثقيلة",
      serviceSlug: "furniture-repair",
      icon: Wrench,
    },
    {
      title: "سرير يهتز أو يصدر صرير",
      solution: "تدعيم الزوايا المعدنية وإعادة شد القواعد",
      serviceSlug: "bedroom-assembly",
      icon: Bed,
    },
    {
      title: "دولاب كبير يحتاج لفك ونقل",
      solution: "فك منظم مع ترقيم القطع وإعادة وزن الأبواب",
      serviceSlug: "furniture-assembly",
      icon: Package,
    },
    {
      title: "باب خشبي يحك في البلاط أو الحلق",
      solution: "وزن الحلق وقص الزائد من أسفل الباب بدقة",
      serviceSlug: "wooden-doors",
      icon: DoorClosed,
    },
    {
      title: "دواليب مطبخ تالفة من الرطوبة",
      solution: "صيانة القواعد وتركيب مفصلات ستانلس ستيل",
      serviceSlug: "kitchen-carpentry",
      icon: Wrench,
    },
    {
      title: "تركيب أثاث كراتين وايكيا معقد",
      solution: "تجميع دقيق وفق الكتالوج وتثبيت جداري آمن",
      serviceSlug: "ikea-assembly",
      icon: Package,
    },
    {
      title: "فوضى أسلاك الشاشة والجدران",
      solution: "تفصيل وحدة تلفزيون معلقة بمسارات مخفية",
      serviceSlug: "tv-units",
      icon: Tv,
    },
    {
      title: "مساحة غير مستغلة تحت الدرج",
      solution: "تفصيل خزانة وأدراج سحب مخصصة للزوايا",
      serviceSlug: "storage-units",
      icon: Layers,
    },
  ];

  return (
    <section
      id="common-problems-section"
      aria-label="مشكلات النجارة وحلولها"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
          <AlertCircle className="w-4 h-4 text-sand" />
          <span>تشخيص فني وحلول عملية</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
          مشكلات نجارة نساعدك في حلها
        </h2>
        <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
          نقدم حلولاً جذرية لمشكلات الأثاث الخشبي الشائعة في المنازل لتستعيد القطع وظيفتها الأصلية ومظهرها الأنيق.
        </p>
      </ScrollReveal>

      <ScrollStagger staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {problems.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollStaggerItem key={index} className="h-full">
              <Link
                href={`/services/${item.serviceSlug}`}
                className="group bg-warm-white p-5 rounded-2xl border border-border-subtle hover:border-wood/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-3px]"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sand-light/60 text-wood flex items-center justify-center mb-3 group-hover:bg-wood group-hover:text-warm-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal mb-1.5 group-hover:text-wood transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-border-subtle/50 flex items-center justify-between text-[11px] font-bold text-wood">
                  <span>حل المشكلة</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </div>
              </Link>
            </ScrollStaggerItem>
          );
        })}
      </ScrollStagger>
    </section>
  );
}
