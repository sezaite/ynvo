import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { tablet } from 'styles/breakpoints';


export const ContentWrapper = styled(Box)`
    margin: '0 auto';
    padding: '0 1rem';
    max-width: '58rem';
    @media ${tablet} {
        max-width: '100%';
    }

`