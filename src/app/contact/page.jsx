"use client";

import ChooseUsSection from "../../components/ChooseUsSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";

const contactCards = [
  {
    number: "01",
    title: "Email us",
    description: "Have an idea or a question? Drop us a message.",
    detail: "hello@hashhbitstudio.com",
    href: "mailto:hello@yourbrand.com",
    label: "Write to us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Call us",
    description: "Sometimes, a quick conversation is all it takes.",
    detail: "+91 9665622497",
    href: "tel:+919665622497",
    label: "Give us a call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M7.2 3.5H4.8c-.8 0-1.4.6-1.4 1.4 0 8.2 6.6 14.8 14.8 14.8.8 0 1.4-.6 1.4-1.4v-2.4l-4.2-2-2 2a12 12 0 0 1-6.2-6.2l2-2-2-4.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Visit us",
    description: "Let's sit down, share ideas, and make a plan.",
    detail: (
      <>
        Office No. 127, 1501, Sai Chowk Rd, Laxman Nagar
        <br />
        Balewadi, Pune, Maharashtra 411045
      </>
    ),
    href: "https://maps.google.com/?q=Office no -127 , 1501, Sai Chowk Rd, Laxman Nagar, Balewadi, Pune, Maharashtra",
    label: "Find our location",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
};

// Put these above your component (or inside it, before the return)
const labelClass = "font-sora text-sm font-medium text-[#302950]";

const inputClass =
  "min-h-[54px] w-full min-w-0 rounded-2xl border border-[#17113d]/10 bg-white/80 px-4 py-3.5 font-inter text-sm text-[#17113d] shadow-sm shadow-[#17113d]/[0.02] outline-none transition-all duration-300 placeholder:text-[#17113d]/35 hover:border-[#6246e5]/40 hover:bg-white focus:border-[#6246e5] focus:bg-white focus:ring-4 focus:ring-[#6246e5]/10";

const selectClass = `${inputClass} cursor-pointer text-[#302950]`;

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Connect your API or email service here.
    // This frontend demo does not send or store form submissions.
    setStatus(
      "Your form is ready! Connect your backend or email service to send your enquiry.",
    );
  }

  return (
    <main className="contact-page overflow-hidden bg-[#faf8ff] text-[#17113d]">
      <Navbar />
      {/* 1. HERO */}
      <section className="contact-hero relative px-5 pt-24 sm:px-10 sm:pt-35 lg:px-20 lg:pt-40">
        <div className="contact-hero-orb pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#B8A5ff]/35 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="contact-reveal flex items-center gap-3">
            {/* <span className="h-2 w-2 rounded-full bg-[#6246e5]" /> */}
            <p className="font-sora text-xs font-bold uppercase tracking-[0.14em] text-[#111111] sm:text-sm">
              We'd love to hear from you
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
            <h1 className="contact-reveal max-w-5xl font-sora text-5xl leading-[1.08] tracking-tight font-semibold sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent">
              Got an idea?
              <br />
              
                Let's talk.
            </h1>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CARDS */}
      {/* CONTACT + PROJECT ENQUIRY (combined) */}
      <section
        id="start-project"
        className="scroll-mt-10 bg-white px-5 py-6 sm:px-10 sm:py-24 lg:px-20 lg:py-8"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <div className="mb-8 sm:mb-10">
              {/* <h2 className="font-sora text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Tell us a little about your{" "}
          <span className="font-bold text-[#6246e5]">project.</span>
        </h2> */}

              <p className="mt-5 max-w-xl font-inter text-[17px] leading-8 text-[#17113d]/80">
                You don't need a perfect brief or all the answers. Tell us what
                you have in mind, and we'll take it from there.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative isolate overflow-hidden rounded-[2rem] border border-violet-100/80 bg-gradient-to-br from-white via-[#fcfbff] to-violet-50/70 p-5 shadow-[0_24px_80px_-25px_rgba(98,70,229,0.22)] sm:rounded-[2.5rem] sm:p-9 lg:p-10"
            >
              {/* Ambient background effects */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-violet-300/25 blur-[90px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-24 -z-10 h-64 w-64 rounded-full bg-indigo-200/30 blur-[90px]"
              />

              {/* Form fields */}
              <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-y-7">
                <div className="flex min-w-0 flex-col gap-2.5">
                  <label htmlFor="name" className={labelClass}>
                    Your name <span className="text-[#6246e5]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-2.5">
                  <label htmlFor="email" className={labelClass}>
                    Email address <span className="text-[#6246e5]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-2.5">
                  <label htmlFor="projectType" className={labelClass}>
                    What do you need? <span className="text-[#6246e5]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Website design">Website design</option>
                    <option value="Web development">Web development</option>
                    <option value="Mobile application">
                      Mobile application
                    </option>
                    <option value="Branding">Branding &amp; identity</option>
                    <option value="AI solutions">AI &amp; automation</option>
                    <option value="Other">Something else</option>
                  </select>
                </div>

                <div className="flex min-w-0 flex-col gap-2.5">
                  <label htmlFor="budget" className={labelClass}>
                    Estimated budget
                    <span className="ml-2 font-inter text-xs font-normal text-[#17113d]/40">
                      (Optional)
                    </span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Let's discuss</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000–₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000–₹1,00,000">
                      ₹50,000 – ₹1,00,000
                    </option>
                    <option value="₹1,00,000–₹3,00,000">
                      ₹1,00,000 – ₹3,00,000
                    </option>
                    <option value="Above ₹3,00,000">Above ₹3,00,000</option>
                  </select>
                </div>

                <div className="flex min-w-0 flex-col gap-2.5 sm:col-span-2">
                  <label htmlFor="timeline" className={labelClass}>
                    When would you like to start?
                    <span className="ml-2 font-inter text-xs font-normal text-[#17113d]/40">
                      (Optional)
                    </span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">No fixed timeline yet</option>
                    <option value="As soon as possible">
                      As soon as possible
                    </option>
                    <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                    <option value="Within 1–3 months">Within 1–3 months</option>
                    <option value="Just exploring">
                      Just exploring for now
                    </option>
                  </select>
                </div>

                <div className="flex min-w-0 flex-col gap-2.5 sm:col-span-2">
                  <label htmlFor="details" className={labelClass}>
                    Tell us about your idea{" "}
                    <span className="text-[#6246e5]">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="What are you hoping to build? What problem are you solving? Tell us what success looks like..."
                    value={form.details}
                    onChange={handleChange}
                    required
                    className={`${inputClass} min-h-[150px] resize-y py-4 leading-7`}
                  />
                </div>
              </div>

              {/* Footer and CTA */}
              <div className="mt-8 border-t border-[#17113d]/10 pt-7 sm:mt-10 sm:pt-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-sora text-sm font-semibold text-[#17113d]">
                      Your idea matters to us.
                    </p>
                    <p className="mt-1 max-w-xs font-inter text-xs leading-5 text-[#17113d]/55">
                      Your details help us understand your project and discuss
                      the next steps.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex min-h-[56px] w-full shrink-0 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7557f6] via-[#6246e5] to-[#5135d4] px-7 py-4 font-sora text-sm font-semibold text-white shadow-lg shadow-[#6246e5]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6246e5]/35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6246e5]/30 active:translate-y-0 sm:w-auto"
                  >
                    <span>Send project enquiry</span>
                    <span className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                      ↗
                    </span>
                  </button>
                </div>
              </div>

              {/* Submission status */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-2xl border border-[#6246e5]/20 bg-violet-50/80 p-4 font-inter text-sm leading-6 text-[#17113d]"
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* ───────── LEFT: Contact cards ───────── */}
          <div className="grid gap-5 md:grid-cols-3 lg:sticky lg:top-10 lg:grid-cols-1">
            {contactCards.map((card, index) => (
              <a
                key={card.number}
                href={card.href}
                target={index === 2 ? "_blank" : undefined}
                rel={index === 2 ? "noreferrer" : undefined}
                className={`contact-card group relative flex min-h-[250px] flex-col overflow-hidden rounded-[1.75rem] border border-[#17113d]/10 bg-white p-6 sm:p-7 lg:min-h-[210px] ${
                  index === 1 ? "contact-card-featured" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="contact-card-glow pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#B8A5ff]/35 blur-3xl transition-all duration-500 group-hover:bg-[#B8A5ff]/70" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8A5ff]/20 text-[#6246e5] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-[#6246e5] group-hover:text-white sm:h-14 sm:w-14">
                    {card.icon}
                  </span>
                  <span className="font-sora text-xs tracking-widest text-[#17113d]/40">
                    {card.number}
                  </span>
                </div>

                <div className="relative">
                  <h2 className="font-sora text-2xl font-medium">
                    {card.title}
                  </h2>
                  <p className="mt-2 max-w-xs font-inter text-sm leading-7 text-[#17113d]/80">
                    {card.description}
                  </p>
                </div>

                <div className="relative mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="break-all font-sora text-sm font-semibold text-[#6246e5]">
                    {card.detail}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#6246e5]/20 text-[#6246e5] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#6246e5] group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* ───────── RIGHT: Heading + Form ───────── */}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <ChooseUsSection />

      <Footer />
    </main>
  );
}
