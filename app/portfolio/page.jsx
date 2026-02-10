import Link from "next/link";
import Image from "next/image";

import img1 from "../../public/illustration.png";
import img2 from "../../public/websites.jpg";
import img3 from "../../public/apps.jpg";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-3xl mt-6">Choose a gallery</h1>

      <div className="flex gap-6 mt-6">

        {/* Card 1 */}
        <Link
          href="/portfolio/illustrations"
          className="relative block w-[300px] hover-3d h-[350px] overflow-hidden rounded-lg"
        >
          <Image
            src={img1}
            alt="Illustrations"
            fill
            className="object-cover"
          />
          <div className="absolute flex right-5 bottom-2 bg-black/40">
            <span className="text-white hover:text-emerald-400 text-3xl font-semibold">
              Illustrations
            </span>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href="/portfolio/websites"
          className="relative block w-[300px] hover-3d h-[350px] border-amber-50 overflow-hidden rounded-lg"
        >
          <Image
            src={img2}
            alt="Websites"
            fill
            className="object-cover"
          />
          <div className="absolute flex right-5 bottom-2 bg-black/40">
            <span className="text-white  hover:text-emerald-400 text-3xl font-semibold">
              Websites
            </span>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          href="/portfolio/application"
          className="relative  hover:text-emerald-400  hover-3d w-[300px] h-[350px] overflow-hidden rounded-lg"
        >
          <Image
            src={img3}
            alt="Applications"
            fill
            className="object-cover border-amber-50 hover:text-emerald-400"
          />
          <div className="absolute flex right-5 bottom-2 bg-black/40">
            <span className="text-white    hover:text-emerald-400 text-2xl font-semibold">
              Applications
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Portfolio;
