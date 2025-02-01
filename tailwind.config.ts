import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      md: "377px",
      lg: "769px",
    },
    maxWidth: {
      full: "1680px",
    },
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        "2xl": ["25px", { lineHeight: "50px", letterSpacing: "-0.015em" }],
        "6xl": ["3.75rem", { lineHeight: "65px", letterSpacing: "-0.015em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
