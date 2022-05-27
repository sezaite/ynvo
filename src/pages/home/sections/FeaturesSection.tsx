import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper } from 'components';
import heroPic from '../../assets/images/hero-min.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';
import { theme } from 'styles/theme';


export const Features: React.FC = () => {
    return <SectionWrapper backgroundColor='darkgreen'>
        <Container>
            <Typography type="h2" color="primary">List of key points</Typography>
            <FlexWrapper>
            <Box width={{ _: '100%', tablet: '50%'}}>
                    IMAGE PLACEHOLDER
                </Box>
                <Box width={{ _: '100%', tablet: '50%'}}>
                    LIST PLACEHOLDER
                </Box>
            </FlexWrapper>
        </Container>
    </SectionWrapper>;
}