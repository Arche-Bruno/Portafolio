import React from "react";
import icon from "../images/icon3.png"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="relative footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="w-full p-3 flex justify-between z-50 items-center">
        <div className="z-50">
        <Image src={icon} width={160} height={160}></Image>
        </div>

        <p className="text-slate-600 text-sm lg:text-lg absolute top-16 right-16 lg:flex"> Bruno Mallcco Arche</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
