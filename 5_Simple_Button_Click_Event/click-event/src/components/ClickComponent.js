import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.5em;
  color: palevioletred;
  border: 5px solid gray;
  cursor: pointer;
  &:hover {
    background-color: #105b72c2;
    padding: 5px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 4em;
  background: papayawhip;
`;
const ClickComponent = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("Click Me");

  const changeDisplayText = () => {
    setCount(count + 1);

    if (count % 3 === 0) setText("Bang");
    else setText("Click Me");
  };

  return (
    <Div>
      <Button onClick={changeDisplayText}>{text}</Button>
    </Div>
  );
};

export default ClickComponent;
