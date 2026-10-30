"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Box,
  Cloud,
  Code,
  Cpu,
  Database,
  Settings,
  UserCheck,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* COLORS                                                             */
/* bg #FAF8FF · soft #B8A5FF · accent #6246E5 · ink #17113D           */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* CONTENT                                                            */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    title: "CRM Platforms",
    description:
      "Centralized lead management, automated sales pipeline tracking, and customer history logs.",
    icon: Users,
    href: "/services/crm",
  },
  {
    title: "ERP Systems",
    description:
      "End-to-end operational synchronization across inventory, finance, supply chain, and human resources.",
    icon: Box,
    href: "/services/erp",
  },
  {
    title: "HRMS Solutions",
    description:
      "Automated onboarding, attendance tracking, payroll calculation, and performance management dashboards.",
    icon: UserCheck,
    href: "/services/hrms",
  },
  {
    title: "Custom Enterprise Software",
    description:
      "Bespoke software applications mapped precisely to your proprietary business logic.",
    icon: Code,
    href: "/services/custom-software",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Eliminating repetitive manual processes with intelligent document processing and automated triggers.",
    icon: Cpu,
    href: "/services/ai-automation",
  },
  {
    title: "Business Intelligence Dashboards",
    description:
      "Real-time data visualization turning complex data sets into executive-level insights.",
    icon: BarChart3,
    href: "/services/business-intelligence",
  },
];

