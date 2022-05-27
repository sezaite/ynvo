import React from "react";
import styled from "styled-components/macro";
import { Colors, theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';

interface ContainerStyles {
    position?: string;
    backgroundColor?: Colors
    height?: string;
}

export const Container = styled.div<ContainerStyles>`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1152px;
    position: ${({ position })=> position? position : ""};
    height: ${({ height })=> height ? height : ""};
    background-color: ${({backgroundColor}) => backgroundColor? theme.colors[backgroundColor] : ""};
    @media ${tablet} {
			max-width: '100%';
		}
`