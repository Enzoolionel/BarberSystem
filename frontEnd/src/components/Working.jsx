import { motion } from "framer-motion";
import img1 from "@img/img1.jpg";
import img2 from "@img/img2.jpg";
import img3 from "@img/img3.jpg";
import img4 from "@img/newLogo1.png";

const Working = () => {
  const items = [
    {
      id: 1,
      image: img1,
      alt: "Persona 1",
      className: "col-start-1 col-end-3 row-start-1",
      animation: { x: -100, opacity: 0 }, // Aparece desde la izquierda
    },
    {
      id: 2,
      image: img2,
      alt: "Persona 2",
      className: "col-start-3 col-end-5 row-start-1",
      animation: { y: -10, opacity: 0 }, // Aparece desde arriba
    },
    {
      id: 3,
      image: img3,
      alt: "Persona 3",
      className: "col-start-5 col-end-7 row-start-1",
      animation: { x: 100, opacity: 0 }, // Aparece desde la derecha
    },
    {
      id: 4,
      image: img4,
      alt: "Logo",
      animation: { y: 100, opacity: 0 }, // Aparece desde abajo
    },
  ];

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-16 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 ">
      <h1 className="w-[80%] m-auto dark:text-gray-300 mt-14 text-6xl font-bold leading-normal">
        Bienvenido a la mejor barbería
        <br /> de Quilmes
      </h1>

      <div className="w-[80%] m-auto mt-28 grid grid-cols-6 grid-rows-2 gap-6">
        {/* Primeros tres elementos */}
        {items.slice(0, 3).map((item) => (
          <motion.div
            key={item.id}
            initial={item.animation}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={`bg-white h-80 dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </motion.div>
        ))}

        {/* Cuarto elemento (Logo) */}
        <motion.div
          initial={items[3].animation}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white h-80 w-96 dark:bg-transparent rounded-lg flex flex-col items-center text-center"
        >
          <img
            src={items[3].image}
            alt={items[3].alt}
            className="h-80 rounded-lg col-start-1 col-end-3 row-start-2"
          />
        </motion.div>

        {/* Último div (horarios) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full bg-white dark:bg-gray-900 p-10 rounded-lg shadow-lg flex flex-col justify-center col-start-3 col-end-7 row-start-2"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Horas de trabajo
          </h1>
          <div className="h-1 w-28 rounded-lg bg-secundario my-4"></div>
          <h2 className="text-lg text-gray-700 dark:text-gray-300">
            <strong>Lun - Vie: </strong> 10:00 - 19:00
          </h2>
          <h2 className="text-lg text-gray-700 dark:text-gray-300">
            <strong>Sab: </strong> 10:00 - 13:00
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            *Comprehensive Barber Services * Gift Packages * Unique Grooming
            Products * Juniper * Crafted Cocktails * Visa/MasterCard/Amex.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Working;
