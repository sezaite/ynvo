
import { css } from 'styled-components/macro';
import { Theme, theme } from 'styles/theme';
import { TextType } from './Typography';


export const applyTextType = (type: TextType, theme: Theme) => {
	switch (type) {
		case 'h1':
			return css`
				font-size: ${theme.typography.h1.fontSize};
				font-weight: ${theme.typography.h1.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.secondary};
			`;
		case 'h2':
			return css`
				font-size: ${theme.typography.h2.fontSize};
				font-weight: ${theme.typography.h2.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.secondary};
			`;
		case 'h3':
			return css`
				font-size: ${theme.typography.h3.fontSize};
				font-weight: ${theme.typography.h3.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.secondary};
			`;
		case 'h4':
			return css`
				font-size: ${theme.typography.h4.fontSize};
				font-weight: ${theme.typography.h4.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.secondary};
			`;
		case 'h5':
			return css`
				font-size: ${theme.typography.h5.fontSize};
				font-weight: ${theme.typography.h5.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.secondary};
			`;
		case 'h6':
			return css`
				font-size: ${theme.typography.h6.fontSize};
				font-weight: ${theme.typography.h6.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.secondary};
			`;
		case 'body16':
			return css`
				font-size: ${theme.typography.body16.fontSize};
				font-weight: ${theme.typography.body16.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.primary};
				
			`;
		case 'body14':
			return css`
				font-size: ${theme.typography.body14.fontSize};
				font-weight: ${theme.typography.body14.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.primary};
			`;
		case 'caption12':
			return css`
				font-size: ${theme.typography.caption12.fontSize};
				font-weight: ${theme.typography.caption12.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.primary};
			`;
			case 'label12':
				return css`
					font-size: ${theme.typography.label12.fontSize};
					font-weight: ${theme.typography.label12.fontWeight};
					line-height: 1.3em;
					font-family: ${theme.fontFamily.primary};
				`;
	}
};