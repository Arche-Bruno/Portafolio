import React from "react";
import icon from "../images/icon3.png"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container p-3 flex justify-between z-50 items-center">
        <div className="z-50">
        <Image src={icon} width={160} height={160}></Image>
        </div>

        <p className="text-slate-600"> Bruno Mallcco Arche</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
