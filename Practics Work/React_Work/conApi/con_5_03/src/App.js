import React, { useState, createContext } from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";


export const MyContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myname = (event) => {
    setName(event.target.value);
  };

  const mycolor = (event) => {
    setColor(event.target.value);
  };
  
  return (
<MyContext.Provider value={{name, color}}>

      <Navbar />
      <form>
        <input
          type={"text"}
          placeholder="Enter User Name"
          value={name}
          onChange={myname}
        />

        <input
          type={"text"}
          placeholder="Enter color Name"
          value={color}
          onChange={mycolor}
        />
      </form>

      <HeroSection />
    </MyContext.Provider>  
  );
}

export default App;
