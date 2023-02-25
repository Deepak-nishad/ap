import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  function oneup() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={oneup}
       > Count:{count}
      </button>
    </div>
  );
}
 // Hitesh sir code 
// function Counter(){
//   let [count, setCount] = useState(100)

//   function oneUp(){
//      setCount(count + 1)
//   }

//   return(
//     <div>
//       <button
//       onClick={oneUp}>Count : {count}</button>
//       {/* <SuperHeros/> */}
//     </div>
//   )
// }

function App() {
  return (
    <>
      <h1>Hello To React</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
