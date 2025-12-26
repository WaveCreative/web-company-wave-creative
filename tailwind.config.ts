import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#BF092F",
        secondary: "#E63B5E",
        accent: "#D40A35",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
      },
      fontFamily: {
        sans: ['var(--font-jakarta-sans)', 'sans-serif'], // Use the CSS variable
      },
    },
  },
  plugins: [],
};

module.exports = config;
export default config;