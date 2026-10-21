"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "../lib/servicesData";

/**
 * Optional fields on each item in servicesData (all have fallbacks):
 *   id, image, title            -> already in your data
 *   client      e.g. "Nike"     -> big label on the image + small label in the body
 *   description e.g. "Integrating flexible sensors..."
 *   tags        e.g. ["Sports", "Health", "IoT"]
 */

const SIDE_SHIFT = 40; // % of card width that side cards are pushed away from centre
const SWIPE_THRESHOLD = 50; // px

export default function ServicesCarousel() {
  const total = servicesData.length;
  const [active, setActive] = useState(0);

  const startX = useRef(null);
  const dragged = useRef(false);

  const go = useCallback(
    (dir) => setActive((prev) => (prev + dir + total) % total),
    [total]
  );

  // Keyboard support (left / right arrows)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Swipe support
  const onPointerDown = (e) => {
    startX.current = e.clientX;
    dragged.current = false;
  };
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      dragged.current = true;
      go(delta < 0 ? 1 : -1);
    }
    startX.current = null;
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4">
      {/* Stage */}
      <div
        className="relative h-[560px] w-full overflow-x-clip"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => (startX.current = null)}
      >
        {servicesData.map((service, index) => {
          // Shortest circular distance from the active card
          let offset = index - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              aria-hidden={!isVisible}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => {
                // Side card click -> bring to centre. Swipe -> don't navigate.
                if (!isActive || dragged.current) {
                  e.preventDefault();
                  if (!isActive && !dragged.current) setActive(index);
                }
              }}
              draggable={false}
              className={`group absolute left-1/2 top-0 flex h-[560px] w-[85%] max-w-[500px] select-none flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-500 ease-out ${
                isActive
                  ? "border-[#6246e5]/10 shadow-[0_24px_55px_rgba(23,17,61,0.18)]"
                  : "border-[#6246e5]/5 shadow-[0_8px_30px_rgba(23,17,61,0.06)]"
              }`}
              style={{
                transform: `translateX(calc(-50% + ${
                  offset * SIDE_SHIFT
                }%)) scale(${isActive ? 1 : 0.95})`,
                zIndex: 10 - Math.abs(offset),
                opacity: !isVisible ? 0 : isActive ? 1 : 0.55,
                pointerEvents: isVisible ? "auto" : "none",
              }}
            >
              {/* Image */}
              <div className="relative h-[215px] flex-none overflow-hidden bg-[#f0edff]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 85vw, 500px"
                  draggable={false}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <h4 className="font-sora text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
                    {service.client ?? service.title}
                  </h4>
                  <span className="mb-3 mt-2 h-[3px] w-14 rounded-full bg-white" />
                  <p className="font-inter text-sm font-medium text-white/90">
                    {service.title}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <h3 className="font-sora text-xl font-semibold leading-snug text-[#0f0f1a] transition-colors duration-300 group-hover:text-[#6246e5] sm:text-2xl">
                  {service.title}
                </h3>

                {service.client && (
                  <p className="mt-1 font-inter text-sm font-semibold text-slate-500">
                    {service.client}
                  </p>
                )}

                {service.description && (
                  <p className="mt-3 line-clamp-3 font-inter text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                )}

                <div className="mt-auto">
                  {service.tags?.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 font-inter text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-flex items-center gap-2 font-inter text-base text-slate-500 transition-colors duration-300 group-hover:text-[#6246e5]">
                    Learn more
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous service"
        className="absolute left-2 top-[260px] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_4px_18px_rgba(23,17,61,0.15)] transition hover:scale-105 hover:text-[#6246e5] lg:-left-12"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
          <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next service"
        className="absolute right-2 top-[260px] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_4px_18px_rgba(23,17,61,0.15)] transition hover:scale-105 hover:text-[#6246e5] lg:-right-12"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
          <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {servicesData.map((service, i) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to ${service.title}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-[#6246e5]" : "w-2 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}