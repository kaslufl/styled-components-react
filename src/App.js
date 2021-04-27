import React from "react";
import styled from "styled-components";

import Button from "./components/Button";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const App = () => {
  return (
    <MainWrapper>
      <Button primary>My button</Button>
      <Button>My button</Button>
      <PaginationWrapper>
        <Button>Page 1</Button>
      </PaginationWrapper>
    </MainWrapper>
  );
};

export default App;
