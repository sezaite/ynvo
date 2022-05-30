import React from 'react';
import { background } from 'styled-system';
import { Container, SectionWrapper, Typography, Box, InputWrap, FlexWrapper, Image } from 'components';
import hero from '../../../assets/images/hero.jpg'
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import shadows from 'assets/images/shadows.jpg'
import animalprint from 'assets/images/animalprint.png'
import lines from 'assets/images/lines.svg'

export const SubsribeSection:React.FC = () => 
    <SectionWithFullImg backgroundColor='primary' backgroundImage={animalprint}>
         <Container>
          <Box>
            <Typography color="dark" type="h2" mb='s30'>
                Want to collaborate?
            </Typography>
            <Typography mb="s24" opacity='op60' color="dark" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa, dolore non amet et pariatur illum. Autem reiciendis soluta non. Hic quam dolorum, velit iusto, corporis quia exercitationem earum placeat, numquam odio deserunt tenetur inventore id quasi alias eum recusandae.
            </Typography>
            <FlexWrapper justifyContent='space-between' flexDirection={{_: 'column', tablet: 'row'}}>
              <FlexWrapper>
                <InputWrap id="colab-email" type="emaill" height='2rem' width='100%' border='transparent'></InputWrap>
                <DefaultButton height='100%'>Get in touch</DefaultButton>
              </FlexWrapper>
              <FlexWrapper alignItems='center' mt={{_: 's24', tablet: 's0'}}>
                    <Typography color='dark' opacity='op60' type='h5' mr='s24'> Or folow us: </Typography>
       
                    <Image src='instagram' alt='instagramlogo'></Image>
                
              </FlexWrapper>
            </FlexWrapper>
          </Box>
      </Container>
    </SectionWithFullImg>