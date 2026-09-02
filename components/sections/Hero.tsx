"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Hammer, MessageCircle, ArrowLeft, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig, photography, getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  return (
    <section
      id="homepage-hero"
      aria-label="القسم الرئيسي لخدمات النجارة"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-border-subtle/50"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Area (7 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            {/* Context Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-white border border-border-subtle shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-wood animate-pulse" />
              <span className="text-xs font-semibold text-charcoal">
                خدمات النجارة في مكة المكرمة وجدة والطائف
              </span>
            </motion.div>

            {/* Main H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-charcoal leading-[1.25] tracking-tight"
            >
              نجار محترف في{" "}
              <span className="text-wood relative inline-block">
                مكة وجدة والطائف
                <span className="absolute bottom-1 right-0 left-0 h-2 bg-sand/30 -z-10 rounded-full" />
              </span>{" "}
              لأعمال النجارة والأثاث
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-charcoal-muted leading-relaxed max-w-2xl"
            >
              خدمات نجارة متكاملة للمنازل والشقق والفلل، تشمل فك وتركيب الأثاث، غرف النوم، الدواليب، الأبواب، المطابخ وأعمال النجارة حسب احتياج المكان.
            </motion.p>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-wood shrink-0" />
                <span>فك وتركيب متقن</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-wood shrink-0" />
                <span>صيانة وتصليح أثاث</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-wood shrink-0" />
                <span>تفصيل حسب المقاس</span>
              </div>
            </motion.div>

            {/* CTAs Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4"
            >
              <Link
                href="/contact"
                id="hero-request-carpenter-btn"
                className="flex items-center justify-center gap-2.5 bg-charcoal hover:bg-wood text-warm-bg px-7 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-98"
              >
                <Hammer className="w-4 h-4 text-sand" />
                <span>اطلب نجار الآن</span>
              </Link>

              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-98"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر واتساب</span>
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-warm-white hover:bg-beige-subtle text-charcoal border border-border-subtle px-7 py-4 rounded-xl font-bold text-sm md:text-base transition-all shadow-xs"
                >
                  <span>استشارة وتحديد موعد</span>
                </Link>
              )}
            </motion.div>

            {/* Location Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 pt-2 text-xs text-charcoal-muted"
            >
              <MapPin className="w-3.5 h-3.5 text-wood shrink-0" />
              <span>تغطية مباشرة:</span>
              <Link href="/najjar-makkah" className="hover:text-wood underline underline-offset-2 transition-colors">
                مكة المكرمة
              </Link>
              <span>•</span>
              <Link href="/najjar-jeddah" className="hover:text-wood underline underline-offset-2 transition-colors">
                جدة
              </Link>
              <span>•</span>
              <Link href="/najjar-taif" className="hover:text-wood underline underline-offset-2 transition-colors">
                الطائف
              </Link>
            </motion.div>
          </motion.div>

          {/* Asymmetric Editorial Visual Composition (5 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-warm-white aspect-4/3 sm:aspect-5/4 group">
                <Image
                  src={photography.hero}
                  alt="فني نجارة محترف ينفذ أعمال خشبية مخصصة في فيلا سكنية"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Secondary Image with subtle hover elevation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-warm-white aspect-4/3 hidden sm:block group"
              >
                <Image
                  src={photography.heroSecondary1}
                  alt="تفاصيل دواليب خشبية حديثة وغرفة نوم مودرن"
                  fill
                  sizes="250px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating Architectural Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -left-4 bg-warm-white/95 backdrop-blur-md p-4 rounded-2xl border border-border-subtle shadow-lg max-w-[200px] hidden sm:block"
              >
                <div className="text-[11px] font-bold text-wood mb-1">دقة في المقاسات</div>
                <div className="text-xs text-charcoal-muted leading-tight">
                  تركيب متزن وحماية كاملة لجدران وأرضيات منزلك
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
