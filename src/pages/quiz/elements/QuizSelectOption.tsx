import { Box, FlexWrapper, Typography, Image } from "components";
import React, { ReactNode, useState } from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { useDispatch, useSelector } from 'react-redux';
import { incrementCurrentQuestion } from "state/slice";
import { useAppDispatch } from "state/store";
import { smMobile } from "styles/breakpoints";


interface Props {
    option: string;
    id: number;
    onClickOption: (id:number) => void; 
    isSelected: boolean;
}


// const [isSelected, setIsSelected] = useState(false);

export const QuizSelectOption: React.FC<Props> = ({option, id, onClickOption, isSelected}) => {
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        onClickOption(id);
        // dispatch(incrementCurrentQuestion());
    }
    return (
        
        <OptionStyled position='relative' onClick={()=>handleClick()} border={isSelected ? `1px solid ${theme.colors.accent}` : ''}>
            <Typography color={isSelected ? 'accent' : 'dark'} >{option}</Typography>
            {
                isSelected ?  <Box position='absolute' top='s8' right='s8'><Image src="tickCircle" alt="checkmark"></Image></Box> : ""
            }
           
            
        </OptionStyled>
    )
}

const OptionStyled = styled(Box)`
    border-radius: ${theme.radii['radius8']};
    border: ${theme.borders.primary};
    padding: ${theme.space.s16} ${theme.space.s24};
    background-color: white;
    &:hover {
        border: 1px solid ${theme.colors.accent};
    }
    @media ${smMobile}{
        padding: ${theme.space.s10} ${theme.space.s20};
    }
`

