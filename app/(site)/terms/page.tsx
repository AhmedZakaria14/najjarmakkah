import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "الشروط والأحكام | نجار الحجاز",
  description:
    "شروط وأحكام تقديم خدمات النجارة والأثاث لدى نجار الحجاز في مكة وجدة والطائف.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-charcoal-muted flex items-center gap-2">
          <Link href="/" className="hover:text-wood">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">الشروط والأحكام</span>
        </nav>

        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-light/60 border border-sand text-wood-dark text-xs font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>اتفاقية الخدمة والضوابط</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">
            الشروط والأحكام
          </h1>
          <p className="text-xs text-charcoal-muted">
            توضح هذه الصفحة البنود والضوابط المنظمة لتقديم خدمات النجارة والأثاث
          </p>
        </header>

        <div className="bg-warm-white border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-sm text-charcoal/90 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">1. نطاق الخدمات</h2>
            <p>
              يقدم <strong>{siteConfig.businessName}</strong> خدمات نجارة متخصصة تشمل فك وتركيب غرف النوم، تصليح الأثاث، تفصيل الدواليب، تركيب الأبواب، تجميع أثاث ايكيا والأثاث الجاهز، وأعمال الديكورات الخشبية في مكة المكرمة وجدة ومدينة الطائف.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">2. المواعيد والمعاينة</h2>
            <p>
              يتم الاتفاق على موعد تنفيذ العمل مسبقاً بالتنسيق المباشر مع العميل. في حال طرأ أي تعديل على الموعد، يُرجى إبلاغنا مسبقاً بوقت كافٍ لتعديل الجدولة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">3. التسعير والدفع</h2>
            <p>
              يتم توضيح تكلفة الخدمة والإكسسوارات وقطع الغيار المطلوبة قبل البدء في التنفيذ. يتم الدفع بعد إنجاز العمل ومعاينة العميل وموافقته على جودة التنفيذ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">4. الأمانة والضمان</h2>
            <p>
              نلتزم بالحفاظ التام على سلامة أثاث العميل ومحتويات منزله، ونضمن استخدام أدوات تثبيت ومفصلات ملائمة لنوع الخشب والحوائط لضمان متانة وأمان الاستخدام.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
