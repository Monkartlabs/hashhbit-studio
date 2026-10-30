import {
  Asterisk,
  TrendingUp,
  SlidersHorizontal,
  Users,
  MessagesSquare,
  Wallet,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { ImageColumn } from "./ImageColumn";

const leftFeatures = [
  {
    number: "01",
    title: "One Connected Team",
    description:
      "Strategy, design, engineering, and marketing working synchronously under one roof. Zero handoff friction.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Business-First Mindset",
    description:
      "We optimize for commercial ROI, revenue growth, and operational efficiency—not just pretty code or art files.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Creative + Technical Edge",
    description:
      "World-class aesthetics backed by elite software engineering capability and modern tech stacks.",
    icon: Users,
  },
];

const rightFeatures = [
  {
    number: "04",
    title: "Data-Driven Decisions",
    description:
      "Every design choice, code architecture decision, and ad dollar spent is backed by research and analytics",
    icon: MessagesSquare,
  },
  {
    number: "05",
    title: "Architected for Scale",
    description:
      "Built from day one to handle high user concurrency, heavy data loads, and future product expansions",
    icon: Wallet,
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "We don't vanish post-launch. We act as your fractional product and growth engineering partners",
    icon: LayoutGrid,
  },
];

const columnOneImages = [
  "/images/l1.jpg",
  "/images/l2.jpg",
  "/images/l3.jpg",
  "/images/l4.jpg",
];

const columnTwoImages = [
  "/images/r1.jpg",
  "/images/r2.jpg",
  "/images/r3.jpg",
  "/images/r4.jpg",
];

export function WhyChooseUs() {
  return (
    <section
      id="choose-us"
      className="relative overflow-hidden bg-[#FAF8FF] text-ivory "
    >
      <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-18">
        <div className="relative max-w-7xl ">
          <div className="flex-col items-center font-sora gap-2 text-[16px] font-bold uppercase text-[#17113d]">
            THE HASHHBIT ADVANTAGE
          </div>

          <h2
            className="mt-5 sm:mt-8 inline-block  text-[clamp(1.5rem,5vw,3.5rem)] font-semibold 4e3aa8-sora leading-[1.08] tracking-[-0.03em] bg-gradient-to-r from-[#17113D]
via-[#4e3aa8]
to-[#4c3895] bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(147,112,190,0.18)]"
          >
            Why Ambitious Companies
            <br />
            Build with us
          </h2>
        </div>

        <div
          className="relative mt-10 flex flex-col gap-10 lg:mt-30 lg:grid lg:grid-cols-[320px_1fr_320px] lg:gap-8
          "
        >
          {/* LEFT CARDS — 01, 02, 03 */}

          <div className="relative z-20 flex flex-col gap-8 lg:mt-0 font-">
            {leftFeatures.map((feature, i) => (
              <FeatureCard
                key={feature.number}
                {...feature}
                stackIndex={i}
                numberPosition="right"
                className={`
                  ${
                    i === 0
                      ? "lg:translate-x-6 lg:-translate-y-8"
                      : i === 1
                        ? "lg:translate-x-0"
                        : "lg:translate-x-6 lg:translate-y-8"
                  }
                `}
              />
            ))}
          </div>

          {/* IMAGE COLUMNS */}

          <div
            className="order-2 -mt-4 grid grid-cols-2 gap-3 lg:order-none lg:-mt-15 lg:h-[650px] h-[500px] mb-10 lg:mb-0
            "
          >
            <ImageColumn
              images={columnOneImages}
              direction="up"
              durationSeconds={30}
            />

            <ImageColumn
              images={columnTwoImages}
              direction="down"
              durationSeconds={30}
            />
          </div>

          {/* RIGHT CARDS — 04, 05, 06 */}

          <div className="order-3 relative z-20 flex flex-col gap-8 lg:order-none lg:mt-0">
            {rightFeatures.map((feature, i) => (
              <FeatureCard
                key={feature.number}
                {...feature}
                stackIndex={i}
                numberPositionClassName="right-6 lg:left-6"
                className={`
      ${
        i === 0
          ? "lg:-translate-x-6 lg:-translate-y-8"
          : i === 1
            ? "lg:translate-x-0"
            : "lg:-translate-x-6 lg:translate-y-8"
      }
    `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
