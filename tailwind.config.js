/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        snow: "#141824",
        mist: "#394153",
        dusk: "#A0A7B6",
        ink: "#E7EBF2",
        glacier: "#6C78A3",
        azure: "#7A8AA8"
      },
      boxShadow: {
        glass: "0 10px 40px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "snow-gradient": "radial-gradient(circle at 20% 20%, rgba(48,56,74,0.65), rgba(20,24,36,0.9) 55%, rgba(12,14,22,0.98) 80%)"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
