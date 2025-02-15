const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="xl:w-96 h-64 bg-white dark:bg-secundario shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="relative p-6 flex flex-col items-center">
        <img className="text-4xl mb-4 h-14" src={icon} alt="Icono" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
          {title}
        </h3>
        <p className="text-sm dark:text-gray-700 mt-2">{description}</p>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="p-4 bg-primario text-white text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <button className="py-2 px-4 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          Más Información
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
