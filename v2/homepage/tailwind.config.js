module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    extend: {
      fontFamily: {
        'jim-pam': ['jim-pam'],
        'little-spark': ['little-spark'],
        'boom-roasted': ['boom-roasted'],
        'marion': ['marion'],
        'raleway': ['Ubuntu'],
        'inconsolata': ['Inconsolata']
      }
    },
    colors: {
      "pink": "#e3c7b9",
      "white": "#ffffff",
      "powder-blue": "#e9fffeff",
      "sky-blue": "#00c9fd",
      "sea-green": "#cdd5beff",
      "deep-orange": "#c56f25ff",
      "forest-green": "#73A276",
      "mint-cream": "#EFF8F0",
      "cafe-noir": "#4E3822",
      "beaver-brown": "#AB8476",
      "emerald-green": "#4D9078",
      "beige": "#E3E7D3",
      "Gold-Crayola": "#F2C57C",
      "Jet":"#353535","White":"#ffffff","Light-Gray":"#d2d7df","Gray-Gray":"#bdbbb0",
      "dark-green": '#8A897C',
      "Battleship-Grey":"#818479","Cambridge-Blue":"#b5cbb7","Tea-Green":"#d2e4c4","Pale-Spring-Bud":"#e4e9b2",
      "Snow": "#F7F0F0",
      "cultured-white": "#F9F9F9"
    }
  },
  plugins: [],
}
