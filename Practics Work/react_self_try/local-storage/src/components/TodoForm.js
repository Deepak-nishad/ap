import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container,
} from "reactstrap";

import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, settodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please fill some value");
    }
    const todo = {
      todoString,
      id: uuidv4(),
    };

    addTodos(todo);

    settodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="nter a todo String"
            value={todoString}
            onChange={(e) => settodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="sucess"> Add ToDo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
