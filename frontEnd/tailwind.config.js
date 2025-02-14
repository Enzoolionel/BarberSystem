/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primario: "#242038",
        secundario: "#8D86C9",
        detalle: "#EF8354",
        fondo: "#F4F1DE",
        texto: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
