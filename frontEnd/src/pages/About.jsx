import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout
      title="Nuestra Barbería"
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagen */}
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-red-600 dark:border-yellow-500">
          <img
            src="https://source.unsplash.com/300x300/?barbershop,haircut"
            alt="Barbería en acción"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="text-center md:text-left max-w-lg">
          <h3 className="text-2xl font-bold text-red-600 dark:text-yellow-500">
            Estilo, Precisión y Tradición
          </h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            En{" "}
            <span className="font-semibold text-red-700 dark:text-yellow-400">
              Barbería Elite
            </span>
            , cada corte es una obra de arte. Nos apasiona brindar un servicio
            excepcional, combinando técnicas clásicas con las tendencias más
            modernas.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Desde cortes impecables hasta afeitados tradicionales, garantizamos
            calidad y atención personalizada en cada visita.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
