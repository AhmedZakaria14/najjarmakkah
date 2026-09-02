"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPostsData } from "@/lib/site-config";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function BlogPreview() {
  const posts = blogPostsData.slice(0, 3);

  return (
    <section
      id="blog-preview-section"
      aria-label="مقالات ونصائح النجارة والأثاث"
      className="py-16 md:py-24 bg-warm-white border-y border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-sand" />
              <span>دليل ونصائح للمنزل</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">
              مقالات ومعلومات مفيدة حول الأثاث والنجارة
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-wood hover:text-wood-dark group transition-colors"
          >
            <span>استعراض كافة المقالات (15 مقالاً)</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ScrollStaggerItem key={post.slug} className="h-full">
              <article
                className="group rounded-3xl overflow-hidden bg-warm-bg border border-border-subtle hover:border-wood/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-4px]"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-beige-subtle">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-charcoal/80 text-warm-bg text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-charcoal-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-sand" />
                        <span>{post.readTime}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sand" />
                        <span>{post.publishedAt}</span>
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-charcoal mb-2.5 group-hover:text-wood transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                      {post.intro}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between text-xs font-bold text-wood hover:text-wood-dark pt-3 border-t border-border-subtle/60"
                  >
                    <span>قراءة المقال كاملاً</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
