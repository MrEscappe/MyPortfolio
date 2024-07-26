import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        primary_hover: "#030312BB",
        secondary_hover: "#FFC700",
        secondary: "#FFF",
      }
    },
  },
  plugins: [],
};
export default config;
