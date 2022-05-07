import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";
import {Colors, theme, Theme } from "styles/theme";
import { QuizCardProps } from "./QuizCardCheckbox";



export const QuizCardStyled = styled(Box)`
    border-radius: ${theme.radii['radius16']};
    border: 1px solid green;
    padding: ${theme.space.s40} ${theme.space.s30};
`



