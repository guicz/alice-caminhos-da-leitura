import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Nunito', 'sans-serif']
      },
      colors: {
        ink: '#2D2630',
        paper: '#FBF0D8',
        cream: '#FFF6E6',
        rose: '#F4B6C2',
        red: '#D94B4B',
        teal: '#355C7D',
        mint: '#CDE6D6',
        sky: '#B6D6EB',
        gold: '#B88A44'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config;

export default config;
