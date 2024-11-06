import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        'ColorInicio': {
        '50': '#fff1f1',
        '100': '#ffdfdf',
        '200': '#ffc4c4',
        '300': '#ff9b9b',
        '400': '#ff6262',
        '500': '#ff3131',
        '600': '#f01212',
        '700': '#bd0a0a',
        '800': '#a70d0d',
        '900': '#8a1212',
        '950': '#4b0404',

        'ColorLIma': {
        '50': '#f3feef',
        '100': '#e2ffd9',
        '200': '#c7fcb6',
        '300': '#99f87d',
        '400': '#64eb3d',
        '500': '#3dd413',
        '600': '#31bd0a',
        '700': '#268a0b',
        '800': '#236c0f',
        '900': '#1c590e',
        '950': '#0a3201',
    },
    
    },
    
      },
    },
  },
  plugins: [],
};
export default config;
