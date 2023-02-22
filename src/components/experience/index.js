import React from "react";
import SectionDescription from "../sectionDescription";
import ExperienceItem from "./experience-item";
import './experience-styles.css'

const experiences = [
    {
        "empresa":"Grupo Card",
        "cargo":"Programador Jr",
        "descricao":"Responsavel pelas integrações de sistemas de vendas e "
                +"ERP, utilizando JavaScript, PL/SQL.",
        "srcLogo":'/static/media/grupoc_card.649469a668be9775ea49.png' 

    },
    {
        "empresa":"IntegraTI",
        "cargo":"Estagiario",
        "descricao":"Análise e manutenção de sistemas, utilizando JavaScript, através da ferramenta BPMN Camunda Modeler. Automação de alertas de monitoramento via E-mail,"
            + "afim de precipitar problemas de integrações e ou movimentações bancárias no sistema de ERP.",
        "srcLogo":"https://integrati.solutions/img/logo/logo.png"
    },
]
 
const Experience = () =>{
    return(
        <section id="experience-section">
            <SectionDescription   section={"Experiência:"}/>
            <div id="expSection">
                <div className="experiences">
                    { experiences && experiences.map((exp)=>(
                        <ExperienceItem key={exp.descricao}
                            empresa={exp.empresa}
                            cargo={exp.cargo}
                            descricao={exp.descricao}
                            srcLogo= {exp.srcLogo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

 

 