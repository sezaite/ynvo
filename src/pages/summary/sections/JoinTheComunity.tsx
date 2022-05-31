import React from 'react';
import { Container, ContentWrapper, SectionWrapper, Typography } from 'components';
import { DefaultButton } from 'components/buttons/DefaultButton';

export interface ComunitySectionProps {
   title: string;
   text?: string;
}

export const JoinTheCommunity:React.FC<ComunitySectionProps> = ({text, title}) => 
    <SectionWrapper background='lightGradient'>
   
         <Container zIndex='upperElement' position='relative'>
           <ContentWrapper>
           <Typography color="dark" type="h4" mb='s30' textAlign='center'>
              {title}
            </Typography>
            <Typography textAlign="center" mb="s24" opacity='op60' color="dark">{text ? text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa, dolore non amet et pariatur illum. Autem reiciendis soluta non. Hic quam dolorum, velit iusto, corporis quia exercitationem earum placeat, numquam odio deserunt tenetur inventore id quasi alias eum recusandae.'}</Typography>
            <DefaultButton mx='auto' height='100%'>Join now</DefaultButton>
           </ContentWrapper>
      </Container>
    </SectionWrapper>