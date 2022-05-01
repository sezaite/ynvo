import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';

interface SectionWrapperStyles {
	minHeight?: string;
	backgroundColor?: Colors;
}


export const SectionWrapper = styled.section<SectionWrapperStyles>`
	padding: ${theme.space.s64}; //ar cia reikia taip, ar uztektu ihardcodint spacingus?
	position: relative;
	min-height: ${({ minHeight }) => minHeight || ''};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? theme.colors[backgroundColor] : ''};
		
		@media ${tablet} {
			padding: ${theme.space.s48};
		}
	
`;