const NotFound = () => {
  console.log("NotFound");

  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center text-white">
      <h1>Esta pagina no existe en este dominio</h1>
      <h2>deja de pelotudiar en la pagina y hace lo que viniste a hacer</h2>
    </div>
  );
};

export default NotFound;
