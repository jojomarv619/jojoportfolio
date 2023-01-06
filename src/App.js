import { useState } from "react";
import About from "./components/work/About";
import Home from "./components/work/Home";
import Navbar from "./components/work/Navbar";
import Skills from "./components/work/Skills";
import AboutGaming from "./components/gaming/AboutGaming";
import SkillsGaming from "./components/gaming/SkillsGaming";
import HomeGaming from "./components/gaming/HomeGaming";
import Sidebar from "./components/work/Sidebar";
import SidebarGaming from "./components/gaming/SidebarGaming";

import "./styles.css";
import NavbarGaming from "./components/gaming/NavbarGaming";

function App() {
  const [gaming, setGaming] = useState(true);
  const gamingMode = (value) => {
    setGaming(value)
    console.log(value);
  }

  return (
    <div >

      
      {gaming && <Navbar gaming={gamingMode}/>}
      {!gaming && <NavbarGaming  gaming={gamingMode}/>}
     

      {gaming && <Sidebar />}
      {!gaming && <SidebarGaming />}
     
      
      {gaming && <Home gaming={gamingMode}/> }
      {!gaming && <HomeGaming  gaming={gamingMode}/>}
     
      {gaming && <About /> }
      {!gaming && <AboutGaming />}
      
      {gaming && <Skills /> }
      {!gaming && <SkillsGaming />}
      
      
     
    </div>
  );
}

export default App;
