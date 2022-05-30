import { Property } from 'csstype';
import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import {
	compose,
	fontWeight,
	lineHeight,
	space,
	SpaceProps,
	textAlign,
	TypographyProps,
	textStyle,
	typography,
	opacity,
	OpacityProps,
	fontStyle,
	FontStyleProps
} from 'styled-system';

import { Colors, Theme } from 'styles/theme';

import { applyTextType } from './TypographyHelpers';

export type TextType = 'jumbo' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body20' | 'body16' | 'body14' | 'caption12' | 'span' | 'label12';

export enum TextTag {
	'jumbo' = 'p',
	'h1' = 'h1',
	'h2' = 'h2',
	'h3' = 'h3',
	'h4' = 'h4',
	'h5' = 'h5',
	'h6' = 'h6',
	'span' = 'span',
	'body20' = 'p',
	'body16' = 'p',
	'body14' = 'p',
	'caption12' = 'p',
	'label12' = 'label',
}

type AsAttributeType = string | React.ComponentType;

const typographyProperties = compose(
	textAlign,
	fontWeight,
	lineHeight,
	textStyle,
	typography,
	space,
	opacity,
);

export interface TextProps extends SpaceProps<Theme>, OpacityProps<Theme>, TypographyProps<Theme> {
	color?: Colors;
	type?: TextType;
	textTransform?: Property.TextTransform;
	textDecoration?: Property.TextDecoration;
	onClick?: () => void;
	children: ReactNode;
	htmlFor?: string;
	whiteSpace?: string;
}

export const Typography: React.FC<TextProps> = ({
	type = 'body16',
	children,
	...props
}) => {
	const as = TextTag[type] as AsAttributeType;

	return (
		<Text as={as} type={type} {...props}>
			{children}
		</Text>
	);
};

const Text = styled.p<TextProps>`
	padding: 0;

	${({ type, theme }) =>
		type && applyTextType(type as TextType, theme as Theme)};

	color: ${({ theme, color }) =>
		color ? theme.colors[color] : theme.colors.black};

	&& {
		${typographyProperties}
	}
	text-transform: ${({ textTransform }) => textTransform || ''};
	text-decoration: ${({ textDecoration }) => textDecoration || ''};
	white-space: ${({ whiteSpace }) => whiteSpace || ''};
`;
