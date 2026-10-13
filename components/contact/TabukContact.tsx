'use client';

import { Phone, MessageCircle } from 'lucide-react';

const whatsapp = `https://wa.me/966530471946?text=${encodeURIComponent('السلام عليكم، أحتاج خدمة نجار في تبوك. نوع الخدمة: \nالحي: \nسأرسل صور المشكلة لتحديد العمل والتكلفة.')}`;

// Contact intent is not a confirmed lead. No ad conversion is fired here.
function recordContact(channel: 'phone' | 'whatsapp', location: string) {
  const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
  try {
    const key = `tabuk-contact-v1:${channel}`;
    const previous = Number(sessionStorage.getItem(key) || 0);
    if (Date.now() - previous < 30000) return;
    sessionStorage.setItem(key, String(Date.now()));
  } catch { /* Contact links still work if storage is unavailable. */ }
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: 'contact_intent', channel, location, service_city: 'tabuk' });
}

export function TabukContact({ location, floating = false }: { location: string; floating?: boolean }) {
  return <div aria-label="التواصل مع نجار تبوك" className={floating
    ? 'fixed z-50 bottom-4 inset-x-4 sm:inset-x-auto sm:left-6 flex gap-3 rounded-2xl border border-border-subtle bg-warm-white/95 backdrop-blur-md p-2 shadow-xl pb-[max(0.5rem,env(safe-area-inset-bottom))]'
    : 'flex flex-col sm:flex-row gap-3 sm:justify-start'}>
    <a href={whatsapp} onClick={() => recordContact('whatsapp', location)} target="_blank" rel="noopener noreferrer" aria-label="واتساب نجار تبوك على 0530471946" className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 rounded-xl px-5 py-4 bg-[#167a3e] hover:bg-[#116332] text-white font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"><MessageCircle aria-hidden className="size-5 shrink-0" />تواصل واتساب</a>
    <a href="tel:+966530471946" onClick={() => recordContact('phone', location)} aria-label="اتصل بنجار تبوك على 0530471946" className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 rounded-xl px-5 py-4 bg-wood hover:bg-wood-dark text-white font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wood"><Phone aria-hidden className="size-5 shrink-0" />اتصل الآن</a>
  </div>;
}
