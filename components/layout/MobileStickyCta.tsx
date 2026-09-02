"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Hammer } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";

export function MobileStickyCta() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  return (
    <aside
      id="mobile-sticky-cta-bar"
      aria-label="خيارات التواصل السريع على الهاتف المحمول"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-warm-white/95 backdrop-blur-md border-t border-border-subtle/90 px-3 pt-2 pb-[max(env(safe-area-inset-bottom),10px)] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* WhatsApp Button */}
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-sticky-whatsapp"
            aria-label="تواصل فوري عبر واتساب"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[11px] sm:text-xs shadow-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 shrink-0" />
            <span>واتساب</span>
          </a>
        ) : (
          <Link
            href="/contact"
            aria-label="طلب تسعيرة واتساب"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[11px] sm:text-xs shadow-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 shrink-0" />
            <span>واتساب</span>
          </Link>
        )}

        {/* Direct Phone Call Button */}
        {phoneUrl ? (
          <a
            href={phoneUrl}
            id="mobile-sticky-phone"
            aria-label="اتصال هاتفي مباشر"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-wood hover:bg-wood-dark text-warm-white font-bold text-[11px] sm:text-xs shadow-xs active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 mb-0.5 shrink-0" />
            <span>اتصال فوري</span>
          </a>
        ) : (
          <Link
            href="/contact"
            aria-label="حجز موعد نجار"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-wood hover:bg-wood-dark text-warm-white font-bold text-[11px] sm:text-xs shadow-xs active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 mb-0.5 shrink-0" />
            <span>حجز موعد</span>
          </Link>
        )}

        {/* Request Service / Quote */}
        <Link
          href="/contact"
          id="mobile-sticky-quote"
          aria-label="طلب خدمة نجارة أو تسعيرة"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-charcoal hover:bg-charcoal-light text-warm-bg font-bold text-[11px] sm:text-xs shadow-xs active:scale-95 transition-transform"
        >
          <Hammer className="w-4 h-4 mb-0.5 text-sand shrink-0" />
          <span>اطلب نجار</span>
        </Link>
      </div>
    </aside>
  );
}
