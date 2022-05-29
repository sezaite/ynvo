import React, {useState} from "react";
import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import {Box, BoxStyles, Typography, FlexWrapper} from 'components';

// export type InputProp = 'text' | 'number' | 'password' | 'email' | 'date';

interface InputProps extends React.InputHTMLAttributes<HTMLIFrameElement> {
    id: string;
    minValue?: number;
    maxValue?: number;
    placeholder?: string;
    // type: InputProp;
    onChange?: ()=> void;
    border?: string;
    borderRadius?: string;
}
interface InputWrapProps extends InputProps {
    label?: string;
    errorMessage?: string;

}

export const InputWrap: React.FC<InputWrapProps> = ({
    id,
    minValue,
    maxValue,
    placeholder,
    type,
    border, 
    borderRadius,
    label, 
    errorMessage, 
    // ...rest // "This spread always overwrites this property."
}) => {
    const [isError, setIserror] = useState(true);
    const [value, setValue] = useState<string>("");
    return (
        <FlexWrapper>
            {label && <Typography type="label12" htmlFor={id}>{label}</Typography>}
            {type=='number' || type=='date' ? 
            <Box border={border} as="input" py='s10' px='s16' id={id} type={type} value={value} onChange={(e: React.FormEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)} placeholder={placeholder? placeholder : ""} min={minValue ? minValue : 0} max={maxValue ? maxValue : Infinity}/> 
            :
            <Box border={border} as="input" py='s10' px='s16' id={id} type={type} value={value} onChange={(e: React.FormEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)} placeholder={placeholder? placeholder : ""}/>
}
            
            {isError && <Typography type="caption12" color="accent">{errorMessage}</Typography>}
        </FlexWrapper>
    )
}

