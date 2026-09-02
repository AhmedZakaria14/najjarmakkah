"use client";

import React from "react";
import Link from "next/link";
import { Hammer, MessageCircle, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";
import { ScrollReveal } from "@/components/ui/MotionComponents";

export function LargeCtaBanner() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  return (
    <section
      id="large-cta-banner"
      aria-label="طلب خدمة النجارة وحجز موعد"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <ScrollReveal className="relative rounded-3xl overflow-hidden bg-charcoal text-warm-bg p-8 sm:p-12 md:p-16 border border-sand/30 shadow-2xl">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D7B98E_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-light border border-sand/30 text-sand text-xs font-bold">
            <Hammer className="w-4 h-4 text-sand" />
            <span>جاهزون لخدمتكم في مكة وجدة والطائف</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-warm-white tracking-tight leading-tight">
            هل تحتاج إلى فني نجارة محترف لمنزلك؟
          </h2>

          <p className="text-sm md:text-base text-sand-light/85 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا الآن لشرح الخدمة المطلوبة في غرف النوم، الدواليب، الأبواب، المطابخ أو تصليح الأثاث وسنقوم بالتنسيق معك فوراً.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-wood hover:bg-wood-light text-warm-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg hover:shadow-xl active:scale-98"
            >
              <Hammer className="w-4 h-4 text-sand" />
              <span>طلب تسعيرة / نجار الآن</span>
            </Link>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg hover:shadow-xl active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                <span>محادثة واتساب مباشرة</span>
              </a>
            ) : null}
          </div>

          <div className="pt-6 border-t border-charcoal-light flex flex-wrap items-center justify-center gap-6 text-xs text-warm-bg/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sand" />
              <span>تغطية مكة المكرمة</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sand" />
              <span>تغطية مدينة جدة</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sand" />
              <span>تغطية مدينة الطائف</span>
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
