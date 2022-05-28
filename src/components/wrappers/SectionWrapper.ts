import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';
import { Box } from './Box';

export const SectionWrapper = styled(Box).attrs({ as: 'section' })`
	padding: ${theme.space.s64} 0 ; 
	position: relative;
		
		@media ${tablet} {
			padding: ${theme.space.s48} 0;
		}
	
`;