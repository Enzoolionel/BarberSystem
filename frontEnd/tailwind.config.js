/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primario: "#1A1A1D", // Negro profundo (elegante y moderno)
        secundario: "#C5A880", // Beige dorado (calidez y sofisticación)
        detalle: "#D64933", // Rojo terracota (llamativo y energético)
        fondo: "#F5F5F5", // Gris claro (neutral y limpio)
        texto: "#333333", // Gris oscuro (legible y profesional)
      },
    },
  },
  plugins: [],
};
