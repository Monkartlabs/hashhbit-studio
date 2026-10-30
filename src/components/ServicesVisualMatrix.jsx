"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Box,
  CheckCircle,
  Code2,
  Palette,
  TrendingUp,
} from "lucide-react";
import { FiFigma } from "react-icons/fi";

/* ================================================================
   CONSTANTS
================================================================ */

const SERVICES_HREF = "/services";

/**
 * Desktop sizing (lg and up). The card is always 32rem tall, on every screen.
 *
 * The sticky "stage" is only as tall as the card plus a little padding
 * (36rem), NOT a full screen. It is pinned in the vertical centre of the
 * viewport, so the section never adds extra white bands above or below
 * the card before and after the pinned scroll.
 *
 * Values are in px (16px root) because Framer's scroll offsets need px.
 */
const CARD_HEIGHT_PX = 512; // 32rem
const STAGE_HEIGHT_PX = 576; // 36rem = card + 2rem padding top/bottom

const SERVICES = [
  {
    number: "01",
    name: "Digital Marketing & Branding",
    category: "Creative",
    icon: Palette,
    image: "/images/service_1.jpg",
    tagline: "Distinctive brands built with strategy, creativity and purpose.",
    description:
      "We craft memorable brand identities and cohesive visual systems that communicate your values, connect with your audience and set your business apart.",
    color: "#282126",
    accent: "#B8A6C9",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity & Naming",
      "Brand Guidelines",
      "Packaging & Brand Collateral",
    ],
  },
  {
    number: "02",
    name: "UI/UX & Digital Experience",
    category: "Creative",
    icon: FiFigma,
    image: "/images/service_2.jpg",
    tagline:
      "Intuitive interfaces and seamless digital experiences designed around your users.",
    description:
      "We design user-centered digital experiences through research, wireframing and prototyping, creating scalable design systems and intuitive product interfaces that improve usability and engagement.",
    color: "#173C3A",
    accent: "#8FC9B5",
    features: [
      "User Research & Wireframing",
      "SaaS Product UX",
      "UI/UX Design Systems",
      "Dashboards & Data Visualization",
    ],
  },
  {
    number: "03",
    name: "Web & App Development",
    category: "Engineering",
    icon: Code2,
    image: "/images/service_3.jpg",
    tagline:
      "High-performance digital products engineered to scale with your business.",
    description:
      "We build custom web applications, high-converting e-commerce platforms and mobile apps backed by robust APIs and scalable cloud architecture.",
    color: "#282126",
    accent: "#D9CEE3",
    features: [
      "Custom Web Applications",
      "E-commerce Development",
      "iOS & Android Apps",
      "API Integration & Cloud Architecture",
    ],
  },
  {
    number: "04",
    name: "AI & Automation",
    category: "Technology",
    icon: Bot,
    image: "/images/service_4.jpg",
    tagline:
      "Smarter workflows and intelligent systems that help your business do more.",
    description:
      "We integrate AI-powered tools into your business to automate repetitive tasks, streamline operations and create intelligent customer experiences that scale efficiently.",
    color: "#253451",
    accent: "#9CB9E8",
    features: [
      "Custom AI Chatbots",
      "Workflow Automation",
      "LLM Integration",
      "Intelligent CRM Systems",
    ],
  },
  {
    number: "05",
    name: "Growth & Performance Marketing",
    // Forces the intended two-line heading without changing the plain-text name.
    nameLines: ["Growth & Performance", "Marketing"],
    category: "Marketing",
    icon: TrendingUp,
    image: "/images/service_5.avif",
    tagline:
      "Data-driven marketing strategies built to attract, convert and retain customers.",
    description:
      "We combine performance advertising, SEO and lifecycle marketing to reach the right audience, optimize conversions and drive measurable business growth.",
    color: "#6B4F32",
    accent: "#D6B77A",
    features: [
      "Meta, Google & LinkedIn Ads",
      "Full-Funnel Marketing Strategy",
      "Search Engine Optimization (SEO)",
      "Email & WhatsApp Marketing",
    ],
  },
  {
    number: "06",
    name: "Motion, 3D & Immersive",
    category: "Creative",
    icon: Box,
    image: "/images/service_6.avif",
    tagline:
      "Bring ideas to life through motion, dimensional design and immersive storytelling.",
    description:
      "We create captivating product animations, realistic 3D visuals and immersive digital experiences that communicate complex ideas and make brands unforgettable.",
    color: "#382A42",
    accent: "#C8A8DF",
    features: [
      "Product Animations",
      "3D Visualizations",
      "Animated Explainer Videos",
      "AR/VR Experiences",
    ],
  },
];

