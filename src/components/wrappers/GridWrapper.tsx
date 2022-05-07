import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { Theme } from "styles/theme";
import { grid, GridProps } from "styled-system";



export const GridWrapper = styled(Box)<GridProps<Theme>>`
    display: grid;
    && {
        ${grid}
    }
`