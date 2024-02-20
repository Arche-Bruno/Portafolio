"use client";
import React, { useState, useTransition } from "react";

import Image from "next/image";
import imgPc from "../images/compu.jpg";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2" >

        <li>Firebase</li>
        <li>MySQL</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>

      </ul>
    ),
  },
  {
    title: "Educaction",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End - Alura Latam</li>
        <li>Desarrollador de Software - Senati(incompleto)</li>
        <li>Front-End - Academlo</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Red Social - Cachueleate.com</li>
        <li>web site - Nuevos Horizontes.com (Agency Travel)</li>
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
              Habilidades
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
