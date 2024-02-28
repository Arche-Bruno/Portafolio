'use client'
import React, {useState} from 'react'
import ProyectCard from './ProyectCard'

import proyect1Image from '../images/imgProyects/proyect1.png';
import proyect2Image from '../images/imgProyects/proyect2.png';
import proyect3Image from '../images/imgProyects/proyect3.png';
import proyect4Image from '../images/imgProyects/proyect4.png';
import proyect5Image from '../images/imgProyects/proyect5.png';
import proyect6Image from "../images/imgProyects/proyect6.png"
import ProjectTag from './ProjectTag';


const projectsData = [
  {
   id:1,
   title:'Cachueleate.com',
   description:'Una red social para encontrar trabajo, publicar empleos y promocionar servicios',
   image:proyect1Image,
   tag:['Todos', 'Web'],
   alt:"socialMedia",
   url:"https://cachueleate-3626d.firebaseapp.com/",
   
  },
  {
   id:2,
   title:'Nuevos Horizontes',
   description:'Una web dedicada a ofrecer una amplia variedad de opciones de viaje a todo el mundo',
   image:proyect2Image,
   tag:['Todos', 'Web'],
   alt:"baa",
   url:"https://tubular-chimera-0af732.netlify.app/",
  },
  {
   id:3,
   title:'Acme',
   description:'Una web dedicada a venta de licores al por mayor y menor',
   image:proyect3Image,
   tag:['Todos', 'Web'],
   alt:"bt",
   url:"https://bar-business-ca236.web.app/",
  },
  {
   id:4,
   title:'Play- Piedra, Papel o tijera',
   description:'Web-game multijugador entre usuarios en tiempo real',
   image:proyect4Image,
   tag:['Todos', 'Mobile'],
   alt:"as",
   url:"https://kvoo-4ce98.web.app/login",
  },
  {
   id:5,
   title:'Store',
   description:'Ecommerce - venta de ropas ',
   image:proyect5Image,
   tag:['Todos', 'Mobile'],
   alt:"aa",
   url:"https://65021b1075adcf466873301d--unique-blini-38ab97.netlify.app/",
  },
  {
    id:6,
    title:'Web-info',
    description:'construction website',
    image:proyect6Image,
    tag:['Todos', 'Mobile'],
    alt:"aa",
    url:"https://imaginative-daifuku-458755.netlify.app/",
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
         {/* <ProjectTag 
    onClick={handleTagChange}
    name='Web'
    isSelected={tag==='Web'}
  /> 
  
  <ProjectTag 
    onClick={handleTagChange}
    name='Mobile'
    isSelected={tag==='Mobile'}
  />  */}
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