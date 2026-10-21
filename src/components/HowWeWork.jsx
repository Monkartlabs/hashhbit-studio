"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brush,
  Code,
  Route,
  Search,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* COLORS (only these four)                                           */
/* bg #FAF8FF · soft #B8A5FF · accent #6246E5 · ink #17113D           */
/* FONTS (only these two)                                             */
/* headings → font-sora · descriptions → font-inter                   */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* CONTENT                                                            */
/* ------------------------------------------------------------------ */

const steps = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    icon: Search,
    phase: 0,
    description:
      "Deep immersion into your business goals, target audience personas, operational bottlenecks, and competitive landscape.",
  },
  {
    id: "strategize",
    number: "02",
    title: "Strategize",
    icon: Route,
    phase: 0,
    description:
      "Defining the solution architecture, brand positioning framework, UX wireframes, and precise technical roadmap.",
  },
  {
    id: "create",
    number: "03",
    title: "Create",
    icon: Brush,
    phase: 1,
    description:
      "Designing immersive brand identities, high-fidelity UI/UX design systems, and rich multimedia assets.",
  },
  {
    id: "build",
    number: "04",
    title: "Build",
    icon: Code,
    phase: 2,
    description:
      "Agile software engineering, secure backend integration, rigorous QA testing, and seamless cloud deployment.",
  },
  {
    id: "grow",
    number: "05",
    title: "Grow",
    icon: BarChart3,
    phase: 3,
    description:
      "Launching performance campaigns, monitoring data analytics loops, and executing continuous conversion optimization.",
  },
];

// Bottom flow – the phase of the active step is highlighted
const phases = ["Strategy", "Design", "Development", "Growth"];

/* ------------------------------------------------------------------ */
/* MOTION VARIANTS                                                    */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const trackVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.3 } },
};

