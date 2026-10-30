
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "../../../lib/servicesData";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ChooseUsSection from "../../../components/ChooseUsSection";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

/* Reusable card used by both mobile and desktop layouts */
/* Flip card: front = image + title, back = title + description */
function ServiceCard({ point, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      tabIndex={0}
      className="group h-[400px] cursor-pointer outline-none [perspective:1200px] sm:h-[420px]"
      style={{
        animation: `servicePointEnter 650ms ${index * 120}ms both`,
      }}
    >
      {/* Rotating inner wrapper */}
      <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        {/* FRONT: image + title */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-[#6246e5]/10 bg-white p-3 shadow-[0_15px_45px_rgba(23,17,61,0.08)] [backface-visibility:hidden]">
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#f0edff]">
            <Image
              src={point.image}
              alt={point.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17113d]/85 via-[#17113d]/20 to-transparent" />

            {/* Number badge */}
            <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 font-raleway text-sm font-bold text-[#6246e5] shadow-md">
              {number}
            </span>

            {/* Title */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-poppins text-xl font-bold leading-snug tracking-tight text-white">
                {point.title}
              </h3>

              <p className="mt-3 inline-flex items-center gap-2 font-raleway text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                <span className="h-px w-6 bg-white/60" />
                Hover to explore
              </p>
            </div>
          </div>
        </div>

        {/* BACK: title + description */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r
    from-[#17113D]
    via-[#6246E5]
    to-[#B8A5FF] p-7 text-white shadow-[0_28px_60px_rgba(98,70,229,0.3)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#b8a5ff]/30 blur-3xl" />

          <span className="relative font-raleway text-xs font-bold uppercase tracking-[0.2em] text-[#d9ceff]">
            Service {number}
          </span>

          <h3 className="relative mt-3 font-poppins text-xl font-bold leading-snug tracking-tight sm:text-2xl">
            {point.title}
          </h3>

          <p className="relative mt-5 flex-1 overflow-y-auto font-raleway text-sm leading-7 text-white/85 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {point.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({ params }) {
  const { id } = await params;

  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  // Desktop zig-zag: 1,3,5,7 on top row — 2,4,6 on bottom row
  const indexed = service.subPoints.map((point, index) => ({
    point,
    index,
  }));

  // Rows alternate 4, 3, 4, 3... cards, in normal order
const rows = [];
let start = 0;
while (start < indexed.length) {
  const size = rows.length % 2 === 0 ? 4 : 3;
  rows.push(indexed.slice(start, start + size));
  start += size;
}

  return (
    <main>
      <Navbar />

      {/* SECTION 1 — HEADING */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-30 text-[#17113d] sm:px-10 sm:pb-24 sm:pt-30 lg:px-16">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#6246e5]/10 blur-[100px]" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#b8a5ff]/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-service-detail text-center">
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2">
              <span className="font-bingo-regular text-[16px] font-black uppercase tracking-[0.2em] text-[#111111]">
                Our Expertise
              </span>
            </div>

            <h1 className="mx-auto max-w-4xl font-poppins text-4xl tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold uppercase bg-gradient-to-r from-[#17113D] via-[#4e3aa8] to-[#4c3895] bg-clip-text text-transparent">
  {service.title}
</span>
              <span className="mt-5 text-[clamp(1rem,5vw,3rem)] font-bold block text-[#4e3aa8]">
                Made With Purpose.
              </span>
            </h1>
          </div>

          <Link
            href="/services"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#6246e5]/15 bg-white/80 px-5 py-3 font-raleway text-sm font-medium text-[#6246e5] shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-[#6246e5]/40 hover:shadow-md"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Services
          </Link>
        </div>
      </section>

      {/* SECTION 2 — TITLE + DESCRIPTION / IMAGE */}
      <section className="px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div className="animate-service-detail">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-bingo-regular text-[16px] font-black uppercase tracking-[0.1em] text-[#111111]">
                About This Service
              </span>
            </div>

            <h2 className="font-poppins text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#17113D] via-[#4e3aa8] to-[#4c3895] bg-clip-text text-transparent">
              {service.title}
            </h2>

            <p className="mt-6 max-w-xl font-raleway text-base leading-8 text-gray-800 sm:text-[18px]">
              {service.briefDescription}
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#6246e5] px-7 py-4 font-raleway text-sm font-semibold text-white shadow-lg shadow-[#6246e5]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4d34c9] hover:shadow-xl hover:shadow-[#6246e5]/30"
            >
              Let's Discuss Your Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right: image */}
          <div className="group relative animate-service-detail ">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#6246e5]/20 via-transparent to-[#b8a5ff]/30 blur-xl transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_25px_70px_rgba(23,17,61,0.12)] sm:rounded-[2rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-[#f0edff] sm:rounded-[1.5rem]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17113d]/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CARDS (zig-zag on desktop) */}
      <section className="bg-[#faf8ff] px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16">
            <span className="font-bingo-regular text-[14px] font-bold uppercase tracking-[0.19em] text-[#111111]">
              What We Bring to the Table
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl font-poppins text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#17113D] via-[#4e3aa8] to-[#4c3895] bg-clip-text text-transparent">
              A Closer Look at Our
              < br />
              Approach
            </h2>
          </div>

          {/* Mobile / tablet: normal order 1,2,3,4... */}
          <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
            {indexed.map(({ point, index }) => (
              <ServiceCard
                key={point.title}
                point={point}
                index={index}
              />
            ))}
          </div>

          {/* Desktop: row 1 = 1,3,5,7 — row 2 = 2,4,6 */}
         {/* Desktop: rows of 4 / 3 / 4 / 3..., shorter rows centered */}
<div className="hidden space-y-6 lg:block">
  {rows.map((row, rowIndex) => (
    <div key={rowIndex} className="flex justify-center gap-6">
      {row.map(({ point, index }) => (
        <div
          key={point.title}
          className="w-[calc((100%_-_4.5rem)/4)]"
        >
          <ServiceCard point={point} index={index} />
        </div>
      ))}
    </div>
  ))}
</div>
        </div>
      </section>

      {/* EXISTING CHOOSE US SECTION */}
      <ChooseUsSection />

      {/* EXISTING FOOTER */}
      <Footer />
    </main>
  );
}
