import Layout from "../components/Layout";

const services = [
  {
    id: 1,
    title: "Electricista",
    description:
      "Servicios de reparación y mantenimiento eléctrico. Instalaciones de sistemas eléctricos en viviendas y empresas.",
    icon: "⚡",
  },

  {
    id: 2,
    title: "Plomería",
    description:
      "Reparación de fugas, instalación de tuberías, mantenimiento y más.",
    icon: "💧",
  },
  {
    id: 3,
    title: "Pintura",
    description:
      "Servicios de pintura interior y exterior, con una variedad de acabados.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Jardinería",
    description: "Mantenimiento de jardines, podas, siembra y más.",
    icon: "🌿",
  },
];

const ServiceCard = ({ service }) => (
  <div className="max-w-xs w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300 ease-in-out">
    <div className="relative p-6 flex flex-col items-center">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {service.description}
      </p>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
    </div>
    <div className="p-4 bg-blue-600 text-white text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <button className="py-2 px-4 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
        Más Información
      </button>
    </div>
  </div>
);

const Services = () => (
  <Layout title="Services" className="flex flex-wrap justify-center gap-6">
    {services.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ))}
  </Layout>
);

export default Services;
