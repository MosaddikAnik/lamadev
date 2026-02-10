"use client"
import Image from "next/image";
import hero from "../public/hero.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-24 items-center min-h-screen px-10">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#194c13] to-[#bbb] bg-clip-text text-transparent">
          Better design for your digital product..
        </h1>

        <p className="mt-4 text-[#bbb]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fuga reiciendis blanditiis in nobis aspernatur repudiandae non.
        </p>

        <Link
          type="button"
          className="mt-6 btn px-6 py-3 rounded-lg bg-[#194c13] text-white transition"
          href="/portfolio"
        >
          See our works
        </Link>
      </div>

      <div>
        <Image
          src={hero}
          alt="Hero image"
          className="animate-bounce [animation-duration:20s]"
        />
      </div>
    </div>
  );
}
