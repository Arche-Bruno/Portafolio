'use client'
import React, {useState} from 'react'
import ProyectCard from './ProyectCard'

import proyect1Image from '../images/imgProyects/proyect1.png';
import proyect2Image from '../images/imgProyects/proyect2.png';
import proyect3Image from '../images/imgProyects/proyect3.png';
import proyect4Image from '../images/imgProyects/proyect4.png';
import proyect5Image from '../images/imgProyects/proyect5.png';
import proyect6Image from "../images/imgProyects/proyect6.png";
import proyect7Image from "../images/imgProyects/proyect7.png";
import proyect8Image from "../images/imgProyects/proyect8.png";
import proyect9Image from "../images/imgProyects/proyect9.png";
import proyect10Image from "../images/imgProyects/proyect10.png";
import proyect11Image from "../images/imgProyects/proyect11.png";
import proyect12Image from "../images/imgProyects/proyect12.png";
import proyect13Image from "../images/imgProyects/proyect13.png";
import proyect14Image from "../images/imgProyects/proyect14.png";
import proyect15Image from "../images/imgProyects/proyect15.png";
import proyect16Image from "../images/imgProyects/proyect16.png";
import proyect17Image from "../images/imgProyects/proyect17.png";
import ProjectTag from './ProjectTag';


const projectsData = [
  {
   id:1,
   title:'Cachueleate.com',
   description:'Una red social para encontrar trabajo, publicar empleos y promocionar servicios',
   image:proyect1Image,
   tag:['Todos','React.js'],
   alt:"socialMedia",
   url:"https://cachueleate-3626d.firebaseapp.com/",
   
  },
  {
    id:2,
    title:'Clon de BMW',
    description:'Clone sobre la pagina oficial de BMW, aún en proceso de la finalización',
    image:proyect15Image,
    tag:['Todos','Next.js'],
    alt:"Clone BMW",
    url:"https://gregarious-paletas-03470c.netlify.app/",
    
   },
   {
    id:3,
    title:'Web Corporativa | Deister Software',
    description:'Diseñé la página web corporativa de Deister Software con WordPress y Elementor, incorporando efectos personalizados con HTML, CSS y JavaScript para mejorar la experiencia visual y funcional.',
    image:proyect16Image,
    tag:['Todos','Wordpress'],
    alt:"Dashboard",
    url:"https://www.deister.net/",
    
   },
   {
    id:4,
    title:'Web Corporativa | Axional',
    description:'Desarrollé la web del producto Axional de Deister Software utilizando WordPress y Elementor, con efectos personalizados en HTML, CSS y JavaScript para destacar sus características innovadoras.',
    image:proyect17Image,
    tag:['Todos','Wordpress'],
    alt:"Dashboard",
    url:"https://axional.net/",
    
   },
  {
    id:5,
    title:'Clon de AFP | Integra',
    description:'Hice un clon de AFP Integra. En esta aplicación, puede actualizar su nombre, correo electrónico y dinero, y la aplicación recupera sus datos y se los muestra. La aplicación fue construida con React.js y Tailwind',
    image:proyect14Image,
    tag:['Todos','React.js'],
    alt:"Dashboard",
    url:"https://afpintegraclone.netlify.app/",
    
   },
  {
   id:6,
   title:'Nuevos Horizontes',
   description:'Una web dedicada a ofrecer una amplia variedad de opciones de viaje a todo el mundo',
   image:proyect2Image,
   tag:['Todos', 'Html, Css y Js'],
   alt:"baa",
   url:"https://tubular-chimera-0af732.netlify.app/",
  },
  {
   id:7,
   title:'Jucumaru',
   description:'una página web dedicada al apasionante mundo de la miel. Diseñada con atención al detalle',
   image:proyect9Image,
   tag:['Todos','Html, Css y Js'],
   alt:"bt",
   url:"https://65f32330a7ffb3f91dc2f290--monumental-brigadeiros-7033c0.netlify.app/",
  },
  {
   id:8,
   title:'Ecommerce de Moda - metodo de pago',
   description:'Mi proyecto de ecommerce de moda ofrece una plataforma innovadora para los amantes de la moda que buscan una experiencia de compra conveniente y emocionante. ',
   image:proyect10Image,
   tag:['Todos','Wordpress'],
   alt:"as",
   url:"https://65fc67961fd3fe49b05baaec--glistening-fenglisu-3c92d3.netlify.app/",
  },
  {
   id:9,
   title:'Ecommerce de Muebles - por whatsapp',
   description:'Se diseñó para facilitar la compra de muebles mediante una integración directa con WhatsApp, permitiendo a los usuarios navegar por el catálogo de productos.',
   image:proyect11Image,
   tag:['Todos','Wordpress'],
   alt:"aa",
   url:"https://mueblesonline.netlify.app/",
  },
  {
    id:10,
    title:'Web-Veterinaria',
    description:'Nuestra página web presenta un diseño limpio, moderno e intuitivo que facilita la navegación tanto para propietarios de mascotas como para personal veterinario. ',
  
    image:proyect8Image,
  
    tag:['Todos', 'Wordpress'],
    alt:"aa",
    url:"https://65f22d470171f3408d92af63--stately-lebkuchen-5dc488.netlify.app/",
  
   },
  {
    id:11,
    title:'Pagina de Contructora',
    description:'Diseñada para capturar la esencia de la industria, esta plataforma ofrece una ventana virtual a nuestros servicios, proyectos destacados y filosofía de trabajo.',
    image:proyect6Image,
    tag:['Todos','React.js'],
    alt:"aa",
    url:"https://iceberg-training-peru.netlify.app/",
   },

   {
    id:12,
    title:'Web-info',
    description:' Una página web dedicada al emocionante mundo de los viajes. Diseñada para despertar la pasión por explorar nuevos destinos',
    image:proyect7Image,
    tag:['Todos', 'Wordpress'],
    alt:"aa",
    url:"https://fancy-gingersnap-9425d7.netlify.app/",
   },
   {
    id:13,
    title:'Dashboard design',
    description:'Construí un Dashboard y es completamente responsive, con modo oscuro y claro lo que significa que se adapta perfectamente a diferentes dispositivos y tamaños de pantalla.',
    image:proyect13Image,
    tag:['Todos','React.js'],
    alt:"Dashboard",
    url:"https://stirring-croissant-4da085.netlify.app/",
    
   },
   {
    id:14,
    title:'Dashboard-cachueleate',
    description:'Este dashboard cuenta con un diseño cuidadosamente elaborado para brindar una experiencia visualmente atractiva y fácil de usar.',
    image:proyect12Image,
    tag:['Todos','React.js'],
    alt:"socialMedia",
    url:"https://whimsical-bubblegum-6d7ea2.netlify.app/",
    
   },
   {
    id:15,
    title:'Acme',
    description:'Una web dedicada a venta de licores al por mayor y menor',
    image:proyect3Image,
    tag:['Todos','React.js'],
    alt:"bt",
    url:"https://bar-business-ca236.web.app/",
   },
   {
    id:16,
    title:'Play- Piedra, Papel o tijera',
    description:'Web-game multijugador entre usuarios en tiempo real',
    image:proyect4Image,
    tag:['Todos','React.js'],
    alt:"as",
    url:"https://kvoo-4ce98.web.app/login",
   },
   {id:17,
    title:'Tienda',
    description:'Ecommerce - venta de ropas ',
    image:proyect5Image,
    tag:['Todos','Html, Css y Js'],
    alt:"aa",
    url:"https://65021b1075adcf466873301d--unique-blini-38ab97.netlify.app/",}
]