/** The reel frame is static, so it always uses the first service's palette. */
const FRAME_THEME = SERVICES[0];

const HEADING_GRADIENT =
  "bg-gradient-to-r from-[#17113D] via-[#4e3aa8] to-[#4c3895] bg-clip-text text-transparent";

/* ================================================================
   SMALL SHARED PIECES
================================================================ */

function ServiceTitle({ service }) {
  if (!service.nameLines) return service.name;

  return service.nameLines.map((line, i) => (
    <span key={line}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}

function SectionHeading({ className = "" }) {
  return (
    <h2
      className={`font-sora text-[clamp(1.5rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.05em] ${HEADING_GRADIENT} ${className}`}
    >
      Everything you need to
      <br />
      Build, Launch & Scale
    </h2>
  );
}

function OutlineLinkButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#282126] px-5 py-3 font-sora text-sm font-bold text-[#282126] transition-colors duration-500 hover:text-[#F7F3EC]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-[#282126] transition-transform duration-500 group-hover:scale-x-100"
      />
      <span className="relative">{children}</span>
      <ArrowUpRight className="relative ml-2 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

function ScrollHint({ className = "", textClassName = "" }) {
  return (
    <div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#65477F] ${textClassName} ${className}`}
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B8A6C9] font-inter"
      >
        ↓
      </motion.div>
      Scroll to explore
    </div>
  );
}

/** Decorative grid used on both the desktop frame and mobile cards. */
function GridOverlay({ accent }) {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
================================================================ */

export default function ServicesVisualMatrix({ className = "px-4 md:px-6 pb-8 md:pb-12 lg:pb-18 pt-4 sm:pt-8" }) {
  return (
    <section id="services" className={`relative bg-[#FAF8FF] ${className}`}>
      <DesktopLayout />
      <MobileLayout />
    </section>
  );
}

/* ================================================================
   DESKTOP
================================================================ */

/** Top offset that vertically centres the stage in the viewport. */
function useCenteredStageTop() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const update = () =>
      setTop(Math.max(0, Math.round((window.innerHeight - STAGE_HEIGHT_PX) / 2)));

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return top;
}

function DesktopLayout() {
  const trackRef = useRef(null);
  const stageTop = useCenteredStageTop();

  // Progress runs from the moment the stage pins (track top reaches
  // `stageTop`) until it unpins (track bottom reaches the stage bottom).
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: [`start ${stageTop}px`, `end ${stageTop + STAGE_HEIGHT_PX}px`],
  });

  return (
    // The track provides the scroll distance; the sticky stage pins inside it.
    <div
      ref={trackRef}
      className="relative hidden lg:block"
      style={{
        height: `calc(${(SERVICES.length - 1) * 100}vh + ${STAGE_HEIGHT_PX}px)`,
      }}
    >
      <div
        className="sticky flex items-center bg-[#FAF8FF]"
        style={{
          top: `max(0px, calc((100vh - ${STAGE_HEIGHT_PX}px) / 2))`,
          height: STAGE_HEIGHT_PX,
        }}
      >
        <div
          className="container mx-auto grid grid-cols-2 gap-5 px-4 md:px-6"
          style={{ height: CARD_HEIGHT_PX }}
        >
          <DesktopIntro />
          <DesktopReel progress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}

