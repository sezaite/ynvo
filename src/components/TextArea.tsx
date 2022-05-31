import React, {useState} from "react";
import styled from "styled-components/macro";
import { Colors, theme, Theme } from "styles/theme";
import {Box, BoxStyles, Typography, FlexWrapper} from 'components';
import { smMobile } from "styles/breakpoints";


interface TextareaProps extends React.TextareaHTMLAttributes<HTMLIFrameElement> {
    id: string;
    placeholder?: string;
    onChange?: ()=> void;
    border?: string;
    borderRadius?: string;
    
}
interface TextAreaWrapProps extends TextareaProps {
    label?: string;
    errorMessage?: string;
    backgroundColor?: Colors;
    height?: string;
}

export const TextAreaWrap: React.FC<TextAreaWrapProps> = ({
    id,
    placeholder,
    border,
    height, 
    label, 
    errorMessage, 
    ...rest
}) => {
    const [isError, setIserror] = useState(true);
    const [value, setValue] = useState<string>("");
    return (
        <TextAreaWrapper flexDirection='column'>
            {label && <Typography mb='s8' type="label12" fontWeight='fw600' textTransform="capitalize" htmlFor={id}>{label}</Typography>}
            <TextArea as="textarea" height={height} width='100%' borderRadius='radius8' border={border} py='s10' px='s16' id={id} value={value} onChange={(e: React.FormEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)} placeholder={placeholder? placeholder : ""}/>
            {isError && <Typography type="caption12" color="accent">{errorMessage}</Typography>}
        </TextAreaWrapper>
    )
}

const TextAreaWrapper = styled(FlexWrapper)`
    grid-column: span 2;
    @media ${smMobile}{
        grid-column: span 1;
    }
`

export const TextArea = styled(Box)`
    resize: none;
    outline: none;
    &:active, &:focus, &:focus-visible, &:focus-within {
        outline: none;
    }
`