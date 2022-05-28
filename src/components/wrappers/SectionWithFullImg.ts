import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';
import { SectionWrapper } from 'components';

interface SectionWrapperStyles {
	backgroundImage?: any;
}


export const SectionWithFullImg = styled(SectionWrapper)<SectionWrapperStyles>`
    position: relative;
    background-image: ${({ backgroundImage }) =>
		backgroundImage ? `url(${backgroundImage})` : ''};
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    z-index: 1;
    /* &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.background.primaryGradient};
        opacity: 0.5;
        z-index: -1;

    } */
    @media ${tablet} {
        height: 85vh;
        /* background-position: 100%; */
        /* &:after {
            opacity: 0.8;
        } */
    }
    
`;