function DesktopIntro() {
  return (
    // Same height as the reel: heading hugs the top edge, scroll hint the bottom edge.
    <div className="flex h-full w-full max-w-3xl flex-col justify-between">
      <div>
        <div className="font-sora text-[11px] font-semibold uppercase text-[#17113d] sm:text-base">
          Our Capabilities
        </div>

        <SectionHeading className="mt-8" />
      </div>

      <div>
        <p className="max-w-lg font-inter text-sm font-normal leading-relaxed text-[#1c1423] md:text-base">
          Stop juggling multiple vendors. HASHHBIT integrates multi-disciplinary
          capabilities into a unified growth engine
        </p>

        <div className="mt-8">
          <OutlineLinkButton href={SERVICES_HREF}>
            Explore All Services
          </OutlineLinkButton>
        </div>
      </div>

      <ScrollHint textClassName="font-inter font-light" />
    </div>
  );
}

function DesktopReel({ progress }) {
  const router = useRouter();
  const goToServices = () => router.push(SERVICES_HREF);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToServices();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label="Explore all services"
      onClick={goToServices}
      onKeyDown={handleKeyDown}
      className="relative h-full w-full cursor-pointer"
    >
      <ReelFrame>
        {SERVICES.map((service, index) => (
          <ReelSlide
            key={service.number}
            service={service}
            index={index}
            total={SERVICES.length}
            progress={progress}
          />
        ))}
      </ReelFrame>

      <ProgressDots progress={progress} />
    </div>
  );
}

/** Static frame: background, border, circles, glow and grid never animate. */
function ReelFrame({ children }) {
  const { color, accent } = FRAME_THEME;

  return (
    <>
      {/* Shadow */}
      <div
        className="absolute inset-0 translate-y-5 scale-[0.96] rounded-[2rem] opacity-30 blur-2xl"
        style={{ backgroundColor: color }}
      />

      {/* Card */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[2rem] border shadow-[0_30px_100px_rgba(40,33,38,0.35)]"
        style={{ backgroundColor: color, borderColor: `${accent}45` }}
      >
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border"
          style={{ borderColor: `${accent}20` }}
        />
        <div
          className="pointer-events-none absolute -bottom-60 -right-20 h-[600px] w-[600px] rounded-full border"
          style={{ borderColor: `${accent}15` }}
        />
        <div
          className="pointer-events-none absolute right-[15%] top-[20%] h-40 w-40 rounded-full blur-[80px]"
          style={{ backgroundColor: accent, opacity: 0.22 }}
        />
        <GridOverlay accent={accent} />

        {children}
      </div>
    </>
  );
}

function ProgressDots({ progress }) {
  return (
    <div className="absolute right-5 top-1/2 z-[300] flex -translate-y-1/2 translate-x-2 flex-col items-center gap-4 md:right-8">
      {SERVICES.map((service, index) => (
        <ProgressDot
          key={service.number}
          progress={progress}
          start={index / SERVICES.length}
          end={(index + 1) / SERVICES.length}
        />
      ))}
    </div>
  );
}

function ProgressDot({ progress, start, end }) {
  const mid = (start + end) / 2;
  const scale = useTransform(progress, [start, mid, end], [1, 1.8, 1]);
  const opacity = useTransform(progress, [start, mid, end], [0.35, 1, 0.35]);

  return (
    <motion.div
      className="h-2.5 w-2.5 rounded-full"
      style={{
        scale,
        opacity,
        backgroundColor: "#FFFFFF",
        boxShadow: "0 0 12px #FFFFFF",
      }}
    />
  );
}

/* ================================================================
   DESKTOP SLIDE (animated content)
================================================================ */

/**
 * Builds the scroll keyframes + matching output values for one slide.
 * The last slide has no exit phase, so it gets one fewer keyframe.
 */
function useSlideMotion(progress, index, total) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const start = index / total;
  const end = (index + 1) / total;

  const enterStart = isFirst ? 0 : Math.max(0, start - 0.08);
  const enterEnd = Math.min(1, start + 0.08);
  const exitStart = Math.max(start, end - 0.08);
  const exitEnd = Math.min(1, end + 0.08);

  const input = isLast
    ? [enterStart, enterEnd, exitStart, end]
    : [enterStart, enterEnd, exitStart, end, exitEnd];

  const initialY = isFirst ? "0%" : "100%";
  const initialScale = isFirst ? 1 : 0.9;
  const initialRotate = isFirst ? 0 : 5;
  const initialOpacity = isFirst ? 1 : 0;
  const initialBlur = isFirst ? "0px" : "8px";

  const y = useTransform(
    progress,
    input,
    isLast ? [initialY, "0%", "0%", "0%"] : [initialY, "0%", "0%", "-15%", "-100%"],
  );
  const scale = useTransform(
    progress,
    input,
    isLast ? [initialScale, 1, 1, 1] : [initialScale, 1, 1, 0.97, 0.9],
  );
  const rotateX = useTransform(
    progress,
    input,
    isLast ? [initialRotate, 0, 0, 0] : [initialRotate, 0, 0, -2, -5],
  );
  const opacity = useTransform(
    progress,
    input,
    isLast ? [initialOpacity, 1, 1, 1] : [initialOpacity, 1, 1, 0.85, 0],
  );
  const blur = useTransform(
    progress,
    input,
    isLast
      ? [initialBlur, "0px", "0px", "0px"]
      : [initialBlur, "0px", "0px", "1px", "8px"],
  );
  const filter = useTransform(blur, (value) => `blur(${value})`);
  const barWidth = useTransform(progress, [start, end], ["0%", "100%"]);

  return { y, scale, rotateX, opacity, filter, barWidth };
}

