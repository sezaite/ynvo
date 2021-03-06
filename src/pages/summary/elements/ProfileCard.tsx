import { Box, Typography, FlexWrapper, Image, LinkWithIcon } from "components";
import { ReviewCardStyled } from "pages/checkout/elements/ReviewCard";
import React from "react";
import styled from "styled-components/macro";
import { ProfileProps } from 'typings/generalTypes';


export const ProfileCard: React.FC<ProfileProps> = ({image, nickname, listings}) => {
    return (
        <FlexyCard borderRadius='radius16' background="lightDirtyGradient" height='100%' width="100%" px='s30' py='s24' position='relative'>
               <FlexWrapper alignItems='center'>
                    <Image src={image} width='3rem' height="3rem" objectFit='cover' radius="50%" alt="profile picture of reviewer"></Image>
                    <Typography type='body14' ml='s12'>{nickname}</Typography>
               </FlexWrapper>
           
                <Box>
                    
                    <Box as='ul' mt='s16' mb='s20'>
                    {
                        listings.map(({name, link}) => (
                        <Box as='li' key={name}><Box as="a" href={link}><Typography textDecoration='underline'>{name}</Typography></Box></Box>
                        ))
                    }
                    </Box>
                    
            </Box>
            <Box mt='auto' mx='auto'>
            <LinkWithIcon text='Message them!' link='#' img='message' backgroundColor="accent" color="white"></LinkWithIcon>

            </Box>
        </FlexyCard>
    )
}

export const FlexyCard = styled(ReviewCardStyled)`
    display: flex;
    flex-direction: column;
`