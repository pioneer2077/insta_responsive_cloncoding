import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        "244px": "244px",
        "72px": "72px",
      },
      height: {
        "101px": "101px",
        "81px": "81px",
        "56px": "56px",
        "52px": "52px",
      },
      width: {
        "1014px": "1014px",
        "630px": "630px",
        "383px": "383px",
        "56px": "56px",
        "52px": "52px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    maxWidth: {
      "1152px": "1152px",
      "244px": "244px",
      "72px": "72px",
    },
    minWidth: {
      "244px": "244px",
      "48px": "48px",
    },
    minHeight: {
      "100vh": "100vh",
    },
    backgroundColor: {
      primary: "#4193ef",
      secondary: "#f2f2f2",
      white: "#ffffff",
    },
    textColor: {
      blue: "#4193ef",
      white: "#ffffff",
      gray: "#737373",
      hoverGray: "#8e8e8e",
    },

    screens: {
      tablet: "719px",
      lap: "1152px",
      desktop: "1260px",
    },
    transitionProperty: {
      height: "height",
      text: "text",
    },
  },
  plugins: [],
};
export default config;
