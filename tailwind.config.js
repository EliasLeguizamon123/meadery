/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: "#451a03",
        primary: "#f59e0b",
        secondary: "#fde68a",
        tertiary: "#fcd34d"
      }
    },
  },
  plugins: [],
}

