"use client";

import { useEffect, useRef } from "react";

const services = [
  "Digital Marketing",
  "Web Solutions",
  "SEO Services",
  "Branding",
  "Social Media",
  "Analytics & Reports",
  "Collaboration Tools",
  "Mobile Access",
  "Data Security",
  "IT Solutions",
  "Cloud Solutions",
  "AI Solutions",
  "Technology",
];

export default function ServicesMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    let position = 0;
    let animationFrame;

    const speed = 0.5;

    const animate = () => {
      position -= speed;

      const halfWidth = marquee.scrollWidth / 2;

      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }

      marquee.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#080808] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E")
            `,
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.025] blur-[140px]" />
      </div>

      {/* Lime dot */}
      <div className="absolute left-6 top-6 h-2.5 w-2.5 rounded-full bg-[#d5ff3f] shadow-[0_0_15px_rgba(213,255,63,0.4)] md:left-8 md:top-8" />

      {/* Content */}
      <div className="relative z-10 w-full">

        {/* Heading */}
        <div className="mx-auto flex w-full max-w-[1600px] items-center gap-5 px-6 sm:gap-8 md:px-10 lg:px-16">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/20" />

          <h2 className="shrink-0 text-center text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl lg:text-[46px]">
            All Plans Include
          </h2>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/20" />

        </div>

        {/* Main Marquee */}
        <div className="relative mt-16 w-full sm:mt-20 md:mt-24">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[100px] bg-gradient-to-r from-[#080808] via-[#080808]/90 to-transparent sm:w-[180px] md:w-[260px]" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[100px] bg-gradient-to-l from-[#080808] via-[#080808]/90 to-transparent sm:w-[180px] md:w-[260px]" />

          {/* Marquee */}
          <div className="w-full overflow-hidden">

            <div
              ref={marqueeRef}
              className="flex w-max items-center will-change-transform"
            >

              <MarqueeItems />

              <MarqueeItems />

            </div>

          </div>
        </div>

        {/* Second Marquee */}
        <div className="relative mt-14 opacity-20 sm:mt-20">

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[120px] bg-gradient-to-r from-[#080808] to-transparent md:w-[250px]" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[120px] bg-gradient-to-l from-[#080808] to-transparent md:w-[250px]" />

          <div className="overflow-hidden">

            <div className="flex w-max animate-[marqueeReverse_45s_linear_infinite]">

              {[...services].reverse().map((service, index) => (
                <MarqueeItem
                  key={`reverse-${service}-${index}`}
                  service={service}
                />
              ))}

              {[...services].reverse().map((service, index) => (
                <MarqueeItem
                  key={`reverse-copy-${service}-${index}`}
                  service={service}
                />
              ))}

            </div>

          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 px-6 text-center sm:mt-20">

          <p className="mx-auto max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
            Everything you need to build, grow and scale your digital presence.
          </p>

        </div>

      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes marqueeReverse {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

    </section>
  );
}


/* =========================================
   MARQUEE ITEMS
========================================= */

function MarqueeItems() {
  return (
    <>
      {services.map((service, index) => (
        <MarqueeItem
          key={`${service}-${index}`}
          service={service}
        />
      ))}
    </>
  );
}


/* =========================================
   SINGLE ITEM
========================================= */

function MarqueeItem({ service }) {
  return (
    <div className="flex items-center">

      <span className="whitespace-nowrap px-7 text-2xl font-medium tracking-[-0.025em] text-white/90 sm:px-10 sm:text-3xl md:px-14 md:text-4xl lg:text-[42px]">
        {service}
      </span>

      <span
        className="mx-1 flex h-8 w-8 shrink-0 items-center justify-center text-3xl font-light text-white/80 sm:mx-2 sm:h-10 sm:w-10 sm:text-4xl md:h-12 md:w-12 md:text-5xl"
        aria-hidden="true"
      >
        ✳
      </span>

    </div>
  );
}



