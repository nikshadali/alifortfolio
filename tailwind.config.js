
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'trendily': "url('../public/image/trendily.jpg')",
        'malakfinancial': "url('../public/image/malakfinancial.jpg')",
      },
    },
    
  },
  plugins: [],
}