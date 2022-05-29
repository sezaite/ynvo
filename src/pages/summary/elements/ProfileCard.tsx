import { Box, Typography, FlexWrapper, Image } from "components";
import { ImageStyled, ReviewCard, ReviewCardStyled } from "pages/home/elements/ReviewCard";
import React from "react";
import styled from "styled-components/macro";
import { ProfileProps } from 'typings/generalTypes';


export const ProfileCard: React.FC<ProfileProps> = ({image, nickname, listings}) => {
    return (
        <FlexyCard  backgroundColor="primary" height='100%' width="100%" px='s30' py='s24' position='relative'>
               <FlexWrapper alignItems='center'>
                    <Image src={image} width='3rem' height="3rem" objectFit='cover' radius="50%" alt="profile picture of reviewer"></Image>
                    <Typography type='body14' ml='s12'>{nickname}</Typography>
               </FlexWrapper>
           
                <Box>
                    
                    <Box as='ul' my='s16'>
                    {
                        listings.map(({name, link}) => (
                        <Box as='li' key={name}><Box as="a" href={link}><Typography textDecoration='underline'>{name}</Typography></Box></Box>
                        ))
                    }
                    </Box>
                    
            </Box>
            <FlexWrapper mt='auto' as='button' alignItems='center' p='s8'>
                        <Image src='message' alt='message icon'></Image>
                        <Typography ml='s8'>Message them!</Typography>
                    </FlexWrapper>
        </FlexyCard>
    )
}

export const FlexyCard = styled(ReviewCardStyled)`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
`