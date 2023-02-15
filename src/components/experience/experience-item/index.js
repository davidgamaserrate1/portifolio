import './experience-item-styles.css'

const ExperienceItem = (props) =>{
    return(
        <>
        <div className="project-item">
            <img className="project-imag" src={props.src}  />             
            <div className="project-name"> {props.name}</div>
            <p className="project-desc">  {props.desc} </p>
        </div>
        </>
    )
}

export default ExperienceItem