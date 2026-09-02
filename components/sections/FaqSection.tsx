"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { globalFaqs } from "@/lib/site-config";
import { ScrollReveal } from "@/components/ui/MotionComponents";
import { motion, AnimatePresence } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FaqItem[];
  id?: string;
}

export function FaqSection({
  title = "الأسئلة الشائعة حول خدمات النجارة",
  subtitle = "إجابات مباشرة على أكثر الاستفسارات تكراراً حول فك وتركيب وصيانة الأثاث في مكة وجدة والطائف.",
  faqs = globalFaqs,
  id = "faq-section",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id={id}
      aria-label="الأسئلة الشائعة"
      className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <ScrollReveal className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-wood text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-sand" />
          <span>إجابات واستفسارات</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="space-y-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-warm-white border-wood/40 shadow-xs"
                  : "bg-warm-white/70 border-border-subtle hover:border-sand"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-4 px-6 text-right flex items-center justify-between gap-4 font-bold text-sm md:text-base text-charcoal focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-wood shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-wood" : "text-charcoal-muted"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-charcoal-muted leading-relaxed border-t border-border-subtle/40">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
