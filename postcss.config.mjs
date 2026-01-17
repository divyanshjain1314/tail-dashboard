import { b } from "framer-motion/client";

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        boxdark: "#1c2434",
        "boxdark-2": "#1A222C",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        strokedark: "#2E3A47",
        darkborder: "#2E3A47",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      borderColor: {
        darkborder: "#2E3A47",
      },
    },
  },
};

export default config;
