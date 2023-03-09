import { Navbar } from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import React, { useState, createContext } from "react";

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
    <>
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
    </>

  
  );
}

export default App;
