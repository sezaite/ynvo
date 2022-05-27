import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";
import {Colors, theme, Theme } from "styles/theme";




export const QuizCardStyled = styled(Box)`
    border-radius: ${theme.radii['radius16']};
    padding: ${theme.space.s40} ${theme.space.s30};
    cursor: pointer;
`



