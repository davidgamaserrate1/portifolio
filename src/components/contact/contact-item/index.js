import React from "react";
import './contact-item-styles.css'

const ContactItem = (props) =>{
    return(
        <div className="contact-item">
            <div className="contact-name">{props.name } </div>   
            <a  className="contact-image" href={props.link}>  
                <img className="imgContact"  src = {props.image }/>   
            </a>
            <div className="contact-value">{props.valueContact }</div>   
            <div className="contact-link">
                <a id="contact-link-text" href={props.link}> Enviar Mensagem </a> 
            </div>
        </div>
    )
}

export default ContactItem