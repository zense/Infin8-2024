/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'purple':'#881E82',
      'yellow':'#FDC500',
      'red':'#D90429',
      'white':'#FFF',
      "blue":"#54BECC",
      "dark-purple":"#6F1069",
    },
    extend: {
      screens:
      {
        "md":'1005px',
      }
    },
  },
  plugins: [],
}

