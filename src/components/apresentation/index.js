import React from "react";
import './header-styles.css'
import profileImg from '../../assets/profilePic.png'

import divRow from '../../assets/div.png'

const Apresentation = ()=>{
    

    return(
    <header className="header"> 
    <img className="heder-profile" src={profileImg}  alt="profile"/>
        <p className="header-apresentation">
            Hi, Im David
            <p className="header-apresentation__high" >Serrate</p>
            <img className="divRow" src={divRow}/>
        </p>
    </header>
     
    )
}

export default Apresentation