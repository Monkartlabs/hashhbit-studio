"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HoverBlurButton from "./Hoverblurbutton";

export default function HeroSection() {
  return (
    <section
  id="top"
  className="relative isolate flex min-h-dvh w-full max-w-full flex-col items-center justify-center overflow-hidden pt-28 px-4 sm:px-6 md:px-12"
>
  {/* Background Video — only inside Hero */}
  <video
    autoPlay
    loop
    muted
    playsInline
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
  >
    <source src="/videos/video_compress.mp4" type="video/mp4" />
  </video>

      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] -z-10 h-[400px] w-[min(500px,100vw)] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-gradient-to-tr from-[#D9CEE3]/40 via-[#B8A6C9]/25 to-[#E8DED2]/30 blur-3xl sm:h-[500px] sm:w-[600px] md:w-[1000px]" />

      <div className="pointer-events-none absolute left-[5%] top-[45%] -z-10 h-[220px] w-[220px] rounded-full bg-[#B8A6C9]/10 blur-3xl sm:h-[300px] sm:w-[300px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-[250px] w-[250px] rounded-full bg-[#B69A68]/15 blur-2xl sm:right-10 sm:h-[350px] sm:w-[350px]" />

      {/* Main Content */}
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center text-center">
        {/* Top Label */}
        <span className="max-w-full text-[10px] font-sora font-normal uppercase tracking-[0.12em] text-[#65477F] sm:text-xs sm:tracking-[0.15em] md:text-sm">
          CREATIVE TECHNOLOGY &amp; GROWTH STUDIO
        </span>

        {/* Hero Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-8 mt-7 w-full min-w-0 max-w-[1500px] sm:mb-10 sm:mt-10"
        >
          <h1 className="mt-0 font-sora font-black leading-[1.1]">
            {/* Line 1 */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block break-words text-[clamp(24px,6.5vw,75px)] font-black tracking-tight text-[#6b22da]"
            >
              We Architect Brands.
            </motion.span>

            {/* Line 2 */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-2 block break-words text-[clamp(24px,6.5vw,65px)] font-black tracking-tight text-[#282126]"
            >
              Build Digital Products.
            </motion.span>

            {/* Line 3 */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-2 block break-words text-[clamp(24px,6.5vw,65px)] font-black tracking-tight text-[#6b22da]"
            >
              Scale Growth.
            </motion.span>
          </h1>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mx-auto mt-6 w-full min-w-0 max-w-2xl break-words px-1 font-inter text-xs font-light leading-relaxed text-[#65477F] sm:px-0 sm:text-sm md:text-base lg:text-[16px]"
          >
            HASHHBIT STUDIO bridges the gap between creative storytelling and
            engineering rigor. We partner with ambitious startups and
            enterprises to transform complex ideas into category-defining
            brands, high-performance digital apps, and intelligent systems.
          </motion.p>
        </motion.div>

        {/* Hero Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="mb-5 flex w-full min-w-0 flex-wrap items-center justify-center gap-3 font-inter font-medium sm:gap-4"
        >
          <HoverBlurButton
            href="#services"
            text="Start a Project"
            hoverText="Start a Project"
            variant="primary"
          />

          <HoverBlurButton
            href="#services"
            text="Explore Our Work"
            hoverText="Explore Our Work"
            variant="secondary"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="mt-10 flex max-w-full flex-col items-center gap-2 text-[#65477F] sm:mt-6"
        >
          <span className="mt-3 text-center text-[9px] font-inter font-semibold uppercase tracking-[0.15em] sm:text-[11px] sm:tracking-widest">
            Scroll To Explore
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-4 w-4 text-[#4B2E63]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
