/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#592932',
        'custom-brown1': '#b3815e',
      },
    },
  },
  plugins: [],
}

