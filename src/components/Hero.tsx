import { hero } from "../data";
import { HiOutlineChevronDown } from "react-icons/hi";

interface Hero {
  title: string;
  subtitle: string;
  btnText: string;
  compText: string;
  image: string;
}

const Hero = () => {
  const { title, subtitle, btnText, compText, image }: Hero = hero;
  return (
    <section className="min-h-[900px] py-12">
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-1">
            <h1
              className="title lg:mb-5 mb-2 max-w-sm lg:max-w-none"
              data-aos="fade-down"
              data-aos-delay="500">
              {title}
            </h1>
            <p
              className="lead mb-5 lg:mb-10 max-w-sm lg:max-w-none"
              data-aos="fade-down"
              data-aos-delay="600">
              {subtitle}
            </p>
            <div
              className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
              data-aos="fade-down"
              data-aos-delay="700">
              <button className="btn-accent btn btn-md md:text-[18px] lg:btn-lg flex justify-center items-center lg:gap-x-4">
                {btnText}
                <HiOutlineChevronDown />
              </button>
              <span className="text-light lg:lead lg:mb-0">{compText}</span>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="800">
            <img src={image} alt="women working on laptop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
