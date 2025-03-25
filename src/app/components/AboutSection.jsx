"use client";
import React, { useState, useTransition } from "react";
import htmlIcon from "../images/svgs/html.svg"
import nodeIcon from "../images/svgs/node.svg"
import gitIcon from "../images/svgs/git.svg"
import mysqlIcon from "../images/svgs/mysql.svg"
import firebaseIcon from "../images/svgs/firebase.svg"
import javascriptIcon from "../images/svgs/js.svg"
import tsIcon from "../images/svgs/typeScript.svg"
import nextIcon from "../images/svgs/next.svg"
import reactIcon from "../images/svgs/react.svg"
import cssIcon from "../images/svgs/css.svg"
import tailwind from "../images/svgs/tailwind.svg"
import wordpress from "../images/svgs/wordicon.png"

import Image from "next/image";
import imgPc from "../images/compu.jpg";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-col gap-2 list-disc pl-2" >
        <li className="flex items-center gap-2"><Image src={javascriptIcon} alt="HTML Icon" width={20} height={20} /> Javascript</li>
        <li className="flex items-center gap-2"><Image src={tsIcon} alt="HTML Icon" width={20} height={20} /> TypeScript</li>
        <li className="flex items-center gap-2"><Image src={reactIcon} alt="HTML Icon" width={20} height={20} /> React.js</li>
        <li className="flex items-center gap-2"><Image src={nextIcon} alt="HTML Icon" width={20} height={20} /> Next.js</li>
        <li className="flex items-center gap-2"> <Image src={htmlIcon} alt="HTML Icon" width={20} height={20} /> HTML</li>
        <li className="flex items-center gap-2"> <Image src={wordpress} alt="HTML Icon" width={20} height={20} /> Wordpress</li>
        <li className="flex items-center gap-2"><Image src={tailwind} alt="HTML Icon" width={20} height={20} /> Tailwind</li>
        <li className="flex items-center gap-2"><Image src={cssIcon} alt="HTML Icon" width={20} height={20} /> CSS</li>

      </ul>
    ),
  },
  {
    title: "skills-b",
    id: "skills-b",
    content: (
      <ul className="flex flex-col gap-2 list-disc pl-2" >


        <li className="flex items-center gap-2"> <Image src={nodeIcon} alt="HTML Icon" width={20} height={20} /> Node.js</li>
        <li className="flex items-center gap-2"><Image src={gitIcon} alt="HTML Icon" width={20} height={20} /> Git - Github</li>
        <li className="flex items-center gap-2"> <Image src={firebaseIcon} alt="HTML Icon" width={20} height={20} />Firebase</li>
        <li className="flex items-center gap-2"> <Image src={mysqlIcon} alt="HTML Icon" width={20} height={20} />MySQL</li>
       

      </ul>
    ),
  },
  {
    title: "Educaction",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
         <li>Desarrollador de Software - Instituto (Senati) </li>
        <li>Front-End - Alura Latam</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Desarrollador web - Deister Software</li>
        <li>Red Social - Cachueleate.com</li>
        <li>Creación de Pagina web - capacitaciones.com (Cursos)</li>
        <li>Creación de Pagina web - Nuevos Horizontes.com (Agencia de viajes)</li>
        <li>Creación de Pagina web - iceberg-training.com (Constructora)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={imgPc} width={500} height={500}></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
          Conocimientos profundos en tecnologías relacionadas con la creación de páginas web responsivas, tanto en el desarrollo de funcionalidades como en el diseño de interfaces atractivas. Mi tiempo como autónomo me brindó la oportunidad de profundizar en áreas específicas de desarrollo web y consolidar mis habilidades en diferentes tecnologías. Estoy constantemente buscando aprender y mejorar mis habilidades en el campo de la programación y el diseño web.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
               Front
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("skills-b")}
              active={tab === "skills-b"}
            >
               Back
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educación
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experiencia
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t)=> t.id===tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
