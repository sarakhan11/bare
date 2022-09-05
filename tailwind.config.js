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
        "4xl": "0px 1px 2px 0px rgba(0, 0, 0, 0.07);",
      },
      spacing: {
        128: "550px",
        404: "300px",
        325: "325px",
      },
    },
  },

  plugins: [],
};
