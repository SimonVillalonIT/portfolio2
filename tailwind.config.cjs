/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F232D",
        secondary: "#01ECFB",
        white: "#FDFCFF",
      },
    },
  },
  plugins: [],
};
