"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowLeft, Bed, Layers, Wrench } from "lucide-react";
import { photography } from "@/lib/site-config";
import { ScrollReveal } from "@/components/ui/MotionComponents";

export function FeaturedServiceAlternating() {
  return (
    <section
      id="featured-services-alternating"
      aria-label="الخدمات الرئيسية الأكثر طلباً"
      className="py-16 md:py-24 bg-warm-white border-y border-border-subtle overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        {/* Item 1: Bedroom Assembly (Image Right, Text Left in RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="right" className="lg:col-span-6 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold">
              <Bed className="w-4 h-4" />
              <span>خدمة شائعة ومطلوبة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">
              فك وتركيب غرف النوم بدقة متناهية
            </h2>
            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              تحتاج غرف النوم إلى خبرة في التعامل مع الدواليب الكبيرة السحابة والمفصلية، أسرة الهيدبورد، التسريحات ووحدات الأدراج لضمان ثباتها دون صرير أو فراغات غير متزنة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>فك وتركيب السرير بمختلف أنواعه</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>تجميع الدواليب وضبط المسارات</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>تثبيت التسريحات والمرايا بأمان</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>إعادة ضبط المفصلات والسحابات</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/bedroom-assembly"
                className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-wood text-warm-bg px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-md active:scale-98"
              >
                <span>اطلب خدمة فك وتركيب غرفة نوم</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-warm-bg aspect-4/3 group">
              <Image
                src={photography.bedroomAssembly}
                alt="فك وتجميع سرير ودولاب غرفة نوم في شقة سكنية"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Item 2: Custom Wardrobes (Text Right, Image Left in RTL -> Reversed Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left" className="lg:col-span-6 lg:order-2 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold">
              <Layers className="w-4 h-4" />
              <span>استغلال ذكي للمساحات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">
              تفصيل الدواليب والخزائن الجدارية
            </h2>
            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              تصميم دواليب ملابس وخزائن حائط مخصصة بالكامل وفق أبعاد غرفتك. نساعدك في توزيع المساحات الداخلية بين التعليق الطويل، الأرفف، الأدراج السفلية، والمساحات العلوية للمفارش.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>استغلال الارتفاع الكامل حتى السقف</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>تقسيمات داخلية ذكية ومريحة</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>أبواب سحابة أو مفصلية هيدروليكية</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>خيارات إضاءة ليد مخفية للأرفف</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/custom-wardrobes"
                className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-wood text-warm-bg px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-md active:scale-98"
              >
                <span>طلب تفصيل أو تعديل دولاب</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-6 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-warm-bg aspect-4/3 group">
              <Image
                src={photography.customWardrobes}
                alt="دولاب ملابس خشبي بتصميم وتقسيم داخلي متناسق"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Item 3: Furniture Repair & Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="right" className="lg:col-span-6 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold">
              <Wrench className="w-4 h-4" />
              <span>صيانة اقتصادية واستدامة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">
              صيانة وتصليح الأثاث المنزلي
            </h2>
            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              لا داعي للتخلص من الأثاث المفضل عند ارتخاء مفصلة أو تعطل درج. نقوم بمعالجة ثقوب البراغي في الأخشاب وتغيير الإكسسوارات التالفة بقطع متينة تدوم طويلاً.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>تبديل المفصلات المرتخية والتالفة</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>إصلاح سحابات ومجاري الأدراج العالقة</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>تدعيم أرجل الطاولات وزوايا الأسِرة</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full bg-wood/10 text-wood flex items-center justify-center shrink-0">✓</span>
                <span>ضبط اتزان الأبواب الخشبية واحتكاكها</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/furniture-repair"
                className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-wood text-warm-bg px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-md active:scale-98"
              >
                <span>طلب صيانة وإصلاح أثاث</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-warm-bg aspect-4/3 group">
              <Image
                src={photography.furnitureRepair}
                alt="تصليح وصيانة خشب ومفصلات دولاب وأثاث منزلي"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
