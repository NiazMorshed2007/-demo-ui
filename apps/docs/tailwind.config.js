const baseConfig = require("../../tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [...baseConfig.content, "../../packages/ui/src/**/*.{ts,tsx}"],
};
