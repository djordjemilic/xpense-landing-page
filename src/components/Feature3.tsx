import { features } from "../data";

interface Feature {
  pretitle: string;
  title: string;
  subtitle: string;
  btnLink: string;
  btnIcon: string;
  image: string;
}

const Feature3 = () => {
  const { feature3 }: { feature3: Feature } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div className="flex-1" data-aos="fade-right" data-aos-offset="400">
            <span className="pretitle">{pretitle}</span>
            <h1 className="title lg:max-w-xl">{title}</h1>
            <p className="lead lg:max-w-md">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="button icon" />
            </button>
          </div>

          <div className="flex-1" data-aos="fade-right" data-aos-offset="300">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
