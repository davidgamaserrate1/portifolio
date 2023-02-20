import React from "react";
import './header-styles.css'
import div from '../../assets/div.png'
import logo from '../../assets/logo-david.jpeg'

const Header = () =>{
    return (
        <header className="headerpage">
            <div className="header-name"> David Serrate</div>      
            <img className="div-name" src={div}/>      
            <div className="header-wellcome"> Seja bem vindo(a)</div>                   
            <img className="logo" src={logo}/> 
            <ul className="section-page">
                <li className="section-page__name">
                    <a href="#experience-section">Experiência</a>                        
                </li>
                <li className="section-page__name">
                    <a href="#skills-section">Skills</a>
                </li>
                <li className="section-page__name">
                    <a href="#projects-section">Projetos</a>    
                </li>
                <li className="section-page__name">
                    <a href="#contact-section">Contato</a>
                </li>
            </ul>     
        </header>
    )
}

export default Header