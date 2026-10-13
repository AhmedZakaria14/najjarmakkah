import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { JsonLd } from '@/components/seo/JsonLd';
import { ScrollProgress, PageTransition, ScrollToTopButton } from '@/components/ui/MotionComponents';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <>
    <ScrollProgress />
    <JsonLd type="WebSite" />
    <JsonLd type="LocalBusiness" />
    <Header />
    <main className="flex-1 w-full pb-16 sm:pb-20 lg:pb-0"><PageTransition>{children}</PageTransition></main>
    <Footer />
    <ScrollToTopButton />
    <MobileStickyCta />
  </>;
}
