"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { servicesData, siteConfig, getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "مكة المكرمة",
    serviceSlug: servicesData[0].slug,
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quick receipt and prepare WhatsApp redirect option
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const selectedService = servicesData.find((s) => s.slug === formData.serviceSlug);
  const customWhatsAppUrl = getWhatsAppUrl(
    `السلام عليكم، أنا ${formData.name || "عميل"} من مدينة ${formData.city}.\nأرغب في طلب خدمة (${selectedService?.title || "نجارة"}).\nتفاصيل الطلب: ${formData.message || "استفسار عن الخدمة والأسعار"}`
  );

  return (
    <div className="bg-warm-white border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-sm">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-6 animate-in fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              تم استلام طلبك بنجاح!
            </h3>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
              شكراً لتواصلك معنا يا {formData.name || "عزيزنا العميل"}. سيقوم فني النجارة بالتواصل معك هاتفياً أو عبر واتساب لمراجعة التفاصيل وتحديد موعد الزيارة.
            </p>
          </div>

          {customWhatsAppUrl && (
            <div className="pt-4 max-w-sm mx-auto">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال تفاصيل الطلب فوراً عبر واتساب</span>
              </a>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-wood underline pt-4"
          >
            إرسال طلب آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-charcoal">
              نموذج حجز موعد / طلب تسعيرة
            </h3>
            <p className="text-xs text-charcoal-muted">
              املأ البيانات التالية وسيتم التواصل معك مباشرة لتحديد الموعد والترتيبات.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-bold text-charcoal">
                الاسم الكريم *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="أدخل اسمك الكريم"
                className="w-full px-4 py-2.5 bg-beige-subtle/70 border border-border-subtle rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood text-charcoal"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="block text-xs font-bold text-charcoal">
                رقم الجوال للتواصل *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="05XXXXXXXX"
                className="w-full px-4 py-2.5 bg-beige-subtle/70 border border-border-subtle rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood text-charcoal text-right"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* City */}
            <div className="space-y-1.5">
              <label htmlFor="contact-city" className="block text-xs font-bold text-charcoal">
                المدينة / المنطقة *
              </label>
              <select
                id="contact-city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 bg-beige-subtle/70 border border-border-subtle rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood text-charcoal"
              >
                <option value="مكة المكرمة">مكة المكرمة</option>
                <option value="جدة">جدة</option>
                <option value="الطائف">الطائف</option>
              </select>
            </div>

            {/* Service */}
            <div className="space-y-1.5">
              <label htmlFor="contact-service" className="block text-xs font-bold text-charcoal">
                نوع الخدمة المطلوبة *
              </label>
              <select
                id="contact-service"
                value={formData.serviceSlug}
                onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                className="w-full px-4 py-2.5 bg-beige-subtle/70 border border-border-subtle rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood text-charcoal"
              >
                {servicesData.map((service) => (
                  <option key={service.id} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Details / Message */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="block text-xs font-bold text-charcoal">
              تفاصيل القطعة أو المشكلة (اختياري)
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="مثال: فك وتركيب غرفة نوم 6 قطع، أو صيانة مفصلات دولاب مطبخ في حي العوالي..."
              className="w-full px-4 py-2.5 bg-beige-subtle/70 border border-border-subtle rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood text-charcoal resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="contact-submit-button"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-charcoal hover:bg-wood text-warm-bg py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>جاري إرسال الطلب...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-sand" />
                <span>إرسال الطلب الآن</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
