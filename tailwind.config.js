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
        center: true, // Centre automatiquement le conteneur
        padding: '2rem', // Ajoute un padding par défaut
        screens: {
          mob: '900px', // Largeur maximale pour les petits écrans
          tablet: '980px', // Largeur maximale pour les écrans moyens
          laptop: '1024px', // Largeur maximale pour les grands écrans
          desktop: '1280px', // Largeur maximale pour les très grands écrans
          laptopl: '1440px', // Largeur maximale pour les écrans extra larges
        },
      },
    },
  },
  plugins: [],
};
