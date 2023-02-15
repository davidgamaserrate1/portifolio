import React from "react";
import SectionDescription from "../sectionDescription";
import './experience-styles.css'

const experiences = [
    { 
        "src" :  '/static/media/universe.c5599bebb0af55ed2754.png',
        "name" : "React / React Hooks / HTML / CSS / JS ",        
        "desc": " Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito" ,                                      
    },
    { 
        "src" :"static/media/frutaria.5e5cd156f90094a6f1c4.png",         
        "name" : "Landing page frutaria",
        "desc": " Pagina de apresentação de uma frutaria, contendo diversas receitas saudaveis "
        
    },
     
]

const Experience = () =>{
    return(
        <>
        <SectionDescription section={"Experiences :"}/>
        <div>
        {projects.map((project)=>(     console.log( universeSrc ) ||     
                <ProjectItem key={project.src}
                    src={  project.src } 
                    tools={project.tools}
                    name={project.name}
                    desc ={project.desc}
                    link={project.link}
                />
                ))}
        </div>
        </>
    )
}

export default Experience

 

 