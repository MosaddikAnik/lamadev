"use client"
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  console.log("Hello")
      return (
            <footer className="footer sm:footer-horizontal justify-between text-base-content p-4">
  <div className='justify-center'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Lamamia</p>
  </div>
  <div className=' flex gap-2.5'>
    <Image src='/1.png' width={15} height={15}></Image>
    <Image src='/2.png' width={15} height={15}></Image>
    <Image src='/3.png' width={15} height={15}></Image>
    <Image src='/4.png' width={15} height={15}></Image>
  </div>
</footer>
      );
};

export default Footer;