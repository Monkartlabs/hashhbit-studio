"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Cpu,
  Gem,
  Globe,
  LayoutDashboard,
  Leaf,
  Lightbulb,
  Package,
  PenTool,
  Rocket,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* COLORS                                                             */
/* bg #FAF8FF · soft #B8A5FF · accent #6246E5 · ink #17113D           */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* CONTENT                                                            */
/* ------------------------------------------------------------------ */

// Icon used for each capability label. Unknown labels fall back to Sparkles.
const capabilityIcons = {
  "Brand Strategy": PenTool,
  "Packaging Design": Package,
  "E-commerce Development": ShoppingCart,
  "Performance Marketing": TrendingUp,
  "Web App": Globe,
  "UI/UX Design": LayoutDashboard,
  "AI Automation": Cpu,
  "Growth Marketing": TrendingUp,
};

/**
 * Entries 02–05 are PLACEHOLDERS so the slider works out of the box.
 * Replace the copy, numbers and images with your real case studies.
 */
const placeholder = (n, icon, industry, capabilities) => ({
  id: `case-${n}`,
  name: `BRAND ${String(n).padStart(2, "0")}`,
  icon,
  industry,
  capabilities,
  challenge: "Describe the problem this client came to you with.",
  solution: "Describe what you designed and built to solve it.",
  results: [
    {
      prefix: "+",
      value: 120,
      suffix: "%",
      label: "Describe your first headline result.",
    },
    {
      prefix: "",
      value: 35,
      suffix: "%",
      label: "Describe your second headline result.",
    },
  ],
  images: {
    hero: `/case-studies/case-${n}/hero.jpg`,
    phone: `/case-studies/case-${n}/phone.png`,
    site: `/case-studies/case-${n}/site.png`,
  },
});

const caseStudies = [
  {
    id: "orcane",
    name: "ORCANE",
    icon: Leaf,
    industry: "FMCG / Direct-to-Consumer (D2C)",
    capabilities: [
      "Brand Strategy",
      "Packaging Design",
      "E-commerce Development",
      "Performance Marketing",
    ],
    challenge:
      "Low digital visibility, unoptimized checkout funnels, and generic brand positioning in a crowded market.",
    solution:
      "A complete brand re-architecture, lightning-fast Next.js e-commerce platform, and targeted multi-channel growth funnels.",
    results: [
      {
        prefix: "+",
        value: 300,
        suffix: "%",
        label: "Growth in D2C online transactions within 6 months.",
      },
      {
        prefix: "",
        value: 42,
        suffix: "%",
        label: "Reduction in customer acquisition cost (CAC).",
      },
    ],
    // Put these files in /public/case-studies/orcane/ (or change the paths).
    // Until the files exist, a branded placeholder is shown instead.
    images: {
      hero: "/images/service_1.jpg",
      phone: "/images/service_2.jpg",
      site: "/images/service_3.jpg",
    },
  },
];

/* ------------------------------------------------------------------ */
/* MOTION VARIANTS                                                    */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1];

// Section header (scroll reveal)
const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// Case switching (direction aware)
const panelVariants = {
  enter: (d) => ({ opacity: 0, x: d * 36 }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  exit: (d) => ({
    opacity: 0,
    x: d * -36,
    transition: { duration: 0.3, ease },
  }),
};

const panelItem = {
  enter: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const collageVariants = {
  enter: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const heroVariants = {
  enter: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease } },
};

const phoneVariants = {
  enter: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const siteVariants = {
  enter: { opacity: 0, y: 40, x: 16 },
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease } },
};

