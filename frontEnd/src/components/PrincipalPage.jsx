import { motion } from "framer-motion";
import Button from "../components/Button";

const PrincipalPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-[url('/img/fondoMain.jpg')] bg-cover md:bg-center bg-blend-multiply px-4 md:px-12 lg:px-24 xl:px-48 transition-all flex flex-col items-center md:items-end justify-center min-h-screen bg-gray-100 dark:bg-gray-500 text-center md:text-end"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className=" flex flex-col gap-3 items-end self-end"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-end font-bold text-gray-900 dark:text-white">
          THE RAZOR
          <br />
          BARBER
        </h1>
        <p className="text-base md:text-xl  text-gray-700 dark:text-gray-400">
          "Más que un corte, una experiencia."
        </p>
        <Button
          to="/turnos"
          className="w-40 md:w-auto mt-6 px-6 py-3 hover:scale-105 bg-secundario font-semibold rounded-lg hover:brightness-125 transition"
        >
          Reservar turno
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default PrincipalPage;
