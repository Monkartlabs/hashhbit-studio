
"use client";

export default function CuriousMindHero() {
  return (
    <main className="relative -mt-30 overflow-hidden bg-[#FAF8FF] text-[#24133D]">
      {/* Perspective Grid */}
      <div className="absolute inset-0 [perspective:900px]">
        <div
          className="absolute inset-[-35%] opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "rotateX(58deg) scale(1.25)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Soft Lavender Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] max-w-none -translate-x-1/2 rounded-full bg-violet-300/25 blur-[130px]" />

      {/* Top Purple Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] max-w-none rounded-full bg-fuchsia-200/30 blur-[100px]" />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 sm:py-20">
        <div className="flex w-full max-w-full flex-col items-center">
          {/* Main Heading */}
          <h1 className="w-full text-center text-[clamp(42px,8.5vw,135px)] leading-[0.95] tracking-[-0.075em] sm:text-[clamp(60px,10vw,135px)]">
            <span className="block font-medium font-inter tracking-tighter text-[#17113D]">
              Have a Vision?
            </span>

            <span
              className="
                relative -mt-2 block
                bg-gradient-to-r from-[#17113D] via-[#6246E5] to-[#B8A5FF]
                bg-clip-text font-black font-bingo-regular
                tracking-wide text-transparent
                
              "
            >
              Let's Build It.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-6 w-full max-w-3xl text-center font-inter text-sm leading-7 text-[#24133D]/95 sm:mt-8 sm:text-base sm:leading-8">
            Whether you're launching a disruptive brand, building a complex
            digital product, or scaling customer acquisition, let's create
            something extraordinary together.
          </p>

          {/* CTA */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap">
            {/* Primary CTA */}
            <a
              href="/contact"
              className="
                group relative flex h-14 w-full max-w-[260px] shrink-0
                items-center overflow-hidden rounded-full pr-2
                border border-violet-300
                bg-white/60
                shadow-[0_8px_30px_rgba(109,40,217,0.08)]
                backdrop-blur-md
                transition-all duration-500
                hover:scale-[1.035]
                hover:border-violet-400
                hover:bg-white/80
                hover:shadow-[0_12px_45px_rgba(109,40,217,0.18)]
                active:scale-[0.98]
              "
            >
              {/* Animated Circle */}
              <span
                className="
                  absolute left-1 top-1/2
                  h-12 w-12 -translate-y-1/2
                  rounded-full
                  bg-gradient-to-br from-[#17113D] via-[#6246E5] to-[#B8A5FF]
                  shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  transition-all duration-[1500ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  group-hover:left-[calc(100%-52px)]
                  group-hover:from-violet-400
                  group-hover:to-fuchsia-400
                "
              />

              {/* CTA Text */}
              <span
                className="
                  relative z-10 ml-12 pl-1
                  whitespace-nowrap text-[13px]
                  tracking-[0.12em] text-[#17113D]
                  transition-all duration-500
                  group-hover:-translate-x-3
                  font-inter font-bold
                "
              >
                START A PROJECT
              </span>

              {/* Animated Arrow */}
              <span
                className="
                  relative z-10 ml-2 flex h-7 w-7
                  items-center justify-center
                  overflow-hidden text-lg text-violet-700
                  transition-colors duration-500
                  group-hover:text-violet-950
                "
              >
                <span
                  className="
                    transition-transform duration-500 ease-out
                    group-hover:translate-x-7
                    group-hover:-translate-y-7
                  "
                >
                  ↗
                </span>

                <span
                  className="
                    absolute -translate-x-7 translate-y-7
                    transition-transform duration-500 ease-out
                    group-hover:translate-x-0
                    group-hover:translate-y-0
                  "
                >
                  ↗
                </span>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="/contact#consultation"
              className="
                inline-flex min-h-14 w-full max-w-[320px]
                items-center justify-center gap-3
                rounded-full border border-violet-300
                bg-transparent px-4 py-3
                font-inter text-[12px] font-bold tracking-wide
                text-[#17113D]
                transition-all duration-300
                hover:border-violet-400
                hover:bg-white/60
                active:scale-[0.98]
                sm:w-auto sm:max-w-none sm:px-6 sm:text-[13px]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M16 3v4M8 3v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <span className="whitespace-nowrap">
                Book a Strategy Consultation
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Decorative Orb */}
      {/* <div
        className="
          pointer-events-none absolute -bottom-20 -right-16
          h-44 w-44 rounded-full
          bg-gradient-to-br from-violet-400 to-fuchsia-300
          opacity-35 blur-sm
          shadow-[0_0_100px_rgba(139,92,246,0.35)]
        "
      /> */}
    </main>
  );
}
