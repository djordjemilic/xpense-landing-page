import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className=" overflow-hidden">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
