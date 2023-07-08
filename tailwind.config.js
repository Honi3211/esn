module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belanosima: ["Belanosima", "sans-serif"],
        caprasimo: ["Caprasimo", "cursive"],
        lilitaOne: ["Lilita One", "cursive"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
        permanentMarker: ["Permanent Marker", "cursive"],
      },
    },
  },
  // font-family: 'Belanosima', sans-serif;
  // font-family: 'Caprasimo', cursive;
  // font-family: 'Lilita One', cursive;
  // font-family: 'Nunito Sans', sans-serif;
  // font-family: 'Permanent Marker', cursive;
  plugins: [],
};
