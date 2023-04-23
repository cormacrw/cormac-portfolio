/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary': '#FFCA0D',
      'primary-accent': '#FF4D00',
      'secondary': '#4457FF',
      'secondary-accent': '#0DFFD3'
    },
    fontFamily: {
      sans: ['Inter']
    },
    extend: {
      spacing: {
        '128': '48rem'
      }
    }
  },
  plugins: [],
}

