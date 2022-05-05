import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";
import {Colors, theme } from "styles/theme";


interface QuizCardProps {
    backgroudColor?: Colors,
}

export const QuizCardStyled = styled(Box)<QuizCardProps>`
    border-radius: ${theme.radii['radius16']};
    border: 1px solid green;
    padding: ${theme.space.s40} ${theme.space.s30};
    background-color: ${({backgroundColor}) => backgroundColor? theme.colors[backgroundColor] : ""};
`



