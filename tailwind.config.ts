import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['var(--font-pretendard)'],
    },
      colors: {
        mainColor: {
          500: '#81C784',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],  
};
export default config;
