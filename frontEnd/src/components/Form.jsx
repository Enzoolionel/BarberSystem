import { useState } from "react";

const Form = () => {
  const [dates, setDates] = useState({
    dia: "",
    hora: "",
    cliente: "",
    email: "",
  });

  const capturarDatos = (e) => {
    setDates({
      ...dates,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dates);

    await fetch("/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dates),
    });
  };

  return (
    <>
      <div>
        <form className="flex flex-col items-start p-5 gap-2">
          <input
            onChange={(e) => {
              capturarDatos(e);
            }}
            type="text"
            name="dia"
            placeholder="Día"
            required
          />
          <input
            onChange={(e) => {
              capturarDatos(e);
            }}
            type="time"
            name="hora"
            placeholder="Hora"
            required
          />
          <input
            onChange={(e) => {
              capturarDatos(e);
            }}
            type="text"
            name="cliente"
            placeholder="Nombre del cliente"
            required
          />
          <input
            onChange={(e) => {
              capturarDatos(e);
            }}
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <button onClick={handleSubmit} type="submit">
            Tomar turno
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
