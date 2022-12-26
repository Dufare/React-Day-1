import React, { useReducer, useState } from "react";

import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import { Button } from "reactstrap";

const TaskReducer = () => {
  const ACTIONS = {
    ADD_TODO: "addtask",
  };

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [
          ...todos,
          { id: Date.now(), name: action.payload.todo, complete: false },
        ];
    }
  }

  const [todo, setTodo] = useState("");

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
  };

  return (
    <div>
      <input
        type="text"
        name={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button color="success" onClick={handleSubmit}>
        Add Task
      </Button>
      {todos.map((ele) => {
        return <div>{ele.name} &nbsp;&nbsp;</div>;
      })}
    </div>
  );
};

export default TaskReducer;
