"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "50+",
    title: "Digital Products & Brand Systems",
  },
  {
    value: "10+",
    title: "Industries Transformed",
  },
  {
    value: "5+",
    title: "Integrated Disciplines",
  },
  {
    value: "360°",
    title: "End-to-End Execution",
  },
];

export default function TrustStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Our impact and capabilities"
      className="w-full h-[230px] md:h-[280px] overflow-hidden bg-[#faf8ff] text-white"
    >
      {/* Section heading */}
      <div className="mt-5 mb-5 flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <p className="text-xs font-sora font-semibold uppercase tracking-[0.22em] text-black/90">
            Our Impact
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="relative w-full border-y border-black/15">
        <motion.div
          className="flex w-max"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0"
            >
              {stats.map((stat) => (
                <article
                  key={stat.value}
                  className="group relative flex w-[280px] shrink-0 flex-col justify-center border-r border-black/15 px-7 py-10 transition-colors duration-300 hover:bg-black/[0.035] sm:w-[360px] sm:px-10 sm:py-14 lg:w-[420px] lg:px-12"
                >
                  <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#8708ef]/70 transition-all duration-500 group-hover:w-full" />

                  <p className="text-5xl font-semibold leading-none tracking-[-0.065em] text-[#8708ef]/70 sm:text-6xl lg:text-7xl">
                    {stat.value}
                  </p>

                  <h3 className="mt-5 font-inter max-w-[260px] text-sm font-medium leading-relaxed text-black/95 sm:text-base">
                    {stat.title}
                  </h3>
                </article>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
