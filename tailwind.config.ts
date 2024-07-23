import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        "primary-color": "rgb(var(--border-primary-rgb))",
        "reverse-color": "rgb(var(--border-reverse-rgb))",
      },
      backgroundColor: {
        "primary-color": "rgb(var(--background-primary-rgb))",
        "reverse-color": "rgb(var(--background-reverse-rgb))",
      },
      colors: {
        "primary-color": "rgb(var(--text-primary-rgb))",
        "reverse-color": "rgb(var(--text-reverse-rgb))",
      },
      textColor: {
        "primary-color": "rgb(var(--text-primary-rgb))",
        "reverse-color": "rgb(var(--text-reverse-rgb))",
      },
      stroke: {
        "primary-color": "rgb(var(--text-primary-rgb))",
        "reverse-color": "rgb(var(--text-reverse-rgb))",
      },
      fill: {
        "primary-color": "rgb(var(--text-primary-rgb))",
        "reverse-color": "rgb(var(--text-reverse-rgb))",
      },

      boxShadow: {
        //
        "bottom-right": "10px 10px 0px rgb(var(--border-primary-rgb))",
        "bottom-left": "-10px 10px 0px rgb(var(--border-primary-rgb))",
        "top-right": "10px -10px 0px rgb(var(--border-primary-rgb))",
        "top-left": "-10px -10px 0px rgb(var(--border-primary-rgb))",
        "right-left":
          "10px -10px 0px rgb(var(--border-primary-rgb)), -10px 10px 0px rgb(var(--border-primary-rgb))",
        "left-right":
          "-10px -10px 0px rgb(var(--border-primary-rgb)), 10px 10px 0px rgb(var(--border-primary-rgb))",
      },
    },
  },
  variants: { extend: {} },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".flip-horizontal": {
          transform: "scaleX(-1)",
        },
        ".flip-vertical": {
          transform: "scaleY(-1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
