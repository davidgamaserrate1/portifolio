import './app-styles.css' 

import Apresentation from "../apresentation/index.js";
import Skills from "../skills/index.js";
import Header from "../header/index.js";
import Projects from "../projects/index.js";
import VerticalDesc from "../verticalDesc/index.js";
import Experience from "../experience/index.js";
import Educations from "../education/index.js";
import SectionDescription from "../sectionDescription/index.js";
import Contact from '../contact';
import Footer from '../footer';

function App() {
  return (
    <>  
      <Header/>
      <Apresentation/>      
      <div className="cointainer">
        <div className='skills-exp'>
          <Experience/>   
          <Educations/>     
        </div>      
        <Skills/>
        <Projects/>
        <Contact/>
      </div> 
      <Footer/>
    </>
  );
}

export default App;
