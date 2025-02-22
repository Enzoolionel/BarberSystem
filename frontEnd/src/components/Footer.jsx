import { motion } from "framer-motion";

import Button from "@components/Button";

import logo from "/img/newLogo1.png";
import instaIcon from "/icon/instaIcon.svg";
import faceIcon from "/icon/faceIcon.svg";
import twitterIcon from "/icon/twitterIcon.svg";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mb-8 md:mb-0"
          >
            <img src={logo} alt="Logo de la barbería" className="w-32" />
            <Button
              to="/turnos"
              className="mt-6 px-6 py-3 hover:scale-105 bg-secundario font-semibold rounded-lg hover:brightness-125 transition"
            >
              Reservar turno
            </Button>
          </motion.div>

          {/* Información de la barbería */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h3 className="text-xl font-bold">Barbería The Razor</h3>
            <p className="mt-2">Quilmes - Av. Isidro Iriarte 1015</p>
            <p className="mt-2">Teléfono: 11-3637-2017</p>
            <p className="mt-2">Email: contacto@barberia.com</p>
          </motion.div>

          {/* Enlaces de redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={faceIcon} alt="Facebook" className="w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="Instagram" className="w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" className="w-6" />
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Barbería The Razor. Todos los
            derechos reservados.
          </p>
          <p className="mt-16">
            By:
            <a href="https://www.instagram.com/_enzoolionel/">
              {" "}
              _EnzooLionel ✅
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
