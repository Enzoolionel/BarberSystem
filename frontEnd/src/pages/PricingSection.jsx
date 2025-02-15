import { motion } from "framer-motion";

import PriceDescription from "@components/PriceDescription";

const precios = [
  {
    titulo: "Corte de pelo regular",
    descripcion:
      "Un buen corte de pelo es el mejor accesorio que un hombre puede tener.",
    precio: "$34+",
  },
  {
    titulo: "Corte de pelo + afeitado real",
    descripcion: "Nuestros secretos excepcionales todos juntos para ti.",
    precio: "$60+",
  },
  {
    titulo: "Afeitado real",
    descripcion: "Nuestro afeitado exclusivo en tres pasos.",
    precio: "$35+",
  },
  {
    titulo: "Corte de pelo + recorte de barba",
    descripcion:
      "Barba o Afeitado, nosotros te traemos la diferencia que te hace real.",
    precio: "$65+",
  },
  {
    titulo: "Color de hombre",
    descripcion: "Mejora tu look con este servicio de color permanente.",
    precio: "$55+",
  },
  {
    titulo: "Champú masajeador",
    descripcion:
      "Champú relajante + masaje de cuero cabelludo + toalla caliente.",
    precio: "$12+",
  },
  {
    titulo: "Corte de pelo largo",
    descripcion:
      "Nuestro corte de pelo largo es similar a nuestro corte de pelo clásico.",
    precio: "$55+",
  },
];
const PricingSection = () => {
  return (
    <section className="flex flex-col justify-center items-center dark:bg-gray-800 py-16 px-6 sm:px-12 md:px-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-16">
        Nuestros precios
      </h1>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }} // Permite que la animación se repita
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[80%] flex flex-wrap gap-5 justify-center"
      >
        {precios.map((item, index) => (
          <PriceDescription
            key={index}
            title={item.titulo}
            text={item.descripcion}
            precio={item.precio}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;
