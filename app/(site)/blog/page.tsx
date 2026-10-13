import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, blogPostsData } from "@/lib/site-config";
import { BlogClient } from "@/components/blog/BlogClient";
import { BookOpen, Phone, MessageCircle } from "lucide-react";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";

export const metadata: Metadata = {
  title: "المدونة والنصائح الخشبية | مقالات وإرشادات العناية بالأثاث",
  description:
    "مقالات وإرشادات عملية حول اختيار النجار، فك وتركيب غرف النوم، صيانة مفصلات الدواليب، استغلال المساحات، وحماية الأثاث الخشبي في مكة، جدة، والطائف.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "المدونة والنصائح الخشبية | نجار مكة وجدة والطائف",
    description:
      "دليل شامل ومقالات مفيدة في صيانة وفك وتركيب وتفصيل الأثاث المنزلي والدواليب والأبواب.",
    url: `${siteConfig.siteUrl}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-charcoal-muted flex items-center gap-2">
          <Link href="/" className="hover:text-wood">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">المدونة والنصائح</span>
        </nav>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-light/60 border border-sand text-wood-dark text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>المعرفة والنصائح الخشبية</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            دليل النجارة والعناية بالأثاث المنزلي
          </h1>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            مقالات عملية وإرشادات مهنية لمساعدتك على الحفاظ على غرف النوم والدواليب والأبواب، وتجنب التلف عند النقل أو الاستخدام اليومي.
          </p>
        </div>

        {/* Blog Posts Interactive Grid */}
        <BlogClient initialPosts={blogPostsData} />

        {/* Bottom CTA */}
        <div className="pt-8">
          <LargeCtaBanner />
        </div>
      </div>
    </div>
  );
}
