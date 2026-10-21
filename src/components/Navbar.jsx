"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  Layers3,
  Lightbulb,
  Menu,
  Moon,
  Palette,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react";

const services = [
  {
    title: "Brand and Creative",
    description: "High-performance websites built to scale.",
    href: "/services/brand-and-creative",
    icon: Code2,
  },
  {
    title: "UI/UX & Digital Experience",
    description: "Powerful mobile and cross-platform apps.",
    href: "/services/ui-ux-digital-experience",
    icon: Cpu,
  },
  {
    title: "Web & App Development",
    description: "Digital experiences people love using.",
    href: "/services/web-app-development",
    icon: Palette,
  },
  {
    title: "AI & Automation",
    description: "Smarter workflows powered by AI.",
    href: "/services/ai-and-automation",
    icon: Lightbulb,
  },
  {
    title: "Growth & Performance Marketing",
    description: "Reliable infrastructure built for growth.",
    href: "/services/growth-performance-marketing",
    icon: Layers3,
  },
  {
    title: "Motion, 3D & Immersive",
    description: "Secure systems and expert guidance.",
    href: "/services/motion-3d-immersive",
    icon: ShieldCheck,
  },
];

const solutions = [
  {
    title: "CRM",
    description: "Customer relationship management",
    href: "/solutions/crm",
  },
  {
    title: "ERP",
    description: "Connected business operations",
    href: "/solutions/erp",
  },
  {
    title: "HRMS",
    description: "Simplified people management",
    href: "/solutions/hrms",
  },
  {
    title: "Custom Software",
    description: "Built around your business",
    href: "/solutions/custom-software",
  },
  {
    title: "Analytics",
    description: "Turn data into decisions",
    href: "/solutions/analytics",
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-us" },
  { title: "Work", href: "/work" },
  { title: "Industries", href: "/industries" },
  { title: "Insights", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
  
];

const themeStyles = {
  dark: {
    text: "text-white",
    muted: "text-white",
    panel: "bg-[#101114]/95",
    border: "border-white/10",
    hover: "hover:bg-white/[0.06]",
    divider: "border-white/10",
  },
  light: {
    text: "text-[#17171b]",
    muted: "text-black/90",
    panel: "bg-white/10 backdrop-blur-xl border border-white/20",
    border: "border-black/10",
    hover: "hover:bg-black/[0.04]",
    divider: "border-black/10",
  },
};

const linkBase =
  "flex items-center justify-between rounded-xl px-3 py-2.5 text-[16px] font-medium transition-colors";

const ctaClass =
  "group flex items-center justify-between gap-2 rounded-full bg-[#4B2E63] px-5 py-3 text-[13px] font-semibold text-[#faf8ff] transition-colors";

const iconButtonClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors";

function BrandLogo({ dark, onClick, mobile = false }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Hashhbit Studio home"
      className={`flex shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-md ${
        mobile ? "w-32" : "relative z-10 w-32 sm:w-36"
      }`}
    >
      <Image
        src="/images/logo-(2).png"
        alt="Hashhbit Studio"
        width={150}
        height={40}
        priority={!mobile}
        sizes="(max-width: 640px) 128px, 144px"
        className="h-auto max-h-10 w-full object-contain"
      />
    </Link>
  );
}

function NavLink({ item, styles, onClick, onMouseEnter}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${linkBase} ${styles.muted} ${styles.hover} hover:text-current`}
    >
      {item.title}
    </Link>
  );
}

function DropdownTrigger({ title, isOpen, onClick, onMouseEnter, styles }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      aria-expanded={isOpen}
      className={`${linkBase} gap-1.5 ${styles.muted} ${styles.hover} hover:text-current`}
    >
      {title}
      <ChevronDown
        size={14}
        className={`transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function ServiceCard({ service, styles, onClick, mobile = false }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      onClick={onClick}
      className={`group flex gap-3 rounded-2xl transition-colors  ${
        mobile ? "items-center p-3" : `p-4 ${styles.hover}`
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8FF4D]/10 text-[#b8a5ff]">
        <Icon size={20} strokeWidth={1.7} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">{service.title}</span>
        {!mobile && (
          <span className={`mt-1 block text-xs leading-5 ${styles.muted}`}>
            {service.description}
          </span>
        )}
      </span>

      {!mobile && (
        <ArrowUpRight
          size={15}
          className={`shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 ${styles.muted}`}
        />
      )}
    </Link>
  );
}

function SolutionsGrid({ styles, onClick }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {solutions.map((solution) => (
        <Link
          key={solution.title}
          href={solution.href}
          onClick={onClick}
          className={`rounded-2xl p-4 transition-colors ${styles.hover}`}
        >
          <span className="block text-sm font-semibold">{solution.title}</span>
          <span className={`mt-2 block text-xs leading-5 ${styles.muted}`}>
            {solution.description}
          </span>
        </Link>
      ))}
    </div>
  );
}

function MobileAccordion({ title, open, onToggle, styles, children }) {
  return (
    <div className={`border-b ${styles.divider}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-lg font-medium"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-1 pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const dark = theme === "dark";
  const styles = themeStyles[theme];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.theme = theme;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = theme;
  }, [theme, dark]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenus = () => {
    setDesktopMenu(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  };

  const toggleDesktopMenu = (menu) => {
    setDesktopMenu((current) => (current === menu ? null : menu));
  };

  const toggleMobileAccordion = (menu) => {
    setMobileAccordion((current) => (current === menu ? null : menu));
  };

  const themeIcon = dark ? <Sun size={17} /> : <Moon size={17} />;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 m-0 w-full p-0 ${styles.text}`}
        // onMouseLeave={() => setDesktopMenu(null)}
      >
        <div
        onMouseLeave={() => setDesktopMenu(null)}
          className={`relative flex items-center justify-between gap-3 border px-4 py-3 transition-all duration-300 sm:gap-5 sm:px-6 ${
            scrolled
              ? `${styles.panel} ${styles.border} shadow-xl shadow-black/10 backdrop-blur-2xl`
              : "border-transparent bg-transparent"
          }`}
        >
          <BrandLogo dark={dark} onClick={closeMenus} />

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center xl:flex md:gap-5"
          >
            {navLinks.slice(0, 2).map((item) => (
              <NavLink
                key={item.title}
                item={item}
                styles={styles}
                onClick={closeMenus}
                onMouseEnter={() => setDesktopMenu(null)}
              />
            ))}

            <DropdownTrigger
              title="Services"
              isOpen={desktopMenu === "services"}
              onClick={() => toggleDesktopMenu("services")}
              onMouseEnter={() => setDesktopMenu("services")}
              styles={styles}
            />

            <DropdownTrigger
              title="Solutions"
              isOpen={desktopMenu === "solutions"}
              onClick={() => toggleDesktopMenu("solutions")}
              onMouseEnter={() => setDesktopMenu("solutions")}
              styles={styles}
            />

            {navLinks.slice(2).map((item) => (
              <NavLink
                key={item.title}
                item={item}
                styles={styles}
                onClick={closeMenus}
                onMouseEnter={() => setDesktopMenu(null)}
              />
            ))}
          </nav>

          {/* Theme and actions */}
          <div className="flex shrink-0 items-center gap-6">
            {/* <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              className={`${iconButtonClass} ${styles.border} ${styles.hover}`}
            >
              {themeIcon}
            </button> */}

            <Link href="/contact" className={`${ctaClass} hidden sm:flex`}>
              Let's Build
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              aria-expanded={mobileOpen}
              className={`${iconButtonClass} ${styles.border} ${styles.hover} xl:hidden`}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Desktop dropdown */}
          <AnimatePresence>
            {desktopMenu && (
              <motion.div
                key={desktopMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.18 }}
                className={`absolute left-0 right-0 top-[calc(100%)] hidden overflow-hidden rounded-3xl border p-5 shadow-2xl backdrop-blur-2xl xl:block bg-white ${styles.border}`}
              >
                {desktopMenu === "services" ? (
                  <div className="grid grid-cols-3 gap-2">
                    {services.map((service) => (
                      <ServiceCard
                        key={service.title}
                        service={service}
                        styles={styles}
                        onClick={closeMenus}
                      />
                    ))}

                    <Link
                      href="/services"
                      onClick={closeMenus}
                      className=" max-w-[200] mt-2 flex items-center justify-between rounded-xl border border-[#C8FF4D]/20 bg-[#111111]/80 px-4 py-3 text-sm font-medium text-[#ffffff] transition-colors hover:bg-[#111111]"
                    >
                      Explore all services
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <SolutionsGrid styles={styles} onClick={closeMenus} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white/60 backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              onClick={(event) => event.stopPropagation()}
              className={`ml-auto flex h-[100dvh] w-full max-w-md flex-col overflow-y-auto border-l p-5 sm:p-7 ${styles.panel} ${styles.border} ${styles.text}`}
            >
              <div
                className={`flex items-center justify-between border-b pb-5 ${styles.divider}`}
              >
                <BrandLogo dark={dark} onClick={closeMenus} mobile />

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                  className={`${iconButtonClass} ${styles.border} ${styles.hover}`}
                >
                  <X size={19} />
                </button>
              </div>

              <nav aria-label="Mobile main navigation" className="flex-1 py-6">
                {navLinks.slice(0, 2).map((item) => (
                  <div
                    key={item.title}
                    className={`border-b ${styles.divider}`}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="flex items-center justify-between py-4 text-lg font-medium"
                    >
                      {item.title}
                      <ArrowUpRight size={17} className={styles.muted} />
                    </Link>
                  </div>
                ))}

                <MobileAccordion
                  title="Services"
                  open={mobileAccordion === "services"}
                  onToggle={() => toggleMobileAccordion("services")}
                  styles={styles}
                >
                  {services.map((service) => (
                    <ServiceCard
                      key={service.title}
                      service={service}
                      styles={styles}
                      onClick={closeMenus}
                      mobile
                    />
                  ))}

                  <Link
                    href="/services"
                    onClick={closeMenus}
                    className="block px-3 py-2 text-sm font-semibold text-[#ffffff]"
                  >
                    All services{" "}
                    <ArrowRight size={15} className="ml-1 inline" />
                  </Link>
                </MobileAccordion>

                <MobileAccordion
                  title="Solutions"
                  open={mobileAccordion === "solutions"}
                  onToggle={() => toggleMobileAccordion("solutions")}
                  styles={styles}
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.href}
                      onClick={closeMenus}
                      className={`block rounded-xl p-3 ${styles.hover}`}
                    >
                      <span className="block text-sm font-medium">
                        {solution.title}
                      </span>
                      <span className={`mt-1 block text-xs ${styles.muted}`}>
                        {solution.description}
                      </span>
                    </Link>
                  ))}
                </MobileAccordion>

                {navLinks.slice(2).map((item) => (
                  <div
                    key={item.title}
                    className={`border-b ${styles.divider}`}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="flex items-center justify-between py-4 text-lg font-medium"
                    >
                      {item.title}
                      <ArrowUpRight size={17} className={styles.muted} />
                    </Link>
                  </div>
                ))}
              </nav>

              <div className={`border-t pt-5 ${styles.divider}`}>
                {/* <button
                  type="button"
                  onClick={toggleTheme}
                  className={`mb-4 flex w-full items-center justify-between rounded-xl border p-3 text-sm ${styles.border} ${styles.hover}`}
                >
                  <span className="flex items-center gap-2">
                    {themeIcon}
                    Switch to {dark ? "light" : "dark"} mode
                  </span>
                  <ArrowRight size={16} />
                </button> */}

                <Link
                  href="/contact"
                  onClick={closeMenus}
                  className={`w-full ${ctaClass}`}
                >
                  Let's Build Something
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <p className={`mt-4 text-center text-xs ${styles.muted}`}>
                  Ideas into impact.
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
