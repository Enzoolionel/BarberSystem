import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout title="Iniciar Sesión">
      <form className="flex flex-col gap-4 ">
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

        {/* Contraseña */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón Login */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Iniciar Sesión
        </button>

        {/* Enlace de Registro */}
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-2">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Regístrate
          </a>
        </p>
      </form>
    </Layout>
  );
};

export default Login;
