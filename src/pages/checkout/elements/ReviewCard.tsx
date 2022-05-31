import React from "react";
import styled from "styled-components/macro";
import { Box, Typography, Image, FlexWrapper } from "components";
import { ltablet, tablet } from "styles/breakpoints";
import { ReviewCardProps } from "typings/generalTypes";


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
        <ReviewCardStyled background="lightDirtyGradient" padding={{_: 's20', mobile: 's30'}} position='relative'>
            <Box >
                <ImageStyled src={image} radius="50%" alt="profile picture of reviewer"></ImageStyled>
            </Box>
           
            <Box pl={{_: 's0', tablet: 's48'}}>
                <Box position='absolute' top='0' right='40px'>
                    <Typography type="jumbo">,,</Typography>
                </Box>
                <Box maxWidth={{_: '100%', tablet: '70%'}} ml="auto">
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
    border-radius: 0 1rem 1rem 0;
    margin: 0 auto;
    width: 70%;
    height: 100%;
    @media ${tablet} {
        width: 90%;
    }

`

export const ImageStyled = styled(Image)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    height: 80%;
    aspect-ratio: 1;
    object-fit: cover;
    @media ${ltablet}{
        height: 60%;
    }
    @media ${tablet}{
        position: relative;
        top: unset;
        transform: translate(0);
        margin-bottom: 1rem;
        width: 6rem;
        height: 6rem;
    }

`