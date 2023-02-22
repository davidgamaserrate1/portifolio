import React from "react";
import './projects-styles.css'
import SectionDescription from "../sectionDescription";
import ProjectItem from "./project-item/index";


import clientesSrc from '../../assets/projects/clientes.png'

console.log('clientesSrc 1  ' + clientesSrc) 
const projects = [
    { 
        "src" :  'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/universe.png',
        "tools" : "React / React Hooks / HTML / CSS / JS ",
        "name" : "Landing Page Universe",
        "desc": "Landing page Space, onde exibe a contagem regressiva para o proximo eclipse e local para a melhor visualização." ,
               
        "link": "https://github.com/davidgamaserrate1/lading-page-universe"               
               
    },
    { 
        "src" :"https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/frutaria.png",
        "tools" : "React / HTML / CSS / JS ",
        "name" : "Landing page frutaria",
        "desc": " Pagina de apresentação de uma frutaria, contendo diversas receitas saudaveis "
        ,"link":"https://fruta-fruto-seven.vercel.app/"                    
    },
    {   
        "src" : 'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/clientes.png',
        "tools" : "React / HTML/ CSS / JS / Node / Express/ MongoDB" ,
        "name" : "Dashboard Cadastro de Clientes ",
        "desc": " Sistema responsável pelo gerenciamento de clientes e serviços contratados pelos mesmos. Aplicação desenvolvida do zero, desde a criação da API, até o consumo desta no Front end e deploy da aplicação,"
                + "seguindo boas práticas da Engenharia de Software."
        ,"link":"https://crud-react-rosy-iota.vercel.app/clientes/"                      
    },
    { 
        "src" : 'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/git.png',
        "tools" : "HTML / CSS / JS / Rest API ",
        "name" : "Search user Github  ",
        "desc": "Aplicação onde é possível buscar usuários do github e seus respectivos repositórios, além da quantidade de seguidores e de pessoas que segue. Consumindo a API do Github."
        ,"link":"https://github.com/davidgamaserrate1/ProfiileGit"                      
    }
]

const Projects = () =>{
    
    return(
        <section id="projects-section">
        <SectionDescription section={"Projetos :"}/>  
            <div className="projects">
                {projects.map((project)=>(       
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


export default Projects