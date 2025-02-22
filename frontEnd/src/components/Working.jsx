import { motion } from "framer-motion";
import img1 from "/img/img1.jpg";
import img2 from "/img/img2.jpg";
import img3 from "/img/img3.jpg";
import img4 from "/img/newLogo1.png";
import rowL from "/icon/row-L.svg";
import rowR from "/icon/row-R.svg";
import { useState } from "react";

const Working = () => {
  const [slider, setSlider] = useState(0);

  const items = [
    {
      id: 1,
      image: img1,
      alt: "Persona 1",
      className: `col-start-1 col-end-7 row-start-1 md:col-start-1 md:col-end-3 md:row-start-1 md:block md:right-0 relative ${
        slider === 0 ? "z-10 transition-all" : ""
      }`,
      animation: { x: -100, opacity: 0 }, // Aparece desde la izquierda
    },
    {
      id: 2,
      image: img2,
      alt: "Persona 2",
      className: `col-start-1 col-end-7 row-start-1 md:col-start-3 md:col-end-5 md:row-start-1 md:block md:right-0 relative ${
        slider === 1 ? "z-10" : ""
      }`,
      animation: { x: -10, opacity: 0 }, // Aparece desde arriba
    },
    {
      id: 3,
      image: img3,
      alt: "Persona 3",
      className: `col-start-1 col-end-7 row-start-1 md:col-start-5 md:col-end-7 md:row-start-1 md:block md:right-0 relative ${
        slider === 2 ? "z-10" : ""
      }`,
      animation: { x: 100, opacity: 0 }, // Aparece desde la derecha
    },
    {
      id: 4,
      image: img4,
      alt: "Logo",
      animation: { y: 100, opacity: 0 }, // Aparece desde abajo
    },
  ];
  function pasarImg() {
    if (slider < 2) {
      return setSlider(slider + 1);
    }
    setSlider(0);

    console.log("slider" + slider);
  }
  function volverImg() {
    if (slider == 0) {
      return setSlider(2);
    }
    setSlider(slider - 1);

    console.log("slider" + slider);
  }

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-16 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 ">
      <h1 className="w-[80%] m-auto -mb-10 md:mb-20 dark:text-gray-300 md:mt-14 text-4xl md:text-6xl font-bold leading-normal">
        Bienvenido a la mejor barbería
        <br /> de Quilmes
      </h1>

      <div className="md:w-[80%] md:m-auto mt-28 grid grid-cols-6 grid-rows-3 md:grid-rows-2 gap-y-6 md:gap-6">
        {/* Primeros tres elementos */}
        {items.slice(0, 3).map((item, i) => (
          <motion.div
            key={item.id}
            initial={item.animation}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={`bg-white overflow-hidden md:overflow-auto h-80 md:w-96 md:h-80 dark:bg-gray-900 rounded-lg shadow-lg flex md:flex-col items-center text-center ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-[350px]  w-screen md:w-full md:h-full md:object-cover md:object-center rounded-lg "
            />
          </motion.div>
        ))}
        <button
          type="button"
          onClick={volverImg}
          className="md:opacity-0 h-10 w-10 rounded-full text-slate-200 absolute left-8 mt-40 z-10 hover:bg-slate-100 hover:bg-opacity-30 flex justify-center items-center"
        >
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          }
        </button>
        <button
          type="button"
          onClick={pasarImg}
          className="md:opacity-0 h-10 w-10 rounded-full text-slate-200 absolute right-8 mt-40 z-10 hover:bg-slate-100 hover:bg-opacity-30 flex justify-center items-center"
        >
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        </button>

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
            className=" right-8 top-6 md:top-0 md:right-0 relative md:block h-64 md:h-80 rounded-lg col-start-1 col-end-3 row-start-2"
          />
        </motion.div>

        {/* Último div (horarios) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] relative right-24 md:right-0 md:block md:w-full bg-white dark:bg-gray-900 p-4 md:p-10 rounded-lg shadow-lg flex flex-col justify-center col-start-3 col-end-7 row-start-3 md:row-start-2"
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
            *Comprehensive Barber Services * Gift Packages
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Working;
