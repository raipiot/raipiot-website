import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        spinY: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(720deg)' }
        }
      },
      animation: {
        'spinY-2': 'spinY 1.5s ease-in-out'
      }
    }
  },
  plugins: []
}
export default config
