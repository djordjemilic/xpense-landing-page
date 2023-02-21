import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Brands from "./components/Brands";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className=" overflow-hidden">
      <Header />
      <Hero />
      <Overview />
      <Brands />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
