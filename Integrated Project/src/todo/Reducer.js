import React, { useReducer, useState } from "react";
import { Container } from "reactstrap";

const Reducer = () => {
  const ACTIONS = {
    INCREMENT: "increment",

    DECREMENT: "decrement",
  };

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case ACTIONS.INCREMENT:
          return { count: state.count + 1 };

        case ACTIONS.DECREMENT:
          return { count: state.count - 1 };

        default:
          return state;
      }
    },
    { count: 0 }
  );

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  return (
    <Container>
      <button onClick={increment}>increment</button>

      <span>{state.count}</span>

      <button onClick={decrement}>decrement</button>
    </Container>
  );
};

export default Reducer;
