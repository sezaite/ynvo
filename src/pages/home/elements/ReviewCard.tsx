import { Box, Typography, Image, FlexWrapper } from "components";
import React from "react";
import styled from "styled-components/macro";
import { ReviewCardProps } from "../sections";


export const ReviewCard: React.FC<ReviewCardProps> = ({image, stars, name, signatureSmell, review}) => {
    let starsHTML = [];
    const howManyGreyStars = 5 - stars;
    for (let i = 0; i < stars; i++) {
        starsHTML.push(<Image src='star' key={i} alt="star icon"/>);
    }
    for (let i = 0; i < howManyGreyStars; i++){
        starsHTML.push(<Image src='starGrey' key={i} alt="star icon"/>);
    }
    return (
        <ReviewCardStyled background="lightDirtyGradient" padding='s30' position='relative'>
            <Box >
                <ImageStyled src={image} radius="50%" alt="profile picture of reviewer"></ImageStyled>
            </Box>
           
            <Box pl='s48'>
                <Box position='absolute' top='0' right='40px'>
                    <Typography type="jumbo">,,</Typography>
                </Box>
                <Box maxWidth='70%' ml="auto">
                    <Typography type='h6'>{name}</Typography>
                    <Typography py="s10" type='caption12'>Their signature smell is <Typography type="span" fontWeight='fw600'>{signatureSmell}</Typography></Typography>
                    <FlexWrapper>{starsHTML}</FlexWrapper>
                    <Typography py='s40' type='body14' fontStyle='italic'>{review}</Typography>
                </Box>
               

            </Box>
        </ReviewCardStyled>
    )
}

export const ReviewCardStyled = styled(Box)`
    position: relative;
    margin: 0 auto;
`

export const ImageStyled = styled(Image)`
    position: absolute;
    left: 0;
    top: 50%;
    height: 80%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    object-fit: cover;

`