function ReelSlide({ service, index, total, progress }) {
  const { y, scale, rotateX, opacity, filter, barWidth } = useSlideMotion(
    progress,
    index,
    total,
  );

  return (
    <motion.div
      className="absolute inset-0 flex h-full flex-col p-6 sm:p-8 md:p-9 xl:p-10"
      style={{
        y,
        scale,
        rotateX,
        opacity,
        filter,
        zIndex: total - index,
        transformPerspective: 1200,
      }}
    >
      {/* Heading */}
      <div className="relative -top-2 flex w-full shrink-0 flex-col items-center text-center">
        <h3 className="w-full max-w-full break-words px-2 text-center font-sora text-[clamp(1.5rem,2.6vw,3rem)] font-extrabold leading-tight tracking-tight text-[#F7F3EC]">
          <ServiceTitle service={service} />
        </h3>
        <div
          className="mt-5 h-1 w-56 rounded-full"
          style={{ backgroundColor: service.accent }}
        />
      </div>

      {/* Image — flex-1 so it absorbs any extra height on large screens */}
      <div className="relative -top-5 mt-6 min-h-0 flex-1">
        <div
          className="relative h-full w-full overflow-hidden rounded-[1.5rem] border"
          style={{ borderColor: `${service.accent}35` }}
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority={index === 0}
            sizes="(min-width: 1536px) 45vw, (min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${service.color}05 0%, transparent 50%, ${service.color}45 100%)`,
            }}
          />
        </div>
      </div>

      {/* Tagline + features */}
      <div className="relative -top-5 mt-5 shrink-0">
        <p
          className="text-center font-sora text-sm font-medium leading-relaxed sm:text-[15px]"
          style={{ color: service.accent }}
        >
          {service.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
              <span className="font-inter text-[12px] font-semibold text-white/45">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ExploreButton />

      {/* Slide progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px]"
        style={{ backgroundColor: service.accent, width: barWidth }}
      />
    </motion.div>
  );
}

function ExploreButton() {
  return (
    <Link
      href={SERVICES_HREF}
      className="group absolute bottom-3 right-3 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D6B77A]/40 bg-[#F7F3EC]/95 px-6 py-3 font-sora text-xs font-semibold text-[#282126] shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#D6B77A]/80 hover:bg-[#FFF9EC] hover:text-[#6F5630] hover:shadow-[0_12px_35px_rgba(214,183,122,0.25)]"
    >
      {/* Shine sweep */}
      <span className="pointer-events-none absolute -left-[120%] top-0 h-full w-[70%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

      {/* Inner glow */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-[inset_0_0_20px_rgba(214,183,122,0.18)] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Letter spin */}
      <span className="relative z-10 inline-flex" aria-hidden="true">
        {"Explore".split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transform-gpu font-inter text-[#17113D] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[360deg]"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="sr-only">Explore</span>

      <ArrowUpRight className="relative z-10 h-4 w-4 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </Link>
  );
}

/* ================================================================
   MOBILE
================================================================ */

function MobileLayout() {
  return (
    <div className="lg:hidden">
      <div className="bg-[#FAF8FF] px-4 py-8">
        <div className="font-sora text-[11px] font-semibold uppercase text-[#17113d] sm:text-base">
          Our Capabilities
        </div>

        <SectionHeading className="mt-8 whitespace-nowrap !text-[clamp(1.5rem,7vw,3.5rem)]" />

        <p className="mt-8 text-sm leading-relaxed text-[#65477F]">
          Stop juggling multiple vendors. HASHHBIT integrates multi-disciplinary
          capabilities into a unified growth engine
        </p>

        <div className="mt-10">
          <OutlineLinkButton href={SERVICES_HREF}>
            Explore All Services
          </OutlineLinkButton>
        </div>

        <ScrollHint className="mt-12" textClassName="font-bold" />
      </div>

      <div className="mb-10 bg-[#282126]">
        {SERVICES.map((service) => (
          <MobileServiceCard key={service.number} service={service} />
        ))}
      </div>
    </div>
  );
}

function MobileServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="relative min-h-screen p-5 sm:p-8"
      style={{ backgroundColor: service.color }}
    >
      <div
        className="relative min-h-[calc(100vh-2.5rem)] overflow-hidden rounded-[2rem] border"
        style={{ borderColor: `${service.accent}45` }}
      >
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border"
          style={{ borderColor: `${service.accent}20` }}
        />
        <div
          className="pointer-events-none absolute right-[10%] top-[25%] h-40 w-40 rounded-full blur-[80px]"
          style={{ backgroundColor: service.accent, opacity: 0.2 }}
        />
        <GridOverlay accent={service.accent} />

        <div className="relative flex min-h-[calc(100vh-2.5rem)] flex-col p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                style={{
                  backgroundColor: `${service.accent}15`,
                  borderColor: `${service.accent}35`,
                  color: service.accent,
                }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/30">
                Hashhbit Studio
              </p>
            </div>

            <div
              className="text-6xl font-bold leading-none"
              style={{ color: service.accent, opacity: 0.13 }}
            >
              {service.number}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 py-10">
            <div className="text-center">
              <div
                className="mx-auto mb-5 h-1 w-12 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
              <h3 className="font-sora text-[clamp(1rem,3.5vh,3rem)] font-black leading-none tracking-tight text-[#F7F3EC]">
                <ServiceTitle service={service} />
              </h3>
            </div>

            <div className="relative mt-8 h-64 overflow-hidden rounded-3xl border sm:h-80">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 1023px) 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, ${service.color}cc 100%)`,
                }}
              />
            </div>

            <div className="mt-7 text-center font-inter">
              <p
                className="text-sm leading-relaxed"
                style={{ color: service.accent }}
              >
                {service.tagline}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/50">
                {service.description}
              </p>
            </div>

            <div
              className="mt-8 rounded-3xl border p-5 font-inter font-thin"
              style={{
                backgroundColor: `${service.accent}10`,
                borderColor: `${service.accent}30`,
              }}
            >
              <div
                className="mb-5 text-[9px] uppercase tracking-[0.25em]"
                style={{ color: service.accent }}
              >
                System Capabilities
              </div>

              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: service.accent }}
                    />
                    <span className="text-sm text-[#F7F3EC]/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: service.accent }}
              >
                Active System
              </span>
            </div>

            <Link
              href={SERVICES_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#F7F3EC] px-6 py-3 text-xs font-bold text-[#282126]"
            >
              Explore
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}