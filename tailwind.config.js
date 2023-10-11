/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        covermain: "clamp(1rem, 5vw, 2rem)",
        coversub: "clamp(0.5rem, 3vw, 1rem)"
      },
      width:{
        buttonbig: "clamp(2.5rem, 8vw ,5rem)",
        buttonsmall: "clamp(1.5rem, 4vw ,2.5rem)",
      },
      height:{
        buttonbig: "clamp(2.5rem, 8vw ,5rem)",
        buttonsmall: "clamp(1.5rem, 4vw ,2.5rem)",
        coverheight: "clamp(14rem, 0.5vw , 26rem)"
      }
    },
  },
  plugins: [],
}

