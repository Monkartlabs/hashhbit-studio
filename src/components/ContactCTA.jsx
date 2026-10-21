import Link from 'next/link'
import React from 'react'

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

const ContactCTA = () => {
  return (
   <section className="px-5 pb-20 sm:px-10 sm:pb-28 lg:px-20">
           <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#17113d] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
             <div
               aria-hidden="true"
               className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-[#6246e5]/45 blur-[90px]"
             />
   
             <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
               <div className="max-w-2xl">
                 <h2 className="font-sora text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                   Good ideas start with a conversation.
                 </h2>
   
                 <p className="mt-5 max-w-xl font-inter text-base leading-8 text-white/70">
                   If something you read got you thinking, or you have an idea
                   of your own, we would love to hear about it.
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
  )
}

export default ContactCTA