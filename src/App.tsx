import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Brands from "./components/Brands";

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
    </div>
  );
};

export default App;
