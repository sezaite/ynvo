import { Box, Typography, FlexWrapper, Image } from "components";
import { ImageStyled, ReviewCard, ReviewCardStyled } from "pages/home/elements/ReviewCard";
import React from "react";
import styled from "styled-components/macro";
import { ReviewCardProps } from 'pages/home/sections';



export const PerfumeReviewCard: React.FC<ReviewCardProps> = ({image, stars, name, title, review, likes}) =>  
        <ReviewCardStyled mb='s24' width="100%" background="lightDirtyGradient" px='s30' py='s24' position='relative'>
           <FlexWrapper>
            <Image src={image} width='6rem' height="6rem" objectFit='cover' radius="50%" alt="profile picture of reviewer"></Image>
            <Box ml='s30'>
                <FlexWrapper justifyContent='space-between' alignItems='start'>
                    <Box>
                        <Typography type='h5' fontWeight='fw500'>{title}</Typography>
                        <Typography opacity='op60'>{name}</Typography>
                    </Box>
                    <FlexWrapper alignItems='center'>
                        <Typography lineHeight='lh1' type="h5" mr='s10' mt='sTinyMinus'>{likes}</Typography>
                        <Image src='heart' alt='heart'></Image>
                    </FlexWrapper>
                </FlexWrapper>
                <Typography py='s20' type='body14' fontStyle='italic' fontWeight='fw300'>{review}</Typography>
            </Box>
           </FlexWrapper>
        </ReviewCardStyled>
    



