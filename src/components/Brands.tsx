import { overview } from "../data";

const Brands = () => {
  const { brands } = overview;
  return (
    <section className="py-9">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 ">
        {brands.map((item, index) => {
          const { image, delay }: { image: string; delay: number } = item;
          return (
            <div key={index}>
              <img src={image} alt="brand" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
