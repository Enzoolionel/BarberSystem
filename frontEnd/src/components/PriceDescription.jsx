const PriceDescription = ({ title, text, precio }) => {
  return (
    <article className="p-6 lg:w-[40%] w-80 flex gap-7 items-center justify-center hover:shadow-2xl transition duration-300 border-b border-slate-400">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{text}</p>
      </div>
      <h3 className="text-xl font-semibold dark:text-secundario">{precio}</h3>
    </article>
  );
};

export default PriceDescription;
