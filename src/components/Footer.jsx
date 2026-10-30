"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

/* =========================================================
   ROTATING TEXT
   Each character rotates individually on parent hover.
========================================================= */

const RotateText = ({ children, className = "", delay = 0 }) => {
  const text = String(children);

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="
            inline-block
            transform-gpu
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:rotate-[360deg]
            group-hover:-translate-y-0.5
          "
          style={{
            transitionDelay: `${delay + index * 45}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({ children, href = "#" }) => {
  return (
    <Link
      href={href}
      className="
        flex h-12 w-12 shrink-0 items-center justify-center
        rounded-full
        border border-white/20
        text-white/80
        transition-all duration-300
        hover:border-white
        hover:bg-white
        hover:text-black
      "
    >
      {children}
    </Link>
  );
};

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#101010] text-white">
      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <div className="px-5 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-14 md:px-12 lg:px-24 lg:pb-10 lg:pt-10">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Animated small text */}
            <span className="group inline-flex font-inter font-semibold">
              <RotateText
                className="
                pl-0
                sm:pl-2
                lg:pl-2
                  mb-3
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-white
                  font-inter
                "
              >
                Get in touch
              </RotateText>
            </span>
            <h2
              className="
  font-sora
  tracking-[-0.05em]
    text-4xl
    font-light
    sm:text-6xl
    md:text-7xl
    lg:text-[86px]
    lg:leading-[0.95]
    bg-gradient-to-r
    from-[#5B3A8C]
    via-[#7956A8]
    to-[#9B83B8]
    bg-clip-text
    text-transparent
  "
            >
              LET’S CONNECT
            </h2>
          </div>

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              px-6
              py-3
              text-sm
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              sm:px-7
            "
          >
            <span>Contact Us</span>

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                text-lg
                transition-transform
                duration-300
                group-hover:rotate-45
                group-hover:border-black
              "
            >
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mx-5 border-t border-white/20 sm:mx-10 md:mx-12 lg:mx-24" />

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div
        className="
          grid
          gap-12
          px-5
          py-14
          sm:gap-14
          sm:px-10
          sm:py-16
          md:px-12
          lg:grid-cols-[1.7fr_1fr_1fr_1.4fr]
          lg:gap-10
          lg:px-24
          lg:py-10
        "
      >
        {/* ===================================================
            BRAND
        =================================================== */}

        <div className="min-w-0">
          {/* LOGO */}
          <Link
            href="/"
            className="
              group
              flex
              items-center
              gap-3
              sm:gap-4
            "
          >
            {/* Logo */}
            {/* <div className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">

              <div
                className="
                  h-9
                  w-7
                  rotate-45
                  rounded-[5px]
                  border-[4px]
                  border-white
                  transition-transform
                  duration-500
                  group-hover:rotate-[135deg]
                "
              />

              <div
                className="
                  absolute
                  right-[6px]
                  top-[3px]
                  h-2
                  w-2
                  bg-white
                "
              />

            </div>

            */}

            <Image
              src="/images/logo-(3).png"
              alt="Description"
              width={100}
              height={0}
              className="object-cover -mr-5"
            />
            <span className="text-lg font-inter font-bold tracking-tight sm:text-xl">
              Hashhbit Studio
            </span>
          </Link>

          {/* DESCRIPTION */}

          <div className="group mt-8 font-inter fotn-semibold max-w-[380px] text-sm leading-6 sm:text-base">
            Creative Technology. Digital Experiences. Business Growth.
          </div>
          {/* <div className="group mt-8 font-inter fotn-semibold max-w-[380px] text-sm leading-6 sm:text-base">
            We place great emphasis on designers, artists,
            <br />
            and brands.
          </div> */}
          {/* =================================================
              SOCIALS
          ================================================= */}

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            {/* YouTube */}
            <SocialIcon href="#">
              <FaFacebook className="text-[35px]" />
            </SocialIcon>

            <SocialIcon href="#">
              <span className="text-lg">X</span>
            </SocialIcon>

            {/* LinkedIn */}
            <SocialIcon href="#">
              <span className="text-lg font-semibold">in</span>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon href="#">
              <FaInstagram
  size={18}
  className="text-white transition-all hover:scale-110 hover:text-pink-400"
/>
            </SocialIcon>
          </div>
        </div>

        {/* ===================================================
            COMPANY
        =================================================== */}

        <div className="min-w-0">
          {/* Heading */}
          <div className="group inline-flex font-sora font-semibold ">
            Navigations
          </div>

          {/* Links */}
          <nav className="mt-6 flex flex-col gap-5 sm:mt-5 sm:gap-2 text-white/80">
            <Link
              href="/about-us"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>About Us</RotateText>
            </Link>

            <Link
              href="/solutions"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>Solutions</RotateText>
            </Link>

            <Link
              href="/work"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>Work</RotateText>
            </Link>

            {/* <Link
              href="/industry"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>Industries</RotateText>
            </Link> */}

            <Link
              href="/blog"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>Blogs</RotateText>
            </Link>

            {/* <Link
              href="/careers"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>Careers</RotateText>
            </Link> */}

            <Link
              href="/contact"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>Contact</RotateText>
            </Link>
          </nav>
        </div>

        {/* ===================================================
            USEFUL LINKS
        =================================================== */}

        <div className="min-w-0">
          {/* Heading */}
          <div className="group inline-flex font-sora font-semibold mb-5">
            Services
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/services/digital-marketing-and-branding"
              className="group flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">
                Digital Marketing &
                Branding
              </RotateText>
            </Link>

            <Link
              href="/services/ui-ux-digital-experience"
              className="group flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">
                UI/UX Design
              </RotateText>
            </Link>

            <Link
              href="/services/web-app-development"
              className="group flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">
                Web Development
              </RotateText>
            </Link>

            <Link
              href="/services/web-app-development"
              className="group flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">
                App Application
              </RotateText>
            </Link>

            <Link
              href="/services/ai-and-automation"
              className="group flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">
                AI Automation
              </RotateText>
            </Link>

            <Link
              href="/services/growth-performance-marketing"
              className="group flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">
                Digital Marketing
              </RotateText>
            </Link>

            <Link
              href="/services/motion-3d-immersive"
              className="group inline-flex font-sora"
            >
              <RotateText className="text-[#ffffff]/80">Motion & 3D</RotateText>
            </Link>
          </div>
        </div>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <div className="min-w-0">
          {/* Heading */}

          <div className="flex flex-col gap-6 sm:gap-7">
            {/* EMAIL */}

            <div>
              <div className="group inline-flex font-sora font-semibold">
                <RotateText className="text-[#ffffff]">Email Us</RotateText>
              </div>

              <a
                href="mailto:monkartlabs@gmail.com"
                className="
                  group
                  mt-2
                  block
                  w-fit
                  max-w-full
                  break-all
                  text-[16px]
                  font-medium
                  transition-colors
                  text-white/80
                "
              >
                hello@hashhbitstudio.com
              </a>
            </div>

            {/* PHONE */}

            <div>
              <div className="group inline-flex font-sora font-semibold">
                <RotateText className="">Call Us</RotateText>
              </div>

              <div className="mt-3 flex flex-col gap-3">
                <a
                  href="tel:+919625995855"
                  className="
                    group
                    w-fit
                    footer-link
                    text-white/80
                  "
                >
                  🇮🇳 +91 9665622497
                </a>

                {/* <a
                  href="tel:+14034023414"
                  className="
                    group
                    w-fit
                    footer-link
                  "
                >
                  🇨🇦 +1 (403) 404-4053
                </a> */}
              </div>
            </div>

            <div>
              <div className="group inline-flex font-sora font-semibold">
                <RotateText className="">Find Us</RotateText>
              </div>

              <div className="mt-3 flex flex-col gap-3">
                <a
                  href="tel:+919625995855"
                  className="
                    group
                    w-fit
                    footer-link
                    text-white/80
                  "
                >
                  Office No. 127, 1501, Sai Chowk Rd, 
                  <br />
                  Laxman Nagar, Balewadi, Pune Maharashtra 411045
                </a>

                {/* <a
                  href="tel:+14034023414"
                  className="
                    group
                    w-fit
                    footer-link
                  "
                >
                  🇨🇦 +1 (403) 404-4053
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DIVIDER
      ===================================================== */}

      <div className="mx-5 border-t border-white/10 sm:mx-10 md:mx-12 lg:mx-24" />

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-5
          px-5
          py-7
          sm:px-10
          sm:py-8
          md:px-12
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-24
        "
      >
        <div className="group min-w-0  font-inter font-bold tracking-widest">
          <RotateText className="text-[9.4px] md:text-[12px] text-[#737b89]">
            Copyright © 2026 Hashhbit Studio. All rights reserved.
          </RotateText>
        </div>
      </div>
    </footer>
  );
}
