"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsVisible(true);

      // Find the element directly underneath the cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);

      if (!element) {
        setIsDarkBackground(false);
        return;
      }

      // Walk up the DOM to find a meaningful background color
      let currentElement = element;
      let backgroundColor = "rgba(0, 0, 0, 0)";

      while (
        currentElement &&
        backgroundColor.includes("rgba") &&
        backgroundColor.includes(", 0)")
      ) {
        backgroundColor = window.getComputedStyle(currentElement).backgroundColor;
        currentElement = currentElement.parentElement;
      }

      const rgb = backgroundColor.match(/\d+/g);

      if (rgb && rgb.length >= 3) {
        const [r, g, b] = rgb.map(Number);

        // Perceived brightness
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        setIsDarkBackground(brightness < 100);
      } else {
        setIsDarkBackground(false);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset?.cursor === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* OUTER CIRCLE */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-multiply"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 16),
          y: mousePosition.y - (isHovered ? 28 : 16),
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,

          // Dark background = light purple
          // Light background = your original colors
          backgroundColor: isDarkBackground
            ? "rgba(196, 181, 253, 0.45)"
            : isHovered
              ? "rgba(184, 166, 201, 0.45)"
              : "rgba(101, 71, 127, 0.2)",

          borderColor: isDarkBackground
            ? "rgba(216, 201, 255, 0.9)"
            : isHovered
              ? "rgba(75, 46, 99, 0.6)"
              : "rgba(182, 154, 104, 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 18,
          mass: 0.8,
        }}
        style={{
          borderWidth: "1.5px",
          borderStyle: "solid",
        }}
      />

      {/* INNER DOT */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[51] w-2 h-2 rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,

          // Dark background = light purple
          // Light background = original dark purple
          backgroundColor: isDarkBackground
            ? "#C4B5FD"
            : "#4B2E63",
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 45,
          mass: 0.1,
        }}
      />
    </>
  );
}
