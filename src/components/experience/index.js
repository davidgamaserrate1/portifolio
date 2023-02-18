import React from "react";
import SectionDescription from "../sectionDescription";
import ExperienceItem from "./experience-item";
import './experience-styles.css'

import logoCard from    '../../assets/logos/grupoc_card.png'
import logoIntegraTI from    '../../assets/logos/integrati.png'
 
 
const experiences = [
    
    {
        "empresa":"Grupo Card",
        "cargo":"Programador Jr",
        "descricao":"Responsavel pelas integrações de sistemas de vendas e"
                +"ERP, utilizando JavaScript, PL/SQL.",
        "srcLogo":'/static/media/grupoc_card.649469a668be9775ea49.png' 

    },
    {
        "empresa":"IntegraTI",
        "cargo":"Estagiario",
        "descricao":"sim sim simsim sim simsim sim simsim sim simsim sim simsim sim sim",
        "srcLogo":"https://integrati.solutions/img/logo/logo.png"
    },
]

console.log('logoIntegraTI ' + logoIntegraTI) 
 
 
const Experience = () =>{
    return(
        <div className="expSection">
        <SectionDescription   section={"Expercience:"}/>
        <div className="experiences">
            { experiences && experiences.map((exp)=>(
                <ExperienceItem 
                    empresa={exp.empresa}
                    cargo={exp.cargo}
                    descricao={exp.descricao}
                    srcLogo= {exp.srcLogo}
                />
            ))}
        </div>
        </div>
    )
}

export default Experience

 

 