import React from "react";
import './legend-styles.css'
import legendInstitution from '../../../assets/legend/institution.png'
import legendCourse from '../../../assets/legend/course.png'

const Legend = () =>{
    return (
    <div className='legend'>
        <div className='legend-text'> Legenda: </div>
        <div className='course-container'>
            <img className='legend-course' src={legendCourse} />
            <div className='legend-course-text'>
                Curso  
            </div>
        </div>
        <div className='institution-container'>
            <img className='legend-institution' src={legendInstitution} />                 
            <div className='legend-institution-text'>
                Graduação
            </div>
        </div>
    </div>
    )
}

export default Legend