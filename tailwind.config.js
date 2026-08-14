/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        classic: {
          950: '#07182D',
          900: '#0A2540',
          850: '#0F3876',
          800: '#154694',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          300: '#93C5FD',
          200: '#BFDBFE',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        navy: {
          950: '#071324',
          900: '#0B1E36',
          850: '#0F294A',
          800: '#163B65',
          700: '#245287',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
        },
        blueprint: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          900: '#0C4A6E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(15, 56, 118, 0.05), 0 10px 25px -5px rgba(15, 56, 118, 0.08)',
        'card-hover': '0 10px 30px -5px rgba(15, 56, 118, 0.15), 0 0 1px rgba(15, 56, 118, 0.2)',
        'blue-glow': '0 0 25px -5px rgba(37, 99, 235, 0.35)',
        'amber-glow': '0 0 25px -5px rgba(217, 119, 6, 0.3)',
      }
    },
  },
  plugins: [],
}