/* ------------------------------------------------------------------ */
/* MOTION VARIANTS                                                    */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ------------------------------------------------------------------ */
/* MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export function EnterpriseSolutions() {
  return (
    <section
      id="solutions"
      className="
        relative flex w-full min-h-screen items-center
        overflow-hidden bg-[#FAF8FF]
        text-[#17113D]
      "
    >
      <Backdrop />

      <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-18">
        {/* ---------------------------------------------------------- */}
        {/* HEADER                                                       */}
        {/* ---------------------------------------------------------- */}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
            <motion.p
              variants={fadeUp}
              className="font-sora text-[11px] font-semibold uppercase text-[#17113d] sm:text-[16px]"
            >
              Enterprise Solutions
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                font-sora
                text-[clamp(1.5rem,4vw,3.50rem)]
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent
                sm:mt-8
              "
            >
              {/* Technology That Solves Core Business{" "}
              <span className="text-[#6246E5]">Bottlenecks.</span> */}
              Technology That Solves Core Business Bottlenecks
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                max-w-[540px]
                font-inter
                text-[15px]
                leading-relaxed
                text-[#17113D]
                sm:mt-6
                sm:text-lg
              "
            >
              Custom-built software architecture designed to optimize internal
              operations, eliminate human error, and unify data flow.
            </motion.p>
          </motion.div>

          <HeroIllustration />
        </div>

        {/* ---------------------------------------------------------- */}
        {/* CARDS                                                        */}
        {/* ---------------------------------------------------------- */}

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:mt-14
            sm:grid-cols-2
            sm:gap-5
            lg:mt-16
            lg:grid-cols-3
          "
        >
          {solutions.map((item) => (
            <SolutionCard key={item.title} item={item} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default EnterpriseSolutions;

/* ------------------------------------------------------------------ */
/* SOLUTION CARD                                                      */
/* ------------------------------------------------------------------ */

function SolutionCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.li variants={fadeUp} className="h-full">
      <Link
        href={item.href}
        aria-label={`Learn more about ${item.title}`}
        className="
          group relative flex h-full flex-col
          rounded-2xl
          border border-[#17113D]/10
          bg-white
          p-6
          transition-all duration-500
          hover:-translate-y-1.5
          hover:border-[#6246E5]/40
          hover:shadow-[0_24px_50px_-24px_rgba(98,70,229,0.45)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#6246E5]/50
          sm:p-8
        "
      >
        <span
          className="
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            bg-[#B8A5FF]/25
            text-[#6246E5]
            transition-colors duration-500
            group-hover:bg-[#6246E5]
            group-hover:text-white
            sm:h-[70px] sm:w-[70px]
          "
        >
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
        </span>

        <h3 className="mt-6 font-sora text-[19px] font-semibold leading-snug tracking-[-0.02em] text-[#17113D] sm:text-[21px]">
          {item.title}
          <br />
        </h3>

        <p className="mt-3 flex-1 font-inter text-[15px] leading-relaxed text-[#17113D]/60">
          {item.description}
        </p>

        <ArrowRight
          aria-hidden="true"
          className="
            mt-7 h-6 w-6
            text-[#6246E5]
            transition-transform duration-300
            group-hover:translate-x-2
          "
          strokeWidth={1.6}
        />
      </Link>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/* HERO ILLUSTRATION (dashboard + floating tiles)                     */
/* All children are positioned in % so it scales with its container   */
/* ------------------------------------------------------------------ */

const bars = [30, 45, 35, 55, 40, 65, 50, 75, 60, 88];

function HeroIllustration() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease }}
      className="relative aspect-[3/2] w-full max-w-[340px] shrink-0 sm:max-w-[400px] lg:max-w-[440px]"
    >
      {/* Soft circle */}
      <div
        className="
          absolute left-[34%] top-0
          aspect-square w-[58%]
          rounded-full
          bg-[radial-gradient(circle_at_50%_40%,rgba(184,165,255,0.55),rgba(184,165,255,0.12)_70%,transparent)]
        "
      />

      {/* Connector lines */}
      <svg
        viewBox="0 0 420 280"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <motion.path
          d="M230 66 Q246 36 300 34 L338 34"
          stroke="#6246E5"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
        />
        <motion.path
          d="M270 214 Q300 238 340 214 L372 196"
          stroke="#6246E5"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.7, ease }}
        />
        <circle cx="408" cy="62" r="3" fill="#6246E5" fillOpacity="0.8" />
        <circle cx="408" cy="82" r="3" fill="#6246E5" fillOpacity="0.8" />
        <circle cx="270" cy="214" r="3" fill="#6246E5" fillOpacity="0.8" />
      </svg>

      {/* Dashboard card */}
      <div
        className="
          absolute left-0 top-[22%]
          h-[54%] w-[66%]
          rounded-2xl
          border border-white
          bg-white/85
          p-[4%]
          shadow-[0_24px_50px_-24px_rgba(98,70,229,0.45)]
          backdrop-blur
        "
      >
        <div className="flex items-center justify-between">
          <span className="h-1 w-1/3 rounded-full bg-[#6246E5]/30 sm:h-1.5" />
          <span className="flex items-center gap-1.5">
            <i className="h-1 w-1 rounded-full bg-[#B8A5FF] sm:h-1.5 sm:w-1.5" />
            <i className="h-1 w-1 rounded-full bg-[#6246E5] sm:h-1.5 sm:w-1.5" />
          </span>
        </div>

        <div className="mt-[5%] grid h-[78%] grid-cols-[1.5fr_1fr] gap-[5%]">
          {/* Left: chart + donut */}
          <div className="flex min-h-0 flex-col gap-[8%]">
            <div className="flex min-h-0 flex-1 items-end gap-[4%] border-b border-[#17113D]/10 pb-px">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ scaleY: reduce ? 1 : 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.05, ease }}
                  style={{ height: `${h}%`, originY: 1 }}
                  className="w-full rounded-t-[2px] bg-[#B8A5FF]/70"
                />
              ))}
            </div>

            <div className="flex h-[34%] items-center gap-[8%]">
              <motion.svg
                viewBox="0 0 36 36"
                className="h-full w-auto shrink-0"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="18"
                  cy="18"
                  r="13"
                  fill="none"
                  stroke="#6246E5"
                  strokeOpacity="0.15"
                  strokeWidth="5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="13"
                  fill="none"
                  stroke="#6246E5"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="52 82"
                />
              </motion.svg>

              <div className="flex flex-1 flex-col gap-1 sm:gap-1.5">
                <span className="h-[3px] w-full rounded-full bg-[#6246E5]/20 sm:h-1" />
                <span className="h-[3px] w-2/3 rounded-full bg-[#6246E5]/20 sm:h-1" />
              </div>
            </div>
          </div>

          {/* Right: two panels */}
          <div className="flex min-h-0 flex-col gap-[8%]">
            {[0, 1].map((n) => (
              <div
                key={n}
                className="flex flex-1 flex-col justify-center gap-1 rounded-lg border border-[#6246E5]/10 bg-[#FAF8FF] px-[12%] sm:gap-1.5"
              >
                <span className="h-[3px] w-full rounded-full bg-[#6246E5]/20 sm:h-1" />
                <span className="h-[3px] w-4/5 rounded-full bg-[#6246E5]/20 sm:h-1" />
                <span className="h-[3px] w-3/5 rounded-full bg-[#6246E5]/20 sm:h-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tiles */}
      <FloatTile className="left-[80%] top-[3%]" delay={0}>
        <Cloud
          className="h-[48%] w-[48%]"
          fill="currentColor"
          strokeWidth={1.5}
        />
      </FloatTile>

      <FloatTile className="left-[74%] top-[34%]" delay={0.8}>
        <Database className="h-[46%] w-[46%]" strokeWidth={1.8} />
      </FloatTile>

      <FloatTile className="left-[85%] top-[62%]" delay={1.6}>
        <Settings className="h-[46%] w-[46%]" strokeWidth={2} />
      </FloatTile>
    </motion.div>
  );
}

function FloatTile({ className = "", delay = 0, children }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`
        absolute flex aspect-square w-[15%]
        items-center justify-center
        rounded-[22%]
        border border-[#6246E5]/10
        bg-white
        text-[#6246E5]
        shadow-[0_14px_30px_-12px_rgba(98,70,229,0.45)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* BACKDROP (soft glows + faint curves, decorative only)              */
/* ------------------------------------------------------------------ */

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#B8A5FF]/15 blur-3xl" />
      <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-[#6246E5]/[0.06] blur-3xl" />

      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
        className="absolute inset-x-0 bottom-0 h-40 w-full sm:h-56"
      >
        <path
          d="M0 120 C 320 40, 620 190, 960 110 S 1300 70, 1440 120"
          stroke="#6246E5"
          strokeOpacity="0.1"
          strokeWidth="1.2"
        />
        <path
          d="M0 170 C 360 90, 700 230, 1040 160 S 1320 120, 1440 170"
          stroke="#B8A5FF"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
