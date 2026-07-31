/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        ink: '#0A0C10',
        surface: '#12161C',
        surface2: '#171C24',
        line: '#232933',
        ink_text: '#E8ECEF',
        muted: '#8B96A1',
        teal: '#4DD8C0',
        amber: '#F5A65B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        scanSweep: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '10%': { opacity: 0.5 },
          '90%': { opacity: 0.5 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
      },
      animation: {
        scan: 'scanSweep 6s linear infinite',
      },
    },
  },
  plugins: [],
};