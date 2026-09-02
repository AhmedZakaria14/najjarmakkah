import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";
import { Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "معرض نماذج أعمال النجارة | تصاميم غرف النوم والدواليب والأبواب",
  description: "معرض نماذج توضيحية وتصاميم حديثة لأعمال النجارة المنزلية: دواليب غرف النوم، طاولات التلفزيون، الأبواب الخشبية، والمطابخ في مكة وجدة والطائف.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs items={[{ name: "معرض نماذج الأعمال" }]} />

      <div className="max-w-3xl mb-10 text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sand-light text-wood text-xs font-bold mb-3">
          <ImageIcon className="w-4 h-4 text-wood" />
          <span>تصاميم معمارية ملهمة</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
          معرض نماذج أعمال النجارة
        </h1>
        <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
          استكشف تصاميم وأفكار متنوعة لغرف النوم، الدواليب الجدارية، وحدات التلفزيون المعلقة، والكسوات الخشبية لمساعدتك في تخطيط مساحات منزلك.
        </p>
      </div>

      <GalleryClient />

      <LargeCtaBanner />
    </div>
  );
}
