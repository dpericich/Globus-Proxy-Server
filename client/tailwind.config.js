/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Prompt'],
      serif: ['Bebas Neue'],
    },
    extend: {
      keyframes: {
        fadein: {
          from: {
            opacity: '0',
            // transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            // transform: 'translateY(0)',
          },
        },
        slidedown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadin: 'fadein 1s ease 500ms',
        slidedown300: 'slidedown 1s ease 300ms forwards',
        slidedown500: 'slidedown 1s ease 500ms forwards',
        slidedown700: 'slidedown 1s ease 700ms forwards',
      },
      textShadow: {
        sm: '1px 1px 2px black',
        DEFAULT: '2px 2px 4px black',
        lg: '4px 4px 8px black',
        xl: '4px 4px 16px black',
      },
    },
  },
  plugins: [],
}
