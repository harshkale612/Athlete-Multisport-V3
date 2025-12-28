/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-elevated": "rgb(var(--color-surface-elevated) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
        "text-subtle": "rgb(var(--color-text-subtle) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        "border-subtle": "rgb(var(--color-border-subtle) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          hover: "rgb(var(--color-primary-hover) / <alpha-value>)",
          glow: "rgb(var(--color-primary-glow) / <alpha-value>)",
        },
        chess: "rgb(var(--color-chess) / <alpha-value>)",
        football: "rgb(var(--color-football) / <alpha-value>)",
        cricket: "rgb(var(--color-cricket) / <alpha-value>)",
        basketball: "rgb(var(--color-basketball) / <alpha-value>)",
        tennis: "rgb(var(--color-tennis) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at center, rgb(var(--color-primary) / 0.15) 0%, rgb(var(--color-background) / 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgb(var(--color-surface) / 0.6) 0%, rgb(var(--color-surface) / 0.3) 100%)',
        'sport-gradient': 'linear-gradient(135deg, rgb(var(--color-primary) / 0.1) 0%, rgb(var(--color-background) / 0) 100%)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'glow-sm': '0 0 10px rgba(var(--color-primary), 0.2)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        'theme': '600ms',
      },
      transitionTimingFunction: {
        'theme': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

