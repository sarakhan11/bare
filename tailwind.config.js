/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 4px 10px 0px rgba(0, 0, 0, 0.08);",
      },
      spacing: {
        128: "550px",
        404: "300px",
      },
    },
  },

  plugins: [],
};
