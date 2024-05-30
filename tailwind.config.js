module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          mob: '900px',
          tablet: '980px',
          laptop: '1024px',
          desktop: '1280px',
          laptopl: '1440px',
        },
      },
    },
  },
  plugins: [],
};
