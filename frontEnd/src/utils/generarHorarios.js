const generarHorariosDisponibles = (
  horarioApertura,
  horarioCierre,
  fechaSeleccionada
) => {
  const horarios = [];
  const ahora = new Date();
  const hoy = ahora.toISOString().split("T")[0];

  let hora = new Date(`${fechaSeleccionada}T${horarioApertura}`);
  const cierre = new Date(`${fechaSeleccionada}T${horarioCierre}`);

  const esHoy = hoy === fechaSeleccionada;

  while (hora < cierre) {
    if (!esHoy || hora > ahora) {
      horarios.push(
        hora.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
      );
    }
    hora.setMinutes(hora.getMinutes() + 30);
  }

  return horarios;
};

export default generarHorariosDisponibles;
