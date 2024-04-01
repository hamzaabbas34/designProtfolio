/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{   colors: {
      'blues': '#5438FD',
      'bbb': '#5337FD',
      'textcolor': "#747476",
      "darkblue" : "#100935",
      "textlight" : "#B4B4BB",
      "light" : "#E7EBFB"
    },
    fontFamily :{
      "pop" : "Poppins ,sans-serif",
    "aen" : "Aeonik TRIAL"}
  }
    
  },
  plugins: [],
}

