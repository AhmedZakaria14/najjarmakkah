import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  siteConfig,
  photography,
  getWhatsAppUrl,
  getPhoneUrl,
} from "@/lib/site-config";
import {
  Hammer,
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  Wrench,
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,
} from "lucide-react";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";

export const metadata: Metadata = {
  title: "من نحن | نجار الحجاز لأعمال الأثاث والنجارة",
  description:
    "تعرف على فريق نجار الحجاز وخبرتنا الممتدة في أعمال النجارة وفك وتركيب وصيانة الأثاث المنزلي في مكة المكرمة، جدة، والطائف.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "من نحن | نجار مكة وجدة والطائف",
    description:
      "فريق نجارين محترفين لخدمات الأثاث المنزلي والدواليب والأبواب والديكورات الخشبية في المنطقة الغربية.",
    url: `${siteConfig.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  const values = [
    {
      icon: ShieldCheck,
      title: "الأمانة وحماية الممتلكات",
      desc: "نتعامل مع أثاث منزلك كأنه ملكنا؛ نستخدم البطانيات والكرتون لحماية الأرضيات والباركيه من الخدوش ونفرز المسامير والقطع بدقة.",
    },
    {
      icon: Wrench,
      title: "أدوات متطورة وقياس دقيق",
      desc: "نعتمد على موازين الليزر والمفكات الكهربائية المعايرة لضمان استقامة الأبواب، توازن الدواليب، وسلاسة حركة الأدراج.",
    },
    {
      icon: Award,
      title: "إكسسوارات ومفصلات عالية الجودة",
      desc: "نوفر مفصلات ستانلس ستيل ومجاري أدراج هيدروليكية ناعمة الإغلاق تقاوم الرطوبة وتدوم لسنوات طويلة.",
    },
    {
      icon: Clock,
      title: "الالتزام التام بالمواعيد",
      desc: "نحترم وقتك وجدولك العائلي؛ نحدد موعد الزيارة بدقة ونلتزم بإنجاز العمل في الوقت المتفق عليه دون تأخير.",
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
          <span className="text-charcoal font-semibold">من نحن</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-light/60 border border-sand text-wood-dark text-xs font-bold">
              <Hammer className="w-3.5 h-3.5" />
              <span>خبرة وحرفية في خدمة منازل الحجاز</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              نحو تجربة نجارة موثوقة تجمع بين الدقة والأمانة
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              تأسس <strong>{siteConfig.businessName}</strong> لتقديم حلول نجارة وأثاث راقية تلبي تطلعات العائلات والمنازل في مكة المكرمة، جدة، ومدينة الطائف. نؤمن بأن الأثاث ليس مجرد خشب، بل هو أساس راحة المنزل وجماله اليومي.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-warm-white border border-border-subtle p-4 rounded-2xl">
                <div className="text-2xl font-bold text-wood">10+</div>
                <div className="text-xs text-charcoal-muted">خدمات نجارة متكاملة</div>
              </div>
              <div className="bg-warm-white border border-border-subtle p-4 rounded-2xl">
                <div className="text-2xl font-bold text-wood">3</div>
                <div className="text-xs text-charcoal-muted">مدن مغطاة بالكامل</div>
              </div>
              <div className="bg-warm-white border border-border-subtle p-4 rounded-2xl col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-wood">100%</div>
                <div className="text-xs text-charcoal-muted">التزام بالدقة والمواعيد</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg bg-beige">
            <Image
              src={photography.craftsmanshipBreak}
              alt="فني نجارة محترف يقوم بضبط وتجميع قطع خشبية"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Our Core Values */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">
              قيمنا ومعايير عملنا
            </h2>
            <p className="text-sm text-charcoal-muted">
              نلتزم بأعلى معايير الحرفية في كل مسمار ومفصلة لضمان دوام أثاثك وسلامته.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-warm-white border border-border-subtle rounded-2xl p-6 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-sand-light/60 text-wood flex items-center justify-center">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-charcoal">{v.title}</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* City Coverage Section */}
        <section className="bg-charcoal text-warm-bg rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-sand text-xs font-bold">
              <MapPin className="w-4 h-4" />
              <span>نطاق التغطية الجغرافية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-white">
              نخدم أحياء مكة المكرمة وجدة والطائف بكل فخر
            </h2>
            <p className="text-sm text-sand/80 leading-relaxed">
              فرقنا الميدانية جاهزة للوصول إلى منزلك في أسرع وقت مع كافة المعدات وقطع الغيار اللازمة لتنفيذ أعمال الفك والتركيب والصيانة في موقعك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <Link
              href="/najjar-makkah"
              className="bg-charcoal-light/80 hover:bg-charcoal-light p-6 rounded-2xl border border-sand/20 transition-all group"
            >
              <h3 className="text-lg font-bold text-warm-white group-hover:text-sand mb-2">
                مكة المكرمة
              </h3>
              <p className="text-xs text-warm-bg/70 leading-relaxed">
                العوالي، الشوقية، بطحاء قريش، الشرائع، العزيزية، النوارية، الزايدي وكافة الأحياء.
              </p>
            </Link>

            <Link
              href="/najjar-jeddah"
              className="bg-charcoal-light/80 hover:bg-charcoal-light p-6 rounded-2xl border border-sand/20 transition-all group"
            >
              <h3 className="text-lg font-bold text-warm-white group-hover:text-sand mb-2">
                جدة
              </h3>
              <p className="text-xs text-warm-bg/70 leading-relaxed">
                الروضة، الحمدانية، أبحر، الصفا، السلامة، المحمدية، الشاطئ وسائر مناطق جدة.
              </p>
            </Link>

            <Link
              href="/najjar-taif"
              className="bg-charcoal-light/80 hover:bg-charcoal-light p-6 rounded-2xl border border-sand/20 transition-all group"
            >
              <h3 className="text-lg font-bold text-warm-white group-hover:text-sand mb-2">
                الطائف
              </h3>
              <p className="text-xs text-warm-bg/70 leading-relaxed">
                شهار، الحوية، الفيصلية، القمرية، الوسام، الردف، السداد وكافة أرجاء الطائف.
              </p>
            </Link>
          </div>
        </section>

        {/* Large CTA Banner */}
        <LargeCtaBanner />
      </div>
    </div>
  );
}
