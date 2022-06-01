import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';
import { SectionWrapper } from 'components';
import { Visuals, visuals } from 'utils/visuals';

interface SectionWrapperStyles {
	backgroundImage?: any;
    src: Visuals;
}


export const SectionWithFullImg = styled(SectionWrapper)<SectionWrapperStyles>`
    position: relative;
    background-image: ${({ src }) =>
	    src ? `url(${visuals[src]})` : 'light'};
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
    @media ${tablet} {
     
    }
    
`;