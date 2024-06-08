
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import FactorySpecs from "../FactorySpecs/FactorySpecs";
import OurClients from "../OurClients/OurClients";
import Banner from "./Banner";
import Packaging from "./Packaging";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs/>
      <FactorySpecs/>
      <Product />
      <OurClients/>
      <Packaging />
      <ContactUs/>
    </div>
  );
};

export default Home;
