import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () =>{
    setCount(count+1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <div>{count}</div>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>

        {/* alternative */}

        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <button onClick={() => setCount(count - 1)}>-</button> */}
        
      </div>
    </div>
  );
}

export default App;