/* ------------------------------------------------------------------ */
/* MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const lockRef = useRef(0); // ignores scroll events while we scroll in code
  const rafRef = useRef(0);
  const total = steps.length;

  const getPad = (track) =>
    parseFloat(getComputedStyle(track).paddingLeft) || 0;

  // Only scrolls when the cards actually overflow (below xl)
  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth + 1) return;

    const card = track.children[index];
    if (!card) return;

    lockRef.current = Date.now() + 800;
    track.scrollTo({
      left: card.offsetLeft - getPad(track),
      behavior: "smooth",
    });
  }, []);

  const goTo = (index) => {
    const next = (index + total) % total;
    setActive(next);
    scrollToIndex(next);
  };

  // Keep the active step in sync while the person swipes
  const handleScroll = () => {
    if (Date.now() < lockRef.current) return;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track || track.scrollWidth <= track.clientWidth + 1) return;

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
        setActive(total - 1);
        return;
      }

      const pad = getPad(track);
      let nearest = 0;
      let best = Infinity;

      Array.from(track.children).forEach((child, i) => {
        const distance = Math.abs(child.offsetLeft - pad - track.scrollLeft);
        if (distance < best) {
          best = distance;
          nearest = i;
        }
      });

      setActive(nearest);
    });
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const activePhase = steps[active].phase;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="how-we-work"
        className="
          relative flex w-full min-h-screen items-center
          overflow-hidden bg-[#FAF8FF]
          px-5 py-16
          text-[#17113D]
          sm:px-8 sm:py-20
          md:px-12
          lg:px-16 lg:py-24
          xl:px-20
        "
      >
        <Backdrop />

        <div className="relative mx-auto w-full max-w-[1320px]">
          {/* -------------------------------------------------------- */}
          {/* HEADER                                                     */}
          {/* -------------------------------------------------------- */}

          <div className="relative">
            <motion.div
              variants={headerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-[680px]"
            >
              <motion.p
                variants={fadeUp}
                className="font-sora text-[11px] font-semibold uppercase text-[#17113d] sm:text-[16px]"
              >
                How We Work
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="
                  mt-5
                  font-sora
                  text-[32px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.03em]
                  bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent
                  min-[400px]:text-[36px]
                  sm:mt-6
                  sm:text-[44px]
                  lg:text-[52px]
                  xl:text-[58px]
                "
              >
                {/* From Concept to <br className="hidden sm:block" />
                <span className="text-[#6246E5]">Commercial Scale.</span> */}
                From Concept to 
                <br />
                Commercial Scale
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  max-w-[540px]
                  font-inter
                  text-[15px]
                  leading-relaxed
                  text-[#17113D]/65
                  sm:mt-6
                  sm:text-lg
                "
              >
                A streamlined, collaborative process that turns your ideas into
                scalable digital solutions.
              </motion.p>
            </motion.div>

            {/* <Tagline /> */}
          </div>

          {/* -------------------------------------------------------- */}
          {/* STEPS (carousel below xl, 5-up grid from xl)               */}
          {/* -------------------------------------------------------- */}

          <motion.ul
            ref={trackRef}
            onScroll={handleScroll}
            variants={trackVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="
              relative
              -mx-5 mt-10 flex
              snap-x snap-mandatory
              gap-4
              overflow-x-auto
              px-5 pb-6 pt-3
              scroll-px-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:-mx-8 sm:mt-12 sm:px-8 sm:scroll-px-8
              md:-mx-12 md:px-12 md:scroll-px-12
              lg:-mx-16 lg:mt-14 lg:px-16 lg:scroll-px-16
              xl:mx-0 xl:grid xl:snap-none xl:grid-cols-5 xl:gap-5
              xl:overflow-visible xl:px-0
            "
          >
            {steps.map((step, i) => (
              <StepCard
                key={step.id}
                step={step}
                index={i}
                total={total}
                isActive={i === active}
                onSelect={() => setActive(i)}
              />
            ))}
          </motion.ul>

          {/* -------------------------------------------------------- */}
          {/* FLOW + CONTROLS                                            */}
          {/* -------------------------------------------------------- */}

          <div className="mt-4 flex items-center justify-between gap-5 sm:mt-6 xl:mt-8">
            <ol
              aria-label="Process phases"
              className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4 xl:pl-6"
            >
              <li aria-hidden="true" className="hidden sm:block">
                <span className="block h-px w-8 bg-[#6246E5] xl:w-[60px]" />
              </li>

              {phases.map((phase, i) => (
                <li
                  key={phase}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <span
                    className={`
                      font-sora text-[10px] font-semibold uppercase
                      tracking-[0.2em] text-[#6246E5]
                      transition-opacity duration-500
                      sm:text-[11px]
                      ${activePhase === i ? "opacity-100" : "opacity-45"}
                    `}
                  >
                    {phase}
                  </span>

                  {i < phases.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 text-[#6246E5]/60"
                      strokeWidth={2}
                    />
                  )}
                </li>
              ))}
            </ol>

            <div
              role="group"
              aria-label="Step navigation"
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 lg:hidden"
            >
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous step"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-[#17113D]/15
                  bg-[#FAF8FF]
                  text-[#6246E5]
                  transition-all duration-300
                  hover:border-[#6246E5]/50
                  hover:bg-[#B8A5FF]/20
                  active:scale-90
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#6246E5]/50
                  sm:h-[52px] sm:w-[52px]
                "
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next step"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  bg-[#6246E5]
                  text-[#FAF8FF]
                  shadow-[0_12px_28px_-10px_rgba(98,70,229,0.7)]
                  transition-all duration-300
                  hover:bg-[#17113D]
                  active:scale-90
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#6246E5]/50
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#FAF8FF]
                  sm:h-[52px] sm:w-[52px]
                "
              >
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default HowWeWork;

/* ------------------------------------------------------------------ */
/* STEP CARD                                                          */
/* ------------------------------------------------------------------ */

function StepCard({ step, index, total, isActive, onSelect }) {
  const Icon = step.icon;

  return (
    <motion.li
      variants={cardVariants}
      whileHover={{ y: -6,
        scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
       }}}
      onClick={onSelect}
      // earlier cards sit above later ones so the number badge that
      // straddles the card edge (xl) is never covered by its neighbour
      style={{ zIndex: total - index }}
      aria-current={isActive ? "step" : undefined}
      className={`
        group relative flex
        w-[82%] shrink-0 snap-start
        cursor-pointer flex-col
        rounded-[22px]
        border
        bg-[#FAF8FF]
        p-5
        transition-[border-color,box-shadow] duration-500
        min-[480px]:w-[300px]
        sm:w-[320px] sm:p-6
        lg:w-[340px]
        xl:w-auto
        ${
  isActive
    ? "border-[#6246E5]/50 shadow-[0_24px_50px_-20px_rgba(98,70,229,0.45)]"
    : "border-[#17113D]/10 shadow-[0_10px_30px_-22px_rgba(98,70,229,0.25)] hover:border-[#6246E5]/50 hover:shadow-[0_24px_45px_-18px_rgba(98,70,229,0.35)]"
}
      `}
    >
      {/* Icon · connector line · number badge */}
      <div className="flex items-center ">
        <span
          className={`
            flex h-16 w-16 shrink-0 items-center justify-center
            rounded-[20px]
            transition-colors duration-500
            sm:h-[72px] sm:w-[72px] sm:rounded-[22px]
            xl:h-16 xl:w-16
            2xl:h-[76px] 2xl:w-[76px]
            ${
              isActive
                ? "bg-[#6246E5] text-[#FAF8FF]"
                : "bg-gradient-to-br from-[#B8A5FF]/45 to-[#B8A5FF]/15 text-[#6246E5]"
            }
          `}
        >
          <Icon
            className="h-7 w-7 sm:h-8 sm:w-8"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>

        <span
          aria-hidden="true"
          className="relative mx-3 h-px flex-1 overflow-hidden sm:mx-4"
        >
          <motion.span
            variants={lineVariants}
            className="absolute inset-0 origin-left bg-gradient-to-r from-[#6246E5]/10 via-[#6246E5]/30 to-[#6246E5]/55"
          />
        </span>

        {/* Number badge – centred on the card border from xl up (card padding is 24px) */}
        <span
          className="relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#FAF8FF] xl:-mr-[41px]"
        >
          <span
            className={`
              absolute inset-0 rounded-full border transition-colors duration-500
              ${
                isActive
                  ? "border-[#6246E5] bg-[#6246E5]"
                  : "border-[#6246E5]/20 bg-[#B8A5FF]/30"
              }
            `}
          />
          <span className="absolute -top-[3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#6246E5]" />
          <span
            className={`
              relative font-sora text-[12px] font-semibold tabular-nums
              transition-colors duration-500
              ${isActive ? "text-[#FAF8FF]" : "text-[#17113D]"}
            `}
          >
            {step.number}
          </span>
        </span>
      </div>

      <h3 className="mt-6 font-sora text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#17113D] sm:text-2xl">
        {step.title}
      </h3>

      <p className="mt-3 font-inter text-[14.5px] leading-relaxed text-[#17113D]/60">
        {step.description}
      </p>

      <span className="mt-auto pt-6">
        <span
          aria-hidden="true"
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            bg-[#B8A5FF]/25
            text-[#6246E5]
            transition-colors duration-300
            group-hover:bg-[#6246E5]
            group-hover:text-[#FAF8FF]
          "
        >
          <ArrowRight
            className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </span>
      </span>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/* TAGLINE (script-style note with curved arrow, md and up)           */
/* ------------------------------------------------------------------ */

function Tagline() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="
        pointer-events-none
        absolute right-0 top-0
        hidden aspect-[300/110]
        w-[240px]
        md:block
        xl:w-[320px]
      "
    >
      <svg
        viewBox="0 0 300 110"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <motion.path
          d="M2 100 C 50 30, 150 4, 250 14"
          stroke="#B8A5FF"
          strokeOpacity="0.7"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.6, ease }}
        />
        <motion.path
          d="M150 98 C 222 94, 264 72, 281 26"
          stroke="#6246E5"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9, ease }}
        />
        <motion.path
          d="M269 34 L282 21 L292 37"
          stroke="#6246E5"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 2 }}
        />
      </svg>

      <p
        className="
          absolute left-[24%] top-[20%]
          -rotate-[9deg]
          font-inter text-[12px] font-medium italic leading-snug
          text-[#6246E5]
          xl:text-[14px]
        "
      >
        Better process.
        <br />
        <span className="ml-3">Bigger possibilities.</span>
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* BACKDROP (decorative only)                                         */
/* ------------------------------------------------------------------ */

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B8A5FF]/20 sm:-right-16 sm:-top-16 sm:h-96 sm:w-96" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#B8A5FF]/15 sm:h-96 sm:w-96" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute -bottom-20 -left-20 hidden h-[420px] w-[420px] sm:block"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="#6246E5"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="#B8A5FF"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}