
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { servicesData } from "../../lib/servicesData";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function BlogPage() {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#17113d]">
      <Navbar />

      {/* SECTION 1: PREMIUM HEADING */}
      <section className="relative overflow-hidden px-5 pb-12 pt-24 text-center sm:px-10 sm:pb-16 sm:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6246e5]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#6246e5]/15 bg-[#faf8ff] px-5 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#6246e5]" />

            <span className="font-inter text-xs font-semibold uppercase tracking-[0.22em] text-[#6246e5]">
              What We Do
            </span>
          </div>

          <h1 className="font-sora text-4xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#6246e5] to-[#a18bff] bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-inter text-[15px] leading-8 text-gray-600 sm:text-[20px]">
            Thoughtful solutions, creative ideas, and expert execution
            to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* SECTION 2: SLIDING SERVICE CARDS */}
      <section className="relative bg-gradient-to-b from-white via-[#faf8ff] to-white px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Section heading and slider controls */}
          <div className="mb-9 flex items-end justify-between gap-5 sm:mb-12">
            <div>
              <p className="mb-5 font-sora text-[14px] font-bold uppercase tracking-[0.2em] text-[#6246e5]">
                Explore What We Offer
              </p>

              <h2 className="font-sora text-2xl font-bold tracking-tight sm:text-5xl">
                Solutions Made for You
              </h2>

              <p className="mt-3 max-w-xl font-inter text-sm leading-6 text-gray-700 sm:text-[18px]">
                Discover our services and find the right solution for your
                next big idea.
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => slide(-1)}
                aria-label="Previous services"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6246e5]/20 bg-white text-[#6246e5] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#6246e5] hover:text-white hover:shadow-lg hover:shadow-[#6246e5]/20 active:scale-95 sm:h-12 sm:w-12"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M19 12H5m0 0 7-7m-7 7 7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => slide(1)}
                aria-label="Next services"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6246e5] text-white shadow-md shadow-[#6246e5]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4d34c9] hover:shadow-xl active:scale-95 sm:h-12 sm:w-12"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M5 12h14m0 0-7-7m7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontally sliding cards */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-8 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7"
          >
            {servicesData.map((service, index) => (
              <Link
                href={`/services/${service.id}`}
                key={service.id}
                className="group relative w-[85%] flex-none snap-start overflow-hidden rounded-2xl border border-[#6246e5]/10 bg-white shadow-[0_8px_30px_rgba(23,17,61,0.05)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#6246e5]/30 hover:shadow-[0_24px_55px_rgba(98,70,229,0.16)] sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]"
                style={{
                  animation: `serviceEnter 650ms ${index * 100}ms both`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f0edff]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17113d]/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 font-inter text-sm font-semibold text-white shadow-lg backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                    <span className="font-inter text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                      Our Expertise
                    </span>

                    {/* <span className="flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-[#6246e5] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          d="M7 17 17 7M7 7h10v10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span> */}
                  </div>
                </div>

                {/* Card content */}
                <div className="relative flex min-h-[100px] items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="font-sora text-lg font-bold uppercase leading-snug tracking-wide text-[#17113d] transition-colors duration-300 group-hover:text-[#6246e5] sm:text-xl">
                    {service.title}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#faf8ff] text-[#6246e5] transition-all duration-300 group-hover:bg-[#6246e5] group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
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

                {/* Bottom accent */}
                <div className="h-1 w-0 bg-gradient-to-r from-[#6246e5] to-[#b8a5ff] transition-all duration-500 group-hover:w-full" />

              </Link>
            ))}
          </div>

          {/* Slider hint */}
          <div className="mt-1 flex items-center justify-center gap-3 font-inter text-xs font-medium tracking-wide text-gray-400">
            <span className="h-px w-8 bg-[#6246e5]/20" />
            SCROLL TO EXPLORE
            <span className="h-px w-8 bg-[#6246e5]/20" />
          </div>
        </div>
      </section>

      {/* REST OF THE PAGE: UNCHANGED */}
      <Testimonials />
      <Footer />

      {/* Local animation — no external CSS required */}
      <style jsx global>{`
        @keyframes serviceEnter {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group,
          .group *,
          .group::before,
          .group::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
