"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  Phone,
  MessageCircle,
  Hammer,
  Bed,
  DoorClosed,
  Layers,
  Wrench,
  Calendar,
  MapPin,
  FileText,
  Info,
  Compass,
  Image as ImageIcon,
  BookOpen,
  ArrowLeft,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  siteConfig,
  servicesData,
  getWhatsAppUrl,
  getPhoneUrl,
  citiesData,
} from "@/lib/site-config";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(true);
  const pathname = usePathname();

  // Scroll detection for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll cleanly when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-close menu on route change
  const prevPathRef = useRef(pathname);
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  }, [pathname]);

  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  const furnitureServices = servicesData.filter((s) => s.category === "furniture");
  const bedroomServices = servicesData.filter((s) => s.category === "bedrooms" || s.category === "custom");
  const homeServices = servicesData.filter((s) => s.category === "home");

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-warm-bg/95 backdrop-blur-md shadow-sm border-b border-border-subtle/80 py-2.5 sm:py-3"
            : "bg-warm-bg/90 backdrop-blur-xs py-3 sm:py-4 border-b border-border-subtle/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              id="brand-logo"
              onClick={closeMenu}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-wood rounded-xl p-1 shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-charcoal text-warm-bg flex items-center justify-center shadow-xs group-hover:bg-wood transition-colors">
                <Hammer className="w-4 h-4 sm:w-5 sm:h-5 text-sand" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg md:text-xl text-charcoal tracking-tight group-hover:text-wood transition-colors leading-tight">
                  {siteConfig.businessShortName}
                </span>
                <span className="text-[10px] sm:text-[11px] text-charcoal-muted font-medium">
                  مكة • جدة • الطائف
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="القائمة الرئيسية">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                الرئيسية
              </Link>

              {/* Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  id="services-menu-button"
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    pathname.startsWith("/services")
                      ? "text-wood bg-sand-light/50 font-semibold"
                      : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>خدماتنا</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-wood" : "text-charcoal-muted"
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu with Motion */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      id="services-mega-menu"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-full pt-2 w-[620px] origin-top-right z-50"
                    >
                      <div className="bg-warm-white border border-border-subtle rounded-2xl p-6 shadow-xl grid grid-cols-3 gap-6">
                        {/* Column 1: Furniture */}
                        <div>
                          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border-subtle text-wood font-bold text-xs">
                            <Wrench className="w-3.5 h-3.5" />
                            <span>الأثاث والفك والتركيب</span>
                          </div>
                          <div className="space-y-1.5">
                            {furnitureServices.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={closeMenu}
                                className="block text-xs font-medium text-charcoal hover:text-wood hover:bg-sand-light/40 px-2.5 py-1.5 rounded-lg transition-colors"
                              >
                                {service.shortTitle}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Bedrooms & Custom */}
                        <div>
                          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border-subtle text-wood font-bold text-xs">
                            <Bed className="w-3.5 h-3.5" />
                            <span>غرف النوم والدواليب</span>
                          </div>
                          <div className="space-y-1.5">
                            {bedroomServices.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={closeMenu}
                                className="block text-xs font-medium text-charcoal hover:text-wood hover:bg-sand-light/40 px-2.5 py-1.5 rounded-lg transition-colors"
                              >
                                {service.shortTitle}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Home Carpentry */}
                        <div>
                          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border-subtle text-wood font-bold text-xs">
                            <DoorClosed className="w-3.5 h-3.5" />
                            <span>أعمال المنزل والأبواب</span>
                          </div>
                          <div className="space-y-1.5">
                            {homeServices.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={closeMenu}
                                className="block text-xs font-medium text-charcoal hover:text-wood hover:bg-sand-light/40 px-2.5 py-1.5 rounded-lg transition-colors"
                              >
                                {service.shortTitle}
                              </Link>
                            ))}
                          </div>

                          <div className="mt-4 pt-3 border-t border-border-subtle">
                            <Link
                              href="/services"
                              onClick={closeMenu}
                              className="text-[11px] font-bold text-wood hover:text-wood-dark flex items-center justify-between"
                            >
                              <span>عرض كافة الخدمات (10)</span>
                              <ArrowLeft className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* City Links */}
              <Link
                href="/najjar-makkah"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/najjar-makkah"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                مكة
              </Link>
              <Link
                href="/najjar-jeddah"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/najjar-jeddah"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                جدة
              </Link>
              <Link
                href="/najjar-taif"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/najjar-taif"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                الطائف
              </Link>

              <Link
                href="/gallery"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/gallery"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                معرض الأعمال
              </Link>

              <Link
                href="/blog"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                المدونة
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/about"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                من نحن
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/contact"
                    ? "text-wood bg-sand-light/50 font-semibold"
                    : "text-charcoal hover:text-wood hover:bg-beige-subtle"
                }`}
              >
                تواصل معنا
              </Link>
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="header-whatsapp-cta"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-[#1EBE5D] transition-all shadow-xs active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب</span>
                </a>
              ) : null}

              <Link
                href="/contact"
                id="header-request-cta"
                className="flex items-center gap-2 bg-charcoal text-warm-bg hover:bg-wood px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs hover:shadow-md active:scale-98"
              >
                <Calendar className="w-3.5 h-3.5 text-sand" />
                <span>اطلب الخدمة</span>
              </Link>
            </div>

            {/* Mobile Header Actions (WhatsApp + Phone + Menu Toggle) */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="تواصل واتساب مباشر"
                  className="p-2 sm:p-2.5 rounded-xl bg-[#25D366] text-white shadow-xs active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}

              {phoneUrl && (
                <a
                  href={phoneUrl}
                  aria-label="اتصال هاتفي مباشر"
                  className="p-2 sm:p-2.5 rounded-xl bg-wood text-white shadow-xs active:scale-95 transition-transform"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}

              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl bg-warm-white border border-border-subtle text-charcoal hover:bg-beige-subtle focus:outline-none focus:ring-2 focus:ring-wood active:scale-95 transition-transform cursor-pointer"
                aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة الرئيسية"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-wood" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-60 flex flex-col justify-start">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Slide-down Drawer Panel */}
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-70 bg-warm-bg border-b border-border-subtle shadow-2xl flex flex-col max-h-[88dvh] overflow-y-auto overscroll-contain rounded-b-3xl"
            >
              {/* Drawer Top Bar with Title & Explicit Close Button */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-border-subtle/80 bg-warm-white/80 sticky top-0 backdrop-blur-xs z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-charcoal text-warm-bg flex items-center justify-center">
                    <Hammer className="w-3.5 h-3.5 text-sand" />
                  </div>
                  <span className="text-sm font-bold text-charcoal">
                    {siteConfig.businessShortName} — القائمة
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 rounded-xl bg-beige-subtle text-charcoal hover:text-wood hover:bg-sand-light transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-4 max-w-lg mx-auto w-full pb-8">
                {/* Direct Quick Action CTAs */}
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 bg-charcoal text-warm-bg py-3 px-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs active:scale-98 transition-transform"
                  >
                    <Calendar className="w-4 h-4 text-sand shrink-0" />
                    <span>طلب نجار وتسعيرة</span>
                  </Link>

                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs active:scale-98 transition-transform"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>واتساب فوري</span>
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 bg-sand-light text-wood-dark border border-sand py-3 px-3 rounded-xl font-bold text-xs sm:text-sm"
                    >
                      <span>استفسار</span>
                    </Link>
                  )}
                </div>

                {/* Main Navigation Links */}
                <div className="bg-warm-white rounded-2xl p-2 sm:p-2.5 border border-border-subtle shadow-2xs divide-y divide-border-subtle/50">
                  {/* Home */}
                  <div className="py-1">
                    <Link
                      href="/"
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === "/"
                          ? "bg-sand-light/80 text-wood font-bold"
                          : "text-charcoal hover:bg-beige-subtle active:bg-sand-light/40"
                      }`}
                    >
                      <span>الرئيسية</span>
                      <ChevronLeft className="w-4 h-4 text-charcoal-muted" />
                    </Link>
                  </div>

                  {/* Services Section with Accordion */}
                  <div className="py-1">
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium">
                      <Link
                        href="/services"
                        onClick={closeMenu}
                        className={`flex-1 font-bold flex items-center gap-2 ${
                          pathname.startsWith("/services") ? "text-wood" : "text-charcoal"
                        }`}
                      >
                        <span>خدمات النجارة</span>
                        <span className="text-[10px] bg-sand-light text-wood-dark px-2 py-0.5 rounded-full font-bold">
                          10 خدمات
                        </span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                        className="p-1.5 rounded-lg hover:bg-beige-subtle text-charcoal-muted transition-colors cursor-pointer"
                        aria-label="عرض قائمة الخدمات"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileServicesAccordionOpen ? "rotate-180 text-wood" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {mobileServicesAccordionOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pr-3 pl-1 py-1 space-y-1 mr-2 border-r-2 border-sand/60">
                            {servicesData.map((s) => (
                              <Link
                                key={s.id}
                                href={`/services/${s.slug}`}
                                onClick={closeMenu}
                                className={`block px-2.5 py-2 rounded-lg text-xs transition-colors ${
                                  pathname === `/services/${s.slug}`
                                    ? "bg-sand-light text-wood font-bold"
                                    : "text-charcoal-muted hover:text-wood hover:bg-beige-subtle"
                                }`}
                              >
                                • {s.title}
                              </Link>
                            ))}

                            <Link
                              href="/services"
                              onClick={closeMenu}
                              className="flex items-center justify-between px-2.5 py-2 text-xs font-bold text-wood hover:underline"
                            >
                              <span>عرض صفحة الخدمات الشاملة</span>
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Gallery */}
                  <div className="py-1">
                    <Link
                      href="/gallery"
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === "/gallery"
                          ? "bg-sand-light/80 text-wood font-bold"
                          : "text-charcoal hover:bg-beige-subtle active:bg-sand-light/40"
                      }`}
                    >
                      <span>معرض نماذج الأعمال</span>
                      <ChevronLeft className="w-4 h-4 text-charcoal-muted" />
                    </Link>
                  </div>

                  {/* Blog */}
                  <div className="py-1">
                    <Link
                      href="/blog"
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname.startsWith("/blog")
                          ? "bg-sand-light/80 text-wood font-bold"
                          : "text-charcoal hover:bg-beige-subtle active:bg-sand-light/40"
                      }`}
                    >
                      <span>المدونة والنصائح الخشبية</span>
                      <ChevronLeft className="w-4 h-4 text-charcoal-muted" />
                    </Link>
                  </div>

                  {/* About */}
                  <div className="py-1">
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === "/about"
                          ? "bg-sand-light/80 text-wood font-bold"
                          : "text-charcoal hover:bg-beige-subtle active:bg-sand-light/40"
                      }`}
                    >
                      <span>عن الورشة وفريق العمل</span>
                      <ChevronLeft className="w-4 h-4 text-charcoal-muted" />
                    </Link>
                  </div>

                  {/* Contact */}
                  <div className="py-1">
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === "/contact"
                          ? "bg-sand-light/80 text-wood font-bold"
                          : "text-charcoal hover:bg-beige-subtle active:bg-sand-light/40"
                      }`}
                    >
                      <span>تواصل معنا وحجز موعد</span>
                      <ChevronLeft className="w-4 h-4 text-charcoal-muted" />
                    </Link>
                  </div>
                </div>

                {/* City Quick Access */}
                <div className="bg-warm-white rounded-2xl p-4 border border-border-subtle shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-wood mb-3">
                    <MapPin className="w-4 h-4 text-sand" />
                    <span>تغطية المدن المباشرة</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="/najjar-makkah"
                      onClick={closeMenu}
                      className={`text-center py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                        pathname === "/najjar-makkah"
                          ? "bg-wood text-warm-white border-wood shadow-xs"
                          : "bg-beige-subtle hover:bg-sand-light text-charcoal border-border-subtle active:scale-95"
                      }`}
                    >
                      نجار بمكة
                    </Link>
                    <Link
                      href="/najjar-jeddah"
                      onClick={closeMenu}
                      className={`text-center py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                        pathname === "/najjar-jeddah"
                          ? "bg-wood text-warm-white border-wood shadow-xs"
                          : "bg-beige-subtle hover:bg-sand-light text-charcoal border-border-subtle active:scale-95"
                      }`}
                    >
                      نجار بجدة
                    </Link>
                    <Link
                      href="/najjar-taif"
                      onClick={closeMenu}
                      className={`text-center py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                        pathname === "/najjar-taif"
                          ? "bg-wood text-warm-white border-wood shadow-xs"
                          : "bg-beige-subtle hover:bg-sand-light text-charcoal border-border-subtle active:scale-95"
                      }`}
                    >
                      نجار بالطائف
                    </Link>
                  </div>
                </div>

                {/* Working Hours & Guarantee Info */}
                <div className="text-center space-y-1 text-xs text-charcoal-muted pt-2 border-t border-border-subtle/50">
                  <div className="flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-wood" />
                    <span>ساعات العمل: يومياً ٨:٠٠ ص – ١١:٠٠ م</span>
                  </div>
                  <div className="text-[11px] text-charcoal-muted/80">
                    خدمة المنازل والشقق في مكة، جدة، والطائف
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

