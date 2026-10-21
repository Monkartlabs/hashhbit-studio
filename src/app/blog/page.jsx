"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { blogData } from "../../lib/blogData";
import ContactCTA from "../../components/ContactCTA";

// const blogs = [
//   {
//     id: 1,
//     title: "The Main Role of AI in Our Digital Marketing",
//     tags: ["AI", "Marketing", "Technology"],
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
//     date: "October 10, 2026",
//     readTime: "5 min read",
//     excerpt:
//       "AI is changing how brands understand people, create content, and make better marketing decisions. Here is what that means for businesses.",
//     content: [
//       {
//         heading: "Marketing is becoming more personal",
//         paragraphs: [
//           "People expect brands to understand what they need, not just send another advertisement their way. AI gives marketing teams better ways to study customer behaviour and make their communication more relevant.",
//           "From suggesting useful products to creating more targeted campaigns, these tools can help businesses make better use of the information they already have.",
//         ],
//       },
//       {
//         heading: "Better decisions, less guesswork",
//         paragraphs: [
//           "Marketing has always involved testing ideas and learning from results. AI can help teams spot patterns, compare campaign performance, and understand where their efforts are working.",
//           "That does not mean every decision should be handed over to a tool. People still need to set the direction, check the results, and make sure the message feels right.",
//         ],
//       },
//       {
//         heading: "People still make the difference",
//         paragraphs: [
//           "The strongest marketing combines useful technology with a real understanding of people. AI can help with research and repetitive work, while creative teams bring the context, judgement, and original ideas that make a brand memorable.",
//           "The goal is not to use AI everywhere. It is to use it where it genuinely helps.",
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Why 3D Animation Is the Future of Brand Storytelling",
//     tags: ["3D Animation", "Creative", "Branding"],
//     image:
//       "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
//     date: "October 6, 2026",
//     readTime: "6 min read",
//     excerpt:
//       "A good story makes people stop and pay attention. Discover how 3D animation helps brands turn complex ideas into visual experiences.",
//     content: [
//       {
//         heading: "Show people what words cannot",
//         paragraphs: [
//           "Some products and ideas are difficult to explain with text or ordinary photographs. 3D animation gives brands a way to show how something works, explore details, and present ideas that do not exist in the real world yet.",
//           "That can be especially useful for product launches, technology, architecture, and campaigns where the visual experience matters.",
//         ],
//       },
//       {
//         heading: "Build a world around your brand",
//         paragraphs: [
//           "Animation allows creative teams to control the setting, movement, lighting, and mood of a scene. These details can help a brand develop a visual identity that people recognise across its website, advertisements, and social channels.",
//           "The best visuals are not just impressive. They fit the story the brand is trying to tell.",
//         ],
//       },
//       {
//         heading: "Start with the story",
//         paragraphs: [
//           "New tools make 3D production more accessible, but technology alone does not make a memorable animation. The idea, pacing, and connection with the audience still matter most.",
//           "Start by deciding what you want people to understand or feel. Then use animation to bring that message to life.",
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "UI/UX Design Trends Shaping User Experience in 2026",
//     tags: ["UI/UX", "Design", "Product"],
//     image:
//       "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
//     date: "October 2, 2026",
//     readTime: "7 min read",
//     excerpt:
//       "From thoughtful interactions to accessible layouts, explore the design choices making digital products easier and more enjoyable to use.",
//     content: [
//       {
//         heading: "Clarity beats unnecessary complexity",
//         paragraphs: [
//           "A beautiful interface is useful only when people can understand it. Clear navigation, readable text, and sensible page layouts help users find what they need without having to think too hard about the interface.",
//           "Designers are increasingly treating simplicity as a practical decision rather than just a visual style.",
//         ],
//       },
//       {
//         heading: "Small interactions make a difference",
//         paragraphs: [
//           "A button that responds clearly, a form that explains an error, or a transition that helps people understand what changed can make a product feel easier to use.",
//           "These details work best when they support the task instead of distracting from it.",
//         ],
//       },
//       {
//         heading: "Design for real people",
//         paragraphs: [
//           "Accessibility, responsive layouts, and readable content should be part of the design process from the beginning. People use products on different screens, with different needs, and in all kinds of situations.",
//           "The strongest design decisions come from observing how people actually use a product, testing ideas, and improving what does not work.",
//         ],
//       },
//     ],
//   },
  
// ];

/* ---------- Pieces ---------- */

function Arrow({ direction = "right", className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} ${direction === "left" ? "rotate-180" : ""}`}
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
    <article
      data-card
      className="group relative min-w-0 snap-start"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[22px] bg-[#eee9ff]">
        <img
          src={blog.image}
          alt=""
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

        {/* Stretched link: the whole card is clickable, one tab stop per card */}
        <Link
          href={`/blog/${blog.id}`}
          aria-label={`Read ${blog.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#17113d]/15 bg-white text-[#17113d] transition-colors duration-300 after:absolute after:inset-0 after:rounded-[22px] group-hover:border-[#6246e5] group-hover:bg-[#6246e5] group-hover:text-white focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[#6246e5]"
        >
          <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
        </Link>
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
      aria-label={direction === "left" ? "Previous stories" : "Next stories"}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#17113d]/15 bg-white text-[#17113d] transition-all duration-300 hover:border-[#6246e5] hover:bg-[#6246e5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6246e5] disabled:pointer-events-none disabled:opacity-30"
    >
      <Arrow direction={direction} className="h-5 w-5" />
    </button>
  );
}

/* ---------- Page ---------- */

export default function BlogPage() {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateEdges);
      observer.disconnect();
    };
  }, [updateEdges]);

  function slide(direction) {
    const el = trackRef.current;
    const card = el?.querySelector("[data-card]");
    if (!el || !card) return;

    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const visible = Math.max(1, Math.round((el.clientWidth + gap) / step));
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Move by a full page of cards (3 on desktop, 2 on tablet, 1 on mobile)
    el.scrollBy({
      left: direction * step * visible,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

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
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HERO */}
      <section className="px-5 pb-14 pt-28 sm:px-10 sm:pb-20 sm:pt-36 lg:px-20 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <h1 className="blog-rise max-w-4xl font-sora font-medium text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
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
          <div className="mb-10 flex items-center justify-between gap-6">
            <h2
              id="latest-stories"
              className="font-sora text-2xl tracking-tight sm:text-3xl"
            >
              The latest stories
            </h2>

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

          <div
            ref={trackRef}
            className="grid snap-x snap-mandatory grid-flow-col auto-cols-[85%] gap-6 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:auto-cols-[calc((100%-24px)/2)] md:auto-cols-[calc((100%-48px)/3)] [&::-webkit-scrollbar]:hidden"
          >
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
      

      {/* CONTACT CTA */}
      <ContactCTA />
      <Footer />
    </main>
  );
}