import { createRoot } from "react-dom/client";

import App from "./App";

// function App() {
//   return <h1>hllo bhai</h1>;
// }

// add css like this
// function App() {
//   return <h1 style={{ textAlign: "center" }}>hllo bhai</h1>;
// }

// function App() {
//   return (
//     <>
//       <h1>hllo bhai</h1>
//       <button className="button">manish</button>
//     </>
//   );
// }

// const App = () => {
//   return (
//     <>
//       <h1>hllo bhai</h1>
//       <button className="button">manish</button>
//     </>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

// react 18
const container = document.getElementById("root");
const f = createRoot(container);
f.render(<App />);
