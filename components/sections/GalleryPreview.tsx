"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Image as ImageIcon, Info } from "lucide-react";
import { galleryItemsData } from "@/lib/site-config";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/MotionComponents";

export function GalleryPreview() {
  const items = galleryItemsData.slice(0, 4);

  return (
    <section
      id="gallery-preview-section"
      aria-label="نماذج أعمال النجارة"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
            <ImageIcon className="w-4 h-4 text-sand" />
            <span>معرض الأفكار والتصاميم</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-2">
            نماذج أعمال النجارة
          </h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sand-light/60 text-wood-dark text-xs font-semibold">
            <Info className="w-3.5 h-3.5" />
            <span>نماذج توضيحية لأعمال النجارة والديكور الخشبي</span>
          </div>
        </div>

        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-wood hover:text-wood-dark group transition-colors"
        >
          <span>مشاهدة كامل المعرض والتصنيفات</span>
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        </Link>
      </ScrollReveal>

      <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ScrollStaggerItem key={item.id} className="h-full">
            <div
              className="group rounded-3xl overflow-hidden bg-warm-white border border-border-subtle hover:border-wood/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-3px]"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-beige-subtle">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 bg-charcoal/80 text-warm-bg text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {item.categoryNameAr}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-wood transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-beige-subtle text-charcoal-muted"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>
    </section>
  );
}
