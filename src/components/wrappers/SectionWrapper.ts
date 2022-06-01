import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';
import { Box } from './Box';
import { Visuals, visuals } from 'utils/visuals';

interface SectionWrapperStyles {
	backgroundImage?: any;
    src?: Visuals;
}

export const SectionWrapper = styled(Box).attrs({ as: 'section' })<SectionWrapperStyles>`
	position: relative;
    background-image: ${({ src }) =>
	    src ? `url(${visuals[src]})` : 'light'};
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
	padding: ${theme.space.s64} 0 ; 	
		@media ${tablet} {
			padding: ${theme.space.s48} 0;
		}
	
`;