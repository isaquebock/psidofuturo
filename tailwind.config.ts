import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
      },
      boxShadow: {
        'default': '0px 15px 21px 0px #0000000A',
      },
      colors: {
        "red-100": "var(--red-100)",
        "red-300": "var(--red-300)",
        "red-500": "var(--red-500)",
        "red-600": "var(--red-600)",
        "red-700": "var(--red-700)",
        "red-900": "var(--red-900)",
        "red-950": "var(--red-950)",
        "blue-link": "var(--blue-link)",
        "blue-100": "var(--blue-100)",
        "blue-300": "var(--blue-300)",
        "blue-500": "var(--blue-500)",
        "blue-700": "var(--blue-700)",
        "blue-900": "var(--blue-900)",
        "gray-950": "var(--gray-950)",
        "gray-900": "var(--gray-900)",
        "gray-500": "var(--gray-500)",
        "gray-100": "var(--gray-100)",
        "green-100": "var(--green-100)",
        "green-900": "var(--green-900)",
        "salmon": "var(--salmon)",
      },
      fontFamily: {
        workSans: ['var(--font-workSans)'],
      }
    },
    
  },
  plugins: [],
};
export default config;
