"use client";

import React from "react";

import imgUser from "./../images/img3.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import cv from "../cv/cvBruno.pdf"


const handleDownloadCV = () => {
  // Abre una nueva ventana del navegador con la URL de tu archivo PDF
  window.open(cv);
};

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
    Hola,
</span>

        <br />
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Soy Bruno ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Desarrollador Front-End',
        1000,
        'Diseñador UI/UX',
        1000,
        'Desarrollador de video juegos',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.8em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
          Apasionado por crear experiencias digitales que cautiven a los usuarios. Fusiono desarrollo y diseño para lograr productos únicos y funcionales.
          </p>
          <div>
          <button className="px-6 sm:w-fit py-3 w-full rounded-full mr-4 bg-gradient-to-br from-green-500 from-green-300 to-green-600 hover:bg-slate-200 text-white">
    Sobre mi
</button>

             <button className="px-6 sm:w-fit py-3 w-full rounded-full bg-black hover:bg-slate-800 text-white border border-white mt-3" onClick={handleDownloadCV}>
                Descargar CV
             </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
          <Image 
          src={imgUser} 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
          alt="here-image" 
          width={250} 
          height={250} />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
