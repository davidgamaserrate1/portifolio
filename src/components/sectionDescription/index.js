import React from "react";
import './sectionDescription-styles.css'

const SectionDescription = (props) =>{
    return(
        <div className="skills-text">            
             <div className="div-img" > </div>              
            <div className="div-skills"> {props.section} </div> 
        </div>
    )
}

export default SectionDescription