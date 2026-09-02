import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  siteConfig,
  getWhatsAppUrl,
  getPhoneUrl,
  citiesData,
} from "@/lib/site-config";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { ContactFormClient } from "@/components/contact/ContactFormClient";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "تواصل معنا وحجز موعد | نجار مكة وجدة والطائف",
  description:
    "احجز موعدك مع فني نجار محترف في مكة المكرمة، جدة، أو الطائف. اتصل مباشرة أو تواصل عبر واتساب لطلب معاينة وتسعيرة سريعة.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "تواصل معنا وحجز نجار | مكة • جدة • الطائف",
    description:
      "تواصل فوري لحجز موعد فك وتركيب وصيانة وتفصيل الأثاث المنزلي في المنطقة الغربية.",
    url: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(
    "السلام عليكم، أرغب في حجز موعد مع فني نجار لمعاينة وخدمة الأثاث."
  );
  const phoneUrl = getPhoneUrl();

  const contactFaqs = [
    {
      question: "كيف يتم تحديد سعر خدمة النجارة؟",
      answer: "يتم تحديد السعر بناءً على نوع العمل (فك وتركيب، تصليح، تفصيل، أو تجميع كراتين)، وعدد القطع، ونوع الإكسسوارات المطلوبة. نضمن دائماً تسعيراً عادلاً وواضحاً قبل البدء.",
    },
    {
      question: "هل يمكن إرسال صور القطع لتحديد التكلفة مسبقاً؟",
      answer: "نعم، هذا هو الخيار الأسرع والأنسب. أرسل صور أو مقطع فيديو للأثاث عبر واتساب وسيتم الرد عليك بتفاصيل الخدمة وموعد الزيارة.",
    },
    {
      question: "ما هي أوقات العمل وحجز المواعيد؟",
      answer: "نستقبل طلباتكم واستفساراتكم يومياً على مدار الأسبوع، وننسق المواعيد الميدانية في الأوقات التي تناسب جدولكم العائلي.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-charcoal-muted flex items-center gap-2">
          <Link href="/" className="hover:text-wood">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">تواصل معنا</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-light/60 border border-sand text-wood-dark text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>خدمة سريعة في مكة وجدة والطائف</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            تواصل معنا واحجز موعد نجار محترف
          </h1>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            نسعد بخدمتكم في فك وتركيب وصيانة وتفصيل الأثاث المنزلي. تواصل معنا الآن عبر واتساب، الاتصال الهاتفي، أو عبر نموذج الحجز المباشر.
          </p>
        </div>

        {/* 2-Column Content: Form & Direct Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Fast Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            {whatsappUrl && (
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-charcoal">
                    تواصل فوري عبر تطبيق واتساب
                  </h2>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                    أرسل صور القطع أو استفسارك مباشرة لتلقي رد سريع وتحديد موعد الزيارة.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-page-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>بدء محادثة واتساب الآن</span>
                </a>
              </div>
            )}

            {/* Direct Phone / Guarantee Card */}
            <div className="bg-warm-white border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
                  <Clock className="w-4 h-4 text-wood" />
                  <span>ساعات الخدمة والتنسيق</span>
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  نستقبل الحجوزات والاستفسارات يومياً من الساعة ٨ صباحاً حتى ١١ مساءً. الزيارات الميدانية متوفرة طوال أيام الأسبوع في كافة الأحياء.
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle space-y-3">
                <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-wood" />
                  <span>المدن المشمولة بالتغطية</span>
                </h3>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <Link
                    href="/najjar-makkah"
                    className="p-2.5 rounded-xl bg-beige-subtle hover:bg-sand-light/50 border border-border-subtle text-charcoal"
                  >
                    مكة المكرمة
                  </Link>
                  <Link
                    href="/najjar-jeddah"
                    className="p-2.5 rounded-xl bg-beige-subtle hover:bg-sand-light/50 border border-border-subtle text-charcoal"
                  >
                    جدة
                  </Link>
                  <Link
                    href="/najjar-taif"
                    className="p-2.5 rounded-xl bg-beige-subtle hover:bg-sand-light/50 border border-border-subtle text-charcoal"
                  >
                    الطائف
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <div className="flex items-start gap-3 text-xs text-charcoal-muted bg-sand-light/40 p-4 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-wood shrink-0 mt-0.5" />
                  <span>
                    نضمن التعامل الأمين مع مقتنياتكم، والحفاظ على نظافة المكان وسلامة الأرضيات أثناء تنفيذ أعمال الفك والتركيب.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>
        </div>

        {/* FAQs */}
        <FaqSection
          title="الأسئلة الشائعة حول الحجز والتواصل"
          subtitle="إجابات على أهم الاستفسارات حول تسعير الخدمات ومواعيد الزيارة"
          faqs={contactFaqs}
        />
      </div>
    </div>
  );
}
