"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Asterisk,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* CONTENT                                                            */
/* ------------------------------------------------------------------ */

const reviewers = [
  {
    id: "jamia",
    name: "Jamia R.",
    role: "Startup Founder",
    rating: "4.9",
    quote:
      "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    image: "https://i.pravatar.cc/900?img=12",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "maya",
    name: "Maya S.",
    role: "Brand Manager",
    rating: "5.0",
    quote:
      "They turned a vague idea into a story our audience actually connects with. Campaign results beat every target we set.",
    image: "https://i.pravatar.cc/900?img=47",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    id: "daniel",
    name: "Daniel K.",
    role: "Head of Marketing",
    rating: "4.8",
    quote:
      "Clear updates every week, no surprises, and work that looked premium from the first draft. Easily our best agency partnership.",
    image: "https://i.pravatar.cc/900?img=33",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    id: "priya",
    name: "Priya N.",
    role: "E-commerce Owner",
    rating: "4.9",
    quote:
      "Our store traffic doubled in a quarter. The team treated our brand like it was their own, and it shows in the numbers.",
    image: "https://i.pravatar.cc/900?img=5",
    avatar: "https://i.pravatar.cc/120?img=5",
  },
  {
    id: "lucas",
    name: "Lucas T.",
    role: "Product Lead",
    rating: "5.0",
    quote:
      "Flexible, fast and genuinely creative. They scaled with us from launch day to a full rebrand without missing a beat.",
    image: "https://i.pravatar.cc/900?img=68",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
];

const brands = [
  {
    name: "GROWL",
    className: "font-mono text-lg font-semibold tracking-[0.3em]",
  },
  {
    name: "Chargemap",
    className: "text-[22px] font-bold tracking-tight",
  },
  {
    name: "ramify",
    className: "text-[22px] font-semibold italic",
  },
];

/* ------------------------------------------------------------------ */
/* NAV BUTTON                                                         */
/* ------------------------------------------------------------------ */

function NavButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
      className="
        group flex h-10 w-10 shrink-0 items-center justify-center
        rounded-full bg-[#eeeeee] text-[#111111]
        transition-all duration-300
        hover:bg-[#dddddd]
        active:scale-90
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#111111]/30
        sm:h-12 sm:w-12
      "
    >
      <Icon
        className={`
          h-4 w-4 transition-transform duration-100 sm:h-5 sm:w-5
          ${
            direction === "prev"
              ? "group-hover:-translate-x-0.5"
              : "group-hover:translate-x-0.5"
          }
        `}
      />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN TESTIMONIALS                                                  */
/* ------------------------------------------------------------------ */

export function Testimonials({ autoplayMs = 7000 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = reviewers.length;

  const goTo = useCallback(
    (index) => {
      setActive((index + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (!autoplayMs || paused) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, autoplayMs);

    return () => clearInterval(id);
  }, [autoplayMs, paused, total]);

  return (
    <section
      id="testimonial"
      className="
        relative min-h-screen overflow-hidden
        bg-[#FAF8FF] px-5 py-12
        text-[#111111]
        sm:px-8 sm:py-16
        md:px-12 md:py-20
        lg:px-16
        xl:px-20
      "
    >
      {/* ------------------------------------------------------------ */}
      {/* Decorative background                                         */}
      {/* ------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 bottom-[-120px]
          h-96 w-96
          rounded-full
          bg-black/[0.025]
          blur-3xl
        "
      />

      <Reveal>
        <div
          className="
              flex flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              
            "
        >
          {/* Heading */}

          <div className="w-full sm:pl-5">
            <div className="inline-flex items-center font-sora gap-2 py-2 text-[13px] font-bold uppercase text-[#17113d] sm:px-4 sm:text-[16px]">
              SOCIAL PROOF
            </div>

            <h2
              className="
                  mt-4
                  w-full
                  -tracking-wide
                  text-[32px]
                  font-sora
                  font-semibold
                  leading-[1.05]
                  bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent
                  min-[400px]:text-[36px]
                  sm:mt-7
                  sm:text-5xl
                  sm:leading-[0.98]
                  md:text-[58px]
                  lg:text-[60px]
                  xl:whitespace-nowrap
                "
            >
              Trusted by Founders, Leaders{" "}
              <br className="hidden xl:block" />
              &amp; Innovators
            </h2>
          </div>

          {/* Description + CTA */}

          {/* <div className="w-full max-w-[390px] lg:pb-1">
              <p
                className="
                  text-[15px]
                  leading-relaxed
                  text-[#17113D]/65
                  sm:text-base
                  font-inter
                  font-semibold
                "
              >
                Don't just take our word for it-see what our clients think.
              </p>

              <Link
                href="/reviews"
                className="
                  group relative mt-6
                  inline-flex items-center
                  gap-3 overflow-hidden
                  rounded-[11px]
                  bg-[#111111]
                  py-1 pl-1 pr-5
                  text-white
                  transition-all duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#111111]/40
                "
              >
                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-[9px]
                    bg-white
                    text-[#111111]
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ChevronRight className="h-4 w-4" />
                </span>

                <span className="text-sm font-semibold font-inter">
                  All Review
                </span>
              </Link>
            </div> */}
        </div>
      </Reveal>
      <div className="relative mx-auto max-w-[1080px] pt-4 sm:pt-10 rounded-4x">
        {/* ---------------------------------------------------------- */}
        {/* MAIN CARD                                                    */}
        {/* ---------------------------------------------------------- */}

        <Reveal delay={150} className="mt-8 sm:mt-12 md:mt-14">
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-transparent
              sm:rounded-[30px]
              lg:grid
              lg:grid-cols-[43%_57%]
              lg:rounded-[34px]
              w-full
            "
            onPointerEnter={(e) => {
              // only pause on real hover (mouse), not on touch taps
              if (e.pointerType === "mouse") setPaused(true);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") setPaused(false);
            }}
            onFocus={(e) => {
              // only pause on keyboard focus, not after a tap
              if (e.target.matches(":focus-visible")) setPaused(true);
            }}
            onBlur={() => setPaused(false)}
          >
            {/* ============================================================ */}
            {/* LEFT — BOOK COVER / IMAGE                                    */}
            {/* ============================================================ */}

            <div
              className="
                relative
                min-w-0
                overflow-hidden
                bg-transparent
                sm:min-h-[380px]
                lg:min-h-[480px]
              "
            >
              <ReviewerCard reviewers={reviewers} activeIndex={active} />
            </div>

            {/* ============================================================ */}
            {/* RIGHT — REVIEW                                               */}
            {/* ============================================================ */}

            <div
              className="
                relative
                flex
                min-w-0
                min-h-[420px]
                flex-col
                justify-between
                bg-transparent
                p-5
                min-[400px]:p-6
                sm:min-h-[500px]
                sm:p-10
                lg:min-h-[620px]
                lg:p-12
                xl:p-14
              "
            >
              {/* Top */}

              <div>
                {/* Stars */}

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="
                        h-[17px] w-[17px]
                        fill-[#111111]
                        text-[#111111]
                      "
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-3 text-sm font-sora font-bold text-[#111111]/55">
                  Most of our clients are satisfied:
                  <br className="sm:hidden" /> Share your review
                </p>
              </div>

              <div
                role="group"
                aria-label="Choose a testimonial"
                className="
    relative z-30
    flex
    items-center
    justify-between
    border-t
    border-[#111111]/10
    mt-7
    pt-6
  "
              >
                <NavButton
                  direction="prev"
                  onClick={() => {
                    setActive((current) => (current - 1 + total) % total);
                  }}
                />

                <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 px-2 sm:gap-3 sm:px-4 lg:gap-4 xl:gap-5">
                  {reviewers.map((reviewer, i) => (
                    <button
                      key={reviewer.id}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Show review from ${reviewer.name}`}
                      aria-current={i === active}
                      className={`
          relative
          aspect-square
          w-8
          min-w-0
          shrink
          overflow-hidden
          rounded-full
          transition-all
          duration-500
          focus-visible:outline-none
          min-[400px]:w-9
          sm:w-11
          ${
            i === active
              ? "scale-[1.25] opacity-100 ring-1 ring-[#111111] ring-offset-2 ring-offset-transparent"
              : "opacity-40 hover:scale-110 hover:opacity-90"
          }
        `}
                    >
                      <img
                        src={reviewer.avatar}
                        alt=""
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <NavButton
                  direction="next"
                  onClick={() => {
                    setActive((current) => (current + 1) % total);
                  }}
                />
              </div>

              {/* ========================================================== */}
              {/* QUOTE                                                      */}
              {/* ========================================================== */}

              {/* All quotes share one grid cell, so the box always sizes   */}
              {/* itself to the tallest quote and long text never overflows */}

              <div
                aria-live="polite"
                className="
    relative
    grid
    flex-1
    min-h-[190px]
    items-center
    py-8
    sm:min-h-0
    sm:py-16
    mb-5
  "
              >
                {reviewers.map((reviewer, i) => (
                  <blockquote
                    key={reviewer.id}
                    aria-hidden={i !== active}
                    className={`
        col-start-1
        row-start-1
        w-full
        font-sora
        text-[19px]
        font-semibold
        leading-[1.4]
        tracking-[-0.025em]
        text-[#111111]
        transition-all
        duration-700
        sm:text-[22px]
        lg:text-[20px]
        xl:text-[24px]
        ${
          i === active
            ? "translate-x-0 opacity-100 blur-0"
            : "pointer-events-none translate-x-8 opacity-0 blur-sm"
        }
      `}
                  >
                    <span className="text-[#111111]/35 font-inter">“</span>
                    {reviewer.quote}
                    <span className="text-[#111111]/35">”</span>
                  </blockquote>
                ))}
              </div>

              {/* ========================================================== */}
              {/* BOTTOM                                                     */}
              {/* ========================================================== */}

              {/* Trusted brands */}

              <div className="border-t border-[#111111]/10 pt-7 sm:-mt-10">
                <p className="text-xs font-inter font-bold text-[#111111]/65">
                  Trusted brand:
                </p>

                <BrandMarquee brands={brands} className="mt-2 font-sora" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------------------------------------------------------- */}
        {/* BOTTOM FEATURED QUOTE                                        */}
        {/* ---------------------------------------------------------- */}

        <Reveal delay={200}>
          <figure className="mx-auto max-w-[860px] border-t border-[#111111]/10 pt-8 text-center sm:pt-10">
            <blockquote
              className="
                font-sora
                text-[18px]
                font-semibold
                leading-[1.5]
                tracking-[-0.02em]
                text-[#111111]
                sm:text-[22px]
                lg:text-[24px]
              "
            >
              <span className="text-[#111111]/65 font-inter"></span>
              HASHHBIT didn’t just build our web platform; they fundamentally
              changed how our market perceives our enterprise value. Their
              blend of high-end product design and technical execution is
              unmatched.
              <span className="text-[#111111]/35"></span>
            </blockquote>

            <figcaption className="mt-5 font-sora text-sm font-bold text-[#111111]">
              — Managing Director, Enterprise Client
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;

/* ------------------------------------------------------------------ */
/* REVIEWER PHOTO                                                     */
/* ------------------------------------------------------------------ */

function ReviewerCard({ reviewers, activeIndex, className = "" }) {
  return (
    <div
      className={`
        group/photo
        relative isolate
        min-h-[400px]
        overflow-hidden
        bg-transparent
        sm:min-h-[500px]
        lg:min-h-[540px]
        ${className}
      `}
    >
      {/* Photos */}

      {reviewers.map((reviewer, i) => (
        <div
          key={reviewer.id}
          aria-hidden={i !== activeIndex}
          className={`
            absolute inset-0
            transition-all
            duration-[1200ms]
            ease-out
            ${
              i === activeIndex
                ? "scale-100 opacity-100"
                : "scale-[1.08] opacity-0"
            }
          `}
        >
          <img
            src={reviewer.image}
            alt={`Portrait of ${reviewer.name}`}
            draggable={false}
            className="
              h-full w-full
              object-cover
              grayscale-[15%]
              brightness-[0.78]
              transition-transform
              duration-[1600ms]
              ease-out
              group-hover/photo:scale-[1.04]
            "
          />
        </div>
      ))}

      {/* Dark overlay */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-black/10
          via-black/5
          to-black/90
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-black/10
        "
      />

      {/* Inner frame */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-4
          z-10
          rounded-[20px]
          border
          border-white/50
          transition-colors
          duration-500
          group-hover/photo:border-white/80
          min-[400px]:inset-6
          min-[400px]:rounded-[24px]
          sm:inset-7
          lg:inset-10
        "
      />

      {/* Client details */}

      <div
        className="
          absolute
          inset-x-4
          bottom-4
          z-20
          min-[400px]:inset-x-6
          min-[400px]:bottom-6
          sm:inset-x-10
          sm:bottom-10.5
        "
      >
        {reviewers.map((reviewer, i) => (
          <div
            key={reviewer.id}
            aria-hidden={i !== activeIndex}
            className={`
              flex items-end
              justify-between
              gap-3
              transition-all
              duration-700
              sm:gap-4
              ${
                i === activeIndex
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 opacity-0"
              }
            `}
          >
            <div className="min-w-0">
              <p
                className="
                  text-xl
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-white
                  sm:text-[25px]
                  pl-4
                "
              >
                {reviewer.name}
              </p>

              <p
                className="
                  pl-4
                  text-sm
                  text-white/65
                "
              >
                {reviewer.role}
              </p>
            </div>

            <div
              className="
                flex shrink-0
                items-center gap-1.5
                rounded-[10px]
                bg-white
                px-3 py-1.5
                text-sm
                font-semibold
                text-black
                sm:px-4 sm:py-2 sm:text-base
              "
            >
              {reviewer.rating}

              <Star
                className="
                  h-4 w-4
                  fill-black
                  text-black
                "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BRAND MARQUEE                                                      */
/* ------------------------------------------------------------------ */

function BrandMarquee({ brands, durationSeconds = 35, className = "" }) {
  const track = [...brands, ...brands];

  return (
    <div
      className={`
        group/marquee
        relative
        overflow-hidden
        py-1
        [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
        ${className}
      `}
    >
      <div
        className="
          flex w-max
          items-center
          animate-marquee-left
          motion-reduce:animate-none
          group-hover/marquee:[animation-play-state:paused]
        "
        style={{
          animationDuration: `${durationSeconds}s`,
        }}
      >
        {track.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            aria-hidden={i >= brands.length}
            className="
              flex shrink-0
              items-center
              px-7
              text-[#111111]/40
              transition-colors
              duration-300
              hover:text-[#111111]/75
              sm:px-9
            "
          >
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.name}
                draggable={false}
                className="h-6 w-auto"
              />
            ) : (
              <span
                className={`
                  whitespace-nowrap
                  ${brand.className ?? ""}
                `}
              >
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* REVEAL                                                             */
/* ------------------------------------------------------------------ */

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-1000
        ease-out
        motion-reduce:translate-y-0
        motion-reduce:opacity-100
        motion-reduce:transition-none
        ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}