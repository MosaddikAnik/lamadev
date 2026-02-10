"use client"
import Link from 'next/link';
import React from 'react';
import style from './page.module.css'
import DarkModePage from '../darkMode/DarkMode';

const Navbar = () => {
      const links = [
            {
                  id: 1,
                  title: "Home",
                  url: "/"
            },
            {
                  id: 2,
                  title: "About",
                  url: "/about"
            },
            {
                  id: 3,
                  title: "Contact",
                  url: "/contact"
            },
            {
                  id: 4,
                  title: "Blog",
                  url: "/blog"
            },
            {
                  id: 5,
                  title: "Dashboard",
                  url: "/dashboard"
            },
            {
                  id: 6,
                  title: "Portfolio",
                  url: "/portfolio"
            },
      
      ]
      return (
            <div className={style.container}>
                 <Link className={style.logo} href="/">Lamamia</Link>
                 <div className={style.links}>
                  <DarkModePage />
                  {links.map(link=>(<Link className={style.link}  key={link.id} href={link.url}>{link.title}</Link>))}
                  
                  <button className={style.logout} onClick={()=>console.log("Log out")
                  }>Log out</button>
                  </div> 
            </div>
      );
};

export default Navbar;