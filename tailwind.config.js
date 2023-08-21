/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeBg': "url('src/assets/images/distribution.webp')",
        'dotBg': "url('https://res.cloudinary.com/dzrrdkd7i/image/upload/v1689929175/dot-bg_bgllsr.webp')"
      }
    },
  },
  plugins: [],
}

