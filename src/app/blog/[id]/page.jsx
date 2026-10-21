import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
// import { blogData } from "../../../lib/blogData";

const SITE_URL = "https://hashhbitstudio.com";

export const blogData = [
  {
    id: 1,
    title: "How AI-Driven Automation is Redefining B2B Operations in 2026",
    tags: ["AI", "Automation", "B2B"],
    image: "/images/blog/01.avif",
    date: "October 10, 2026",
    readTime: "5 min read",
    excerpt:
      "Discover how AI-driven automation is helping B2B companies streamline operations, improve decision-making, and build more efficient business processes.",
    author: {
      name: "Aarav Mehta",
      initials: "AM",
      role: "Head of Strategy",
      bio: "Aarav helps businesses improve operations through technology, automation, and data-driven strategies. He writes about AI adoption and digital transformation.",
    },
    takeaways: [
      "AI automation reduces repetitive work and improves operational efficiency.",
      "Connecting business systems helps teams make faster, data-driven decisions.",
      "Successful automation requires clear goals, human oversight, and continuous improvement.",
    ],
    content: [
      {
        heading: "B2B operations are becoming more intelligent",
        paragraphs: [
          "B2B companies are increasingly using AI to simplify complex workflows, manage large volumes of information, and reduce the time spent on repetitive tasks. From processing customer requests to organizing business data, intelligent automation helps teams focus on higher-value work.",
          "Instead of relying entirely on manual processes, businesses can use AI-powered systems to improve consistency, reduce delays, and respond more effectively to changing operational demands.",
        ],
      },
      {
        heading: "Smarter workflows, better decisions",
        paragraphs: [
          "Modern businesses generate enormous amounts of operational data. AI tools can analyze this information, identify patterns, and help teams recognize potential problems before they become costly setbacks.",
          "When connected with CRM platforms, ERP systems, and other business applications, automation can create smoother workflows across departments. Human expertise remains essential for reviewing insights, managing exceptions, and making strategic decisions.",
        ],
      },
      {
        heading: "Building an effective automation strategy",
        paragraphs: [
          "Adopting AI does not mean automating every business process at once. Companies should begin by identifying repetitive tasks, operational bottlenecks, and workflows where automation can deliver measurable improvements.",
          "The strongest results come from combining suitable technology with reliable data, employee training, and clear performance metrics. A thoughtful approach allows B2B organizations to scale automation while maintaining accountability and trust.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Why Modern Brand Identity Requires More Than Just a Logo",
    tags: ["Branding", "Design", "Marketing"],
    image: "/images/blog/02.avif",
    date: "October 6, 2026",
    readTime: "6 min read",
    excerpt:
      "A memorable brand is built through more than a logo. Explore how visual identity, messaging, consistency, and customer experience shape brands people recognize and trust.",
    author: {
      name: "Riya Kapoor",
      initials: "RK",
      role: "Creative Director",
      bio: "Riya helps businesses develop distinctive brand identities through visual design, creative strategy, and consistent digital experiences.",
    },
    takeaways: [
      "A strong brand identity combines visuals, messaging, values, and customer experience.",
      "Consistency across digital and offline channels builds recognition and trust.",
      "Effective branding starts with understanding the audience and business positioning.",
    ],
    content: [
      {
        heading: "A logo is only the beginning",
        paragraphs: [
          "A logo may be the most recognizable element of a brand, but it cannot communicate an entire business on its own. Customers also form impressions through colors, typography, imagery, tone of voice, and the quality of every interaction.",
          "A complete brand identity brings these elements together into a cohesive system. This helps businesses communicate who they are, what they offer, and why customers should care.",
        ],
      },
      {
        heading: "Consistency creates recognition",
        paragraphs: [
          "Customers encounter brands across websites, social media, advertisements, presentations, packaging, and sales conversations. When these experiences feel connected, a business becomes easier to recognize and remember.",
          "Consistent design guidelines, messaging principles, and visual assets help teams maintain a unified identity as the business grows. Consistency does not mean every communication must look identical; it means every interaction should feel like it belongs to the same brand.",
        ],
      },
      {
        heading: "Build a brand around your audience",
        paragraphs: [
          "Successful branding begins with understanding the people a business wants to reach. Their expectations, challenges, and preferences should influence the brand's positioning, personality, messaging, and visual direction.",
          "A strong identity is more than an attractive design system. It creates a meaningful connection between the business and its audience, communicates a clear promise, and delivers an experience that supports that promise over time.",
        ],
      },
    ],
  },
  {
    id: 3,
    title:
      "React vs. Next.js: Choosing the Right Framework for High-Growth SaaS Products",
    tags: ["React", "Next.js", "SaaS"],
    image: "/images/blog/03.webp",
    date: "October 2, 2026",
    readTime: "7 min read",
    excerpt:
      "Choosing the right frontend technology can influence performance, scalability, and development speed. Compare React and Next.js to find the right fit for your growing SaaS product.",
    author: {
      name: "Kabir Sharma",
      initials: "KS",
      role: "Lead Product Engineer",
      bio: "Kabir builds scalable web applications and SaaS products. He writes about frontend architecture, performance optimization, and modern JavaScript frameworks.",
    },
    takeaways: [
      "React provides a flexible foundation for building interactive user interfaces.",
      "Next.js adds routing, rendering strategies, and application-level features around React.",
      "The right choice depends on product requirements, performance goals, team expertise, and long-term plans.",
    ],
    content: [
      {
        heading: "Understanding React and Next.js",
        paragraphs: [
          "React is a JavaScript library for building user interfaces using reusable components. It gives development teams flexibility in choosing routing, data fetching, and other parts of their application architecture.",
          "Next.js is a React framework that provides additional features such as file-based routing, server rendering, static generation, and server-side capabilities. These features can help teams build complete web applications with less infrastructure to assemble themselves.",
        ],
      },
      {
        heading: "Performance and scalability considerations",
        paragraphs: [
          "For SaaS products, performance affects how quickly users can access dashboards, manage workflows, and complete important tasks. React applications can deliver excellent performance when their rendering, data fetching, and bundle sizes are managed carefully.",
          "Next.js offers multiple rendering strategies that can help teams optimize different parts of an application. Public marketing pages may benefit from static generation or server rendering, while authenticated product dashboards may require more dynamic data handling. The best approach depends on the application's actual usage patterns.",
        ],
      },
      {
        heading: "Choosing the right architecture for growth",
        paragraphs: [
          "React can be a strong choice when a team needs a highly customized frontend or is integrating with an existing backend architecture. It allows developers to select the libraries and infrastructure that best suit their requirements.",
          "Next.js can be a better fit when a product benefits from integrated routing, flexible rendering, and a unified application framework. Before choosing, evaluate team experience, deployment requirements, authentication, SEO needs, and expected product complexity. The goal is to select an architecture that supports growth without introducing unnecessary complexity.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "The Anatomy of a High-Converting B2B SaaS Landing Page",
    tags: ["SaaS", "UI/UX", "Conversion"],
    image: "/images/blog/04.avif",
    date: "September 28, 2026",
    readTime: "7 min read",
    excerpt:
      "Learn how clear messaging, persuasive product benefits, trust signals, and strategic calls to action can turn a B2B SaaS landing page into a stronger lead-generation tool.",
    author: {
      name: "Maya Verma",
      initials: "MV",
      role: "Growth Marketing Strategist",
      bio: "Maya helps SaaS businesses improve their digital experiences through conversion optimization, customer research, and performance-focused marketing.",
    },
    takeaways: [
      "A clear headline should communicate the product's value to a specific audience.",
      "Product benefits, credible proof, and relevant calls to action reduce conversion friction.",
      "Continuous testing helps landing pages improve as customer needs evolve.",
    ],
    content: [
      {
        heading: "Make your value proposition immediately clear",
        paragraphs: [
          "B2B buyers often visit a landing page while comparing several solutions. Within seconds, they should understand what the product does, who it serves, and which problem it helps solve.",
          "A strong headline, concise supporting copy, and a relevant visual can communicate the main benefit without overwhelming visitors. Focus on business outcomes instead of relying on vague claims or technical language that does not explain the product's value.",
        ],
      },
      {
        heading: "Build trust with evidence and clarity",
        paragraphs: [
          "Business purchases often involve multiple stakeholders, longer evaluation periods, and meaningful financial commitments. Buyers need evidence that a solution is credible and appropriate for their organization.",
          "Customer testimonials, case studies, product demonstrations, security information, and transparent feature descriptions can help answer common questions. Every trust element should be genuine, relevant, and easy to verify rather than simply added for decoration.",
        ],
      },
      {
        heading: "Turn interest into action",
        paragraphs: [
          "An effective landing page gives visitors a clear next step, whether that means booking a demo, starting a trial, or speaking with a specialist. Calls to action should match the buyer's level of interest and make the next step easy to understand.",
          "Forms should request only the information needed at that stage, and the page should work smoothly on mobile devices as well as desktop screens. Teams can then test headlines, layouts, calls to action, and form lengths to learn which changes improve qualified conversions.",
        ],
      },
    ],
  },
];

/* ---------- Helpers ---------- */

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// `await` works whether params is a plain object (Next 14) or a Promise (Next 15+)
async function getBlog(params) {
  const { id } = await params;
  return blogData.find((b) => String(b.id) === String(id));
}

export function generateStaticParams() {
  return blogData.map((b) => ({ id: String(b.id) }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlog(params);
  if (!blog) return { title: "Article not found" };

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: "article",
    },
  };
}

/* ---------- Small pieces ---------- */

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

// function Avatar({ initials, size = "h-11 w-11 text-sm" }) {
//   return (
//     <span
//       aria-hidden="true"
//       className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-[#6246e5] font-sora font-semibold text-white`}
//     >
//       {initials}
//     </span>
//   );
// }

function RelatedCard({ blog }) {
  return (
    <article className="group relative">
      <div className="aspect-[16/10] overflow-hidden rounded-[22px] bg-[#eee9ff]">
        <img
          src={blog.image}
          alt=""
          width={1400}
          height={875}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="font-sora text-xl leading-snug tracking-tight">
            {blog.title}
          </h3>
          <p className="mt-2 truncate font-inter text-sm text-[#17113d]/65">
            {blog.excerpt}
          </p>
        </div>

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

/* ---------- Page ---------- */

export default async function BlogDetailPage({ params }) {
  const blog = await getBlog(params);
  if (!blog) notFound();

  const related = blogData.filter((b) => b.id !== blog.id).slice(0, 2);
  const sections = blog.content.map((s) => ({ ...s, id: slugify(s.heading) }));

  const shareUrl = encodeURIComponent(`${SITE_URL}/blog/${blog.id}`);
  const shareText = encodeURIComponent(blog.title);

  return (
    <main className="overflow-x-clip bg-[#faf8ff] text-[#17113d]">
      <Navbar />
      <style>{`
        /* Reading progress bar: pure CSS, shows only where scroll-driven animations are supported */
        .read-progress {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 60;
          height: 3px;
          background: #6246e5;
          transform: scaleX(0);
          transform-origin: 0 50%;
          pointer-events: none;
        }
        @supports (animation-timeline: scroll()) {
          .read-progress {
            animation: readGrow linear both;
            animation-timeline: scroll(root);
          }
        }
        @keyframes readGrow { to { transform: scaleX(1); } }

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

      <div className="read-progress" aria-hidden="true" />

      {/* HEADER */}
      <header className="px-5 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-36 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="blog-rise group inline-flex items-center gap-2.5 rounded-full font-sora text-sm font-medium text-[#17113d]/70 transition-colors hover:text-[#6246e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6246e5]"
          >
            <Arrow
              direction="left"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            />
            All articles
          </Link>

          <ul
            className="blog-rise mt-8 flex flex-wrap gap-2"
            aria-label="Topics"
            style={{ animationDelay: "80ms" }}
          >
            {blog.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#6246e5]/10 px-3 py-1 font-sora text-xs font-medium text-[#5238cc]"
              >
                {tag}
              </li>
            ))}
          </ul>

          <h1
            className="blog-rise mt-6 font-sora font-medium text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "140ms" }}
          >
            {blog.title}
          </h1>

          <p
            className="blog-rise mt-6 max-w-2xl font-inter text-lg leading-8 text-[#17113d]/70"
            style={{ animationDelay: "200ms" }}
          >
            {blog.excerpt}
          </p>

          <div
            className="blog-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#17113d]/10 pt-6"
            style={{ animationDelay: "260ms" }}
          >
            <div className="flex items-center gap-3">
              {/* <Avatar initials={blog.author.initials} /> */}
              <div>
                {/* <p className="font-sora text-sm font-semibold">
                  {blog.author.name}
                </p>
                <p className="font-inter text-[13px] text-[#17113d]/60">
                  {blog.author.role}
                </p> */}
              </div>
            </div>

            <p className="flex items-center gap-2.5 font-sora text-[13px] text-[#17113d]/60">
              <time>{blog.date}</time>
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#17113d]/25"
              />
              <span>{blog.readTime}</span>
            </p>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      <div
        className="blog-rise px-5 sm:px-10 lg:px-20"
        style={{ animationDelay: "320ms" }}
      >
        <div className="mx-auto aspect-[16/8] max-w-6xl overflow-hidden rounded-[28px] bg-[#eee9ff] shadow-[0_30px_60px_-30px_rgba(23,17,61,0.35)]">
          <img
            src={blog.image}
            alt={blog.title}
            width={1800}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="px-5 pb-20 pt-14 sm:px-10 sm:pt-20 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,720px)] lg:justify-center lg:gap-20">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="font-sora text-sm font-semibold">On this page</p>

              <ul className="mt-4 space-y-1 border-l border-[#17113d]/12">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent py-2 pl-4 font-inter text-sm leading-snug text-[#17113d]/65 transition-colors hover:border-[#6246e5] hover:text-[#6246e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6246e5]"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Article */}
          <article className="min-w-0">
            <section
              aria-labelledby="takeaways"
              className="rounded-3xl border border-[#6246e5]/15 bg-white p-6 sm:p-8"
            >
              <h2
                id="takeaways"
                className="font-sora text-sm font-semibold text-[#5238cc]"
              >
                Key takeaways
              </h2>

              <ul className="mt-5 space-y-4">
                {blog.takeaways.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 font-inter text-base leading-7 text-[#17113d]/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6246e5]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-14">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className={`scroll-mt-28 ${i > 0 ? "mt-14" : ""}`}
                >
                  <h2 className="font-sora text-2xl leading-snug tracking-tight sm:text-3xl">
                    {s.heading}
                  </h2>

                  {s.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mt-5 font-inter text-[17px] leading-[1.95] text-[#17113d]/80 sm:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Share */}
            {/* <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#17113d]/10 pt-8"> */}
            {/* <p className="mr-2 font-sora text-sm font-semibold">
                Share this article
              </p> */}

            {/* {shareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#17113d]/15 bg-white px-4 py-2 font-sora text-xs font-medium transition-colors hover:border-[#6246e5] hover:bg-[#6246e5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6246e5]"
                >
                  {link.label}
                </a>
              ))} */}
            {/* </div> */}

            {/* Author */}
            {/* <aside
              aria-label="About the author"
              className=" flex gap-5 rounded-3xl bg-[#f0ebff] p-6 sm:p-8"
            >
              <Avatar initials={blog.author.initials} size="h-14 w-14 text-base" />
              <div>
                <p className="font-sora text-sm font-semibold">
                  Written by {blog.author.name}
                </p>
                <p className="font-inter text-[13px] text-[#17113d]/60">
                  {blog.author.role}
                </p>
                <p className="mt-3 font-inter text-[15px] leading-7 text-[#17113d]/75">
                  {blog.author.bio}
                </p>
              </div>
            </aside> */}
          </article>
        </div>
      </div>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-10 sm:pb-28 lg:px-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#17113d] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-[#6246e5]/45 blur-[90px]"
          />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-sora text-3xl leading-tight tracking-tight sm:text-4xl">
                Want to put these ideas to work?
              </h2>
              <p className="mt-4 font-inter text-base leading-8 text-white/70">
                Tell us what you are building and we will help you figure out
                the next step.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-sora text-sm font-semibold text-[#17113d] transition-colors duration-300 hover:bg-[#B8A5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a conversation
              <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
