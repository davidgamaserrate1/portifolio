import Apresentation from "../apresentation/index.js";
import Skills from "../skills/index.js";
import Header from "../header/index.js";
import Projects from "../projects/index.js";
import VerticalDesc from "../verticalDesc/index.js";
import Experience from "../experience/index.js";

import './app-styles.css' 

function App() {
  return (
    <div  >  
      <Header/>
      <Apresentation/>
      <div className="vertical-top-down">software engineer</div>                
      {/* <VerticalDesc/> */}
      <Experience/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
