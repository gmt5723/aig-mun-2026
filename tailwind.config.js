/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020307',
          900: '#03050B', // Deep space black
          850: '#060A16',
          800: '#080F1D', // Midnight navy
          750: '#0C162B',
          700: '#111E3D',
          600: '#1B2F5E',
        },
        celestial: {
          ice: '#8CCEFF', // Accent ice blue
          glow: '#A8DCFF',
          blue: '#4A7CBE',
          muted: '#627D98',
          silver: '#E2E8F0',
          pearl: '#F8FAFC',
          border: 'rgba(140, 206, 255, 0.16)',
          borderHover: 'rgba(140, 206, 255, 0.4)',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(74, 124, 190, 0.18) 0%, rgba(8, 15, 29, 0.4) 50%, rgba(3, 5, 11, 0) 80%)',
        'radial-gradient-glow': 'radial-gradient(circle, rgba(140, 206, 255, 0.15) 0%, rgba(3, 5, 11, 0) 70%)',
        'metallic-text': 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 45%, #94A3B8 75%, #CBD5E1 100%)',
        'metallic-gold': 'linear-gradient(180deg, #FFF6E5 0%, #D8C39D 50%, #998357 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(14, 24, 51, 0.6) 0%, rgba(8, 15, 29, 0.8) 100%)',
      },
      animation: {
        'spin-very-slow': 'spin 120s linear infinite',
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spin-reverse 80s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'celestial-glow': '0 0 35px -5px rgba(140, 206, 255, 0.25)',
        'celestial-sm': '0 0 15px -2px rgba(140, 206, 255, 0.2)',
        'metallic-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
};
