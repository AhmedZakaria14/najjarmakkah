"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, ArrowLeft, BookOpen, Tag } from "lucide-react";
import { BlogPost } from "@/lib/site-config";

interface BlogClientProps {
  initialPosts: BlogPost[];
}

export function BlogClient({ initialPosts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialPosts.map((p) => p.category)));
    return ["الكل", ...cats];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "الكل" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Search & Filter Controls */}
      <div className="bg-warm-white border border-border-subtle rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-charcoal-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في المقالات والنصائح..."
              className="w-full pl-4 pr-10 py-2.5 bg-beige-subtle/70 border border-border-subtle rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood text-charcoal"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                id={`cat-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-wood text-warm-white shadow-xs"
                    : "bg-beige-subtle text-charcoal hover:bg-sand-light/50 border border-border-subtle"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-warm-white border border-border-subtle rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              {/* Thumbnail */}
              <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden bg-beige">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-xs text-warm-bg text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <Tag className="w-3 h-3 text-sand" />
                  <span>{post.category}</span>
                </div>
              </Link>

              {/* Post Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-charcoal-muted font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-wood" />
                      <span>قراءة {post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-wood transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-charcoal-muted line-clamp-3 leading-relaxed">
                    {post.intro}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-wood hover:text-wood-dark"
                  >
                    <span>قراءة المقال كاملاً</span>
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  </Link>

                  <span className="text-[11px] text-charcoal-muted">
                    {post.tableOfContents.length} محاور
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-warm-white rounded-2xl border border-border-subtle p-8 space-y-3">
          <BookOpen className="w-10 h-10 text-charcoal-muted mx-auto" />
          <h3 className="text-base font-bold text-charcoal">لا توجد مقالات مطابقة لبحثك</h3>
          <p className="text-xs text-charcoal-muted">
            جرب كتابة كلمات بحث أخرى أو اختر فئة مختلفة من الأزرار أعلاه.
          </p>
        </div>
      )}
    </div>
  );
}
