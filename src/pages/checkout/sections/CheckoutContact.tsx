import React from 'react'
import { AbsoluteImageCircle, AbsoluteImageLines, Box, Container, ContentWrapper, FlexWrapper, GridWrapper, InputWrap, SectionWrapper, TextAreaWrap, Typography } from 'components'
import { DefaultButton } from 'components/buttons/DefaultButton'


export const CheckoutContact = () => {
  return (
    <SectionWrapper background='lightGradient'>
        <AbsoluteImageLines src='shape1' alt='line'></AbsoluteImageLines>
        <AbsoluteImageCircle src='shape2' alt='line'></AbsoluteImageCircle>
        <Container zIndex='upperElement' position='relative'>
            <ContentWrapper>
                <Typography my='s40' textAlign='center' type='h1'>
                    Thank you for purchasing from us!
                </Typography>
                <Typography  py='s30' textAlign='center' type='h5'>
                    Before you leave we would like to hear from you!
                </Typography>
                <Typography textAlign='center' opacity='op60'>Send us a review or a suggestion! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod incidunt ex!</Typography>
        
                <Box maxWidth={{_: '100%', lmobile: '70%'}} mx='auto' mt='s24'>
                    <GridWrapper as="form" gridGap='s16' gridTemplateColumns={{_: '1fr', mobile: '1fr 1fr'}}  >
                        <InputWrap height='3rem' border='accent' borderRadius='radius8' backgroundColor='white' label='name' id='review-name'></InputWrap>
                        <InputWrap height='3rem' border='accent' borderRadius='radius8' backgroundColor='white' label='e-mail' id='review-email'></InputWrap>
                        <TextAreaWrap id='registrationMessage' height='10rem' border='accent' borderRadius='radius8' backgroundColor='white' label='Your message'></TextAreaWrap>
                    </GridWrapper>
                    <DefaultButton mx='auto' my='s24'>Submit</DefaultButton>
                </Box>
            </ContentWrapper>
        </Container>
    </SectionWrapper>
  )
}
