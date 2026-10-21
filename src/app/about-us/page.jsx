
"use client";

import ValuesAccordion from "../../components/ValueAccordian";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import HowWeWork from "@/components/HowWeWork";


const partners = [
  "NEXORA",
  "vertex.",
  "ORBITAL",
  "cloudnine",
  "NOVA TECH",
  "AETHER",
  "NEXORA",
  "vertex.",
  "ORBITAL",
  "cloudnine",
  "NOVA TECH",
  "AETHER",
];

const values = [
  {
    id: "beliefs",
    number: "01",
    title: "Our Beliefs",
    subtitle: "People first. Progress always.",
    description:
      "We believe great things happen when people, ideas, and technology come together. Every challenge is an opportunity to think differently, question the usual, and create something that makes a real difference.",
    secondParagraph:
      "We value honest relationships, thoughtful collaboration, and the courage to keep improving. For us, success is not just about what we build, but the positive impact we create along the way.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    alt: "Team members working together in a collaborative office",
  },
  {
    id: "purpose",
    number: "02",
    title: "Our Purpose",
    subtitle: "Turning challenges into opportunities.",
    description:
      "Our purpose is to help businesses navigate complexity with confidence. We combine creative thinking, technical expertise, and practical strategies to turn ambitious ideas into meaningful outcomes.",
    secondParagraph:
      "From the first conversation to the final delivery, we focus on creating solutions that work in the real world. We want our partnerships to grow stronger, our work to create lasting value, and every project to move our clients forward.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
    alt: "Colleagues discussing ideas around a table",
  },
];

const approaches = [
  {
    number: "01",
    title: "Understand",
    description:
      "We listen, ask the right questions, and understand the real challenge before jumping into solutions.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Create",
    description:
      "We bring strategy, creativity, and technology together to build solutions that serve a clear purpose.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Evolve",
    description:
      "We learn from every outcome, improve continuously, and help our partners prepare for what's next.",
    icon: "↗",
  },
];

