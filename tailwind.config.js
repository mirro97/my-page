/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-section": "1fr 2fr",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
