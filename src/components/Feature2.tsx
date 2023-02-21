import { features } from "../data";

interface Feature {
  pretitle: string;
  title: string;
  subtitle: string;
  btnLink: string;
  btnIcon: string;
  image: string;
}

const Feature2 = () => {
  const { feature2 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image }: Feature = feature2;
  return (
    <section className="feature mt-10 lg:mt-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div className="flex-1 order-2 lg:order-1" data-aos="fade-right" data-aos-offset="400">
            <img src={image} alt="" />
          </div>
          <div className="flex-1 order-1 lg:order-2" data-aos="fade-left" data-aos-offset="300">
            <span className="pretitle">{pretitle}</span>
            <h1 className="title lg:max-w-lg">{title}</h1>
            <p className="lead lg:max-w-md">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="button icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
