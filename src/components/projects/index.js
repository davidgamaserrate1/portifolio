import React from "react";
import './projects-styles.css'
import SectionDescription from "../sectionDescription";
import imgProject from '../../assets/projects/frutaria.png'

const projects = [
    { 
        "src" : {imgProject},
        "tools" : "HTML / CSS / JS ",
        "name" : "Landing Page Universe",
        "desc": " Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito" 
               + "Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito",
        "link": "https://github.com/davidgamaserrate1/lading-page-universe"               
               
    },
    { 
        "src" : {imgProject},
        "tools" : "React / HTML / CSS / JS ",
        "name" : "Landing page frutaria",
        "desc": " Pagina de apresentação de uma frutaria, contendo diversas receitas saudaveis "
        ,"link":"https://fruta-fruto-seven.vercel.app/"                    
    },
    { 
        "src" : {imgProject},
        "tools" : "React / HTML/ CSS / JS / Node / Express/ MongoDB" ,
        "name" : "Dashboard Cadastro de Clientes ",
        "desc": " Sistema responsável pelo gerenciamento de clientes e serviços contratados pelos mesmos. Aplicação desenvolvida do zero, desde a criação da API, até o consumo desta no Front end e deploy da aplicação,"
                + "seguindo boas práticas da Engenharia de Software."
        ,"link":"https://crud-react-rosy-iota.vercel.app/clientes/"                      
    },
    { 
        "src" : {imgProject},
        "tools" : "HTML / CSS / JS ",
        "name" : "Search user Github  ",
        "desc": "Aplicação onde é possível buscar usuários do github e seus respectivos repositórios, além da quantidade de seguidores e de pessoas que segue. Consumindo a API do Github."
        ,"link":"https://crud-react-rosy-iota.vercel.app/clientes/"                      
    }
]

const Projects = () =>{
    return(
        <>
            <SectionDescription section={"Projects"}/>
            <div className="projects">
            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>
            
            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>
            
            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>
            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>
            
            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>
            
            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            <div className="project-item">
                <img className="project-imag" src={imgProject}/>
                <div className="project-tools"> HTML / CSS / JS </div>
                <div className="project-name"> Landing Page Universe</div>
                <p className="project-desc"> Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito Landing page de um universo muito bonito
                Landing page de um universo muito bonito 
                Landing page de um universo muito bonito Landing page de um universo muito bonito
                 Landing page de um universo muito bonito Landing page de um universo muito bonito </p>
            </div>

            
           </div>
        </>
    )
}

export default Projects