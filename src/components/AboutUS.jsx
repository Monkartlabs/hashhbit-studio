"use client";

import Link from "next/link";
import { Asterisk, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: "🎯",
    title: "STRATEGY",
    description:
      "We unpack your business model, audit market gaps, analyze user psychology, and architect a roadmap built for defensible growth.",
  },
  {
    icon: "🎨",
    title: "CREATIVITY",
    description:
      "We design striking brand ecosystems, intuitive user interfaces, and compelling visual narratives that command attention.",
  },
  {
    icon: "⚡",
    title: "TECHNOLOGY",
    description:
      "We engineer scalable web platforms, high-speed mobile apps, and robust backend structures using modern stacks (React, Next.js, Node.js).",
  },
  {
    icon: "📈",
    title: "GROWTH",
    description:
      "We scale revenue through performance marketing funnels, automated customer journeys, and data-backed conversion rate optimization.",
  },
];

export function AboutUs() {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  // Subtle cinematic parallax
  const videoY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 1, 0.94],
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 0.8, 0.2],
  );

  return (
    <section
      className="overflow-hidden bg-[#FAF8FF] px-6 py-14 md:px-12 lg:px-20"
      id="about-us"
    >
      <div className="mx-auto max-w-8xl">
        {/* Eyebrow */}
        <div className="flex justify-between">
          <div className="font-sora inline-flex items-center gap-2 px-4 py-2 text-[14px] font-bold uppercase tracking-widest text-[#17113d]">
            About Us
          </div>

          <div className="flex">
            <Link
              href="/about-us"
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
                  px-2 py-2
                  sm:px-2
                  sm:py-2
                  lg:px-5
                  ld:py-3
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

              <span className="relative">Know More</span>
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
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 h-px w-full origin-left bg-[#282126]/10 "
        />

        <h2
  className="
    mt-5
    mb-10
    max-w-full
    bg-gradient-to-r
    from-[#17113D]
    via-[#4e3aa8]
    to-[#4c3895]
    bg-clip-text
    font-sora
    text-center
    text-[clamp(1.5rem,4vw,3.75rem)]
    font-bold
    leading-tight
    tracking-[-0.03em]
    text-transparent
    sm:leading-[1.1]
    md:leading-[1.050]
  "
>
  Engineering the Intersection of
  <br className="hidden sm:block" />
  <span className="">
    Brand Emotion
  </span>{" "}
  and
  <span className="">{" "}
    Digital Execution.
  </span>
</h2>
        {/* Content */}
        <div className=" mt-5 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(40,33,38,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team collaborating around laptops at a wooden desk"
                draggable={false}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-105
                  md:h-[520px]
                "
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className=" font-inter text-[15px] leading-relaxed text-[#282126] lg:text-[17px]">
              Traditional agencies give you a pretty logo and walk away. Tech
              development shops build code without caring about brand resonance
              or user acquisition. HASHHBIT STUDIO was built to eliminate this
              friction. We bring strategy, world-class design, robust software
              engineering, and performance marketing into a single synchronized
              workflow. We don’t just build deliverables; we build engines for
              commercial scale.
            </p>

            {/* Feature highlights */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group flex gap-4"
                >
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FBD9BE]
                      text-xl
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:-translate-y-1
                      group-hover:scale-110
                      group-hover:shadow-[0_10px_30px_rgba(251,217,190,0.6)]
                    "
                  >
                    {item.icon}
                  </span>

                  <div>
                    <h3 className="font-sora text-sm font-semibold uppercase -tracking-wide text-[#17113D]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 font-inter text-sm font-semibold leading-relaxed text-[#282126]/80">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          PREMIUM VIDEO SECTION
      ========================================================= */}

      <motion.div
  ref={videoRef}
  style={{ scale: videoScale }}
  className="
    relative
    mx-auto
    mt-12
    w-full
    max-w-7xl
    px-4
    sm:mt-16
    sm:px-6
    lg:mt-24
    lg:px-8
  "
>
  {/* Animated ambient glow */}
  <motion.div
    style={{ opacity: glowOpacity }}
    className="
      pointer-events-none
      absolute
      -inset-x-1
      inset-y-4
      rounded-[30px]
      bg-gradient-to-r
      from-[#563477]/25
      via-[#C9A8FF]/20
      to-[#4C65BF]/20
      blur-2xl
      sm:-inset-x-4
      sm:inset-y-6
      sm:rounded-[45px]
      sm:blur-[50px]
      lg:-inset-x-8
      lg:inset-y-8
      lg:rounded-[60px]
      lg:blur-[70px]
    "
  />

  {/* Secondary glow */}
  <div
    className="
      pointer-events-none
      absolute
      -inset-x-1
      inset-y-2
      rounded-[25px]
      bg-gradient-to-br
      from-[#563477]/15
      via-transparent
      to-[#4C65BF]/15
      blur-xl
      sm:-inset-x-3
      sm:inset-y-4
      sm:rounded-[40px]
      sm:blur-2xl
      lg:-inset-5
      lg:inset-y-5
      lg:rounded-[45px]
    "
  />

  {/* Animated video wrapper */}
  <motion.div
    style={{ y: videoY }}
    initial={{
      opacity: 0,
      y: 40,
      scale: 0.97,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    viewport={{
      once: true,
      amount: 0.15,
    }}
    transition={{
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="relative"
  >
    {/* Floating label */}
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="
        absolute
        -top-3
        left-3
        z-20
        flex
        items-center
        rounded-full
        border
        border-white/20
        bg-[#16121A]/90
        px-3
        py-1.5
        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
        backdrop-blur-xl
        sm:-top-4
        sm:left-6
        sm:px-4
        sm:py-2
        lg:-top-5
        lg:left-10
      "
    >
      <span
        className="
          font-sora
          text-[9px]
          font-medium
          uppercase
          tracking-[0.15em]
          text-white/80
          sm:text-[10px]
          sm:tracking-widest
          lg:text-xs
        "
      >
        Our Story
      </span>
    </motion.div>

    {/* Main video frame */}
    <div
      className="
        group/video
        relative
        isolate
        aspect-[4/3]
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-white/20
        bg-[#09070B]
        shadow-[0_20px_60px_rgba(20,10,30,0.3)]
        sm:aspect-video
        sm:rounded-[28px]
        sm:shadow-[0_30px_90px_rgba(20,10,30,0.32)]
        lg:rounded-[40px]
        lg:shadow-[0_40px_120px_rgba(20,10,30,0.32)]
      "
    >
      {/* Responsive video */}
      <video
        src="/videos/video1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Our story"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-safe:group-hover/video:scale-[1.025]
        "
      >
        Your browser does not support the video tag.
      </video>

      {/* Cinematic gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-black/5
          to-white/[0.08]
        "
      />

      {/* Purple cinematic light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-[#9C6BFF]/20
          blur-3xl
          transition-opacity
          duration-700
          group-hover/video:opacity-80
          sm:-right-16
          sm:-top-16
          sm:h-48
          sm:w-48
          lg:-right-20
          lg:-top-20
          lg:h-64
          lg:w-64
          lg:blur-[90px]
        "
      />

      {/* Bottom cinematic gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-black/35
          to-transparent
          sm:h-28
          lg:h-32
        "
      />

      {/* Decorative play button */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          flex
          h-11
          w-11
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-white/10
          text-white
          opacity-80
          backdrop-blur-md
          transition-all
          duration-500
          group-hover/video:scale-110
          group-hover/video:bg-white/20
          group-hover/video:opacity-100
          sm:h-14
          sm:w-14
          lg:h-16
          lg:w-16
        "
      >
        <Play
          className="
            ml-0.5
            h-4
            w-4
            fill-white
            sm:ml-1
            sm:h-5
            sm:w-5
          "
          strokeWidth={1.5}
        />
      </div>

      {/* Bottom left label — tablet and desktop */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          left-4
          hidden
          sm:block
          lg:bottom-5
          lg:left-6
        "
      >
        <p
          className="
            font-sora
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/60
            lg:text-[10px]
            lg:tracking-[0.3em]
          "
        >
          IDEAS • DESIGN • TECHNOLOGY • GROWTH
        </p>
      </div>

      {/* Bottom right indicator */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          right-4
          hidden
          items-center
          gap-2
          sm:flex
          lg:bottom-5
          lg:right-6
        "
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C9A8FF]" />

        <span
          className="
            font-sora
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-white/60
            lg:text-[10px]
            lg:tracking-[0.2em]
          "
        >
          Watch
        </span>
      </div>

      {/* Premium inner border */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[20px]
          border
          border-white/[0.08]
          sm:rounded-[28px]
          lg:rounded-[40px]
        "
      />
    </div>
  </motion.div>

  {/* Decorative floating line */}
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: 0.7,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      mx-auto
      mt-5
      h-px
      w-16
      origin-center
      bg-gradient-to-r
      from-transparent
      via-[#563477]/50
      to-transparent
      sm:mt-7
      sm:w-20
      lg:mt-8
      lg:w-24
    "
  />
</motion.div>
    </section>
  );
}

export default AboutUs;