/* ------------------------------------------------------------------ */
/* MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export function CaseStudies() {
  // [activeIndex, direction] – direction drives the slide animation
  const [[active, dir], setState] = useState([0, 1]);
  const total = caseStudies.length;
  const study = caseStudies[active];

  const paginate = (d) =>
    setState(([current]) => [(current + d + total) % total, d]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="case-studies"
        className="
          relative flex w-full h-[300vh] md:h-full items-center
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

          <motion.div
            variants={headerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[760px]"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[11px] font-semibold uppercase  text-[#17113d] sm:text-[16px]"
            >
              Proven Impact
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
              {/* Ideas We’ve Turned Into{" "}
              <span className="text-[#6246E5]">Market Realities.</span> */}
              Ideas We've Turned Into
              <br />
              Market Realities
            </motion.h2>
          </motion.div>

          {/* -------------------------------------------------------- */}
          {/* CASE CARD                                                  */}
          {/* -------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="
              mt-10
              overflow-hidden
              rounded-[22px]
              border border-[#17113D]/10
              bg-[#FAF8FF]
              shadow-[0_30px_80px_-40px_rgba(98,70,229,0.35)]
              sm:mt-12
              sm:rounded-[28px]
              lg:mt-14
              lg:grid
              lg:grid-cols-[48%_52%]
            "
          >
            {/* ====================================================== */}
            {/* LEFT — IMAGE COLLAGE                                     */}
            {/* ====================================================== */}

            <div
              className="
                relative
                aspect-[5/6]
                w-full
                p-3
                min-[480px]:aspect-[4/4.2]
                sm:aspect-[4/3]
                sm:p-5
                lg:aspect-auto
                lg:min-h-[660px]
                lg:p-6
              "
            >
              <div className="relative h-full w-full">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={study.id}
                    variants={collageVariants}
                    initial="enter"
                    animate="show"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    {/* Hero image */}
                    <motion.div
                      variants={heroVariants}
                      className="
                        group/hero
                        absolute inset-y-0 left-0
                        w-[62%]
                        overflow-hidden
                        rounded-[16px]
                        shadow-[0_20px_40px_-20px_rgba(23,17,61,0.5)]
                        sm:rounded-[24px]
                      "
                    >
                      <CaseImage
                        src={study.images.hero}
                        alt={`${study.name} brand visual`}
                        label="Hero image"
                        className="object-cover transition-transform duration-[1600ms] ease-out group-hover/hero:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#17113D]/55 to-transparent"
                      />
                    </motion.div>

                    {/* Phone mockup */}
                    <motion.div
                      variants={phoneVariants}
                      className="
                        absolute right-0 top-[1.5%]
                        h-[52%] w-[36%]
                        overflow-hidden
                        rounded-[14px]
                        bg-[#B8A5FF]/30
                        sm:rounded-[22px]
                      "
                    >
                      <CaseImage
                        src={study.images.phone}
                        alt={`${study.name} mobile app`}
                        label="Mobile"
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Website mockup */}
                    <motion.div
                      variants={siteVariants}
                      className="
                        absolute bottom-[2%] right-0 z-10
                        h-[41%] w-[44%]
                        overflow-hidden
                        rounded-[14px]
                        border border-white
                        bg-white
                        shadow-[0_24px_50px_-20px_rgba(23,17,61,0.45)]
                        sm:rounded-[20px]
                      "
                    >
                      <CaseImage
                        src={study.images.site}
                        alt={`${study.name} website`}
                        label="Website"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider controls */}
              <div
                role="group"
                aria-label="Case study navigation"
                className="
                  absolute bottom-5 left-5 z-20
                  flex items-center gap-1.5
                  rounded-full
                  bg-[#17113D]/25
                  p-1.5
                  text-white
                  backdrop-blur-md
                  sm:bottom-8 sm:left-8
                  sm:gap-2
                  lg:bottom-9 lg:left-9
                "
              >
                <SliderButton direction="prev" onClick={() => paginate(-1)} />

                <span
                  aria-live="polite"
                  className="min-w-[58px] text-center font-sora text-xs font-semibold tabular-nums sm:min-w-[68px] sm:text-sm"
                >
                  {String(active + 1).padStart(2, "0")}
                  <span className="text-white/60">
                    {" "}
                    / {String(total).padStart(2, "0")}
                  </span>
                </span>

                <SliderButton direction="next" onClick={() => paginate(1)} />
              </div>
            </div>

            {/* ====================================================== */}
            {/* RIGHT — DETAILS                                          */}
            {/* ====================================================== */}

            <div className="relative min-w-0 bg-white/70">
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={dir}
              >
                <motion.div
                  key={study.id}
                  custom={dir}
                  variants={panelVariants}
                  initial="enter"
                  animate="show"
                  exit="exit"
                  className="
                    flex h-full flex-col justify-center
                    gap-7
                    p-6
                    sm:gap-8
                    sm:p-10
                    lg:p-10
                    xl:gap-9
                    xl:p-12
                  "
                >
                  {/* Brand + capabilities */}
                  <motion.div
                    variants={panelItem}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <span className="relative inline-block font-sora text-[34px] font-bold leading-none tracking-[-0.02em] text-[#17113D] sm:text-[42px]">
                        {study.name}
                        {/* <study.icon
                          aria-hidden="true"
                          className="absolute -right-1 -top-4 h-4 w-4 text-[#6246E5] sm:-top-5 sm:h-5 sm:w-5"
                          strokeWidth={2}
                        /> */}
                      </span>
                      <p className="mt-3 font-inter text-sm text-[#17113D]/55 sm:text-[15px]">
                        {study.industry}
                      </p>
                    </div>

                    <div>
                      <p className="font-sora text-[10px] font-bold uppercase tracking-[0.25em] text-[#17113D]/55 sm:text-[11px]">
                        Capabilities Deployed
                      </p>

                      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-0 sm:gap-y-0 sm:divide-x sm:divide-[#17113D]/10">
                        {study.capabilities.map((label) => {
                          const Icon = capabilityIcons[label] ?? Sparkles;

                          return (
                            <li
                              key={label}
                              className="flex flex-col gap-2 sm:px-4 sm:first:pl-0 sm:last:pr-0"
                            >
                              <Icon
                                aria-hidden="true"
                                className="h-5 w-5 text-[#6246E5]"
                                strokeWidth={1.7}
                              />
                              <span className="font-inter text-[13px] leading-snug text-[#17113D]/65">
                                {label}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={panelItem}
                    aria-hidden="true"
                    className="h-px w-full bg-[#17113D]/10"
                  />

                  {/* Challenge / Solution */}
                  <motion.div
                    variants={panelItem}
                    className="grid gap-7 sm:grid-cols-2 sm:gap-0"
                  >
                    <InfoBlock
                      icon={Target}
                      title="The Challenge"
                      className="sm:pr-8"
                    >
                      {study.challenge}
                    </InfoBlock>

                    <InfoBlock
                      icon={Lightbulb}
                      title="The Solution"
                      className="sm:border-l sm:border-[#17113D]/10 sm:pl-8"
                    >
                      {study.solution}
                    </InfoBlock>
                  </motion.div>

                  {/* Results */}
                  <motion.div variants={panelItem}>
                    <div className="flex items-center gap-3">
                      <IconBadge icon={BarChart3} />
                      <h3 className="font-sora text-[12px] font-bold uppercase tracking-[0.2em] text-[#17113D]">
                        The Results
                      </h3>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="rounded-2xl bg-[#B8A5FF]/15 p-5 sm:p-6"
                        >
                          <p className="font-sora text-[40px] font-semibold leading-none tracking-[-0.03em] text-[#17113D] tabular-nums sm:text-[46px]">
                            <CountUp
                              value={result.value}
                              prefix={result.prefix}
                              suffix={result.suffix}
                            />
                          </p>
                          <p className="mt-3 font-inter text-[14px] leading-snug text-[#17113D]/60 sm:text-[15px]">
                            {result.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default CaseStudies;

/* ------------------------------------------------------------------ */
/* SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */

function SliderButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous case study" : "Next case study"}
      className="
        group flex h-9 w-9 shrink-0 items-center justify-center
        rounded-full border border-white/30
        transition-all duration-300
        hover:bg-white hover:text-[#17113D]
        active:scale-90
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/70
        sm:h-10 sm:w-10
      "
    >
      <Icon
        className={`h-4 w-4 transition-transform duration-200 sm:h-[18px] sm:w-[18px] ${
          direction === "prev"
            ? "group-hover:-translate-x-0.5"
            : "group-hover:translate-x-0.5"
        }`}
      />
    </button>
  );
}

function IconBadge({ icon: Icon }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B8A5FF]/25 text-[#6246E5]">
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
    </span>
  );
}

function InfoBlock({ icon, title, className = "", children }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} />
        <h3 className="font-sora text-[12px] font-bold uppercase tracking-[0.2em] text-[#17113D]">
          {title}
        </h3>
      </div>

      <p className="mt-4 font-inter text-[15px] leading-relaxed text-[#17113D]/65">
        {children}
      </p>
    </div>
  );
}

/* Image with a branded placeholder when the file is missing */
function CaseImage({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="
          flex h-full w-full items-center justify-center
          bg-gradient-to-br from-[#B8A5FF]/55 via-[#B8A5FF]/25 to-[#6246E5]/25
        "
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#17113D]/45 sm:text-xs">
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onError={() => setFailed(true)}
      className={`h-full w-full ${className}`}
    />
  );
}

/* Counts up from 0 once the stat scrolls into view */
function CountUp({ value, prefix = "", suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setN(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* BACKDROP (decorative only)                                         */
/* ------------------------------------------------------------------ */

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#B8A5FF]/15 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#6246E5]/[0.06] blur-3xl" />
    </div>
  );
}