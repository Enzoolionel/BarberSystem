import Layout from "../components/Layout";
const ContactForm = () => {
  return (
    <Layout title="Contáctanos">
      <form className="flex flex-col gap-4">
        {/* Nombre */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="tucorreo@email.com"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">
            Mensaje
          </label>
          <textarea
            rows="4"
            placeholder="Escribe tu mensaje..."
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar Mensaje
        </button>
      </form>
    </Layout>
  );
};

export default ContactForm;
