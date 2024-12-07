/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.9s ease-out", // Custom slide down animation
      },
      keyframes: {
        slideDown: {
          "0%": { 
            maxHeight: "0", 
            opacity: 0, // Starts invisible and compressed
          },
          "100%": { 
            maxHeight: "500px", // Ensure this is more than enough for your modal
            opacity: 1, // Fully visible at the end
          },
        },
      },
    },
  },
  plugins: [],
}
