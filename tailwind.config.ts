/**
 * Merge `theme.extend` into your existing tailwind.config.js (Tailwind v3).
 *
 * Every color is a full 50-950 shade scale, so components use things like
 * `text-plum-700` or `bg-lavender-100` and never a single flat color.
 * Change a hex here and the whole section re-themes.
 *
 * NOTE: `plum` and `lavender` also keep a DEFAULT key (#4B2E63 / #B8A6C9),
 * so classes from the earlier Why Choose Us section such as `bg-plum/30`
 * or `text-lavender` keep working. Replace the old flat `plum` / `lavender`
 * entries with these scales.
 */

// Purple family (brand royal plum sits at 800, #65477F at 600)
const plum = {
  50: "#F6F1FA",
  100: "#EBE1F3",
  200: "#D7C4E7",
  300: "#BC9DD3",
  400: "#9C74BA",
  500: "#7D5799",
  600: "#65477F",
  700: "#573A70",
  800: "#4B2E63",
  900: "#382249",
  950: "#24142F",
};

// Lavender family (brand soft lavender sits at 300)
const lavender = {
  50: "#F8F5FB",
  100: "#EFE9F5",
  200: "#DCD0E8",
  300: "#B8A6C9",
  400: "#A08BB6",
  500: "#8873A0",
  600: "#705C88",
  700: "#5B4A70",
  800: "#483B59",
  900: "#362C43",
  950: "#231C2B",
};

// Pastels that sit well next to purple + lavender
const blush = {
  50: "#FDF4F7",
  100: "#FBE6EE",
  200: "#F7CFDF",
  300: "#F0B0C8",
  400: "#E68CAE",
  500: "#D66C94",
  600: "#B9507A",
};

const mint = {
  50: "#F1FAF6",
  100: "#DDF3E9",
  200: "#BCE6D3",
  300: "#94D3B8",
  400: "#6BBB9C",
  500: "#4A9E80",
  600: "#3A7F67",
};

const peach = {
  50: "#FFF6F0",
  100: "#FFE9DA",
  200: "#FED3B7",
  300: "#FBB78E",
  400: "#F59B69",
  500: "#E67F48",
  600: "#C7642F",
};

const sky = {
  50: "#F3F6FE",
  100: "#E4EBFC",
  200: "#C9D6F9",
  300: "#A6BBF3",
  400: "#839DEA",
  500: "#6580DC",
  600: "#4C65BF",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: { DEFAULT: plum[800], ...plum },
        lavender: { DEFAULT: lavender[300], ...lavender },
        blush,
        mint,
        peach,
        sky,
      },
      fontFamily: {
        // Point these at the CSS variables next/font gives you.
        inter: ["var(--font-inter)"],
        sora: ["var(--font-sora)"],
        display: ["var(--font-raleway)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-poppins)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(24px, -32px, 0)" },
        },
      },
      animation: {
        // Duration can be overridden per instance with an inline
        // animationDuration (BrandMarquee does this via a prop).
        "marquee-left": "marquee-left 45s linear infinite",
        float: "float 14s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        soft: `0 30px 80px -30px ${plum[800]}40`,
      },
      backgroundImage: {
        // Cursor-following glow. --mx / --my are set by the card's
        // onMouseMove handler in Testimonials.jsx.
        spotlight: `radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), ${lavender[300]}66, transparent 60%)`,
      },
    },
  },
  plugins: [],
};
