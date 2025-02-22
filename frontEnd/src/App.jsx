import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Turnos from "./pages/Turnos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const color = darkMode ? "#121212" : "#ffffff";
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", color);
  }, []);

  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        {/* Mostrar NavBar solo si no estás en /panel-admin */}
        {location.pathname !== "/panel-admin" && (
          <NavBar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/panel-admin" element={<Dashboard />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
