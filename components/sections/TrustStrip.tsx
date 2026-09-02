"use client";

import React from "react";
import { Wrench, Hammer, Bed, MapPin } from "lucide-react";
import { ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Hammer,
      title: "أعمال نجارة منزلية",
      description: "صيانة، تفصيل، وتركيب متقن للفلل والشقق",
    },
    {
      icon: Bed,
      title: "فك وتركيب الأثاث",
      description: "غرف النوم، الدواليب، وإعادة الوزن بدقة",
    },
    {
      icon: Wrench,
      title: "تفصيل وصيانة",
      description: "علاج المفصلات، الأدراج، والأبواب الخشبية",
    },
    {
      icon: MapPin,
      title: "مكة • جدة • الطائف",
      description: "تغطية ميدانية مباشرة لمختلف الأحياء",
    },
  ];

  return (
    <section
      id="trust-strip-section"
      aria-label="مميزات الخدمة ونطاق العمل"
      className="bg-warm-white border-b border-border-subtle py-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollStagger
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollStaggerItem key={index}>
                <div className="flex items-center gap-3.5 p-3 sm:p-0 rounded-2xl bg-beige-subtle/50 sm:bg-transparent border border-border-subtle/40 sm:border-0 group transition-all duration-300 hover:translate-y-[-2px]">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sand-light/60 text-wood flex items-center justify-center shrink-0 border border-sand/40 group-hover:bg-wood group-hover:text-warm-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm md:text-base font-bold text-charcoal mb-0.5">
                      {item.title}
                    </h2>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {item.description}
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
