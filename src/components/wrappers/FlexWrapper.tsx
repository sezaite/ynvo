import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { Theme } from "styles/theme";
import { flex, FlexProps } from "styled-system";



export const FlexWrapper = styled(Box)<FlexProps<Theme>>`
    display: flex;

    && {
        ${flex}
    }
`

