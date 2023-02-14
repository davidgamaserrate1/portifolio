import React from "react";
import './skills-styles.css'
import divImg from '../../assets/div.png'

const skillsList = [
    {"name" :"HTML", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    {"name" :"CSS3", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },  
    {"name" :"JavaScript", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  },
    {"name" :"React JS", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    {"name" :"Git", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    {"name" :"Mongo DB", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {"name" :"Mysql", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {"name" :"Postegresql", "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
    {"name" :"Rest API", "src":"https://img.icons8.com/external-others-pike-picture/256/external-API-fintech-others-pike-picture-2.png"},
]
          
const Skills = ()=>{
    return (
        <>
            <div className="skills-text">
            <img className="divImg" src={divImg}/>
            <h1 > Skills </h1>
            </div>

            <div className="skill">                
                {skillsList.map((skill)=>( 
                <div index={ skill.src} className="skill-item">                    
                    <img className="skill-pic" src={skill.src} />                    
                    <div className="skill-button"> 
                        <a className="skill-name" >{skill.name}</a>
                    </div>
                </div>
                ))}
           </div> 
        </>
    )
}
export default Skills



 