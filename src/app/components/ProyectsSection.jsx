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
   title:'Nuevos Horizontes',
   description:'Una web dedicada a ofrecer una amplia variedad de opciones de viaje a todo el mundo',
   image:proyect2Image,
   tag:['Todos', 'Html, Css y Js'],
   alt:"baa",
   url:"https://tubular-chimera-0af732.netlify.app/",
  },
  {
   id:3,
   title:'Jucumaru',
   description:'una página web dedicada al apasionante mundo de la miel. Diseñada con atención al detalle',
   image:proyect9Image,
   tag:['Todos','Html, Css y Js'],
   alt:"bt",
   url:"https://65f32330a7ffb3f91dc2f290--monumental-brigadeiros-7033c0.netlify.app/",
  },
  {
   id:4,
   title:'Ecommerce de Moda',
   description:'Mi proyecto de ecommerce de moda ofrece una plataforma innovadora para los amantes de la moda que buscan una experiencia de compra conveniente y emocionante. ',
   image:proyect10Image,
   tag:['Todos','Wordpress'],
   alt:"as",
   url:"https://65fb87944405a8493dae5dbf--cosmic-kangaroo-22affa.netlify.app/",
  },
  {
   id:5,
   title:'Tienda',
   description:'Ecommerce - venta de ropas ',
   image:proyect5Image,
   tag:['Todos','Html, Css y Js'],
   alt:"aa",
   url:"https://65021b1075adcf466873301d--unique-blini-38ab97.netlify.app/",
  },
  {
    id:6,
    title:'Web-Veterinaria',
    description:'Nuestra página web presenta un diseño limpio, moderno e intuitivo que facilita la navegación tanto para propietarios de mascotas como para personal veterinario. ',
  
    image:proyect8Image,
  
    tag:['Todos', 'Wordpress'],
    alt:"aa",
    url:"https://65f22d470171f3408d92af63--stately-lebkuchen-5dc488.netlify.app/",
  
   },
  {
    id:7,
    title:'Pagina de Contructora',
    description:'Diseñada para capturar la esencia de la industria, esta plataforma ofrece una ventana virtual a nuestros servicios, proyectos destacados y filosofía de trabajo.',
    image:proyect6Image,
    tag:['Todos','React.js'],
    alt:"aa",
    url:"https://iceberg-training-peru.netlify.app/",
   },

   {
    id:8,
    title:'Web-info',
    description:' Una página web dedicada al emocionante mundo de los viajes. Diseñada para despertar la pasión por explorar nuevos destinos',
    image:proyect7Image,
    tag:['Todos', 'Wordpress'],
    alt:"aa",
    url:"https://fancy-gingersnap-9425d7.netlify.app/",
   },
   {
    id:9,
    title:'Acme',
    description:'Una web dedicada a venta de licores al por mayor y menor',
    image:proyect3Image,
    tag:['Todos','React.js'],
    alt:"bt",
    url:"https://bar-business-ca236.web.app/",
   },
   {
    id:10,
    title:'Play- Piedra, Papel o tijera',
    description:'Web-game multijugador entre usuarios en tiempo real',
    image:proyect4Image,
    tag:['Todos','React.js'],
    alt:"as",
    url:"https://kvoo-4ce98.web.app/login",
   },
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


        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            
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