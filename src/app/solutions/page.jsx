"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const FS = "font-[family-name:var(--font-sora)]";
const FI = "font-[family-name:var(--font-inter)]";

/* Palette: Deep Indigo #17113D · Electric Violet #6246E5 · Lavender #B8A5FF · Off White #FAF8FF */

const SOLUTIONS = [
  {
    title: "CRM",
    heading: "Build Stronger Customer Relationships",
    description:
      "Manage your customer interactions, track leads, streamline sales processes, and improve customer engagement with a centralized CRM solution. Gain better visibility into your sales pipeline, nurture long-term relationships, and turn more opportunities into business growth.",
    href: "/solutions/crm",
  },
  {
    title: "ERP",
    heading: "Connect Every Part of Your Business",
    description:
      "Simplify business operations with an integrated ERP solution that brings finance, inventory, sales, and day-to-day workflows together in one place. Improve operational efficiency, reduce manual work, and make smarter decisions with a unified view of your business.",
    href: "/solutions/erp",
  },
  {
    title: "HRMS",
    heading: "Simplify Your HR Operations",
    description:
      "Streamline employee management with an HRMS designed to simplify recruitment, attendance, leave management, payroll, and employee records. Automate routine HR tasks, reduce administrative effort, and create a more organized and productive workplace.",
    href: "/solutions/hrms",
  },
  {
    title: "Custom Software",
    heading: "Software Built Around Your Business",
    description:
      "Turn your unique business requirements into powerful software solutions tailored to your workflows and goals. From web applications to business automation systems, we build scalable, flexible, and reliable software that helps you solve challenges and support future growth.",
    href: "/solutions/custom-software",
  },
  {
    title: "Analytics",
    heading: "Turn Business Data Into Actionable Insights",
    description:
      "Make informed decisions with analytics solutions that transform complex business data into meaningful insights. Track key performance indicators, visualize trends, monitor business performance, and uncover opportunities to improve efficiency and drive sustainable growth.",
    href: "/solutions/analytics",
  },
];

const slug = (s) => s.toLowerCase().replace(/\s+/g, "-");

/* ---------- motifs (one per solution) ---------- */

const V = "#6246E5";
const L = "#B8A5FF";
const W = "#FAF8FF";

function Motif({ name }) {
  const common = {
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "CRM":
      return (
        <g {...common}>
          <path
            d="M100 100L45 55M100 100L155 55M100 100L45 150M100 100L155 150"
            stroke={L}
          />
          {[
            [45, 55],
            [155, 55],
            [45, 150],
            [155, 150],
          ].map(([x, y]) => (
            <circle key={`${x}${y}`} cx={x} cy={y} r="12" fill={V} stroke={L} />
          ))}
          <circle cx="100" cy="100" r="24" fill={L} />
        </g>
      );
    case "ERP":
      return (
        <g {...common}>
          <path d="M92 66h16M66 92v16M134 92v16M92 134h16" stroke={L} />
          {[
            [40, 40],
            [108, 40],
            [40, 108],
            [108, 108],
          ].map(([x, y], i) => (
            <rect
              key={i}
              x={x}
              y={y}
              width="52"
              height="52"
              rx="13"
              fill={i === 3 ? V : "none"}
              stroke={L}
            />
          ))}
        </g>
      );
    case "HRMS":
      return (
        <g {...common}>
          <path
            d="M25 146a20 20 0 0 1 40 0M135 146a20 20 0 0 1 40 0"
            stroke={L}
            fill="none"
          />
          <circle cx="45" cy="104" r="11" stroke={L} fill="none" />
          <circle cx="155" cy="104" r="11" stroke={L} fill="none" />
          <path d="M66 156a34 34 0 0 1 68 0z" fill={V} stroke={V} />
          <circle cx="100" cy="82" r="19" fill={L} stroke={L} />
        </g>
      );
    case "Custom Software":
      return (
        <g {...common} strokeWidth={7}>
          <path
            d="M68 66L36 100l32 34M132 66l32 34-32 34"
            stroke={L}
            fill="none"
          />
          <path d="M113 58L87 142" stroke={W} />
        </g>
      );
    default:
      return (
        <g {...common}>
          {[40, 70, 100, 130].map((h, i) => (
            <rect
              key={i}
              x={36 + i * 36}
              y={160 - h}
              width="26"
              height={h}
              rx="7"
              fill={i === 3 ? L : V}
              stroke="none"
            />
          ))}
          <path d="M49 118L85 92l36 12 40-52" stroke={W} fill="none" />
          <circle cx="161" cy="52" r="6" fill={W} stroke="none" />
        </g>
      );
  }
}

/* ---------- animation ---------- */

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------- section ---------- */

function SolutionSection({ s, i }) {
  const flip = i % 2 === 1;
  return (
    <section
      id={slug(s.title)}
      className="scroll-mt-6 border-t border-[#17113D]/10"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`lg:col-span-7 ${flip ? "lg:order-last" : ""}`}
        >
          <motion.div variants={rise} className="flex items-center gap-4">
            <span className={`${FS} text-sm font-semibold text-[#6246E5]`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* <span className="h-px w-10 bg-[#B8A5FF]" /> */}
            <span
              className={`${FI} rounded-full bg-[#6246E5]/10 px-5 py-1 text-[18px] font-medium tracking-wide text-[#6246E5]`}
            >
              {s.title}
            </span>
          </motion.div>

          <motion.h2
            variants={rise}
            className={`${FS} mt-6 text-3xl font-semibold leading-[1.1] tracking-tight text-[#17113D] sm:text-4xl lg:text-[3.25rem]`}
          >
            {s.heading}
          </motion.h2>

          <motion.p
            variants={rise}
            className={`${FI} mt-6 max-w-xl text-base leading-relaxed text-[#17113D]/70 sm:text-lg`}
          >
            {s.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#17113D] shadow-[0_40px_70px_-35px_rgba(23,17,61,0.7)] lg:col-span-5 lg:aspect-square"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(98,70,229,0.55),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(184,165,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 m-auto h-3/4 w-3/4"
            aria-hidden
          >
            <Motif name={s.title} />
          </svg>
          <span
            className={`${FS} absolute left-6 top-5 text-xs font-medium tracking-[0.2em] text-[#B8A5FF]`}
          >
            {s.title.toUpperCase()}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <MotionConfig reducedMotion="user">
        <main
          className={`${sora.variable} ${inter.variable} min-h-screen bg-[#FAF8FF] antialiased`}
        >
          {/* Hero */}
          <header className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_88%_0%,rgba(184,165,255,0.4),transparent)]" />
            <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:pt-36">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`${FS} text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.95] tracking-tighter
bg-gradient-to-r from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text text-transparent`}
              >
                Solutions.
              </motion.h1>
              <motion.nav
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                aria-label="Solutions"
                className="mt-10 flex flex-wrap gap-2"
              >
                {SOLUTIONS.map((s) => (
                  <a
                    key={s.title}
                    href={`#${slug(s.title)}`}
                    className={`${FI} rounded-full border border-[#17113D]/15 px-4 py-2 text-sm text-[#17113D] outline-none transition-colors duration-300 hover:border-[#6246E5] hover:bg-[#6246E5] hover:text-[#FAF8FF] focus-visible:ring-2 focus-visible:ring-[#6246E5]`}
                  >
                    {s.title}
                  </a>
                ))}
              </motion.nav>
            </div>
          </header>

          {SOLUTIONS.map((s, i) => (
            <SolutionSection key={s.title} s={s} i={i} />
          ))}
        </main>
      </MotionConfig>
      <Footer />
    </>
  );
}
