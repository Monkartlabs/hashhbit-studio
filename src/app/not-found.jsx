
"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const FS = "font-[family-name:var(--font-sora)]";
const FI = "font-[family-name:var(--font-inter)]";

/* Palette: Deep Indigo #17113D · Electric Violet #6246E5 · Lavender #B8A5FF · Off White #FAF8FF */

const LINKS = [
  { t: "CRM", h: "/solutions/crm" },
  { t: "ERP", h: "/solutions/erp" },
  { t: "HRMS", h: "/solutions/hrms" },
  { t: "Custom Software", h: "/solutions/custom-software" },
  { t: "Analytics", h: "/solutions/analytics" },
];

// Deterministic so server and client render the same stars.
const STARS = Array.from({ length: 44 }, (_, i) => ({
  x: (i * 37.7) % 100,
  y: (i * 53.1 + (i % 5) * 9) % 100,
  s: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
  d: 2.5 + (i % 5) * 0.8,
  o: (i % 9) * 0.3,
}));

const SHIMMER =
  "linear-gradient(110deg,#FAF8FF 30%,#B8A5FF 42%,#6246E5 50%,#B8A5FF 58%,#FAF8FF 70%)";

const textStagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1 } } };
const rise = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function Four({ delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 100, filter: "blur(16px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", backgroundPosition: ["100% 0%", "-100% 0%"] }}
      transition={{
        default: { type: "spring", stiffness: 80, damping: 16, delay },
        backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear", delay: 1.2 },
      }}
      style={{ backgroundImage: SHIMMER, backgroundSize: "250% 100%" }}
      className="inline-block bg-clip-text text-transparent"
    >
      4
    </motion.span>
  );
}

/** The "0": a portal with a spinning gradient ring, a counter-rotating dashed ring, an orbiting satellite and a glowing core. */
function Portal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, rotate: -120 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.25 }}
      className="relative mx-[0.03em] h-[0.74em] w-[0.74em]"
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8A5FF" />
            <stop offset="55%" stopColor="#6246E5" />
            <stop offset="100%" stopColor="#FAF8FF" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="none" stroke="url(#ringGrad)" strokeWidth="7" strokeLinecap="round" strokeDasharray="230 47" />
      </motion.svg>

      <motion.div
        className="absolute inset-[14%] rounded-full border border-dashed border-[#B8A5FF]/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div className="absolute inset-[14%]" animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
        <span className="absolute left-1/2 top-0 h-[0.06em] w-[0.06em] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAF8FF] shadow-[0_0_24px_6px_#B8A5FF]" />
      </motion.div>

      <motion.div
        className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#FAF8FF,#B8A5FF_35%,#6246E5_75%)] shadow-[0_0_70px_14px_rgba(98,70,229,0.65)]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function NotFound() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const spx = useSpring(px, { stiffness: 120, damping: 24 });
  const spy = useSpring(py, { stiffness: 120, damping: 24 });

  const spot = useMotionTemplate`radial-gradient(520px circle at ${spx}px ${spy}px, rgba(98,70,229,0.34), transparent 70%)`;
  const starX = useTransform(sx, (v) => v * -26);
  const starY = useTransform(sy, (v) => v * -26);
  const orbX = useTransform(sx, (v) => v * 70);
  const orbY = useTransform(sy, (v) => v * 70);
  const glyphX = useTransform(sx, (v) => v * 18);
  const glyphY = useTransform(sy, (v) => v * 18);
  const rotY = useTransform(sx, (v) => v * 16);
  const rotX = useTransform(sy, (v) => v * -16);

  useEffect(() => {
    px.set(window.innerWidth / 2);
    py.set(window.innerHeight / 2.6);
  }, [px, py]);

  const onMove = (e) => {
    px.set(e.clientX);
    py.set(e.clientY);
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main
        onPointerMove={onMove}
        className={`${sora.variable} ${inter.variable} relative isolate min-h-screen overflow-hidden bg-[#17113D] text-[#FAF8FF] antialiased`}
      >
        {/* background: orbs, grid, stars, spotlight */}
        <motion.div style={{ x: orbX, y: orbY }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <motion.div
            animate={{ x: [0, 50, -20, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-24 top-[8%] h-[26rem] w-[26rem] rounded-full bg-[#6246E5]/35 blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -60, 20, 0], y: [0, 40, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 bottom-[6%] h-[28rem] w-[28rem] rounded-full bg-[#B8A5FF]/25 blur-[130px]"
          />
        </motion.div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(184,165,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(184,165,255,0.07)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        />

        <motion.div style={{ x: starX, y: starY }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          {STARS.map((s, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-[#FAF8FF]"
              style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s }}
              animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -14, 0] }}
              transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut", delay: s.o }}
            />
          ))}
        </motion.div>

        <motion.div style={{ background: spot }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden />

        {/* content */}
        <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
          <motion.div style={{ x: glyphX, y: glyphY, rotateX: rotX, rotateY: rotY, transformPerspective: 1100 }}>
            <h1
              className={`${FS} flex items-center justify-center text-[clamp(7rem,30vw,24rem)] font-bold leading-none tracking-tighter`}
              aria-label="404"
            >
              <Four delay={0} />
              <Portal />
              <Four delay={0.12} />
            </h1>
          </motion.div>

          <motion.div variants={textStagger} initial="hidden" animate="show" className="mt-8 flex max-w-xl flex-col items-center sm:mt-10">
            <motion.p
              variants={rise}
              className={`${FI} inline-flex items-center gap-2.5 rounded-full border border-[#B8A5FF]/25 bg-[#FAF8FF]/5 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-[#B8A5FF] backdrop-blur`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B8A5FF] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B8A5FF]" />
              </span>
              ERROR 404
            </motion.p>

            <motion.h2 variants={rise} className={`${FS} mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl`}>
              This page wandered off.
            </motion.h2>

            <motion.p variants={rise} className={`${FI} mt-4 text-base leading-relaxed text-[#FAF8FF]/65 sm:text-lg`}>
              The page you’re looking for we're currently working on it or it doesn’t exist. Let’s get you back on track.
            </motion.p>

            <motion.div variants={rise} className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/"
                className={`${FI} group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#6246E5] to-[#8467ff] px-8 py-3.5 text-sm font-medium text-[#FAF8FF] shadow-[0_12px_40px_-8px_rgba(98,70,229,0.9)] outline-none transition-transform duration-300 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-[#B8A5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17113D]`}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative transition-transform duration-300 group-hover:-translate-x-1" aria-hidden>
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                <span className="relative">Back to home</span>
              </Link>
              
            </motion.div>

            
          </motion.div>
        </div>
      </main>
      <Footer />
    </MotionConfig>
  );
}
