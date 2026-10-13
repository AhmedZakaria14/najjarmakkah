import type { Metadata } from 'next';
import Image from 'next/image';
import { Hammer, DoorOpen, BedDouble, Wrench, MapPin, Check, ArrowLeft } from 'lucide-react';
import { TabukContact } from '@/components/contact/TabukContact';

const title = 'نجار بتبوك | صيانة أبواب وفك وتركيب وصيانة غرف نوم';
const description = 'تحتاج نجار في تبوك؟ صيانة الأبواب الخشبية، فك وتركيب غرف النوم وصيانة الدواليب والأثاث. أرسل صورة واسم الحي على واتساب أو اتصل على 0530471946.';
export const metadata: Metadata = {
  title: { absolute: title }, description,
  applicationName: 'نجار تبوك', authors: [{ name: 'نجار تبوك' }],
  keywords: ['نجار بتبوك', 'صيانة أبواب تبوك', 'فك غرف نوم تبوك', 'صيانة غرف نوم تبوك'],
  alternates: { canonical: process.env.TABUK_LANDING_ONLY === 'true' ? 'https://najjar-tabuk.vercel.app/' : '/tabuk' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title, description, siteName: 'نجار تبوك', locale: 'ar_SA', type: 'website', url: 'https://najjar-tabuk.vercel.app/', images: [{url: 'https://najjar-tabuk.vercel.app/images/tabuk/wardrobe.webp', alt: 'دولاب خشبي بأبواب زجاجية'}] },
  twitter: { card: 'summary_large_image', title, description, images: ['https://najjar-tabuk.vercel.app/images/tabuk/wardrobe.webp'] },
};
const services = [
  { icon: DoorOpen, title: 'صيانة الأبواب', text: 'ضبط الأبواب التي تحتك بالأرض أو لا تغلق جيدًا، وفحص المفصلات والأقفال حسب حالة الباب.' },
  { icon: BedDouble, title: 'فك وتركيب غرف النوم', text: 'فك السرير والدولاب والتسريحة وإعادة تركيبها، مع تنظيم القطع والملحقات أثناء العمل.' },
  { icon: Wrench, title: 'صيانة غرف النوم والدواليب', text: 'فحص ثبات السرير، ضبط أبواب الدواليب، وصيانة المفصلات ومجاري الأدراج حسب الحاجة.' },
];
const photos = [
  { file: 'wardrobe', title: 'الدواليب وغرف النوم', alt: 'دولاب ملابس بأبواب خشبية وزجاجية وإضاءة داخلية' },
  { file: 'tv-unit', title: 'وحدات التلفزيون والديكور', alt: 'وحدة تلفزيون خشبية مع رفوف وإضاءة خلفية' },
  { file: 'doors', title: 'الأبواب الخشبية', alt: 'ثلاثة أبواب خشبية بدرجات مختلفة' },
];
export default function TabukLandingPage() {
  return <>
    <header className="border-b border-border-subtle bg-warm-white">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3"><span className="p-3 rounded-xl bg-charcoal text-sand"><Hammer aria-hidden className="size-6" /></span><div><p className="font-bold text-lg">نجار تبوك</p><p className="text-xs text-charcoal-muted">صيانة أبواب · غرف نوم · دواليب</p></div></div>
        <span className="flex items-center gap-1.5 text-sm text-wood font-semibold"><MapPin aria-hidden className="size-4" /> تبوك</span>
      </div>
    </header>
    <main className="flex-1 pb-32 sm:pb-24">
      <section className="relative border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 py-10 md:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex gap-2 items-center rounded-full border border-border-subtle bg-warm-white px-4 py-2 text-xs font-semibold"><span className="size-2 rounded-full bg-wood" />خدمات نجارة للمنازل في تبوك</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.3]">بابك ما يقفل؟<br /><span className="text-wood">غرفة نومك تحتاج صيانة؟</span></h1>
            <p className="text-lg text-charcoal-muted leading-8 max-w-2xl">نجار بتبوك لصيانة الأبواب الخشبية، فك وتركيب غرف النوم، وصيانة الدواليب والأثاث. أرسل صورة للمشكلة واسم الحي، ونتواصل معك لتحديد العمل والموعد المناسب.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">{['صيانة أبواب', 'فك وتركيب غرف نوم', 'صيانة غرف نوم'].map(text => <span key={text} className="flex items-center gap-2"><Check aria-hidden className="size-4 text-wood" />{text}</span>)}</div>
            <TabukContact location="hero" />
            <p className="text-xs text-charcoal-muted">تحديد التكلفة والموعد بعد معرفة تفاصيل العمل وحالة الأثاث.</p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-h-[550px] rounded-3xl overflow-hidden border-4 border-warm-white shadow-2xl"><Image src="/images/tabuk/wardrobe.webp" alt={photos[0].alt} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div>
            <div className="absolute bottom-5 right-5 left-5 p-4 rounded-xl bg-warm-white/95 border border-border-subtle backdrop-blur-sm"><p className="font-bold text-wood">خلّنا نشوف المشكلة</p><p className="text-sm mt-1 text-charcoal-muted">صورة واضحة + اسم الحي + نوع الخدمة</p></div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-14 md:py-20">
        <p className="text-wood text-sm font-semibold mb-3">الخدمة اللي تحتاجها</p><h2 className="text-3xl md:text-4xl font-bold mb-8">أعمال النجارة والصيانة في تبوك</h2>
        <div className="grid md:grid-cols-3 gap-5">{services.map(({ icon: Icon, title, text }) => <article key={title} className="p-7 rounded-2xl bg-warm-white border border-border-subtle"><span className="inline-flex p-3 rounded-xl bg-sand-light text-wood mb-5"><Icon aria-hidden className="size-6" /></span><h3 className="font-bold text-xl mb-3">{title}</h3><p className="text-charcoal-muted leading-7">{text}</p></article>)}</div>
      </section>
      <section className="bg-beige-subtle border-y border-border-subtle py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5"><p className="text-wood text-sm font-semibold mb-3">تفاصيل الخشب والأثاث</p><h2 className="text-3xl md:text-4xl font-bold mb-8">صور الأبواب والدواليب والديكور</h2><div className="grid md:grid-cols-3 gap-6">{photos.map(photo => <figure key={photo.file} className="bg-warm-white border border-border-subtle rounded-2xl overflow-hidden"><div className="relative aspect-square"><Image src={`/images/tabuk/${photo.file}.webp`} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" /></div><figcaption className="p-5 font-semibold">{photo.title}</figcaption></figure>)}</div></div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div><p className="text-wood text-sm font-semibold mb-3">طلب الخدمة سهل</p><h2 className="text-3xl md:text-4xl font-bold leading-snug">من صورة للمشكلة<br />إلى تحديد العمل المطلوب</h2></div>
        <ol className="space-y-5">{[['أرسل صورة أو فيديو قصير', 'وضّح المشكلة: باب، سرير، دولاب، أو غرفة نوم تحتاج فك وتركيب.'], ['اكتب اسم الحي في تبوك', 'مع تفاصيل القطع وأي ملاحظات تساعد على فهم المطلوب.'], ['اتفق على التفاصيل قبل التنفيذ', 'نتواصل معك لتوضيح نطاق العمل والتكلفة والموعد المناسب.']].map(([title, text], i) => <li key={title} className="flex gap-4"><span className="size-10 shrink-0 bg-sand-light rounded-full flex items-center justify-center font-bold text-wood">{i + 1}</span><div><h3 className="font-bold mb-1">{title}</h3><p className="text-charcoal-muted leading-7">{text}</p></div></li>)}</ol>
      </section>
      <section className="mx-5 max-w-7xl xl:mx-auto bg-charcoal text-warm-white rounded-3xl px-6 py-12 md:p-14 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">تحتاج نجار في تبوك؟</h2><p className="text-beige mb-7 leading-7">أرسل صور المشكلة على واتساب أو اتصل مباشرة ونرتّب معك التفاصيل.</p><TabukContact location="closing" /><p className="mt-6 text-xl font-semibold" dir="ltr">0530471946</p></section>
    </main>
    <footer className="border-t border-border-subtle bg-warm-white px-5 pt-6 pb-32 sm:pb-28 text-center text-sm"><p className="text-charcoal-muted mb-3">نجار تبوك — صيانة أبواب وفك وتركيب وصيانة غرف نوم</p><a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-wood hover:text-charcoal underline underline-offset-4">تم التصميم بواسطة NasharHub <ArrowLeft aria-hidden className="size-4" /></a></footer>
    <TabukContact location="floating" floating />
  </>;
}
