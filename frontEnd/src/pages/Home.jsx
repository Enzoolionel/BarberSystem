import PrincipalPage from "../components/principalPage";
import Working from "../components/Working";

import Services from "@/pages/Services";
import PricingSection from "./pricingSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <PrincipalPage />
      <Working />
      <Services />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Home;
