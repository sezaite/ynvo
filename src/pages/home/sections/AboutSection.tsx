import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper, Image } from 'components';
import heroPic from '../../assets/images/hero-min.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';
import { theme } from 'styles/theme';



export const About: React.FC = () => {
    return <SectionWrapper backgroundColor='primary' pb='s0'>
        <Container>

          <FlexWrapper alignItems="center">
          
            <Box width={{ _: '100%', tablet: '50%',}} pr={{_: 's0', lmobile: 's60'}}>
                <Typography type="h2" mb={{ _: 's30', ltablet: 's56',}} color="dark">About the project</Typography>
                <Typography type="body16" mb="s20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero, vitae molestias, rerum aperiam ab amet accusantium illo impedit mollitia fugiat adipisci explicabo neque, voluptatibus architecto consectetur iusto quas illum itaque provident! Nobis ex assumenda iste at dolor maiores molestias fugit corporis ducimus. Atque dolorum laborum maiores iure at minus quidem nulla obcaecati aliquid eaque, perspiciatis voluptas ducimus adipisci excepturi rem corporis voluptatum totam reprehenderit. Aperiam pariatur quo repellat!
                </Typography>

                <Typography type="body16" mb="s40">
                  Impedit mollitia fugiat adipisci  maiores molestias quidem nulla obcaecati aliquid eaque, perspiciatis voluptas ducimus adipisci excepturi rem corporis voluptatum totam reprehenderit. Aperiam pariatur quo repellat!
                </Typography>
                <FlexWrapper>
                  <DefaultButton mr="s16">Reach Out!</DefaultButton>
                  <DefaultButton backgroundColor='dark'>Take a quiz</DefaultButton>
                </FlexWrapper>
            </Box>      
            <Box width={{ _: '100%', tablet: '50%'}}>
           <Image src='smoke' alt="smoke" maxHeight="100%" width="100%"></Image>

            </Box>
          </FlexWrapper>
        </Container>
    </SectionWrapper>;
}