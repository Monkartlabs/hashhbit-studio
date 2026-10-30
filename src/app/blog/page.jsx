"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { blogData } from "../../lib/blogData";
import ContactCTA from "../../components/ContactCTA";

/* ---------- Pieces ---------- */

function Arrow({ direction = "right", className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} ${
        direction === "left" ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M4 12h16m0 0-7-7m7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogCard({ blog }) {
  return (
    <article data-card className="group relative min-w-0 snap-start">
      <div className="aspect-[4/3] overflow-hidden rounded-[22px] bg-[#eee9ff]">
        <img
          src={blog.image}
          alt={blog.title}
          width={1400}
          height={1050}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="font-sora text-xl leading-snug tracking-tight sm:text-2xl">
            {blog.title}
          </h3>

          <p className="mt-2 truncate font-inter text-sm text-[#17113d]/65">
            {blog.excerpt}
          </p>
        </div>

        <a
          href={`/blog/${blog.id}`}
          aria-label={`Read ${blog.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#17113d]/15 bg-white text-[#17113d] transition-colors duration-300 after:absolute after:inset-0 after:rounded-[22px] group-hover:border-[#6246e5] group-hover:bg-[#6246e5] group-hover:text-white focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[#6246e5]"
        >
          <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
        </a>
      </div>
    </article>
  );
}

function SliderButton({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === "left" ? "Previous stories" : "Next stories"
      }
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#17113d]/15 bg-white text-[#17113d] transition-all duration-300 hover:border-[#6246e5] hover:bg-[#6246e5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6246e5] disabled:pointer-events-none disabled:opacity-30"
    >
      <Arrow direction={direction} className="h-5 w-5" />
    </button>
  );
}

/* ---------- Categories ---------- */

const categories = [
  "All",
  "Branding",
  "Technology",
  "AI",
  "Growth Marketing",
];

/* ---------- Page ---------- */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [edge, setEdge] = useState({ start: true, end: false });

  const trackRef = useRef(null);

  // Filter blogs based on the selected category.
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogData;
    }

    return blogData.filter((blog) => {
      const tags = blog.tags ?? [];
      return tags.some(
        (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
      );
    });
  }, [activeCategory]);

  // Update the slider's previous/next button states.
  const updateEdges = useCallback(() => {
    const el = trackRef.current;

    if (!el) return;

    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 4,
    });
  }, []);

  // Reset the slider when the category changes.
  useEffect(() => {
    const el = trackRef.current;

    if (!el) return;

    el.scrollTo({ left: 0, behavior: "auto" });
    updateEdges();

    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);

    el.addEventListener("scroll", updateEdges, { passive: true });

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateEdges);
    };
  }, [filteredBlogs, updateEdges]);

  // Scroll the slider by one visible page of cards.
  const slide = useCallback(
    (direction) => {
      const el = trackRef.current;
      const card = el?.querySelector("[data-card]");

      if (!el || !card) return;

      const styles = window.getComputedStyle(el);
      const gap = parseFloat(styles.columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;

      const visible = Math.max(
        1,
        Math.round((el.clientWidth + gap) / step)
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      el.scrollBy({
        left: direction * step * visible,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    []
  );

  return (
    <main className="overflow-hidden bg-[#faf8ff] text-[#17113d]">
      <Navbar />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .blog-rise {
            animation: blogRise 900ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
          }
        }

        @keyframes blogRise {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* HERO */}
      <section className="px-5 pb-14 pt-28 sm:px-10 sm:pb-20 sm:pt-36 lg:px-20 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <h1 className="blog-rise max-w-4xl bg-gradient-to-r from-[#17113D] via-[#4e3aa8] to-[#4c3895] bg-clip-text font-sora text-5xl font-medium leading-[1.05] tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Thoughts, ideas and everything in between.
          </h1>

          <p
            className="blog-rise mt-7 max-w-xl font-inter text-base leading-8 text-[#17113d]/90 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            A few things we have learned, things we are curious about, and
            ideas we think are worth your time.
          </p>
        </div>
      </section>

      {/* BLOG SLIDER */}
      <section
        className="blog-rise px-5 pb-24 sm:px-10 sm:pb-28 lg:px-20"
        style={{ animationDelay: "240ms" }}
        aria-labelledby="latest-stories"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-10 flex items-center justify-between gap-6">
            <h2
              id="latest-stories"
              className="font-sora text-2xl tracking-tight sm:text-3xl"
            >
              The latest stories
            </h2>

            {/* Slider arrows */}
            <div className="flex items-center gap-3">
              <SliderButton
                direction="left"
                onClick={() => slide(-1)}
                disabled={edge.start}
              />

              <SliderButton
                direction="right"
                onClick={() => slide(1)}
                disabled={edge.end}
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-8 flex flex-wrap items-center gap-2" aria-label="Filter blogs by category">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`w-auto rounded-full border px-5 py-2.5 text-[12px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B1F5C] focus-visible:ring-offset-2 ${
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

          {/* Blog cards */}
          {filteredBlogs.length > 0 ? (
            <div
              ref={trackRef}
              className="grid snap-x snap-mandatory grid-flow-col auto-cols-[85%] gap-6 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:auto-cols-[calc((100%-24px)/2)] md:auto-cols-[calc((100%-48px)/3)] [&::-webkit-scrollbar]:hidden"
            >
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center font-inter text-[#17113d]/65">
              No stories found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactCTA />

      <Footer />
    </main>
  );
}