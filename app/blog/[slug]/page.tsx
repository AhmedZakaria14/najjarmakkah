import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  siteConfig,
  blogPostsData,
  servicesData,
  getWhatsAppUrl,
  getPhoneUrl,
} from "@/lib/site-config";
import {
  Clock,
  Calendar,
  Share2,
  Bookmark,
  ChevronLeft,
  ArrowRight,
  Hammer,
  Phone,
  MessageCircle,
  HelpCircle,
  ListOrdered,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { FaqSection } from "@/components/sections/FaqSection";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "المقال غير موجود",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          alt: post.alt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(
    `السلام عليكم، قرأت مقال (${post.title}) وأرغب في الاستفسار عن الخدمة.`
  );
  const phoneUrl = getPhoneUrl();

  // Find related services objects
  const relatedServices = servicesData.filter((s) =>
    post.relatedServices.includes(s.slug)
  );

  // Other blog posts for "Read Next"
  const otherPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Schema.org Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <div className="py-10 sm:py-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-charcoal-muted flex items-center flex-wrap gap-2"
        >
          <Link href="/" className="hover:text-wood">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-wood">
            المدونة والنصائح
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold truncate max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-sand-light border border-sand text-wood-dark text-xs font-bold flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>{post.category}</span>
            </span>
            <span className="text-xs text-charcoal-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-wood" />
              <span>قراءة {post.readTime}</span>
            </span>
            <span className="text-xs text-charcoal-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-wood" />
              <span>تاريخ النشر: {post.publishedAt}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-medium bg-sand-light/30 p-5 rounded-2xl border-r-4 border-wood">
            {post.intro}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-md bg-beige">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2-Column Content Layout: TOC & Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Table of Contents - Mobile & Inline */}
            <div className="bg-warm-white border border-border-subtle rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-wood">
                <ListOrdered className="w-4 h-4" />
                <span>محتويات هذا الدليل</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-wood transition-colors flex items-center gap-2 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sand"></span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {post.contentSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-charcoal pb-2 border-b border-border-subtle">
                    {section.heading}
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-charcoal/90 leading-relaxed">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="space-y-2 pr-4 text-sm text-charcoal">
                      {section.listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-wood shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div className="bg-amber-50/80 border border-amber-200 text-amber-900 rounded-xl p-4 text-xs sm:text-sm font-medium">
                      {section.callout}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Author / Verification Tag */}
            <div className="bg-beige-subtle rounded-2xl p-5 border border-border-subtle flex items-center justify-between text-xs text-charcoal-muted">
              <div>
                <span className="font-bold text-charcoal block">
                  فريق {siteConfig.businessShortName}
                </span>
                <span>متخصصون في أعمال النجارة والأثاث بمكة وجدة والطائف</span>
              </div>
              <Link
                href="/contact"
                className="px-4 py-2 bg-charcoal text-warm-bg rounded-xl font-bold hover:bg-wood transition-colors"
              >
                طلب استشارة نجار
              </Link>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Direct Booking Box */}
            <div className="bg-warm-white border border-border-subtle rounded-2xl p-6 shadow-xs space-y-4 sticky top-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-wood bg-sand-light/50 px-2.5 py-1 rounded-lg">
                <Hammer className="w-3.5 h-3.5" />
                <span>تحتاج مساعدة فنية؟</span>
              </div>

              <h3 className="text-base font-bold text-charcoal">
                حجز موعد نجار في مكة وجدة والطائف
              </h3>

              <p className="text-xs text-charcoal-muted leading-relaxed">
                نوفر فنيين محترفين لفك وتركيب وصيانة كافة قطع الأثاث والدواليب المنزلية بأعلى معايير الدقة.
              </p>

              <div className="space-y-2.5 pt-2">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-xs transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>تواصل عبر واتساب</span>
                  </a>
                )}

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-charcoal hover:bg-wood text-warm-bg py-2.5 px-4 rounded-xl text-xs font-bold shadow-xs transition-all"
                >
                  <Hammer className="w-3.5 h-3.5 text-sand" />
                  <span>طلب تسعيرة أو زيارة</span>
                </Link>
              </div>

              {/* Related Services in Sidebar */}
              {relatedServices.length > 0 && (
                <div className="pt-6 border-t border-border-subtle space-y-3">
                  <h4 className="text-xs font-bold text-charcoal">
                    خدمات ذات صلة بالمقال:
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block p-2.5 rounded-xl bg-beige-subtle hover:bg-sand-light/50 border border-border-subtle text-xs font-medium text-charcoal hover:text-wood transition-all"
                      >
                        <div className="font-bold mb-0.5">{service.title}</div>
                        <div className="text-[11px] text-charcoal-muted line-clamp-1">
                          {service.shortDescription}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Read Next Posts */}
        {otherPosts.length > 0 && (
          <section className="pt-12 border-t border-border-subtle space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
              مقالات أخرى قد تهمك
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="bg-warm-white border border-border-subtle rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="relative h-40 bg-beige overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-wood bg-sand-light/60 px-2 py-0.5 rounded-md inline-block mb-1">
                        {other.category}
                      </span>
                      <h4 className="text-sm font-bold text-charcoal group-hover:text-wood line-clamp-2">
                        {other.title}
                      </h4>
                    </div>
                    <span className="text-[11px] text-wood font-bold pt-2 flex items-center gap-1">
                      <span>قراءة المقال</span>
                      <span>←</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Banner */}
        <LargeCtaBanner />
      </div>
    </div>
  );
}
