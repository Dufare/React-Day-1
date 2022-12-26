import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Input, Label, FormGroup, Button } from "reactstrap";

const UpdateTodos = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [todo, setTodo] = useState({});

  useEffect(() => {
    setTodo(location.state.todo);
  }, []);

  const onChangeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const clickHandler = async () => {
    const requestOptions = {
      method: "PUT",

      body: JSON.stringify({
        task: todo.task,
        prerequisites: todo.prerequisites,
        isDone: todo.isDone,
      }),

      headers: { "Content-type": "application/json" },
    };

    const data = await fetch(
      `http://localhost:5000/todos/${todo.id}`,
      requestOptions
    );

    const response = await data.json();

    navigate("/todos");
  };
  return (
    <div>
      {/* <p>{location.state.todo.task}</p> */}
      <Container>
        <Form>
          <FormGroup>
            <Label for="task">Task</Label>

            <Input
              id="task"
              name="task"
              placeholder="with a placeholder"
              type="text"
              value={todo.task}
              onChange={onChangeHandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="prerequisites">Prerequisites</Label>

            <Input
              id="prerequisites"
              name="prerequisites"
              placeholder="with a placeholder"
              type="text"
              value={todo.prerequisites}
              onChange={onChangeHandler}
            />
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" />
             <Label check>is completed</Label>
          </FormGroup>

          <Button color="success" onClick={clickHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateTodos;
