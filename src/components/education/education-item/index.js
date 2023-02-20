import React from "react";
import './education-item-styless.css'

const Education = (props)=>{
    let typeCourseDiv
    let typeInstitutionDiv

    props.typeEducation === 'graduacao'  ?   typeCourseDiv = 'education-course graduacao' : typeCourseDiv = 'education-course course' 
    props.typeEducation === 'graduacao'  ?   typeInstitutionDiv = 'education-institution graduacao'  : typeInstitutionDiv = 'education-institution course' 

    return(
        <div className="education-item">
            <div className={typeCourseDiv}  > {props.course} </div>
            <div className={typeInstitutionDiv} >{props.institution}  </div>  
        </div>
    )
}

export default Education