import Image from "next/image";
import img from "../../../public/latest1.png";
import img2 from "../../../public/latest2.png";
import img3 from "../../../public/latest3.png";

const CategoryPage = async ({ params }) => {
  const { category } = await params;

  return (
    <div>
      <h1 className="text-4xl text-emerald-600 mt-5 capitalize">
        {category}
      </h1>

      {/* Section 1 */}
      <div className="hero min-h-screen -mt-36 flex justify-center">
        <div className="hero-content w-full h-full justify-around flex-col lg:flex-row-reverse">
          <Image src={img} width={400} height={500} alt="Creative portfolio" />
          <div>
            <h1 className="text-5xl font-bold">Creative Portfolio</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="hero min-h-screen -mt-36 flex justify-center">
        <div className="hero-content w-full h-full justify-around flex-col gap-11 lg:flex-row">
          <Image src={img2} width={400} height={500} alt="Minimal product" />
          <div>
            <h1 className="text-5xl font-bold">Minimal single product</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="hero min-h-screen -mt-36 flex justify-center">
        <div className="hero-content w-full h-full justify-around flex-col lg:flex-row-reverse">
          <Image src={img3} width={400} height={500} alt="Creative design" />
          <div>
            <h1 className="text-5xl font-bold">Creative Portfolio</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
