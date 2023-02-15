import React from "react";
import './projects-styles.css'
import SectionDescription from "../sectionDescription";
import ProjectItem from "./project-item/index";

import universeSrc from '../../assets/projects/universe.png'
import frutariaSrc from '../../assets/projects/frutaria.png'
import clientesSrc from '../../assets/projects/clientes.png'
import userGitSrc from '../../assets/projects/git.png'
import imgProject from '../../assets/projects/frutaria.png'

const projects = [
    { 
        "src" :  '/static/media/universe.c5599bebb0af55ed2754.png',
        "tools" : "React / React Hooks / HTML / CSS / JS ",
        "name" : "Landing Page Universe",
        "desc": " Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito" ,
               
        "link": "https://github.com/davidgamaserrate1/lading-page-universe"               
               
    },
    { 
        "src" :"static/media/frutaria.5e5cd156f90094a6f1c4.png",
        "tools" : "React / HTML / CSS / JS ",
        "name" : "Landing page frutaria",
        "desc": " Pagina de apresentação de uma frutaria, contendo diversas receitas saudaveis "
        ,"link":"https://fruta-fruto-seven.vercel.app/"                    
    },
    { 
        "src" : 'static/media/clientes.9acb1d48f251c75fb12d.png',
        "tools" : "React / HTML/ CSS / JS / Node / Express/ MongoDB" ,
        "name" : "Dashboard Cadastro de Clientes ",
        "desc": " Sistema responsável pelo gerenciamento de clientes e serviços contratados pelos mesmos. Aplicação desenvolvida do zero, desde a criação da API, até o consumo desta no Front end e deploy da aplicação,"
                + "seguindo boas práticas da Engenharia de Software."
        ,"link":"https://crud-react-rosy-iota.vercel.app/clientes/"                      
    },
    { 
        "src" : '/static/media/git.971c0f28c1794d33a415.png',
        "tools" : "HTML / CSS / JS ",
        "name" : "Search user Github  ",
        "desc": "Aplicação onde é possível buscar usuários do github e seus respectivos repositórios, além da quantidade de seguidores e de pessoas que segue. Consumindo a API do Github."
        ,"link":"https://crud-react-rosy-iota.vercel.app/clientes/"                      
    }
]

const Projects = () =>{
    
    return(
        <section className="projectsSection">
            <SectionDescription section={"Projects"}/>
            <div className="projects">
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
        </section>
    )
}
// {props.src}/>
//             <div className="project-tools">  {props.tools}</div>
//             <div className="project-name"> {props.name}</div>
//             <p className="project-desc">  {props.desc} 

export default Projects