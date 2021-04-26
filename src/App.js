import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 2.5rem;
`;

const App = () => {
  return (
    <div>
      <Title>My styled Title</Title>
    </div>
  );
};

export default App;
