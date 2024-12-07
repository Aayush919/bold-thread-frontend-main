/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all relevant files
  ],
  theme: {
    extend: {}, // Add custom styles here if needed
  },
  plugins: [], // Add plugins like forms or typography if required
};

