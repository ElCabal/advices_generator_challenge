/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lightCyan: "hsl(193, 38%, 86%)", //Primary
      neonGreen: "hsl(150, 100%, 66%)", //Primary
      grayishBlue: "hsl(217, 19%, 38%)", //Neutral
      darkGrayishBlue: " hsl(217, 19%, 24%)", //Neutral
      darkBlue: "hsl(218, 23%, 16%)", //Neutral
    },
    screens: {
      tablet: "540px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
