import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    colors: {
      'my-bg' : '#dae7e9',
      'c-normal': '#ddcbd0',
      'c-rock': '#c5aea8',
      'c-water': '#cbd5ed',
      'c-dragon': '#cadcdf',
      'c-fighting': '#fcc1b0',
      'c-bug': '#C1E0C8',
      'c-grass': '#c0d4c8',
      'c-dark': '#c6c5e3',
      'c-flying': '#b2d2e8',
      'c-ghost': '#D7C2D7',
      'c-electric': '#E2E2A0',
      'c-fairy': '#E4C0CF',
      'c-poison': '#CFB7ED',
      'c-steel': '#C2D4CE',
      'c-psychic': '#DDC0CF',
      'c-unknown': '#C0DFDD',
      'c-ground': '#F4D1A6',
      'c-fire': '#edc2c4',
      'c-ice': '#C7D7DF',
      'c-shadow': '#CACACA',
    }
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
}
export default config
