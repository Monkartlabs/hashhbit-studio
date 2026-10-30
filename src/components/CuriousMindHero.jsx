
"use client";
import { motion } from "framer-motion";

export default function CuriousMindHero() {
  return (
    <main className="relative overflow-hidden bg-[#FAF8FF] text-[#24133D] py-4 md:py-8">
      {/* Perspective Grid */}
      <div className="absolute inset-0 w-full h-full ">
        <div
          className="absolute inset-[-35%] opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "rotateX(58deg) scale(1.25)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Soft Lavender Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] max-w-none -translate-x-1/2 rounded-full bg-violet-300/25 blur-[130px]" />

      {/* Top Purple Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] max-w-none rounded-full bg-fuchsia-200/30 blur-[100px]" />

      {/* Hero */}
      <section className="relative z-10 flex h-full items-center justify-center ">
        <div className="flex w-full max-w-full flex-col items-center">
          {/* Main Heading */}
          <h1 className="w-full text-center text-[clamp(42px,8.5vw,135px)] leading-[0.95] tracking-[-0.075em] sm:text-[clamp(60px,10vw,135px)]">
            <span className="block font-medium font-inter tracking-tighter text-[#17113D]">
              Have a Vision?
            </span>

            <span
              className="
                relative -mt-2 block
                bg-gradient-to-r from-[#17113D] via-[#6246E5] to-[#B8A5FF]
                bg-clip-text font-black font-bingo-regular
                tracking-wide text-transparent
                
              "
            >
              Let's Build It.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-6 w-full max-w-3xl text-center font-inter text-sm leading-7 text-[#24133D]/95 sm:mt-8 sm:text-base sm:leading-8">
            Whether you're launching a disruptive brand, building a complex
            digital product, or scaling customer acquisition, let's create
            something extraordinary together.
          </p>

          {/* CTA */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap">
            

            {/* Secondary CTA */}
            <motion.a
  href="/contact#consultation"
  initial="rest"
  animate="rest"
  whileHover="hover"
  whileTap={{ scale: 0.97 }}
  variants={{
    rest: { y: 0 },
    hover: { y: -3 },
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="
    group relative isolate inline-flex min-h-14 w-full max-w-[320px]
    items-center justify-center gap-3 overflow-hidden
    rounded-full border border-violet-300
    bg-white/50 px-4 py-3
    font-inter text-[12px] font-bold tracking-wide
    text-[#17113D] shadow-[0_4px_20px_rgba(139,92,246,0.08)]
    transition-[border-color,box-shadow,background-color] duration-300
    hover:border-violet-400 hover:bg-white/90
    hover:shadow-[0_10px_35px_rgba(139,92,246,0.22)]
    sm:w-auto sm:max-w-none sm:px-6 sm:text-[13px]
  "
>
  {/* Animated shine */}
  <motion.span
    aria-hidden="true"
    variants={{
      rest: { x: "-150%", opacity: 0 },
      hover: { x: "150%", opacity: 1 },
    }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="
      pointer-events-none absolute inset-y-0 left-0 z-[-1]
      w-1/2 -skew-x-12
      bg-gradient-to-r from-transparent via-violet-200/70 to-transparent
    "
  />

  {/* Soft ambient glow */}
  <motion.span
    aria-hidden="true"
    variants={{
      rest: { opacity: 0, scale: 0.85 },
      hover: { opacity: 1, scale: 1.15 },
    }}
    transition={{ duration: 0.3 }}
    className="
      pointer-events-none absolute inset-0 -z-10 rounded-full
      bg-gradient-to-r from-violet-100/50 via-white/70 to-purple-100/50
    "
  />

  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
    variants={{
      rest: { rotate: 0, scale: 1 },
      hover: { rotate: -6, scale: 1.12 },
    }}
    transition={{ type: "spring", stiffness: 350, damping: 12 }}
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M16 3v4M8 3v4M3 10h18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </motion.svg>

  <span className="relative whitespace-nowrap">
    Book a Strategy Consultation
  </span>

  <motion.span
    aria-hidden="true"
    variants={{
      rest: { x: 0, opacity: 0.5 },
      hover: { x: 4, opacity: 1 },
    }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="text-violet-600"
  >
    →
  </motion.span>
</motion.a>
          </div>
        </div>
      </section>

      {/* Bottom Decorative Orb */}
      {/* <div
        className="
          pointer-events-none absolute -bottom-20 -right-16
          h-44 w-44 rounded-full
          bg-gradient-to-br from-violet-400 to-fuchsia-300
          opacity-35 blur-sm
          shadow-[0_0_100px_rgba(139,92,246,0.35)]
        "
      /> */}
    </main>
  );
}
