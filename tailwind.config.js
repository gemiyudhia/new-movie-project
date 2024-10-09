/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: ["#16161a"],
        secondary: ["#72757e"],
      },
      animation: {
        shimmer: "shimer 1.5 infinite",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "200px 0",
          },
        },
      },
    },
  },
  plugins: [],
};
