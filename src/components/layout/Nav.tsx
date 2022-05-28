import { Box } from "components";
import { DefaultButton } from "components/buttons/DefaultButton";
import { Typography } from "components/typography/Typography";
import { Container } from "components/wrappers/Container";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";


export const Navigation: React.FC = () => {
    return (
        <Box py="s16" position='absolute' top='0' left='0' width='100%' zIndex='2'>
                <Container>
                    <FlexWrapper width='100%' justifyContent="space-between" alignItems="center">
                        <Typography type='body20' color="primary">L o G o</Typography>
                        <FlexWrapper as="ul" justifyContent='flex-end' alignItems="center">
                            <Box as ="li"><Link to="#"><Typography mr='s40' textDecoration='none' color="primary">About</Typography></Link></Box>
                            <Box as ="li"><Link to="#"><Typography mr='s40' textDecoration='none' color="primary">Features</Typography></Link></Box>
                            <Box as ="li"><Link to="#"><Typography mr='s40' textDecoration='none' color="primary">Reviews</Typography></Link></Box>
                            <Box as ="li"><DefaultButton>Contact</DefaultButton></Box>
                        </FlexWrapper>
                    </FlexWrapper>
                </Container>
            </Box>
    )
    
}

