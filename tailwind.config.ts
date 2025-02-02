import type { Config } from "tailwindcss";
import * as tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      // Default mobile: No prefix needed, use regular classes as default styles
      // md: "769px", // Styles for tablet start at 769px
      // lg: "1680px", // Styles for desktop start at 1680px
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1680px",
      },
    },
    extend: {
      screens: {
        // Default mobile: No prefix needed, use regular classes as default styles
        // md: "1680px", // Styles for tablet start at 769px
        // lg: "1680px", // Styles for desktop start at 1680px
        md: "768px", // Tablet starts at 768px
        lg: "1680px", // Desktop starts at 1680px
      },
      maxWidth: {
        full: "100%", // Mobile full width
        // md: "768px", // Max width at tablet breakpoint
        // lg: "1680px", // Max width at desktop breakpoint
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "-0.015em",
          },
        ],
        "2xl": [
          "25px",
          {
            lineHeight: "50px",
            letterSpacing: "-0.015em",
          },
        ],
        "5xl": [
          "3.125rem", // 50px
          {
            lineHeight: "60px", // Adjust proportionally
            letterSpacing: "-0.01em", // Optional spacing
          },
        ],

        "6xl": [
          "3.75rem",
          {
            lineHeight: "65px",
            letterSpacing: "-0.015em",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
