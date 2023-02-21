import { overview } from "../data";

interface Brands {
  image: string;
  delay: number;
}

const Brands = () => {
  const { brands }: { brands: Brands[] } = overview;
  return (
    <section className="py-9">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 ">
        {brands.map((item, index) => {
          const { image, delay } = item;
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
