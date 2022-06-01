import React from 'react';
import styled from 'styled-components/macro';
import { Container, SectionWrapper, Typography, ContentWrapper, GridWrapper } from 'components';
import { ProfileProps } from 'typings/generalTypes';
import { ProfileCard } from '../elements';
import { ltablet, mobile } from 'styles/breakpoints';


export const SampleHunt:React.FC = () => {
    const profiles:ProfileProps[] = [
        {
            id: "review1",
            listings: [{name: 'Lorem ipsum, 20ml', link: '#'}, {name: 'Mancera Lorem ipsum, 1ml', link: '#'}], 
            nickname: 'moth-9', 
            image: 'dummy'},
        {id: "review1", listings: [{name: 'Lorem ipsum by Tom Ford, 1.5ml', link: '#'}, {name: 'Mancera Lorem ipsum, 3ml', link: '#'}, {name: 'Lorem ipsum by Tom Ford, 1.5ml', link: '#'},], nickname: 'bbb87Ae', image: 'profilePic2'},
        {id: "review1", listings: [{name: 'Aqua Lorem ipsum, 10ml', link: '#'}, {name: 'Diptyque Imsup Lorem, 15ml', link: '#'}], nickname: 'perfume_uncle', image: 'shark'}
      ];


  return (
    <SectionWrapper backgroundColor='light'>
         <Container zIndex='upperElement'>
          <ContentWrapper>
              <Typography type='h4' mb='s30' textAlign='center'>
                Not yet ready to commit? Grab a sample!
              </Typography>
              <Typography opacity='op60' mb='s30'>Here are a few of our most active Fragrance Junkies who are willing to share</Typography>

              </ContentWrapper>
             <CenteredGrid gridGap='12px' gridTemplateColumns={{_: '1fr', lmobile: '1fr 1fr',  ltablet: '1fr 1fr 1fr'}}>
             {
                   profiles.map(({id, image, nickname, listings}) => (
                        
                        <ProfileCard id={id} key={id} image={image} listings={listings} nickname={nickname}></ProfileCard>
                        ))
                    }
             </CenteredGrid>
      </Container>
    </SectionWrapper>
    
  )
}

export const CenteredGrid = styled(GridWrapper)`
  & > div:last-of-type {
    @media ${ltablet} {
      grid-column: span 2;
      max-width: 50%;
    }
    @media ${mobile} {
      grid-column: span 1;
      max-width: 100%;
    }
  }
`
