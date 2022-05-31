import React, {useState} from "react";
import styled from "styled-components/macro";
import { Colors, theme, Theme } from "styles/theme";
import {Box, BoxStyles, Typography, FlexWrapper} from 'components';

interface InputProps extends React.InputHTMLAttributes<HTMLIFrameElement> {
    id: string;
    minValue?: number;
    maxValue?: number;
    placeholder?: string;
    onChange?: ()=> void;
    border?: string;
    borderRadius?: string;
}
interface InputWrapProps extends InputProps {
    label?: string;
    errorMessage?: string;
    backgroundColor?: Colors;
    height?: string;
}

export const InputWrap: React.FC<InputWrapProps> = ({
    id,
    minValue,
    maxValue,
    placeholder,
    type,
    border,
    height, 
    label, 
    errorMessage, 
    ...rest
}) => {
    const [isError, setIserror] = useState(true);
    const [value, setValue] = useState<string>("");
    return (
        <FlexWrapper flexDirection='column'>
            {label && <Typography mb='s8' type="label12" fontWeight='fw600' textTransform="capitalize" htmlFor={id}>{label}</Typography>}
            {type=='number' || type=='date' ? 
            <Input height={height} width='100%' borderRadius='radius8' border={border} as="input" py='s10' px='s16' id={id} type={type} value={value} onChange={(e: React.FormEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)} placeholder={placeholder? placeholder : ""} min={minValue ? minValue : 0} max={maxValue ? maxValue : Infinity}/> 
            :
            <Input height={height} width='100%' borderRadius='radius8' border={border} as="input" py='s10' px='s16' id={id} type={type} value={value} onChange={(e: React.FormEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)} placeholder={placeholder? placeholder : ""}/>
}
            
            {isError && <Typography type="caption12" color="accent">{errorMessage}</Typography>}
        </FlexWrapper>
    )
}

export const Input = styled(Box)`
    outline: none;
    &:active, &:focus, &:focus-visible, &:focus-within {
        outline: none;
    }
`
