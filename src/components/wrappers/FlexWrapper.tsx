import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { Theme } from "styles/theme";
import { flexbox, FlexboxProps } from "styled-system";




export const FlexWrapper = styled(Box)<FlexboxProps<Theme>>`
    display: flex;
    && {
        ${flexbox}
    }
`

