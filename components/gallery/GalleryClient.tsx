"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, Filter, X, ArrowLeft, MessageCircle } from "lucide-react";
import { galleryItemsData, getWhatsAppUrl, GalleryItem } from "@/lib/site-config";

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", name: "كافة الأعمال" },
    { id: "bedrooms", name: "غرف نوم" },
    { id: "wardrobes", name: "دواليب وخزائن" },
    { id: "doors", name: "أبواب خشبية" },
    { id: "kitchens", name: "مطابخ" },
    { id: "tv_units", name: "وحدات تلفزيون" },
    { id: "decor", name: "ديكورات وبديل خشب" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === selectedCategory);

  // Lock body scroll when modal is active
  React.useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <div>
      {/* Disclaimer Banner */}
      <div className="bg-sand-light/50 border border-sand/60 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-wood shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-charcoal leading-relaxed">
          <span className="font-bold block mb-0.5">تنويه مهني للشفافية:</span>
          الصور المعروضة في هذا المعرض هي <span className="font-bold text-wood">نماذج توضيحية وتصاميم معمارية لأعمال النجارة</span> لإلهامكم واختيار الطراز والتقسيم الذي يناسب مساحة منزلكم قبل التنفيذ.
        </div>
      </div>

      {/* Category Tabs with horizontal scroll indicator */}
      <div className="relative mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-charcoal text-warm-bg shadow-sm"
                  : "bg-warm-white text-charcoal hover:bg-beige-subtle border border-border-subtle"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group rounded-3xl overflow-hidden bg-warm-white border border-border-subtle hover:border-wood/40 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-4/3 overflow-hidden bg-beige-subtle">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-charcoal/80 text-warm-bg text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  {item.categoryNameAr}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-wood transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/50">
                {item.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-beige-subtle text-charcoal-muted"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Detail Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-warm-white rounded-3xl max-w-2xl w-full max-h-[90dvh] overflow-y-auto shadow-2xl border border-sand/40 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 w-9 h-9 rounded-full bg-charcoal/70 hover:bg-charcoal text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 w-full bg-charcoal">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 space-y-4 text-right">
              <div className="inline-flex px-3 py-1 rounded-md bg-sand-light text-wood text-xs font-bold">
                {activeItem.categoryNameAr}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {activeItem.description}
              </p>

              <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setActiveItem(null)}
                  className="flex-1 text-center bg-charcoal hover:bg-wood text-warm-bg py-3 px-4 rounded-xl text-xs font-bold transition-colors"
                >
                  طلب تفصيل أو تنفيذ تصميم مشابه
                </Link>

                <a
                  href={getWhatsAppUrl(`السلام عليكم، استفسر عن إمكانية تنفيذ تصميم مشابه لـ (${activeItem.title}).`) || "/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>استفسار واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
