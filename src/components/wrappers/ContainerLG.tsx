import React from "react";
import styled from "styled-components/macro";
import { Colors, theme } from 'styles/theme';
import { Container } from "./Container";
import { tablet } from 'styles/breakpoints';

interface ContainerLGProps {
    backgroundColor?: Colors,
}

export const ContainerLG = styled(Container)<ContainerLGProps>`
    max-width: 1400;
    background-color: ${({backgroundColor}) => backgroundColor? theme.colors[backgroundColor] : ""};
    @media ${tablet} {
			max-width: '100%';
		}
`