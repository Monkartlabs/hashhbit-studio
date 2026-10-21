"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Code2,
  TrendingUp,
  Palette,
  Bot,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  Box,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { FiFigma } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ServicesVisualMatrix({ className = "" }) {
  const sectionRef = useRef(null);
  const router = useRouter();
  /*
   * ============================================================
   * SERVICES
   * ============================================================
   */

  const services = [
    {
      number: "01",
      name: "Branding & Creative",
      category: "Creative",
      icon: Palette,
      image: "/images/service_1.jpg",

      tagline:
        "Distinctive brands built with strategy, creativity and purpose.",

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
      name: (
        <>
          Growth & Performance
          <br />
          Marketing
        </>
      ),
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

  /*
   * ============================================================
   * SCROLL PROGRESS
   * ============================================================
   */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className={`relative bg-[#FAF8FF] ${className}`}>
      {/* ========================================================
          DESKTOP
      ======================================================== */}

      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{
          height: `${services.length * 110}vh`,
        }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="grid h-full grid-cols-2 bg-[#FAF8FF]">
            {/* ==================================================
                LEFT INTRO
            ================================================== */}

            <div className="relative flex items-center bg-[#FAF8FF] px-8 xl:px-12 2xl:px-20">
              <div className="w-full max-w-3xl">
                {/* Badge */}

                <div className="font-sora inline-flex items-center gap-2 px-4 py-2 text-[14px] font-bold uppercase tracking-widest text-[#17113d]">
                  OUR CAPABILITIES
                </div>

                {/* Main heading */}

                <h2
                  className="mt-8 whitespace-nowrap font-sora tracking-[-0.05em] text-3xl font-bold leading-[1.0] text-[clamp(1.5rem,4vw,3.50rem)] bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent"
                >
                  Everything you need to
                  <br />
                  {/* =================================================
                      CHARACTER BY CHARACTER ANIMATION
                  ================================================= */}
                  {/* <AnimatedBuiltToMove /> */}
                  Build, Launch & Scale
                </h2>

                {/* Description */}

                <div className="mt-10 flex items-center gap-4 sm:mt-30">
                  <p className="max-w-lg font-inter font-[400] text-sm leading-relaxed text-[#1c1423] md:text-base">
                    Stop juggling multiple vendors. HASHHBIT integrates
                    multi-disciplinary capabilities into a unified growth engine
                  </p>
                </div>

                <div className="translate-y-20 ml-10 flex items-center gap-4">
                  <Link
                    href="/services"
                    className="
                justify-center
                items-center
                inline-flex
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-[#282126]
                  px-5
                  py-3
                  font-sora
                  text-sm
                  font-bold
                  text-[#282126]
                  transition-colors
                  duration-500
                  hover:text-[#F7F3EC]
                "
                  >
                    <span
                      aria-hidden="true"
                      className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-[#282126]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                    />

                    <span className="relative">Explore All Services</span>
                    <ArrowUpRight
                      className="
                    ml-2
                    h-4
                    w-4
                    transition-transform
                    duration-500
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                    />
                  </Link>
                </div>

                {/* Scroll indicator */}

                <div className="mt-50 flex items-center gap-3 text-xs font-inter font-[300] uppercase tracking-[0.25em] text-[#65477F]">
                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="font-inter flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B8A6C9]"
                  >
                    ↓
                  </motion.div>
                  Scroll to explore
                </div>
              </div>
            </div>

            {/* ==================================================
                RIGHT REEL
            ================================================== */}

            <div
              role="link"
              tabIndex={0}
              aria-label="Explore all services"
              onClick={() => router.push("/services")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push("/services");
                }
              }}
              className="relative h-[calc(100%-7.5rem)] translate-y-30 overflow-hidden rounded-4xl cursor-pointer"
            >
              {/* ================================================
                  FIXED FRAME
                  Background, border, decorative circles, grid and
                  glow are rendered once and never change or
                  animate. Using services[0]'s color/accent here —
                  swap this reference if you'd rather lock the
                  frame to a different service's palette.
              ================================================ */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[min(82vh,760px)] w-full">
                  {/* Shadow */}

                  <div
                    className="absolute inset-0 translate-y-5 scale-[0.96] rounded-[2rem] opacity-30 blur-2xl"
                    style={{
                      backgroundColor: services[0].color,
                    }}
                  />

                  {/* Main card */}

                  <div
                    className="relative h-full w-full overflow-hidden rounded-[2rem] border shadow-[0_30px_100px_rgba(40,33,38,0.35)]"
                    style={{
                      backgroundColor: services[0].color,
                      borderColor: `${services[0].accent}45`,
                    }}
                  >
                    {/* Decorative circle */}

                    <div
                      className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border"
                      style={{
                        borderColor: `${services[0].accent}20`,
                      }}
                    />

                    {/* Decorative circle */}

                    <div
                      className="pointer-events-none absolute -bottom-60 -right-20 h-[600px] w-[600px] rounded-full border"
                      style={{
                        borderColor: `${services[0].accent}15`,
                      }}
                    />

                    {/* Glow */}

                    <div
                      className="pointer-events-none absolute right-[15%] top-[20%] h-40 w-40 rounded-full blur-[80px]"
                      style={{
                        backgroundColor: services[0].accent,
                        opacity: 0.22,
                      }}
                    />

                    {/* Grid */}

                    <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              ${services[0].accent} 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              90deg,
                              ${services[0].accent} 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize: "60px 60px",
                        }}
                      />
                    </div>

                    {/* ============================================
                        ANIMATED CONTENT
                        Only this part changes on scroll — the frame
                        above stays exactly as it is.
                    ============================================ */}

                    {services.map((service, index) => (
                      <VerticalReelContent
                        key={service.number}
                        service={service}
                        index={index}
                        total={services.length}
                        progress={scrollYProgress}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress dots */}

              <div className="absolute right-5 top-1/2 z-[300] -translate-y-1/2 translate-x-2 md:right-8">
                <div className="flex flex-col items-center gap-4">
                  {services.map((service, index) => {
                    const start = index / services.length;
                    const end = (index + 1) / services.length;

                    return (
                      <ReelProgress
                        key={service.number}
                        progress={scrollYProgress}
                        start={start}
                        end={end}
                        color="#FFFFFF"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE
      ======================================================== */}

      <div className="lg:hidden">
        {/* Mobile intro */}

        <div className="flex items-center bg-[#FAF8FF] px-6 py-20">
          <div className="w-full">
            <div className="font-sora inline-flex items-center gap-2 px-4 py-2 text-[14px] font-bold uppercase tracking-widest text-[#17113d]">
              Our CAPABILITIES
            </div>

            <h2 className="mt-8 font-sora text-5xl font-extrabold leading-[0.9] tracking-tight text-[#282126] sm:text-6xl">
              Digital systems
              <br />
              {/* SAME ANIMATION ON MOBILE */}
              <AnimatedBuiltToMove />
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm leading-relaxed text-[#65477F]">
                Stop juggling multiple vendors. HASHHBIT integrates
                multi-disciplinary capabilities into a unified growth engine
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/services"
                className="
                            justify-center
                            items-center
                            inline-flex
                              group
                              relative
                              overflow-hidden
                              rounded-full
                              border
                              border-[#282126]
                              px-5
                              py-3
                              font-sora
                              text-sm
                              font-bold
                              text-[#282126]
                              transition-colors
                              duration-500
                              hover:text-[#F7F3EC]
                            "
              >
                <span
                  aria-hidden="true"
                  className="
                                absolute
                                inset-0
                                origin-left
                                scale-x-0
                                bg-[#282126]
                                transition-transform
                                duration-500
                                group-hover:scale-x-100
                              "
                />

                <span className="relative">Explore All Services</span>
                <ArrowUpRight
                  className="
                                ml-2
                                h-4
                                w-4
                                transition-transform
                                duration-500
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                              "
                />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#65477F]">
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B8A6C9]"
              >
                ↓
              </motion.div>
              Scroll to explore
            </div>
          </div>
        </div>

        {/* Mobile cards */}

        <div className="bg-[#282126] mb-10 ">
          {services.map((service) => (
            <MobileServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   ANIMATED "BUILT TO MOVE"
================================================================ */

function AnimatedBuiltToMove() {
  const text = "Build, Launch & Scale";

  return (
    <motion.span
      className="mt-1 sm:mt-2 lg:mt-3 block text-[#4B2E63]  "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.25,
          },
        },
      }}
    >
      {/* {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block transform-gpu"
          variants={{
            hidden: {
              opacity: 0,
              y: 35,
              rotateX: -90,
              scale: 0.8,
              filter: "blur(8px)",
            },

            visible: {
              opacity: [0, 1, 1, 0],
              y: [35, 0, 0, -25],
              rotateX: [-90, 0, 0, 90],
              scale: [0.8, 1, 1, 0.9],
              filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(7px)"],

              transition: {
                duration: 3.8,
                delay: index * 0.09,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))} */}{" "}
      Build, Launch & Scale
    </motion.span>
  );
}

/* ================================================================
   DESKTOP VERTICAL REEL — ANIMATED CONTENT
   The colored box/frame this sits inside is now static (rendered
   once in RIGHT REEL above) — this component only ever renders the
   heading, image, description, button and progress bar, and is the
   part that moves/scales/fades as you scroll.
================================================================ */

function VerticalReelContent({ service, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;

  const enterStart = index === 0 ? 0 : Math.max(0, start - 0.08);

  const enterEnd = Math.min(1, start + 0.08);

  const exitStart = Math.max(start, end - 0.08);

  const exitEnd = Math.min(1, end + 0.08);

  const initialY = index === 0 ? "0%" : "100%";

  /* ============================================================
     CONTENT Y
  ============================================================ */

  const y = useTransform(
    progress,
    index === total - 1
      ? [enterStart, enterEnd, exitStart, end]
      : [enterStart, enterEnd, exitStart, end, exitEnd],
    index === total - 1
      ? [initialY, "0%", "0%", "0%"]
      : [initialY, "0%", "0%", "-15%", "-100%"],
  );

  /* ============================================================
     SCALE
  ============================================================ */

  const scale = useTransform(
    progress,
    index === total - 1
      ? [enterStart, enterEnd, exitStart, end]
      : [enterStart, enterEnd, exitStart, end, exitEnd],
    index === total - 1
      ? [index === 0 ? 1 : 0.9, 1, 1, 1]
      : [index === 0 ? 1 : 0.9, 1, 1, 0.97, 0.9],
  );

  /* ============================================================
     ROTATION
  ============================================================ */

  const rotateX = useTransform(
    progress,
    index === total - 1
      ? [enterStart, enterEnd, exitStart, end]
      : [enterStart, enterEnd, exitStart, end, exitEnd],
    index === total - 1
      ? [index === 0 ? 0 : 5, 0, 0, 0]
      : [index === 0 ? 0 : 5, 0, 0, -2, -5],
  );

  /* ============================================================
     OPACITY
  ============================================================ */

  const opacity = useTransform(
    progress,
    index === total - 1
      ? [enterStart, enterEnd, exitStart, end]
      : [enterStart, enterEnd, exitStart, end, exitEnd],
    index === total - 1
      ? [index === 0 ? 1 : 0, 1, 1, 1]
      : [index === 0 ? 1 : 0, 1, 1, 0.85, 0],
  );

  /* ============================================================
     BLUR
  ============================================================ */

  const blur = useTransform(
    progress,
    index === total - 1
      ? [enterStart, enterEnd, exitStart, end]
      : [enterStart, enterEnd, exitStart, end, exitEnd],
    index === total - 1
      ? [index === 0 ? "0px" : "8px", "0px", "0px", "0px"]
      : [index === 0 ? "0px" : "8px", "0px", "0px", "1px", "8px"],
  );

  const filter = useTransform(blur, (value) => `blur(${value})`);

  /* ============================================================
     CONTENT PROGRESS
  ============================================================ */

  const cardProgress = useTransform(progress, [start, end], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        y,
        scale,
        rotateX,
        opacity,
        filter,
        zIndex: total - index,
        transformPerspective: 1200,
      }}
      className="absolute inset-0 flex h-full flex-col p-6 sm:p-8 md:p-9 xl:p-10"
    >
      {/* Service heading */}

      <div className="relative -top-2 flex w-full shrink-0 flex-col items-center text-center">
        <h3
          className="
    w-full
    max-w-full
    px-2
    text-center
    font-sora
    text-[clamp(1.5rem,2.6vw,3rem)]
    font-extrabold
    leading-tight
    tracking-tight
    text-[#F7F3EC]
    break-words
  "
        >
          {service.name}
        </h3>

        <div
          className="mt-5 h-1 w-56 rounded-full"
          style={{
            backgroundColor: service.accent,
          }}
        />
      </div>

      {/* Image */}

      <div className="relative -top-5 mt-6 min-h-0 flex-1">
        <div
          className="relative h-full w-full overflow-hidden rounded-[1.5rem] border"
          style={{
            borderColor: `${service.accent}35`,
          }}
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority={index === 0}
            sizes="(min-width: 1536px) 45vw, (min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />

          {/* Image gradient */}

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  ${service.color}05 0%,
                  transparent 50%,
                  ${service.color}45 100%
                )
              `,
            }}
          />

          {/* Category */}

          {/* <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">
            <span
              className="
                group
                rounded-full
                border
                px-3
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                backdrop-blur-md
                transition-all
                duration-300
                ease-out
                hover:-translate-y-0.5
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                sm:text-[9px] 
              "
              style={{
                color: service.accent,
                backgroundColor: `${service.color}90`,
                borderColor: `${service.accent}35`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 18px ${service.accent}55`;

                e.currentTarget.style.borderColor = `${service.accent}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;

                e.currentTarget.style.borderColor = `${service.accent}35`;
              }}
            >
              {service.category}
            </span>
          </div> */}
        </div>
      </div>

      {/* Description */}

      <div className="relative -top-5 mt-5 shrink-0">
        <p
          className="text-center font-sora text-sm font-medium leading-relaxed sm:text-[15px]"
          style={{
            color: service.accent,
          }}
        >
          {service.tagline}
        </p>

        {/* Features */}

        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {service.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{
                  backgroundColor: service.accent,
                }}
              />

              <span className="font-inter font-[600] text-[12px] text-white/45">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================
          EXPLORE BUTTON
      ================================================== */}

      <Link
        href={`/services`}
        className="
          group
          absolute
          bottom-3
          right-3
          inline-flex
          items-center
          gap-2
          overflow-hidden
          rounded-full
          border
          border-[#D6B77A]/40
          bg-[#F7F3EC]/95
          px-6
          py-3
          font-sora
          text-xs
          font-semibold
          text-[#282126]
          shadow-[0_8px_30px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:scale-[1.03]
          hover:border-[#D6B77A]/80
          hover:bg-[#FFF9EC]
          hover:text-[#6F5630]
          hover:shadow-[0_12px_35px_rgba(214,183,122,0.25)]
        "
      >
        {/* Premium shine */}

        <span
          className="
            pointer-events-none
            absolute
            -left-[120%]
            top-0
            h-full
            w-[70%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            opacity-0
            transition-all
            duration-700
            group-hover:left-[130%]
            group-hover:opacity-100
          "
        />

        {/* Gold glow */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            opacity-0
            shadow-[inset_0_0_20px_rgba(214,183,122,0.18)]
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Character animation */}

        <span className="relative z-10 inline-flex">
          {"Explore".split("").map((char, index) => (
            <span
              key={index}
              className="
                  text-[#17113D]
                  inline-block
                  transform-gpu
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:rotate-[360deg]
                  font-inter
                "
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </span>

        <ArrowUpRight
          className="
            relative
            z-10
            h-4
            w-4
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </Link>

      {/* Card progress */}

      <motion.div
        className="absolute bottom-0 left-0 h-[3px]"
        style={{
          backgroundColor: service.accent,
          width: cardProgress,
        }}
      />
    </motion.div>
  );
}

/* ================================================================
   PROGRESS DOT
================================================================ */

function ReelProgress({ progress, start, end, color }) {
  const scale = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [1, 1.8, 1],
  );

  const opacity = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [0.35, 1, 0.35],
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        backgroundColor: color,
        boxShadow: `0 0 12px ${color}`,
      }}
      className="h-2.5 w-2.5 rounded-full"
    />
  );
}

/* ================================================================
   MOBILE SERVICE CARD
================================================================ */

function MobileServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="relative min-h-screen p-5 sm:p-8"
      style={{
        backgroundColor: service.color,
      }}
    >
      <div
        className="relative min-h-[calc(100vh-2.5rem)] overflow-hidden rounded-[2rem] border"
        style={{
          borderColor: `${service.accent}45`,
        }}
      >
        {/* Background circle */}

        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border"
          style={{
            borderColor: `${service.accent}20`,
          }}
        />

        {/* Glow */}

        <div
          className="pointer-events-none absolute right-[10%] top-[25%] h-40 w-40 rounded-full blur-[80px]"
          style={{
            backgroundColor: service.accent,
            opacity: 0.2,
          }}
        />

        {/* Grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(
                  ${service.accent} 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  ${service.accent} 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}

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

              <div>
                {/* <p
                  className="font-mono text-[9px] uppercase tracking-[0.3em]"
                  style={{
                    color: service.accent,
                  }}
                >
                  {service.category}
                </p> */}

                <p className="mt-1 text-[9px] uppercase tracking-widest text-white/30">
                  Hashhbit Studio
                </p>
              </div>
            </div>

            <div
              className="text-6xl font-bold leading-none"
              style={{
                color: service.accent,
                opacity: 0.13,
              }}
            >
              {service.number}
            </div>
          </div>

          {/* ==================================================
              MOBILE SERVICE CONTENT
          ================================================== */}

          <div className="flex-1 py-10">
            {/* Main heading */}

            <div className="text-center">
              <div
                className="mx-auto mb-5 h-1 w-12 rounded-full"
                style={{
                  backgroundColor: service.accent,
                }}
              />

              <h3
                className="
                  whitespace-nowrap
                  font-sora
                  text-[22px]
                  font-black
                  leading-none
                  tracking-tight
                  text-[#F7F3EC]
                "
              >
                {service.name}
              </h3>
            </div>

            {/* Image */}

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
                  background: `
                    linear-gradient(
                      180deg,
                      transparent 40%,
                      ${service.color}cc 100%
                    )
                  `,
                }}
              />
            </div>

            {/* Description */}

            <div className="mt-7 text-center">
              <p
                className="text-sm leading-relaxed font-inter"
                style={{
                  color: service.accent,
                }}
              >
                {service.tagline}
              </p>

              <p className="mt-3 text-xs font-inter leading-relaxed text-white/50">
                {service.description}
              </p>
            </div>

            {/* Capabilities */}

            <div
              className="mt-8 rounded-3xl border p-5 font-inter font-thin"
              style={{
                backgroundColor: `${service.accent}10`,
                borderColor: `${service.accent}30`,
              }}
            >
              <div
                className="mb-5 font-inter text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: service.accent,
                }}
              >
                System Capabilities
              </div>

              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{
                        color: service.accent,
                      }}
                    />

                    <span className="text-sm font-inter text-[#F7F3EC]/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: service.accent,
                }}
              />

              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: service.accent,
                }}
              >
                Active System
              </span>
            </div>

            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#F7F3EC] px-6 py-3 text-xs font-bold text-[#282126]"
            >
              Explore
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
