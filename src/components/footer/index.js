import React from "react";
import './footer-styles.css'
import div from '../../assets/div.png'
import logo from '../../assets/logo-david.jpeg'

const Footer = () =>{
    return(
        <div className="footer-div">
            <div className="footer-name"> David Serrate</div> 
            <img className="div-footer" src={div}/>      
            <div className="header-thanks"> Obrigado !</div> 
            <img className="logo-footer" src={logo}/> 
        </div>   
    )
}

export default Footer