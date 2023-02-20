import React, { useState } from "react";
import './project-item-styles.css' 
import imgProject from '../../../assets/projects/frutaria.png'
 

const ProjectItem = (props) =>{
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    return(
        
        <div className="project-item">
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
                       
            <a href={props.link}> <img className="project-imag" src={props.src}  />  </a>
            </div>
          {isHovering && (
          <a target="_blank" rel="noopener noreferrer"  href={props.link} className="project-showmore">
            Ver mais           
          </a>
           )}
            <div className="project-tools"> Ferramentas:  {props.tools}</div>
            <div className="project-name"> {props.name}</div>
            <p className="project-desc">  {props.desc} </p>
            
        
        </div>
    )
}

export default ProjectItem