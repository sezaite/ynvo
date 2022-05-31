import React from 'react';
import { Container, Typography, Box, InputWrap, FlexWrapper, Image } from 'components';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import animalprint from 'assets/images/animalprint.png'

export const SubsribeSection:React.FC = () => {

  return (
      <SectionWithFullImg backgroundColor='primary' backgroundImage={animalprint}>
      <Container>
      <Box>
        <Typography color="dark" type="h2" mb='s30'>
            Want to collaborate?
        </Typography>
        <Typography mb="s24" opacity='op60' color="dark" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa, dolore non amet et pariatur illum. Autem reiciendis soluta non. Hic quam dolorum, velit iusto, corporis quia exercitationem earum placeat, numquam odio deserunt tenetur inventore id quasi alias eum recusandae.
        </Typography>
        <FlexWrapper justifyContent='space-between' flexDirection={{_: 'column', tablet: 'row'}}>
            <FlexWrapper as="a" href="checkout" width='9rem' height='3rem' backgroundColor='accent' alignItems='center' justifyContent='center'><Typography color='white'>Get in touch</Typography></FlexWrapper>
          <FlexWrapper alignItems='center' mt={{_: 's24', tablet: 's0'}}>
                <Typography color='darkaccent' opacity='op60' type='h5' mr='s24'> Or folow us: </Typography>

                <Image src='instagram' alt='instagramlogo'></Image>
            
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    </Container>
    </SectionWithFullImg>
  )

}
