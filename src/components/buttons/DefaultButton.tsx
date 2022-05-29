import React from 'react';
import styled from 'styled-components/macro';
import { Colors } from 'styles/theme';

import { BaseButton, DefaultButtonProps } from './elements/BaseButton';

interface ButtonProps extends DefaultButtonProps {
	isDisabled?: boolean;
	onClick?: ()=>void;
	backgroundColor?: Colors;
}

export const DefaultButton: React.FC<ButtonProps> = ({
	isDisabled,
	status,
	children,
	onClick,
	...rest }) => {


		return (
			<Button disabled={isDisabled} onClick={onClick} {...rest}>
				{status === 'loading' ? 'Loading...' : children}
			</Button>
		);
	}



const Button = styled(BaseButton)<DefaultButtonProps>`
	width: fit-content;
	font-size:  ${({ theme }) => theme.fontSizes.fs16};
	font-family:  ${({ theme }) => theme.fontFamily.primary};
	letter-spacing: 0.02em;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.accent};
	padding: ${({ theme }) => `${theme.space.s12} ${theme.space.s20}`};
	/* border: ${({ theme }) => `2px solid ${theme.colors.accent}`}; */
	border: none;
	transition: all 0.2s ease-in;
	/* text-transform: uppercase; */
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.dark};
	}
`;