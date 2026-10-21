"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import BlurText from "./BlurText";

export default function HoverBlurButton({
  href,
  text,
  hoverText,
  variant = "primary",
  icon,
}) {
  const [hovered, setHovered] = useState(false);

  const isPrimary = variant === "primary";
  const Icon = icon;

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full
        font-semibold text-sm tracking-wide
        transition-all duration-500
        hover:-translate-y-0.5

        ${
           isPrimary
    ? `
      px-8 py-4
      bg-[#4B2E63]
      hover:bg-[#65477F]
      text-[#F7F3EC]
      shadow-lg shadow-[#4B2E63]/25
      hover:shadow-xl hover:shadow-[#4B2E63]/35
    `
    : `
      px-7 py-4
      gap-2.5
     bg-[#8708ef]
      hover:bg-[#8708ef]
      text-[#F4EDF8]
      shadow-lg shadow-[#F4EDF8]/25
      hover:shadow-xl hover:shadow-[#F4EDF8]/35
            `
        }
      `}
    >
      {/* Button content */}
      <span className="relative flex min-w-[170px] items-center justify-center">
        {/* Original text */}
        {!hovered && (
          <span
            className="
              flex items-center gap-3
              animate-in
              fade-in
              duration-300
            "
          >
            {Icon && (
              <Icon
                className={`
                  h-4 w-4
                  ${
                    isPrimary
                      ? "text-[#D9CEE3]"
                      : "text-[#C4A8E8]"
                  }
                `}
              />
            )}

            <BlurText
              text={text}
              delay={40}
              animateBy="words"
              direction="top"
              className="!m-0 !text-sm !font-semibold"
            />

            {isPrimary && (
              <ArrowRight
                className="
                  h-4 w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            )}
          </span>
        )}

        {/* Hover text */}
        {hovered && (
          <span
            className="
              flex items-center gap-3
              animate-in
              fade-in
              duration-300
            "
          >
            {Icon && (
              <Icon
                className={`
                  h-4 w-4
                  ${
                    isPrimary
                      ? "text-[#F0E6F5]"
                      : "text-[#E0C8FF]"
                  }
                `}
              />
            )}

            <BlurText
              key={hoverText}
              text={hoverText}
              delay={70}
              animateBy="words"
              direction="top"
              className="!m-0 !text-sm !font-semibold"
            />

            {isPrimary && (
              <ArrowRight
                className="
                  h-4 w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            )}
          </span>
        )}
      </span>

      {/* Shine effect */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          -translate-x-full
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />
    </a>
  );
}
