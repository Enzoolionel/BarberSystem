import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceCard from "@components/ServiceCard";

import icon1 from "/icon/icon1.png";
import icon2 from "/icon/icon2.png";
import icon3 from "/icon/icon3.png";
import icon4 from "/icon/icon4.png";
import icon5 from "/icon/icon5.png";

const services = [
  {
    id: 1,
    title: "Corte de pelo",
    description: "Estilo preciso y personalizado para cada cliente.",
    icon: icon3,
  },
  {
    id: 2,
    title: "Afeitado",
    description: "Afeitado al ras con acabado profesional.",
    icon: icon1,
  },
  {
    id: 3,
    title: "Recorte de barba",
    description: "Define y estiliza tu barba con precisión.",
    icon: icon2,
  },
  {
    id: 4,
    title: "Coloración del cabello",
    description: "Cambia tu look con tintes de calidad.",
    icon: icon4,
  },
  {
    id: 5,
    title: "Corte de pelo para niños",
    description: "Cortes cómodos y modernos para los pequeños.",
    icon: icon5,
  },
];

const Services = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="h-full w-screen flex flex-col py-5 items-center bg-[url('/public/img/fondoService.jpg')] bg-blend-multiply dark:bg-slate-500"
  >
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-slate-300 mb-10 text-center text-5xl font-bold"
    >
      Servicio de barbería
    </motion.h1>

    <div className="w-[70%] flex flex-wrap justify-center gap-10">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Services;
