const Layout = ({ children, title, className }) => {
  return (
    <div
      className={`${className} min-h-screen flex flex-col items-center justify-center px-4 dark:bg-gray-900 dark:text-white transition-all`}
    >
      <h1 className="text-4xl font-bold mb-6 mt-14">{title}</h1>
      <div
        className={`w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
