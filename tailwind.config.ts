import type {Config} from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2E388F",
        primaryDark: "#0f172a",
        ink: "#0E1433",
        inkDeep: "#080C22",
        mist: "#F3F5F9",
        sky: "#CDE7FA",
        skyDeep: "#7CC0EE",
        line: "#D9DEEA",
        muted: "#4A5170",
        signal: "#1F9D6B",
      },
      fontFamily: {
        sans: ['"Hanken Grotesk Variable"', '"Hanken Grotesk"', "Helvetica", "Arial", "sans-serif"],
        serif: ['"Fraunces Variable"', '"Fraunces"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
