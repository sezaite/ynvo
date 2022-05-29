import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";
import {Colors, theme, Theme } from "styles/theme";




export const QuizCardStyled = styled(Box)`
    border-radius: ${theme.radii['radius16']};
    padding: ${theme.space.s40} ${theme.space.s30};
    -webkit-box-shadow: 1px 1px 12px 0px rgba(179,167,167,0.66); 
    box-shadow: 1px 1px 12px 0px rgba(179,167,167,0.66);   
    cursor: pointer;
    position: relative;
    z-index: 5;
`



