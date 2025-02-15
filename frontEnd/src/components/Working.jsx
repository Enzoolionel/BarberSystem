import { motion } from "framer-motion";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import img1 from "@img/img1.jpg";
import img2 from "@img/img2.jpg";
import img3 from "@img/img3.jpg";
import img4 from "@img/newLogo1.png";

const images = [img1, img2, img3];

const Working = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-16 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 flex flex-col items-center">
      <h1 className="w-full text-center dark:text-gray-300 mt-14 text-4xl md:text-6xl font-bold leading-normal">
        Bienvenido a la mejor barbería de Quilmes
      </h1>

      {/* Carrusel */}
      <div className="relative w-full max-w-2xl mt-12">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <HiChevronLeft size={30} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <HiChevronRight size={30} />
        </button>
      </div>

      {/* Sección de logo y horarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src={img4} alt="Logo" className="h-40 md:h-60 object-contain" />
        </motion.div>

        {/* Horarios */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Horas de trabajo
          </h2>
          <div className="h-1 w-28 mx-auto rounded-lg bg-secundario my-4"></div>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Lun - Vie:</strong> 10:00 - 19:00
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Sab:</strong> 10:00 - 13:00
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            *Comprehensive Barber Services * Gift Packages * Unique Grooming
            Products * Juniper * Crafted Cocktails * Visa/MasterCard/Amex.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Working;
