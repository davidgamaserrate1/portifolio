import './education-style.css'
import React from 'react'
import SectionDescription from '../sectionDescription'
import Education from './education-item'
import Legend from './legend'


const formation =[
    {
        "course": "Engenharia de Software",
        "institution" :"UFMS",
        "typeEducation":"graduacao"

    },
    {
        "course": "HTML e CSS3",
        "institution" :"ALURA",
        "typeEducation":"curso"
    },
    {
        "course": "Node JS : Api Rest com Express e MongoDB",
        "institution" :"ALURA",
        "typeEducation":"curso"
    },
    {
        "course": "React (TS e JS)",
        "institution" :"ALURA",
        "typeEducation":"curso"
    },
    {
        "course": "JavaScript para WEB",
        "institution" :"ALURA",
        "typeEducation":"curso"
    },
]

const Educations = ()=>{
    return(
        <section id='section-education'>
            <div className='description-education'>
                <SectionDescription section={"Formação:"}/>   
            </div>
                <div className='educations'>   
                    <div className="description-type left">Nome</div>
                    <div className="description-type right">Instituição</div>    
                    {formation.map((exp)=>(
                        <Education 
                            institution={exp.institution}
                            course={exp.course}
                            typeEducation={exp.typeEducation}
                        />
                    ))}
                </div>                
                <Legend/> 
            </section>
        )
}

export default Educations


