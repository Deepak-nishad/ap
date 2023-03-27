import './App.css';

import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState(['take dog for walk','take the rubbish out', 'Hi everone' ]);
  return (
    <div className="App">
      <h1>Learning to make Todo App</h1>
      <input />
      <button>Add Task</button>
      <ul>
        {todos.map(todo=>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
