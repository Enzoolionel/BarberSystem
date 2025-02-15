import PrincipalPage from "../components/principalPage";
import Working from "../components/Working";

import Services from "@/pages/Services";
import PricingSection from "./pricingSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <PrincipalPage />
      <Working />
      <Services />
      <PricingSection />
      <Footer />
    </>
  );
};

export default Home;
