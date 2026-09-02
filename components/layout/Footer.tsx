import React from "react";
import Link from "next/link";
import { Hammer, Phone, MessageCircle, MapPin, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { siteConfig, servicesData, getWhatsAppUrl, getPhoneUrl } from "@/lib/site-config";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  return (
    <footer id="main-footer" className="bg-charcoal text-warm-bg pt-16 pb-24 lg:pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Box */}
        <div className="bg-charcoal-light/90 border border-sand/20 rounded-3xl p-6 md:p-10 mb-14 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-sand text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-sand" />
                <span>المنطقة الغربية • المملكة العربية السعودية</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-warm-white mb-2">
                خدمات نجارة وأثاث متكاملة في مكة المكرمة، جدة، والطائف
              </h2>
              <p className="text-sand/80 text-sm max-w-2xl leading-relaxed">
                فك وتركيب غرف النوم، تصليح وصيانة الأثاث، تفصيل الدواليب والخزائن، وتركيب الأبواب الخشبية والمطابخ للمنازل والشقق والفلل.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                id="footer-quote-btn"
                className="flex-1 sm:flex-none text-center bg-wood hover:bg-wood-light text-warm-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
              >
                طلب تسعيرة أو زيارة فني
              </Link>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp-btn"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل عبر واتساب</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-muted/30">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wood text-warm-bg flex items-center justify-center shadow-xs">
                <Hammer className="w-5 h-5 text-warm-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-warm-white block">{siteConfig.businessName}</span>
                <span className="text-xs text-sand block">أعمال النجارة والأثاث المنزلي</span>
              </div>
            </Link>
            <p className="text-warm-bg/70 text-xs leading-relaxed">
              حلول نجارة احترافية تجمع بين دقة التنفيذ المعماري وجودة الإكسسوارات لخدمة المنازل والشقق في مكة المكرمة وجدة ومدينة الطائف.
            </p>

            <div className="pt-2 space-y-2 text-xs text-warm-bg/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sand shrink-0" />
                <span>نطاق التغطية: مكة المكرمة • جدة • الطائف</span>
              </div>
              {siteConfig.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sand shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-sand">
                    {siteConfig.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Carpentry Services */}
          <div>
            <h3 className="text-sm font-bold text-sand uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>خدمات النجارة</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-warm-bg/75">
              {servicesData.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-sand transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-sand" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sand hover:underline font-bold pt-1 block">
                  عرض كافة الخدمات (10 خدمات) ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Cities & Locations */}
          <div>
            <h3 className="text-sm font-bold text-sand uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>نطاق الخدمة والمدن</span>
            </h3>
            <ul className="space-y-3 text-xs text-warm-bg/75">
              <li>
                <Link
                  href="/najjar-makkah"
                  className="block p-3 rounded-xl bg-charcoal-light/60 hover:bg-charcoal-light hover:text-sand border border-charcoal-muted/30 transition-all"
                >
                  <div className="font-bold text-warm-white mb-0.5">نجار بمكة المكرمة</div>
                  <div className="text-[11px] text-warm-bg/60">العوالي، الشوقية، بطحاء قريش، الشرائع، العزيزية وكافة الأحياء</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/najjar-jeddah"
                  className="block p-3 rounded-xl bg-charcoal-light/60 hover:bg-charcoal-light hover:text-sand border border-charcoal-muted/30 transition-all"
                >
                  <div className="font-bold text-warm-white mb-0.5">نجار بجدة</div>
                  <div className="text-[11px] text-warm-bg/60">الروضة، الحمدانية، أبحر، الصفا، السلامة والمحمدية</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/najjar-taif"
                  className="block p-3 rounded-xl bg-charcoal-light/60 hover:bg-charcoal-light hover:text-sand border border-charcoal-muted/30 transition-all"
                >
                  <div className="font-bold text-warm-white mb-0.5">نجار بالطائف</div>
                  <div className="text-[11px] text-warm-bg/60">شهار، الحوية، الفيصلية، القمرية، الوسام والردف</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Trust */}
          <div>
            <h3 className="text-sm font-bold text-sand uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>روابط مهمة</span>
            </h3>
            <ul className="space-y-2 text-xs text-warm-bg/75">
              <li>
                <Link href="/" className="hover:text-sand transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sand transition-colors">
                  دليل الخدمات
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sand transition-colors">
                  معرض نماذج الأعمال
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sand transition-colors">
                  المدونة والنصائح
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sand transition-colors">
                  عن الورشة وفريق العمل
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sand transition-colors">
                  تواصل معنا وطلب معاينة
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-sand transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-sand transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-bg/60">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {siteConfig.businessName} — المملكة العربية السعودية
          </div>

          {/* Attribution */}
          <div className="flex items-center gap-1 text-xs">
            <span>تم التصميم بواسطة</span>
            <a
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand hover:text-sand-light font-semibold transition-colors underline underline-offset-4"
            >
              NasharHub
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-sand transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-sand transition-colors">
              الشروط والأحكام
            </Link>
            <Link href="/sitemap.xml" className="hover:text-sand transition-colors">
              خريطة الموقع
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
