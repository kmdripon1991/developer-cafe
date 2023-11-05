/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#b2d14f",

        secondary: "#258de8",

        accent: "#f3fca1",

        neutral: "#19171c",

        "base-100": "#e7e9ee",

        info: "#59aac9",

        success: "#0e7155",

        warning: "#f5bd5c",

        error: "#f84978",
      },
    },
  ],
  plugins: [require("daisyui")],
};
