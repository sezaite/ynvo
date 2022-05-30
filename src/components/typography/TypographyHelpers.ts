
import { css } from 'styled-components/macro';
import { Theme, theme } from 'styles/theme';
import { TextType } from './Typography';
import { desktop, tablet } from 'styles/breakpoints';


export const applyTextType = (type: TextType, theme: Theme) => {
	switch (type) {
		case 'jumbo':
			return css`
				font-size: ${theme.typography.jumbo.fontSize};
				font-weight: ${theme.typography.jumbo.fontWeight};
				line-height: ${theme.typography.jumbo.lineHeight};
				font-family: ${theme.fontFamily.secondary};
				/* text-transform: uppercase; */
				@media ${tablet} {
					font-size: ${theme.typography.jumbo.fontSizeMobile};
				}
			`;
		case 'h1':
			return css`
				font-size: ${theme.typography.h1.fontSize};
				font-weight: ${theme.typography.h1.fontWeight};
				line-height: ${theme.typography.h1.lineHeight};
				font-family: ${theme.fontFamily.title};
				letter-spacing:  ${theme.letterSpacings.theme};
				/* text-transform: uppercase; */
				@media ${desktop} {
					font-size: ${theme.typography.h1.fontSizeDesktop};
				}
				@media ${tablet} {
					font-size: ${theme.typography.h1.fontSizeMobile};
				}
			`;
		case 'h2':
			return css`
				font-size: ${theme.typography.h2.fontSize};
				font-weight: ${theme.typography.h2.fontWeight};
				line-height: ${theme.typography.h2.lineHeight};
				font-family: ${theme.fontFamily.title};
				letter-spacing:  ${theme.letterSpacings.theme};
				@media ${tablet} {
					font-size: ${theme.typography.h2.fontSizeMobile};
				}
			`;
		case 'h3':
			return css`
				font-size: ${theme.typography.h3.fontSize};
				font-weight: ${theme.typography.h3.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.title};
				@media ${tablet} {
					font-size: ${theme.typography.h3.fontSizeMobile};
				}
			`;
		case 'h4':
			return css`
				font-size: ${theme.typography.h4.fontSize};
				font-weight: ${theme.typography.h4.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.title};
			`;
		case 'h5':
			return css`
				font-size: ${theme.typography.h5.fontSize};
				font-weight: ${theme.typography.h5.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.title};
			`;
		case 'h6':
			return css`
				font-size: ${theme.typography.h6.fontSize};
				font-weight: ${theme.typography.h6.fontWeight};
				line-height: 1.3em;
				font-family: ${theme.fontFamily.title};
			`;
		case 'body16':
			return css`
				font-size: ${theme.typography.body16.fontSize};
				font-weight: ${theme.typography.body16.fontWeight};
				line-height: ${theme.typography.body16.lineHeight};
				letter-spacing:  ${theme.letterSpacings.theme};
				font-family: ${theme.fontFamily.primary};
				
			`;
			case 'body20':
				return css`
					font-size: ${theme.typography.body20.fontSize};
					font-weight: ${theme.typography.body20.fontWeight};
					line-height: ${theme.typography.body20.lineHeight};
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