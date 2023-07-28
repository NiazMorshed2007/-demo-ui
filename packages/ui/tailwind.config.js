const baseConfig = require("../../tailwind.config.js");

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  safelist: ["dark"],
  content: ["./src/**/*.{ts,tsx}"],
};
