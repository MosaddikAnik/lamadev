import React from 'react'
import Image from 'next/image'
import contact from '../../public/contact.png'
import Link from 'next/link'
export  const metadata = {
  title: "Contact",
  description: "About",
}

const ContactPage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content gap-36 flex-col lg:flex-row">

        {/* Image */}
        <div className="animate-pulse">
          <Image
            src={contact}
            alt="Contact Illustration"
            width={500}
            height={500}
          />
        </div>

        {/* Form */}
        <div className="card w-full max-w-sm ">
          <div className="card-body gap-5">

           
            <input
              type="text"
              className="input border-2 input-bordered"
              placeholder="Name"
            />
            <input
              type="email"
              className="input input-bordered"
              placeholder="Email"
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
          <Link
          type="button"
          className="mt-6 btn m-28  rounded-lg bg-[#194c13] text-white transition"
          href="/portfolio"
        >
          Send
        </Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactPage
