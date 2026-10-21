"use client";

import { useEffect, useRef, useState } from "react";

export default function BlurText({
  text = "",
  delay = 100,
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);

          // Use the captured element instead of ref.current
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const items =
    animateBy === "words"
      ? text.split(" ")
      : text.split("");

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
    >
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={`
            inline-block
            transition-all
            duration-700
            ease-out
            ${
              inView
                ? "translate-x-0 translate-y-0 opacity-100 blur-0"
                : direction === "top"
                  ? "-translate-y-4 opacity-0 blur-sm"
                  : direction === "bottom"
                    ? "translate-y-4 opacity-0 blur-sm"
                    : direction === "left"
                      ? "-translate-x-4 opacity-0 blur-sm"
                      : "translate-x-4 opacity-0 blur-sm"
            }
          `}
          style={{
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {item}
          {animateBy === "words" && index < items.length - 1
            ? "\u00A0"
            : ""}
        </span>
      ))}
    </span>
  );
}
