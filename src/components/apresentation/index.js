import React from "react";
import './apresentation-styles.css'
import divRow from '../../assets/div.png'

const Apresentation = ()=>{

    return(
        <section className="header"> 
            <p className="header-apresentation">
                Hi, Im David <p className="header-apresentation__high" >Serrate</p>
                <img className="divRow" src={divRow}/>
            </p>
            <p className="header-description">
                Programador, cursando o ultimo semestre de Engenharia de Software na Universidade Federal de Mato Grosso do Sul, com conhecimentos em React, JavaScript, HTML , CSS, Bootstrap, Consumo e desenvolvimento de API 
                Atualmente, trabalhando como programador Jr na Grupo Card, onde sou responsável por integrações sistêmicas do setor de venda e ERP, além do desenvolvimento de novas features e monitoramentos.
                Busco uma oportunidade onde posso aplicar os conhecimentos adquiridos ao longo da jornada como desenvolvedor/acadêmico
            </p>
        </section>
    )
}

export default Apresentation