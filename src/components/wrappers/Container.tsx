import React from "react";
import styled from "styled-components/macro";
import { Colors } from 'styles/theme';
import { tablet } from 'styles/breakpoints';

interface ContainerStyles {
    position?: string;
    backgroundColor?: Colors
}

export const Container = styled.div<ContainerStyles>`
    margin: '0 auto';
    padding: '0 1rem';
    max-width: '1152px';
    position: ${({ position })=> position? position : ""};
    background-color: ${({backgroundColor}) => backgroundColor? backgroundColor : ""};

    @media ${tablet} {
			max-width: '100%';
		}
`