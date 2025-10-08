/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './docs/**/*.{vue,js,ts,jsx,tsx,md,html}',
    './docs/*.{vue,js,ts,jsx,tsx,md,html}',
    "'./packages/**/*.{vue,js,ts,jsx,tsx}'"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
