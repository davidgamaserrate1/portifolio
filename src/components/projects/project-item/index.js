import React from "react";
import './project-item-styles.css' 
import imgProject from '../../../assets/projects/frutaria.png'

const ProjectItem = (props) =>{
    return(
        <div className="project-item">
            <img className="project-imag" src={props.src}/>             
            <div className="project-tools">  {props.tools}</div>
            <div className="project-name"> {props.name}</div>
            <p className="project-desc">  {props.desc} </p>
        </div>
    )
}

export default ProjectItem