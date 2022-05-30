import { Box } from "components";
import { DefaultButton } from "components/buttons/DefaultButton";

import { FlexWrapper, Image, SectionWrapper, Container, Typography } from "components";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";


export const Navigation: React.FC = () => {
    return (
        <Box py="s16" position='absolute' top='0' left='0' width='100%' zIndex='2'>
                <Container>
                    <FlexWrapper width='100%' justifyContent="space-between" alignItems="center">
                        <Image src='logo' alt='logo' width="3rem"></Image>
                        <FlexWrapper as="ul" justifyContent='flex-end' alignItems="center">
                            <Box as ="li" mr={{_: 's20', tablet: 's40'}} ><Link to="#"><Typography textDecoration='none' color="primary">About</Typography></Link></Box>
                            <Box as ="li" mr={{_: 's20', tablet: 's40'}}><Link to="#"><Typography textDecoration='none' color="primary">Features</Typography></Link></Box>

                            <Box as ="li"><DefaultButton>Contact</DefaultButton></Box>
                        </FlexWrapper>
                    </FlexWrapper>
                </Container>
            </Box>
    )
    
}

