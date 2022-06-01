import React from 'react';
import styled from 'styled-components/macro';
import { Colors } from 'styles/theme';
import {Image, Typography} from 'components';
import {DefaultButtonProps, BaseButton} from 'components/buttons/BaseButton';


interface ButtonProps extends DefaultButtonProps {
	isDisabled?: boolean;
	onClick?: ()=>void;
	backgroundColor?: Colors;
	color?:Colors;
}

export const BackButton: React.FC<ButtonProps> = ({
	isDisabled,
	status,
	children,
	onClick,
	...rest }) => {


		return (
			<Button disabled={isDisabled} onClick={onClick} {...rest}>
                <Image src='arrowBack' alt='arrow right'></Image>
				{status === 'loading' ? 'Loading...' : <Typography>Back</Typography>}
			</Button>
		);
	}



const Button = styled(BaseButton)<DefaultButtonProps>`
    display: flex;
    align-items: center;
	width: fit-content;
	font-size:  ${({ theme }) => theme.fontSizes.fs16};
	font-family:  ${({ theme }) => theme.fontFamily.primary};
	background-color: transparent;
	border: none;
	transition: all 0.2s ease-in;
    cursor: pointer;
    picture {
        margin-top: 0.3rem;
        margin-right: 0.8rem;
    }
	&:hover {
		background-color: transparent;
        transform: translateX(-0.4rem);
	}
    
`;