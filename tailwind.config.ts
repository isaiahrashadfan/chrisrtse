import { Anonymous_Pro, Arimo, Noto_Serif } from "next/font/google";
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

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
    },
    fontFamily: {
      Noto_Serif: ['var(--font-noto_serif)', ...defaultTheme.fontFamily.sans],
      Anonymous_Pro: ['var(--font-anonymous_pro)', ...defaultTheme.fontFamily.sans],
      Arimo: ['var(--font-arimo)', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
};
export default config;
