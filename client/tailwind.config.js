/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#EF4444",
        customYellow: "#FFEDD5",
        customWhite: "#FFF7ED",
      },
    },
  },
  plugins: [],
};
