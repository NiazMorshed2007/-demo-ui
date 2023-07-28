const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "src/**/*.{ts,tsx}",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsla(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          accent1: "var(--primary-accent-1)",
          accent2: "var(--primary-accent-2)",
          accent3: "var(--primary-accent-3)",
          accent4: "var(--primary-accent-4)",
          accent5: "var(--primary-accent-5)",
          accent6: "var(--primary-accent-6)",
          accent7: "var(--primary-accent-7)",
          accent8: "var(--primary-accent-8)",
        },
        dark: {
          DEFAULT: "var(--dark-shape)",
          shape: "var(--dark-shape)",
          shape2: "var(--dark-shape-2)",
          shape3: "var(--dark-shape-3)",
          light1: "var(--dark-light-1)",
          light2: "var(--dark-light-2)",
          light3: "var(--dark-light-3)",
          selected: "var(--dark-selected)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          dark: "var(--destructive-dark)",
          light: "var(--destructive-light)",
          lighter: "var(--destructive-lighter)",
        },
        success: {
          DEFAULT: "var(--success)",
          dark: "var(--success-dark)",
          light: "var(--success-light)",
          lighter: "var(--success-lighter)",
        },
        info: {
          DEFAULT: "var(--info)",
          dark: "var(--info-dark)",
          light: "var(--info-light)",
          lighter: "var(--info-lighter)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          light: "var(--warning-light)",
          dark: "var(--warning-dark)",
          lighter: "var(--warning-lighter)",
        },
        violet: {
          DEFAULT: "var(--violet)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        dropdown: "0px 4px 6px 0px rgba(0, 0, 0, 0.09)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "scale-up": {
          from: { transform: "scale(0.4)" },
          to: { transform: "scale(1)" },
        },
        spread: {
          from: {
            width: "40%",
            transform: "scaleX(0)",
            transformOrigin: "center",
          },
          to: {
            transform: "scaleX(1)",
            width: "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-up": "scale-up 0.2s ease-out",
        spread: "spread 0.2s forwards ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
