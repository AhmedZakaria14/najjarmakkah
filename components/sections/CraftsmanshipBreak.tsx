import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { photography } from "@/lib/site-config";

export function CraftsmanshipBreak() {
  return (
    <section
      id="craftsmanship-break"
      aria-label="الحرفية والدقة في الأثاث"
      className="relative py-20 md:py-32 bg-charcoal text-warm-bg overflow-hidden my-12"
    >
      {/* Background Photography with Deep Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={photography.craftsmanshipBreak}
          alt="تفاصيل الحرفية والنجارة الخشبية المعمارية الدقيقة"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/90 to-charcoal/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-light/80 border border-sand/30 text-sand text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-sand" />
            <span>معايير الحرفية والاتزان</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-white leading-tight tracking-tight">
            تفاصيل صغيرة تصنع فرقًا كبيرًا في الأثاث
          </h2>

          <p className="text-base sm:text-lg text-sand-light/90 leading-relaxed">
            الفرق بين التركيب العادي والحرفي المتقن يكمن في ملليمترات ضبط المفصلات، استقامة الأبواب بميزان الليزر، اختيار براغي التثبيت المتوافقة مع نوع الخشب، والتأكد من إغلاق صامت وسلس يدوم لسنوات دون اهتزاز.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal-light">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sand shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-warm-white text-sm">وزن استقامة الأبواب</h3>
                <p className="text-xs text-warm-bg/70 mt-0.5">منع احتكاك الأبواب بالأرضيات أو إطارات الدواليب نهائياً.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sand shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-warm-white text-sm">تثبيت جداري آمن</h3>
                <p className="text-xs text-warm-bg/70 mt-0.5">تثبيت الخزائن العالية والمكتبات بفيشر مخصص لحماية الأطفال.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
