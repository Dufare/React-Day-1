import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "reactstrap";

const Todos = () => {
  const [todos, setTodos] = useState([])
  const navigate = useNavigate();
  const fetchTodos = async() => {
    const data = await fetch("http://localhost:5000/todos");
    const parsedData = await data.json();
    setTodos(parsedData);
  };

  //Delete todo
  const deleteTodo = async(id) => {
    const data = await fetch();
    const response = await data.json(`http://localhost:5000/todos/${id}`, {method: 'delete'})
    fetchTodos();
  };
  const GetTodoById = async(id) => {
    const data = await fetch();
    const response = await data.json(`http://localhost:5000/todos/${id}`)
    fetchTodos();
    navigate("/UpdateTodos",{state:{todo:response}})
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    
      <Container>
        <Table hover>
          <thead>
            <th>ID</th>
            <th>TASK</th>
            <th>Prerequisites</th>
            <th>ISDONE</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </thead>

          <tbody>
            {todos.map((todo) => {
              return (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.task}</td>
                  <td>{todo.prerequisites}</td>
                  <td>{todo.isDone.toString()}</td>
                  <td>
                    <Button color="success" onClick={()=>GetTodoById(todo.id)}>Update</Button>
                  </td>
                  <td>
                    <Button color="danger" onClick={()=>deleteTodo(todo.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    
  );
};

export default Todos;
