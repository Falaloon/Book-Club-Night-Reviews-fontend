/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      IBMPlex: ["IBM Plex Sans", "sans-serif"],
      IBMPlexThai: ["IBM Plex Sans Thai Looped", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
