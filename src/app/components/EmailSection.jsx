import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";
import Image from "next/image";
import web from "../images/web2.png"

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-3/4 -translate-y-0/0">
        </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Mis redes de contacto </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">


        ¿Tienes alguna pregunta, comentario o proyecto en mente? ¡No dudes en contactarme a través de cualquiera de los siguientes canales! Estoy aquí para ayudar y colaborar contigo en tu próximo proyecto.
    
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/bruno-mallcco-arche-9b369b236/" passHref target="_blank">
            <LinkedInIcon
              fontSize="large"
              style={{ color: "white" }}
            ></LinkedInIcon>
          </Link>
          <Link href="mailto:bruno9039@hotmail.com" passHref target="_blank">
          
              <MailIcon fontSize="large" style={{ color: "white" }} />
            
          </Link>
          <Link href="https://wa.me/51956639056" target="_blank">
        
              <WhatsAppIcon fontSize="large" style={{ color: "white" }} />
           
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
    <Image src={web} width={300} height={300} />
  </div>
    </section>
  );
};

export default EmailSection;
