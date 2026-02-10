import React from 'react'
import style from "./page.module.css"
import Image from 'next/image'
import img from "../../public/halloween-cute-black-cat-artwork-facebook-cover.jpg"
import Link from 'next/link'
export  const metadata = {
  title: "About",
  description: "About",
}
const AboutPage = () => {

  return (
    <div className={style.container}>
      <div className="relative mb-14 h-[450px]">
        <Image
          src={img}
          alt="Halloween Cat"
          fill
          className="object-cover"
        />

        <div className="bg-emerald-500 absolute bottom-10 left-10 p-2 w-[600px]">
          <h1 className="text-3xl">Halloween Cat</h1>
          <h2 className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className='flex gap-16'>
         <div className=''>
             <h1 className='text-3xl'>Who are we?</h1>
             <br />
             <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsa velit est <br /> <br /> explicabo, numquam eum deserunt odit eos culpa molestias debitis aperiam cumque animi nemo quam non totam sequi fugit, nesciunt placeat, nihil pariatur quod unde maxime. Sint sequi officiis doloribus voluptate corporis, animi ipsum est fuga eos maiores illo.</p>
         </div>
         <div>
             <h1 className='text-3xl'>What we do?</h1>
             <br />
             <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsa velit est <br /> <br /> explicabo, numquam eum deserunt odit eos culpa molestias debitis aperiam cumque animi nemo quam non totam sequi fugit, nesciunt placeat, nihil pariatur quod unde maxime. Sint sequi officiis doloribus voluptate corporis, animi ipsum est fuga eos maiores illo.</p>
              <Link
          type="button" href='/contact'
          className="mt-6 btn px-6 py-3 rounded-lg bg-[#194c13] text-white transition"
        >
          Contact
        </Link>
         </div>

      </div>
     
    </div>
  )
}

export default AboutPage
