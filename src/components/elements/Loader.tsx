import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const Loader = () =>  <StyledLoader></StyledLoader>;


const StyledLoader = styled.div`
    border: 0.2rem solid ${theme.colors.primary};
    border-top-color:  ${theme.colors.accent};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: spin 1s linear infinite;

    @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`

