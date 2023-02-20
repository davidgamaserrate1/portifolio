import './app-styles.css' 

import Apresentation from "../apresentation/index.js";
import Skills from "../skills/index.js";
import Header from "../header/index.js";
import Projects from "../projects/index.js";
import VerticalDesc from "../verticalDesc/index.js";
import Experience from "../experience/index.js";
import Educations from "../education/index.js";
import SectionDescription from "../sectionDescription/index.js";

function App() {
  return (
    <>  
      <Header/>
      <Apresentation/>
      <div className="vertical-top-down">software engineer</div>                      
      <div className="cointainer">
        <div className='skills-exp'>
          <Experience/>   
          <Educations/>     
        </div>      
        <Skills/>
        <Projects/>
        
      </div> 
    </>
  );
}

export default App;
