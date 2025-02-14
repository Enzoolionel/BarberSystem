import { motion } from "framer-motion";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout
      title="Nuestra Barbería"
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 "
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagen (Animación desde la izquierda) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }} // Permite que la animación se repita
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-red-600 dark:border-yellow-500"
        >
          <img
            src="#"
            alt="Barbería en acción"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Contenido */}
        <div className="text-center md:text-left max-w-lg">
          {/* Título (Animación desde arriba) */}
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }} // Permite que la animación se repita
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold text-red-600 dark:text-yellow-500"
          >
            Estilo, Precisión y Tradición
          </motion.h3>

          {/* Texto (Animación desde la derecha) */}
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }} // Permite que la animación se repita
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-gray-700 dark:text-gray-300"
          >
            En{" "}
            <span className="font-semibold text-red-700 dark:text-yellow-400">
              Barbería Elite
            </span>
            , cada corte es una obra de arte. Nos apasiona brindar un servicio
            excepcional, combinando técnicas clásicas con las tendencias más
            modernas.
          </motion.p>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }} // Permite que la animación se repita
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-2 text-gray-700 dark:text-gray-300"
          >
            Desde cortes impecables hasta afeitados tradicionales, garantizamos
            calidad y atención personalizada en cada visita.
          </motion.p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
