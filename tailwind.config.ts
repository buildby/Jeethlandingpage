import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B3B7',
        secondary: '#3B393A',
      },
    },
    fontFamily: {
      display: ['Poppins'],
      body: ['Poppins'],
    }
  },
  plugins: [],
}
export default config
