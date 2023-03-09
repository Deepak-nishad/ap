import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const incrementCount = () =>{
    setcount(count+1);
  }
  const decrementCount = () =>{
    setcount(count-1);
  }
  return (
   <div>
    <h1>Counter App</h1>
    <div>{count}</div>
    <div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
   </div>
  );
}

export default App;
