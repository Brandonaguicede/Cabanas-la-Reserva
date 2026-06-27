/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f9f2",
          100: "#dcf1de",
          200: "#b8dfb7",
          300: "#91cb8c",
          400: "#63b45d",
          500: "#4a9b43",
          600: "#3f853a",
          700: "#356f31",
          800: "#2f5f29",
          900: "#264d20",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0,0,0,0.12)",
        card: "0 14px 36px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
