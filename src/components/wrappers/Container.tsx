import React from "react";
import styled from "styled-components/macro";
import { Colors, theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';
import { Box } from "./Box";



export const Container = styled(Box)`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1152px;
    @media ${tablet} {
			max-width: '100%';
		}
`