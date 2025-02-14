import type { Config } from "tailwindcss";
import * as tailwindAnimate from "tailwindcss-animate";
import scrollbarHide from "tailwind-scrollbar-hide";

// todo: remove tailwind-scrollbar-hide ?

export default {
  darkMode: ["class"],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
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
        md: "768px",
        lg: "1680px",
      },
      maxWidth: {
        full: "100%",
      },
      fontSize: {
        xs: [
          "0.75rem", // 12px ÷ 16 = 0.75rem
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem", // 14px ÷ 16 = 0.875rem
          {
            lineHeight: "1.25rem",
          },
        ],
        lg: [
          "1.125rem", // 18px ÷ 16 = 1.125rem
          {
            lineHeight: "1.75rem",
          },
        ],
        "2xl": [
          "1.5625rem", // 25px ÷ 16 = 1.5625rem
          {
            lineHeight: "2rem",
          },
        ],
        "2.5xl": [
          "1.875rem", // 30px ÷ 16 = 1.875rem
          {
            lineHeight: "2.25rem",
          },
        ],
        "3xl": [
          "2.1875rem", // 35px ÷ 16 = 2.1875rem
          {
            lineHeight: "2.5rem",
          },
        ],
        "3.5xl": [
          "2.5rem", // 40px ÷ 16 = 2.5rem
          {
            lineHeight: "2.75rem",
          },
        ],
        "4xl": [
          "3rem", // 48px ÷ 16 = 3rem
          {
            lineHeight: "3rem",
          },
        ],
        "5xl": [
          "3.125rem", // 50px ÷ 16 = 3.125rem
          {
            lineHeight: "3.5rem",
          },
        ],
        "6xl": [
          "3.75rem", // 60px ÷ 16 = 3.75rem
          {
            lineHeight: "4rem",
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
        "menu-icon": {
          DEFAULT: "hsl(var(--menu-icon))",
          hover: "hsl(var(--menu-icon-hover, var(--menu-icon)))",
        },
        icon: {
          DEFAULT: "hsl(var(--icon-default))",
        },
      },
      spacing: {
        "16": "64px",
      },
    },
  },
  plugins: [tailwindAnimate, scrollbarHide],
} satisfies Config;
