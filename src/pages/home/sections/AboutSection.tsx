import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper } from 'components';
import heroPic from '../../assets/images/hero-min.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';
import { theme } from 'styles/theme';


export const About: React.FC = () => {
    return <SectionWrapper backgroundColor='primary' >
        <Container>

          <FlexWrapper>
          <Box width={{ _: '100%', tablet: '50%'}}>
            IMAGE PLACEHOLDER

            </Box>
            <Box width={{ _: '100%', tablet: '50%',}}>
                <Typography type="h2" color="text">About the project</Typography>
            </Box>      
          </FlexWrapper>
        </Container>
    </SectionWrapper>;
}