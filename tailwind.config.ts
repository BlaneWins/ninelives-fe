import type { Config } from 'tailwindcss'

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "#06D6A0",
        "secondary": "#FFBD4C",
        "accent": "#EF476F",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
        "blue": "#118AB2",
        "midnight-green": "#073B4C"
      },
    },
  },
  plugins: [],
})
export default config
