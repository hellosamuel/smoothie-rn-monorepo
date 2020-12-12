import React from "react";
import Styled from "styled-components/native";

import { TodoListContextProvider } from "~/Context/TodoListContext";
import Todo from "./Screens/Todo";

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

export default function App() {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
}
