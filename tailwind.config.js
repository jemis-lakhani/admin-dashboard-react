/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "url('/public/bg.png')",
        "login-logo-1": "url('/public/logo1.svg')",
        "login-logo-2": "url('/public/logo2.svg')",
      },
    },
  },
  plugins: [],
};
