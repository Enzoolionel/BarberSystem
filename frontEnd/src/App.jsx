import { Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/services" element={<h1>Services</h1>} />
      <Route path="/turnos" element={<h1>Turnos</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/*" element={<h1>not Found</h1>} />
    </Routes>
  );
};

export default App;
