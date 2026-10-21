import { useState } from "react";

// Arrow icon
const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ValuesAccordion = ({ values = [] }) => {
  const [activeValue, setActiveValue] = useState("beliefs");

  return (
    <div className="w-full">
      {values.map((value) => {
        const isActive = activeValue === value.id;
        const contentId = `content-${value.id}`;

        return (
          <div
            key={value.id}
            className={`border-b transition-colors duration-300 ${
              isActive
                ? "border-[#6246e5]/40"
                : "border-[#17113d]/10"
            }`}
          >
            {/* Accordion Heading */}
            <button
              type="button"
              onClick={() =>
                setActiveValue(isActive ? null : value.id)
              }
              aria-expanded={isActive}
              aria-controls={contentId}
              className="group flex w-full items-center gap-4 py-7 text-left sm:py-8"
            >
              {/* Accent Bar */}
              <span
                className={`h-12 w-1 shrink-0 rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-[#6246e5]"
                    : "bg-[#B8A5ff]/60"
                }`}
              />

              {/* Title */}
              <span
                className={`flex-1 font-bingo text-2xl transition-colors duration-300 sm:text-3xl ${
                  isActive
                    ? "text-[#6246e5]"
                    : "text-[#17113d] group-hover:text-[#6246e5]"
                }`}
              >
                {value.title}
              </span>

              {/* Number */}
              <span className="mr-1 font-sora text-xs text-[#17113d]/40">
                {value.number}
              </span>

              {/* Animated Arrow */}
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "rotate-90 bg-[#6246e5] text-white"
                    : "bg-[#B8A5ff]/20 text-[#17113d] group-hover:bg-[#B8A5ff]/50"
                }`}
              >
                <ArrowIcon className="h-5 w-5" />
              </span>
            </button>

            {/* Animated Content */}
            <div
              id={contentId}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              aria-hidden={!isActive}
              inert={!isActive}
            >
              <div className="overflow-hidden">
                <div className="pb-8 pl-5 sm:pl-6">
                  {/* Subtitle */}
                  {value.subtitle && (
                    <p className="mb-4 font-sora text-sm font-semibold text-[#17113d]">
                      {value.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  {value.description && (
                    <p className="font-inter text-sm leading-7 text-[#17113d]/70 sm:text-base sm:leading-8">
                      {value.description}
                    </p>
                  )}

                  {/* Second Paragraph */}
                  {value.secondParagraph && (
                    <p className="mt-4 font-inter text-sm leading-7 text-[#17113d]/70 sm:text-base sm:leading-8">
                      {value.secondParagraph}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ValuesAccordion;