function ArrowIcon({ down = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {down ? (
        <path
          d="M12 4v16m0 0 7-7m-7 7-7-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M4 12h16m0 0-7-7m7 7-7 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(null);

 const selectedValue =
  values.find((value) => value.id === activeValue) || values[0];

  return (
    <main className="about-page overflow-hidden bg-[#FAF8FF] text-[#17113d]">
        <Navbar />
      {/* 1. HERO SECTION */}
      <section className="relative px-5 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-20 lg:pb-36 lg:pt-40">
        <div className="about-glow pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#B8A5ff]/30 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3 animate-fade-up">
            <p className="font-sora text-[14px] font-semibold uppercase tracking-[0.14em] text-[#6246e5] sm:text-sm">
              Get to know us
            </p>
          </div>

          <h1 className="max-w-5xl font-sora font-semibold text-4xl leading-[1.1] tracking-tighter animate-fade-up sm:text-5xl md:text-7xl lg:text-8xl">
            We turn big ideas into{" "}
            <br />
            <span className="uppercase relative inline-block text-[#6246e5]">
              meaningful
            </span>{" "}
            impact.
          </h1>

          <div className="mt-8 flex flex-col gap-8 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl font-inter text-base leading-8 text-[#17113d]/80 sm:text-lg">
              We are a team of curious minds, creative thinkers, and
              problem-solvers who believe better ideas can build a better
              future. We partner with ambitious people to make things happen.
            </p>

            <a
              href="#our-company"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#6246e5] px-6 py-4 font-sora text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#17113d] hover:shadow-xl hover:shadow-[#6246e5]/20"
            >
              Discover our story
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2rem] sm:mt-20 sm:rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=90"
              alt="A bright, modern workspace designed for collaboration"
              className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[530px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17113d]/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 text-white sm:bottom-10 sm:left-10 sm:right-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sora font-bold text-xs uppercase tracking-[0.2em] text-white/75">
                  IDEAS • DESIGN • TECHNOLOGY • GROWTH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COMPANY */}
      <section
        id="our-company"
        className="scroll-mt-10 bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-up">
            <p className="mb-5 font-sora text-[14px] font-bold uppercase tracking-[0.24em] text-[#6246e5]">
              Who we are
            </p>

            <h2 className="font-sora font-semibold text-4xl sm:text-5xl lg:text-6xl">
              A company built around{" "}
              <span className="text-[#6246e5] uppercase">possibility.</span>
            </h2>

            <p className="mt-7 font-inter text-base leading-8 text-[#17113d]/70 sm:text-lg">
              We bring people, ideas, and technology together to solve
              meaningful problems. Our work starts with understanding what
              matters to our partners and ends with creating something that
              moves them forward.
            </p>

            <p className="mt-5 font-inter text-base leading-8 text-[#17113d]/70 sm:text-lg">
              We are not here to follow the same old patterns. We are here
              to ask better questions, explore fresh perspectives, and turn
              ambitious thinking into practical results.
            </p>

            <a
              href="#our-approach"
              className="group mt-8 inline-flex items-center gap-3 font-sora text-sm font-semibold text-[#6246e5]"
            >
              How we work
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          <div className="relative">
            {/* <div className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl bg-[#B8A5ff]/35 sm:-left-7 sm:-top-7" /> */}

            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
              alt="A collaborative work environment"
              className="relative z-10 h-[360px] w-full rounded-[2rem] object-cover sm:h-[470px]"
            />

            <div className="absolute -bottom-6 right-4 z-20 max-w-[260px] rounded-2xl bg-[#17113d] p-5 text-white shadow-xl sm:-right-6 sm:p-7">
              <p className="font-soral sm:text-3xl">
                Better together.
              </p>
              <p className="mt-2 font-inter text-sm leading-6 text-white/70">
                Different perspectives. Shared ambitions. Lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED PARTNERS MARQUEE */}
      <section className="overflow-hidden border-y border-[#17113d]/10 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-10">
          <p className="font-sora text-xs font-bold uppercase tracking-[0.24em] text-[#6246e5]">
            Trusted partnerships
          </p>
          <h2 className="mt-3 font-soral sm:text-3xl">
            Good things happen when we work together.
          </h2>
        </div>

        <div className="mt-10 overflow-hidden">
  <div className="flex w-max animate-[marquee_80s_linear_infinite] items-center gap-5 hover:[animation-play-state:paused] sm:gap-8">
    {[0, 1].map((group) => (
      <div
        key={group}
        aria-hidden={group === 1 ? "true" : undefined}
        className="flex shrink-0 items-center gap-5 sm:gap-8"
      >
        {partners.map((partner, index) => (
          <div
            key={`${group}-${partner}-${index}`}
            className="flex min-w-[150px] items-center justify-center rounded-2xl border border-[#17113d]/10 bg-white px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6246e5]/40 hover:shadow-lg hover:shadow-[#6246e5]/10 sm:min-w-[190px]"
          >
            <span className="whitespace-nowrap font-sora text-sm font-bold tracking-wide text-[#17113d]/60 transition-colors duration-300 hover:text-[#6246e5] sm:text-base">
              {partner}
            </span>
          </div>
        ))}
      </div>
    ))}
  </div>

  <style>{`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee-static {
        animation: none !important;
      }
    }
  `}</style>
</div>
      </section>

      {/* 4. OUR BELIEFS & PURPOSE */}
      <section className="px-5 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="mb-4 font-sora text-[14px] font-bold uppercase tracking-[0.20em] text-[#6246e5]">
              What drives us
            </p>
            <h2 className="font-sora font-semibold text-4xl leading-tight sm:text-5xl lg:text-6xl">
              The things we{" "}
              <br/>
              <span className="text-[#6246e5] font-black uppercase">stand for.</span>
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            {/* Interactive accordion */}
            <div className="space-y-0">
              {/* {values.map((value) => {
                const isActive = activeValue === value.id;

                return (
                  <div
                    key={value.id}
                    className={`border-b transition-colors duration-300 ${
                      isActive
                        ? "border-[#6246e5]/40"
                        : "border-[#17113d]/10"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
  setActiveValue(activeValue === value.id ? null : value.id)
}
                      aria-expanded={isActive}
                      aria-controls={`content-${value.id}`}
                      className="group flex w-full items-center gap-4 py-7 text-left sm:py-8"
                    >
                      <span
                        className={`h-12 w-1 shrink-0 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-[#6246e5]" : "bg-[#B8A5ff]/60"
                        }`}
                      />

                      <span
                        className={`flex-1 font-soral transition-colors duration-300 sm:text-3xl ${
                          isActive
                            ? "text-[#6246e5]"
                            : "text-[#17113d] group-hover:text-[#6246e5]"
                        }`}
                      >
                        {value.title}
                      </span>

                      <span className="mr-1 font-sora text-xs text-[#17113d]/40">
                        {value.number}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "rotate-90 bg-[#6246e5] text-white"
                            : "bg-[#B8A5ff]/20 text-[#17113d] group-hover:bg-[#B8A5ff]/50"
                        }`}
                      >
                        <ArrowIcon className="h-5 w-5" />
                      </span>
                    </button>

                    <div
                      id={`content-${value.id}`}
                      className={`accordion-content ${
                        isActive ? "accordion-open" : ""
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="accordion-inner">
                        <div className="pb-8 pl-5 sm:pl-6">
                          <p className="mb-4 font-sora text-sm font-semibold text-[#17113d]">
                            {value.subtitle}
                          </p>

                          <p className="font-inter text-sm leading-7 text-[#17113d]/70 sm:text-base sm:leading-8">
                            {value.description}
                          </p>

                          <p className="mt-4 font-inter text-sm leading-7 text-[#17113d]/70 sm:text-base sm:leading-8">
                            {value.secondParagraph}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })} */}
              <ValuesAccordion values={values} />
            </div>

            {/* Image changes with selected accordion item */}
            <div
              key={selectedValue.id}
              className="relative animate-image-in"
            >
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#6246e5]/30 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

              <img
                src={selectedValue.image}
                alt={selectedValue.alt}
                className="relative z-10 h-[320px] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#17113d]/10 sm:h-[440px] sm:rounded-[2rem] lg:h-[510px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      {/* <section
        id="our-approach"
        className="relative overflow-hidden bg-[#17113d] px-5 py-20 text-white sm:px-10 sm:py-28 lg:px-20 lg:py-32"
      >
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#6246e5]/30 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-5 font-sora text-xs font-bold uppercase tracking-[0.14em] text-[#B8A5ff]">
                Our approach
              </p>

              <h2 className="font-sora font-semibold text-4xl leading-tight sm:text-5xl lg:text-6xl">
                From the first idea to{" "}
                <span className="text-[#B8A5ff]">what comes next.</span>
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3">
            {approaches.map((item) => (
              <article
                key={item.number}
                className="approach-card group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B8A5ff]/50 hover:bg-white/[0.08] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sora text-xs tracking-[0.2em] text-[#B8A5ff]">
                    {item.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6246e5]/25 text-3xl text-[#B8A5ff] transition-all duration-300 group-hover:rotate-12 group-hover:bg-[#6246e5] group-hover:text-white">
                    {item.icon}
                  </span>
                </div>

                <h3 className="mt-10 font-soral sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 font-inter text-sm leading-7 text-white/60 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-white/10">
                  <div className="h-px w-0 bg-[#B8A5ff] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-7 rounded-[1.75rem] bg-[#17113d] p-7 sm:p-10 md:flex-row md:items-center lg:p-12">
            <div className="max-w-2xl">
              <p className="mb-5 font-sora text-xs uppercase tracking-[0.2em] text-white/70">
                Have something in mind?
              </p>
              <h3 className="font-soral sm:text-4xl mb-5">
                Let's make it happen.
              </h3>
              <p className="mt-3 font-inter text-sm leading-7 text-white/80 sm:text-base">
                Tell us about your next idea. We'd love to explore what's
                possible together.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 font-sora text-sm font-semibold text-[#17113d] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section> */}
      <HowWeWork />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
