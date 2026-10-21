"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  CheckCircle2,
  Sliders,
  ChevronDown,
} from "lucide-react";
import HoverBlurButton from "./Hoverblurbutton";
import DesignMarquee from "./Designmarquee";
import TrustStats from "./TrustStats";

export default function HeroSection() {

  return (
    <>
      <section id="top" className="relative min-h-dvh flex flex-col justify-center items-center pt-28 sm:pt-28  px-4 sm:px-6 md:px-12 overflow-hidden">

        <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>
        {/* =====================================================
          BACKGROUND AMBIENT LIGHTS
      ====================================================== */}

        <div className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[1000px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-[#D9CEE3]/40 via-[#B8A6C9]/25 to-[#E8DED2]/30 rounded-full blur-3xl -z-10 animate-pulse-glow" />

        <div className="pointer-events-none absolute top-[45%] left-[5%] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-[#B8A6C9]/10 rounded-full blur-3xl -z-10" />

        <div className="pointer-events-none absolute bottom-10 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#B69A68]/15 rounded-full blur-2xl -z-10" />

        <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
          {/* =====================================================
            HERO TYPOGRAPHY
            ====================================================== */}
            <span className="text-[10px] sm:text-xs md:text-sm font-sora font-normal  uppercase tracking-[0.15em] text-[#65477F]">
              CREATIVE TECHNOLOGY & GROWTH STUDIO 
            </span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full max-w-[1500px] mx-auto mb-8 sm:mb-10 overflow-visible"
          >
            {/* Small Top Label */}
            {/* =================================================
              MAIN HEADLINE
          ================================================== */}

            <h1 className="font-black leading-[1.10] text-[#282126] font-sora mt-7 sm:mt-10">

  {/* LINE 1 */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="block text-[clamp(18px,6.5vw,75px)] font-black font-sora tracking-tight text-[#6b22da]"
  >
    We Architect Brands.
  </motion.span>

  {/* LINE 2 */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.25 }}
    className="block text-[clamp(18px,6.5vw,65px)] font-black font-sora tracking-tight text-[#282126] mt-2"
  >
    Build Digital Products.
  </motion.span>

  {/* LINE 3 */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    className="block text-[clamp(18px,6.5vw,65px)] font-black font-sora tracking-tight text-[#6b22da] mt-2"
  >
    Scale Growth.
  </motion.span>

</h1>

            {/* =================================================
              HERO DESCRIPTION
          ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-6 sm:mt-6 font-inter font-[300] text-xs sm:text-sm md:text-base lg:text-[16px] text-[#65477F] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            >
              HASHHBIT STUDIO bridges the gap between creative storytelling and engineering rigor. We partner with ambitious startups and enterprises to transform complex ideas into category-defining brands, high-performance digital apps, and intelligent systems.
            </motion.p>
          </motion.div>

          {/* =====================================================
            HERO BUTTONS
        ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 sm:mb-5 w-full"
          >
            {/* Primary Button */}

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full font-inter font-[500]">
              {/* Primary */}
              <HoverBlurButton
                href="#services"
                text="Start a Project"
                hoverText={"Start a Project"}
                variant="primary"
              />

              <HoverBlurButton
                href="#services"
                text="Explore Our Work"
                hoverText={"Explore Our Work"}
                variant="secondary"
              />

              {/* Secondary */}
            </div>
          </motion.div>

          {/* =====================================================
            INTERACTIVE VISUAL SHOWCASE
        ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="flex items-center justify-center gap-2 "
          >
            {/* <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#315BEA]" /> */}

            {/* <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#B69A68]" /> */}
          </motion.div>
          {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="flex flex-col items-center gap-2 text-[#65477F] mt-10 sm:mt-6"
          >
            <span className="text-[9px] sm:text-[11px] font-inter font-semibold tracking-[0.15em] sm:tracking-widest uppercase mt-3 ">
              Scroll To Explore
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-4 h-4 text-[#4B2E63]" />
            </motion.div>
          </motion.div>
        </div>

        {/* <div className="w-[108%] overflow-hidden">
          <DesignMarquee />
        </div> */}
      </section>
    </>
  );
}
