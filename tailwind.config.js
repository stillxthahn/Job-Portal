/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {},
  container: {
   center: true,
   screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1800px",
   },
  },
 },
 plugins: [],
};
exports = {
 corePlugins: {
  preflight: true,
 },
};
