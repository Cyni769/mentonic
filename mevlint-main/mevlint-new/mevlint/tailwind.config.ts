import { Space } from "lucide-react";
import { Rethink_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rethink_Sans: ["Rethink_Sans", "sans-serif"],
        Space_Mono: ["Space_Mono", "monospace"],
        figtree: ["Figtree", "sans-serif"],
        sans: ["var(--font-geistSans)"],
        mono: ["var(--font-geistMono)"],
      },
      color: {
        primary: "#E48383",
        secondary: "#6586E7",
        accent: "#6BDAAC",
        background: "#FFFFFF",
        foreground: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;