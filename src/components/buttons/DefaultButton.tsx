import React from 'react';
import styled from 'styled-components/macro';

import { BaseButton, DefaultButtonProps } from './elements/BaseButton';

interface ButtonProps extends DefaultButtonProps {
	isDisabled?: boolean;
	onClick?: ()=>void;
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
	box-shadow: ${({ theme }) => `9px 10px 22px -11px ${theme.colors.text}`};
	letter-spacing: 0.3rem;
	font-size:  ${({ theme }) => theme.fontSizes.fs18};
	font-family:  ${({ theme }) => theme.fontFamily.secondary};
	box-shadow:  ${({ theme }) => theme.colors.darkgreen};
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.darkgreen};
	padding: ${({ theme }) => `${theme.space.s16} ${theme.space.s30}`};
	border: ${({ theme }) => `2px solid ${theme.colors.darkgreen}`};
	border-radius: ${({ theme }) => theme.radii.radius30};
	transition: all 0.2s ease-in;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		transform: scale(1.03);
	}
`;