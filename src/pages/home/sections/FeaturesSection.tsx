import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper, Image } from 'components';
import heroPic from '../../assets/images/hero-min.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';
import { theme } from 'styles/theme';


export const Features: React.FC = () => {

    return <SectionWrapper backgroundColor='secondary'>
        <Container>
            <FlexWrapper>
            <Box width={{ _: '100%', tablet: '40%'}}>
                <Image src='julep' alt="st julep" maxHeight="100%" width="100%"></Image>
                </Box>
                <Box width={{ _: '100%', tablet: '60%'}}>
                    <Typography type="h3" textAlign="center" color="primary">Dare to wear</Typography>
                    <Typography mt="s16" opacity='op60' mb="s24" type='body16' color='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores deserunt doloribus laboriosam quam recusandae molestias aliquam obcaecati iusto!</Typography>
                </Box>
            </FlexWrapper>
        </Container>
    </SectionWrapper>;
}