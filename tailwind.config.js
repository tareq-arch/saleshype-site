/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          warm: '#F5F2EC',
        },
        accent: {
          DEFAULT: '#C24A0F',
          deep: '#8F3608',
        },
        muted: {
          DEFAULT: '#6B6B66',
          light: '#9B9B95',
        },
        rule: '#E5E2DA',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
