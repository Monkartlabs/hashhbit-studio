"use client";

const services = [
  "DIGITAL MARKETING",
  "WEB SOLUTIONS",
  "UI/UX DESIGN",
  "MOTION DESIGN",
  "BRANDING",
  "SEO",
  "SOCIAL MEDIA",
  "WEB DEVELOPMENT",
];

function MarqueeContent() {
  return (
    <div className="flex w-max shrink-0 items-center">
      {[...services, ...services].map((item, index) => (
        <div key={`${item}-${index}`} className="flex shrink-0 items-center">
          <span
            className="
              whitespace-nowrap
              px-5
              text-[40px]
              font-black
              uppercase
              leading-none
              tracking-[-0.04em]
              text-white
              sm:px-7
              sm:text-[32px]
              md:px-9
              md:text-[40px]
              lg:text-[50px]
            "
          >
            {item}
          </span>

          <span
            className="
              shrink-0
              pr-8
              pl-8
              text-[34px]
              font-bold
              text-white
              sm:pr-7
              sm:text-[45px]
              md:pr-9
              md:text-[55px]
              lg:text-[64px]
            "
          >
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({ direction = "left", className = "" }) {
  return (
    <div
      className={`
        absolute
        left-1/2
        flex
        w-[180%]
        -translate-x-1/2
        overflow-hidden
        bg-black
        py-3
        sm:py-4
        ${className}
      `}
    >
      <div
        className={`flex w-max ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}

export default function DesignMarquee() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#f3f0e8]">
      <div className="relative h-[200px] w-full max-w-full overflow-hidden sm:h-[310px] md:h-[330px]">
        {/* Diagonal strip 1 */}
        <MarqueeRow
          direction="left"
          className="
            top-1/2
            -translate-y-1/2
            rotate-[4.7deg]
            border-y
            border-white/20
          "
        />

        {/* Diagonal strip 2 */}
        <MarqueeRow
          direction="left"
          className="
            top-1/2
            -translate-y-1/2
            -rotate-[5deg]
            border-y
            border-white/20
          "
        />
      </div>

      <style>{`
        @keyframes marqueeLeft {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .marquee-left {
          animation: marqueeLeft 150s linear infinite;
          will-change: transform;
        }

        .marquee-right {
          animation: marqueeRight 100s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-left,
          .marquee-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
