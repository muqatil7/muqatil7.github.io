/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // لملفات React
    './docs/**/*.{md,mdx}', // لمحتوى Docusaurus
    './src/pages/**/*.{js,jsx,ts,tsx}', // لصفحات الموقع
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
