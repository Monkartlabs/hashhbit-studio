import { blogData } from "../lib/blogData";
import React, { useMemo, useRef, useState } from "react";

const categories = ["All", "Branding", "Technology", "AI", "Growth Marketing"];

function ArrowIcon1() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 ease-out"
    >
      <path
        d="M5 19L19 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8 5H19V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
  if (direction === "left" || direction === "right") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
      >
        {direction === "left" ? (
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 ease-out"
    >
      <path
        d="M5 19L19 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 5H19V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sliderRef = useRef(null);

  // Supports category/tag data without requiring a change to blogData.
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return blogData;

    const normalize = (value) =>
      String(value)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return blogData.filter((blog) => {
      const values = [
        ...(Array.isArray(blog.tags) ? blog.tags : []),
        blog.category,
        blog.categoryName,
      ].filter(Boolean);

      return values.some((value) =>
        normalize(value).includes(normalize(activeCategory)),
      );
    });
  }, [activeCategory]);

  const updateScrollState = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 2);
    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 2,
    );
  };

  const scrollBlogs = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector("[data-blog-card]");
    const gap = 32;
    const amount = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : slider.clientWidth * 0.8;

    slider.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const frame = requestAnimationFrame(updateScrollState);
    slider.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(slider);

    return () => {
      cancelAnimationFrame(frame);
      slider.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [filteredBlogs.length]);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#FAF8FF] text-zinc-950"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-180px]
        h-[500px] w-[700px] -translate-x-1/2 rounded-full
        bg-[#c4b5fd]/10 blur-[120px]"
      />

      <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-18">
        {/* Header */}
        <div className="flex flex-col gap-7 border-b border-zinc-950/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="block text-[16px] font-semibold uppercase text-[#17113d]">
              KNOWLEDGE BASE
            </span>

            <h2
              className="mt-5 sm:mt-8 max-w-[700px] font-sora font-semibold leading-[1.08] tracking-[-0.03em] text-[clamp(1.5rem,4vw,3.50rem)] bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent"
            >
              Ideas, Insights <span className="">&</span>
              <br className="hidden sm:block" /> Digital Thinking
            </h2>
          </div>

          <a
            href="/blog"
            className="group inline-flex w-fit items-center gap-4 rounded-full
            border border-zinc-950/15 bg-white/40 px-6 py-3
            text-[13px] font-semibold tracking-wide backdrop-blur-md
            transition-all duration-500 hover:-translate-y-1
            hover:border-[#3B1F5C] hover:bg-[#3B1F5C] hover:text-white
            hover:shadow-[0_15px_40px_rgba(59,31,92,0.18)]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#3B1F5C] focus-visible:ring-offset-2"
          >
            Discover All
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* Category filters + slider controls */}
        {/*
<div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
  <div
    className="flex flex-wrap items-center gap-2"
    aria-label="Filter blogs by category"
  >
    {categories.map((category) => {
      const isActive = activeCategory === category;

      return (
        <button
          key={category}
          type="button"
          onClick={() => setActiveCategory(category)}
          aria-pressed={isActive}
          className={`rounded-full w-auto border px-5 py-2.5 text-[12px]
            font-medium transition-all duration-300
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#3B1F5C] focus-visible:ring-offset-2
            ${
              isActive
                ? "border-[#3B1F5C] bg-[#3B1F5C] text-white shadow-[0_5px_20px_rgba(59,31,92,0.14)]"
                : "border-zinc-950/10 bg-white/50 text-zinc-700 hover:border-[#3B1F5C]/40 hover:bg-white"
            }`}
        >
          {category}
        </button>
      );
    })}
  </div>

  <div className="flex items-center gap-3 self-end lg:self-auto">
    <button
      type="button"
      onClick={() => scrollBlogs("left")}
      disabled={!canScrollLeft}
      aria-label="Scroll to previous blogs"
    >
      <ArrowIcon direction="left" />
    </button>

    <button
      type="button"
      onClick={() => scrollBlogs("right")}
      disabled={!canScrollRight}
      aria-label="Scroll to next blogs"
    >
      <ArrowIcon direction="right" />
    </button>
  </div>
</div>
*/}

        {/* Blog slider */}
        <div
          ref={sliderRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto
          scroll-smooth pb-6 [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden sm:gap-8"
        >
          {filteredBlogs.map((blog) => (
            <a
              key={blog.id}
              data-blog-card
              href={blog.href || "/blog"}
              className="group relative w-[88%] shrink-0 snap-start cursor-pointer
              sm:w-[calc(50%-46px)] lg:w-[calc(33.333%-41.34px)]"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[24px]
                border border-zinc-950/10 bg-zinc-100
                transition-all duration-700 ease-out
                group-hover:-translate-y-2 group-hover:border-zinc-950/20
                group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="h-full w-full scale-[1.01] object-cover
                    transition-transform duration-[1200ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-110"
                  />

                  {/* Purple glow */}
                  <div
                    className="pointer-events-none absolute -right-24 -top-24
                    h-64 w-64 rounded-full bg-[#c4b5fd]/40 blur-[80px]
                    opacity-0 transition-opacity duration-700
                    group-hover:opacity-100"
                  />

                  {/* Image shine */}
                  <div
                    className="pointer-events-none absolute inset-y-0 -left-[120%]
                    w-[60%] skew-x-[-20deg]
                    bg-gradient-to-r from-transparent via-white/30 to-transparent
                    transition-all duration-[1200ms] ease-out
                    group-hover:left-[150%]"
                  />

                  {/* Tags */}
                  {blog.tags?.length > 0 && (
                    <div
                      className="absolute left-5 top-5 flex max-w-[calc(100%-40px)]
                      flex-wrap gap-2 opacity-0 -translate-y-2
                      transition-all duration-500 group-hover:translate-y-0
                      group-hover:opacity-100"
                    >
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/30
                          bg-black/25 px-3 py-1.5 text-[10px] font-medium
                          uppercase tracking-[0.12em] text-white backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="mt-7 flex items-start justify-between gap-5">
                <h3
                  className="max-w-[430px] font-sora text-[21px] font-medium
                  leading-[1.25] tracking-tight text-zinc-950
                  transition-transform duration-500 group-hover:translate-x-1
                  sm:text-[22px] lg:text-[23px]"
                >
                  {blog.title}
                </h3>

                <div
                  className="mt-1 flex h-12 w-12 shrink-0 items-center
                  justify-center rounded-full border border-zinc-950/20
                  text-zinc-950 transition-all duration-500
                  group-hover:scale-110 group-hover:border-[#3B1F5C]
                  group-hover:bg-[#3B1F5C] group-hover:text-white
                  group-hover:shadow-[0_10px_30px_rgba(59,31,92,0.22)]"
                >
                  <span className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowIcon1 />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty category state */}
        {filteredBlogs.length === 0 && (
          <div className="mt-10 rounded-3xl border border-zinc-950/10 bg-white/60 px-6 py-16 text-center">
            <h3 className="font-sora text-xl font-medium">
              No articles in this category yet
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Try another category to explore more insights.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-5 rounded-full bg-[#3B1F5C] px-5 py-2.5
              text-sm font-medium text-white transition hover:bg-[#513077]"
            >
              View all articles
            </button>
          </div>
        )}

        {/* Slider progress */}
        {filteredBlogs.length > 0 && (
          <div className="mt-5 flex items-center gap-3">
            <div className="h-px flex-1 overflow-hidden bg-zinc-950/10">
              <div
                className="h-full w-1/3 bg-[#3B1F5C] transition-all duration-300"
                style={{
                  width: canScrollLeft
                    ? canScrollRight
                      ? "66%"
                      : "100%"
                    : canScrollRight
                      ? "33%"
                      : "100%",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
