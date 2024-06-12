/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'zeyada': ['"Zeyada"', 'cursive'],
      'playfair-display': ['"Playfair Display"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
