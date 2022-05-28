import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { mobile, desktop } from 'styles/breakpoints';


export const ContentWrapper = styled(Box)`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 48rem;
    @media ${desktop} {
        max-width: 42rem;
    }
    @media ${mobile} {
        max-width: 100%;
    }

`