import { Box, Typography } from "components";
import React, { ReactNode, useState } from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { useDispatch, useSelector } from 'react-redux';
import { incrementCurrentQuestion } from "state/slice";
import { useAppDispatch } from "state/store";


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
        
        <OptionStyled onClick={()=>handleClick()} border={isSelected ? `1px solid ${theme.colors.deepblue}` : `1px solid ${theme.colors.primary}`}>
            <Typography>{option}</Typography>
        </OptionStyled>
    )
}

const OptionStyled = styled(Box)`
    border-radius: ${theme.radii['radius8']};
    border: 1px solid ${theme.colors.deepblue};
    padding: ${theme.space.s16} ${theme.space.s24};

    &:hover {
        border: 1px solid ${theme.colors.deepblue};
    }
`

function dispatch(arg0: { payload: undefined; type: string; }) {
    throw new Error("Function not implemented.");
}
