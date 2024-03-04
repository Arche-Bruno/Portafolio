"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

import IconMenu from "./Icons/IconMenu";
import IconX from "./Icons/IconX";
import MenuOverlay from "./MenuOverlay";
import logo from "./../images/icon3.png"
import Image from "next/image";

const navLinks = [
  {
    title: "Sobre mi",
    path: "/about", // Reemplaza con la ruta correcta de tu página "Sobre mi"
  },
  {
    title: "Proyectos",
    path: "/projects", // Reemplaza con la ruta correcta de tu página "Proyectos"
  },
  {
    title: "Contacto",
    path: "/contact", // Reemplaza con la ruta correcta de tu página "Contacto"
  },
];


const Navbar = () => {
  const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
      <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavBarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <IconX className="h-5 w-5"></IconX>
            ) : (
             
              <IconMenu className="h-5 w-5"></IconMenu>
            )}
          </button>
        </div>




       
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
        <Image src={logo} width={90} height={90}></Image>

       
        </Link>

      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}></MenuOverlay> : null

      }
    </nav>
  );
};

export default Navbar;
