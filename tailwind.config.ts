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
        ink: '#201815',
        paper: '#fbf3df',
        cream: '#fff9eb',
        rose: '#9f2434',
        teal: '#176f69',
        gold: '#c98b2c',
        violet: '#463064'
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
