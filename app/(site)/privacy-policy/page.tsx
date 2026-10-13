import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | نجار الحجاز",
  description:
    "سياسة الخصوصية وحماية بيانات العملاء لدى نجار الحجاز لأعمال الأثاث والنجارة.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-charcoal-muted flex items-center gap-2">
          <Link href="/" className="hover:text-wood">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">سياسة الخصوصية</span>
        </nav>

        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-light/60 border border-sand text-wood-dark text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>حماية الخصوصية والبيانات</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">
            سياسة الخصوصية
          </h1>
          <p className="text-xs text-charcoal-muted">
            آخر تحديث: {new Date().toLocaleDateString("ar-SA", { year: "numeric", month: "long" })}
          </p>
        </header>

        <div className="bg-warm-white border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-sm text-charcoal/90 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">1. جمع المعلومات</h2>
            <p>
              نحن في <strong>{siteConfig.businessName}</strong> نلتزم بالحفاظ على خصوصية زوار موقعنا وعملائنا الكرام. نقوم فقط بجمع البيانات الأساسية التي تقدمونها طواعية عند طلب الخدمة (مثل الاسم، رقم الهاتف، والمدينة) لغرض تنسيق المواعيد وتقديم الخدمة المطلوبة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">2. استخدام المعلومات</h2>
            <p>
              تُستخدم المعلومات المقدمة حصراً للأغراض التالية:
            </p>
            <ul className="list-disc list-inside pr-4 space-y-1 text-xs sm:text-sm text-charcoal-muted">
              <li>التواصل معكم لتأكيد تفاصيل العمل وموعد الزيارة الميدانية.</li>
              <li>تقديم الاستشارات الفنية والرد على الاستفسارات عبر واتساب أو الهاتف.</li>
              <li>تحسين مستوى الخدمات المقدمة وتجربة المستخدم.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">3. حماية وأمن البيانات</h2>
            <p>
              نطبق تدابير أمنية ملائمة لضمان عدم مشاركة أو بيع أي من معلوماتكم الشخصية لأي طرف ثالث تحت أي ظرف من الظروف.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal">4. التواصل والاستفسار</h2>
            <p>
              إذا كانت لديكم أي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة{" "}
              <Link href="/contact" className="text-wood underline font-bold">
                تواصل معنا
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
