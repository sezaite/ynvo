import { Box, Typography, Image } from "components";
import React from "react";
import styled from "styled-components/macro";

interface ReviewCardProps {

}

export const ReviewCard: React.FC = () => {
    return (
        <Box background="whiteGradient" padding='s30' position='relative'>
            <Box >
                <ImageStyled src="profilePic" radius="50%" alt="profile picture of reviewer"></ImageStyled>
            </Box>
           
            <Box pl='s48'>
                <Box position='absolute' top='-70px' right='40px'>
                    <Typography type="jumbo">,,</Typography>
                </Box>
                <Typography type='body14'>Steve French, Vilnius</Typography>
               
            </Box>
        </Box>
    )
}

const ReviewCardStyled = styled(Box)`
    
`

const ImageStyled = styled(Image)`
    position: absolute;
    left: 0;
    top: 50%;
    height: 80%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);

`