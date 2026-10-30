import React from 'react'

const reasons = [
  {
    number: "01",
    title: "We listen before we build.",
    description:
      "We take time to understand what you need, what's not working, and what a good result actually looks like for you.",
  },
  {
    number: "02",
    title: "Good work, no unnecessary drama.",
    description:
      "You get honest conversations, clear updates, and a team that takes responsibility for the work it delivers.",
  },
  {
    number: "03",
    title: "We care about the end result.",
    description:
      "We don't want to just tick off a list of tasks. We want to build something useful that you're genuinely happy to put your name on.",
  },
];

const ChooseUsSection = () => {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-14 lg:px-20 lg:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 font-sora-regular text-[16px] font-black uppercase text-[#17113d]">
              Why Choose us
            </p>

            <h2 className="font-sora font-semibold text-4xl leading-tight sm:text-5xl lg:text-6xl bg-gradient-to-r
from-[#17113D]
via-[#4e3aa8]
to-[#4c3895]
bg-clip-text
text-transparent">
              Good people. <br />
              Thoughtful work.
            </h2>

            <p className="mt-6 max-w-xl font-inter text-base leading-8 text-[#17113d]/70">
              Choosing a team to work with is a big decision. We think it should
              feel less like a sales pitch and more like finding people who
              understand what you're trying to do.
            </p>

            <div className="mt-10 space-y-0">
              {reasons.map((reason) => (
                <article
                  key={reason.number}
                  className="why-item group flex gap-5 border-b border-[#17113d]/10 py-6 sm:gap-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6246e5]/20 font-sora text-xs font-semibold text-[#6246e5] transition-all duration-300 group-hover:bg-[#6246e5] group-hover:text-white">
                    {reason.number}
                  </span>

                  <div>
                    <h3 className="font-sora text-xl transition-colors duration-300 group-hover:text-[#6246e5] sm:text-2xl">
                      {reason.title}
                    </h3>

                    <p className="mt-3 font-inter text-sm leading-7 text-[#17113d]/65 sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#17113d] px-6 py-4 font-sora text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6246e5]"
            >
              Let's work together
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <div className="why-image-wrap relative min-w-0">

            <img
              src="/images/l1.jpg"
              alt="A team sharing ideas and working through a project together"
              loading="lazy"
              className="why-image relative z-10 h-[390px] w-full rounded-[2rem] object-cover sm:h-[520px] lg:h-[650px]"
            />

            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/20 bg-[#17113d]/80 p-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-7">
              <p className="font-sora text-xs uppercase tracking-[0.2em] text-[#B8A5ff]">
                The way we see it
              </p>

              <p className="mt-3 font-sora text-xl leading-snug sm:text-2xl">
                The best work happens when people work well together.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ChooseUsSection