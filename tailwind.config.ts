import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      passionsconflict: ['"Passions Conflict"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
