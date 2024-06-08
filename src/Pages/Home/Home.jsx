
import ContactUs from "../ContactUs/ContactUs";
import OurClients from "../OurClients/OurClients";
import Banner from "./Banner";
import FactorySpecs from "./FactorySpecs";
import Packaging from "./Packaging";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <Product />
      <OurClients/>
      <ContactUs/>
      <Packaging />
      <FactorySpecs />
    </div>
  );
};

export default Home;
