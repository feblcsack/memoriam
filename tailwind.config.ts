/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",       // App Router pages
      "./components/**/*.{js,ts,jsx,tsx}", // Components
    ],
    theme: {
      extend: {
        fontFamily: {
          geist: ["var(--font-geist-sans)", "sans-serif"],
          mono: ["var(--font-geist-mono)", "monospace"],
          reenie: ["var(--font-reenie)", "cursive"],
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  