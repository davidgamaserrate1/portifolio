import React from "react";
import './projects-styles.css'
import SectionDescription from "../sectionDescription";
import ProjectItem from "./project-item/index";

import git from '../../assets/projects/cronometro.png'
  
  
console.log( git)  
const projects = [
    { 
        "src" :  '/static/media/universe.c5599bebb0af55ed2754.png',
        "tools" : "React | React Hooks | HTML | CSS | JS ",
        "name" : "Landing Page Universe",
        "desc": "Landing page Space, onde exibe a contagem regressiva para o proximo eclipse e local para a melhor visualização." ,
               
        "link": "https://github.com/davidgamaserrate1/lading-page-universe"               
               
    },
    { 
        "src" :"/static/media/frutaria.57b28f44d8f6b930c99d.png",
        "tools" : "React | HTML | CSS | JS",
        "name" : "Landing page frutaria",
        "desc": " Pagina de apresentação de uma frutaria, contendo diversas receitas saudaveis "
        ,"link":"https://fruta-fruto-seven.vercel.app/"                    
    },
    {   
        // "src" : '/static/media/clientes.aecc8d5f3c12b6caaf82.png',
        "src" : '/static/media/clientes.7b697e5334f27dde3448.png',
        "tools" : "React | HTML| CSS | JS | Node | Express | MongoDB" ,
        "name" : "Dashboard Cadastro de Clientes ",
        "desc": " Sistema responsável pelo gerenciamento de clientes e serviços contratados pelos mesmos. Aplicação desenvolvida do zero, desde a criação da API, até o consumo desta no Front end e deploy da aplicação,"
                + "seguindo boas práticas da Engenharia de Software."
        ,"link":"https://crud-react-rosy-iota.vercel.app/clientes/"                      
    },
    { 
        "src" : '/static/media/git.1dde53c59500c9569044.png',
        "tools" : "React | HTML | CSS | JS | Rest API ",
        "name" : "Search user Github  ",
        "desc": "Aplicação onde é possível buscar usuários do github e seus respectivos repositórios, além da quantidade de seguidores e de pessoas que segue. Consumindo a API do Github."
        ,"link":"https://github.com/davidgamaserrate1/ProfiileGit"                      
    },
    { 
        "src" : '/static/media/cronometro.e20d21ba5a3ca7535d55.png',
        "tools" : "Vue.JS | HTML | CSS | BULMA CSS | JS | TS",
        "name" : "Cronometro Atividade",
        "desc": "Aplicação onde é possível buscar usuários do github e seus respectivos repositórios, além da quantidade de seguidores e de pessoas que segue. Consumindo a API do Github."
        ,"link":"https://cronometro-atividade.vercel.app/"                      
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