const ProyectsSection = () => {

  const [tag,setTag] = useState('Todos')
  const handleTagChange = (newTag)=>{
  setTag(newTag)
  }
 
    const filteredProjects = projectsData.filter((project)=> 
      project.tag.includes(tag)
    )
  
  return (
    <div id='projects'>

        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>Mis proyectos </h2>


        <div className="text-white grid grid-cols-2 md:flex justify-center items-center gap-2 py-6">
            
  <ProjectTag 
    onClick={handleTagChange}
    name='Todos'
    isSelected={tag==='Todos'}
  />
    <ProjectTag 
    onClick={handleTagChange}
    name='React.js'
    isSelected={tag==='React.js'}
  /> 
   <ProjectTag 
    onClick={handleTagChange}
    name='Next.js'
    isSelected={tag==='Next.js'}
  /> 
    <ProjectTag 
    onClick={handleTagChange}
    name='Wordpress'
    isSelected={tag==='Wordpress'}
  /> 
         <ProjectTag 
    onClick={handleTagChange}
    name='Html, Css y Js'
    isSelected={tag==='Html, Css y Js'}
  /> 
  


        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=>(
                 <ProyectCard 
                 key={project.id} 
                 imgUrl={project.image} 
                 title={project.title} 
                 description={project.description} 
                 alt={project.alt}
                 urlPreview={project.url}
                 tags={project}
                 />
                 
            ))}
        </div>
    </div>
  )
}

export default ProyectsSection