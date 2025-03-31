/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A23",      // Midnight Blue
        accent: "#D4AF37",       // Gold
        secondary: "#CD7F32",    // Bronze
        background: "#0D0D0D",   // Ebony Black
      },
    },
  },
  plugins: [],
}