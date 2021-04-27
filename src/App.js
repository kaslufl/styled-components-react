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
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

const Link = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;

const App = () => {
  return (
    <MainWrapper>
      <Button primary>My button</Button>
      <Button>My button</Button>
      <PaginationWrapper page="middle">
        <Button>Page 1</Button>
        <Button>Page 3</Button>
      </PaginationWrapper>
      <Link href="https://www.google.com">
        Link 1
      </Link>
      <Link href="https://www.google.com">
        Link 2
      </Link>
    </MainWrapper>
  );
};

export default App;
