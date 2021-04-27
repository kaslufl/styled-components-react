import React from "react";
import styled, { css } from "styled-components";

import { Wrapper, fadeIn } from "./styled";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 1rem;
  margin-top: ${({theme}) => theme.spacers.large}
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${fadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: white;
    background-color: palevioletred;
  }

  @media ${({theme}) => theme.mediaQueries.OutterWrapperbellow-768} {
    font-size: 0.4rem;
    color: blue;
  }
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
  
  &:hover ${StyledButton}{
    color:red;
  }
`;

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

const Button = ({ primary, children }) => {
  return (
    <OutterWrapper>
      <StyledButton primary={primary}>{children}</StyledButton>
    </OutterWrapper>
  );
};

export default Button;
