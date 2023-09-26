import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const LocalToods = localStorage.getItem("todos");
    if (LocalToods) {
      setTodos(JSON.parse(LocalToods));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todo App with local storage</h1>
      console.log({localStorage});
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
