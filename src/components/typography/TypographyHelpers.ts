
import { css } from 'styled-components/macro';
import { Theme, theme } from 'styles/theme';
import { TextType } from './Typography';


export const applyTextType = (type: TextType, theme: Theme) => {
	switch (type) {
		case 'h1':
			return css`
				font-size: ${theme.typography.h1.fontSize};
				font-weight: ${theme.typography.h1.fontWeight};
				
			`;
	}
};