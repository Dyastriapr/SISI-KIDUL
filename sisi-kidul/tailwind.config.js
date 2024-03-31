/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-purple1": "#A114BD",
        "custom-purple2": "#C375EF",
        "custom-purple3": "#8B3EF5",
        "custom-indigo1": "#34098D",
        "custom-indigo2": "#A768FD",
        "custom-text-purple": "873ED5",
      },
      fontWeight: {
        750: "750",
      },
    },
  },
  plugins: [],
};
