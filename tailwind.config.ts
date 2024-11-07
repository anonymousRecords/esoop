import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
      colors: {
        // 주요 브랜드 색상
        primary: {
          50: '#f0fdf9',
          100: '#cdfaed',
          200: '#9af5db',
          300: '#60e8c7',
          400: '#30d1ae',
          500: '#18c19f', // 기본 primary 색상
          600: '#0f927a',
          700: '#117464',
          800: '#125d51',
          900: '#144d44',
          950: '#052e29',
        },
        // 텍스트 및 배경 색상
        text: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#363636', // 기본 텍스트 색상
          950: '#262626',
        },
        // 기타 UI 색상
        border: '#e7e7e7',
        background: '#ffffff',
        foreground: '#363636',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
    },
  },
  plugins: [],
};
export default config;
