import './experience-item-styles.css'

const ExperienceItem = (props) =>{
    return(
       <div className='experience-container'>
        <div className='expItem'>
            <div className='experience-header'>
                <img className='logoEmpresa' src={props.srcLogo} alt="imgEmpresa"/>     
                <div className='empresa-cargo'>
                    <div className='empresa'>
                        {props.empresa}:
                    </div>
                    <div className='cargo'>
                        {props.cargo} 
                    </div>
                </div>
            </div>
            <div className='descricao'>
            {props.descricao}
            </div>
        </div>
       </div>
       

    )
}

export default ExperienceItem
