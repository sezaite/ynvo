import React from 'react';
import styled from 'styled-components/macro';
import { Box, Container, Typography, FlexWrapper, LinkWithIcon, SectionWithFullImg  } from 'components';
import { mobile, smMobile } from 'styles/breakpoints';

export const Hero: React.FC = () => 
		<HeroSection src='heroPic'>
			<Container height='100%' mt='s60'>
				<FlexWrapper justifyContent="flex-end" alignItems="center" height="100%">
					<Box maxWidth={{ _: '100%', mobile: '70%',  lmobile: '50%' }}>
						<Typography type="h1" color='primary'>A perfume is 
your scented slogan</Typography>
						<Typography mt="s16" mb="s24" type='body16' color='primary'>Complete this short quiz and we will help to spray your message to the world.</Typography>
						<LinkWithIcon backgroundColor='accent' color='white' link='/quiz' text='Start quiz' img='arrow'></LinkWithIcon>
					</Box>
				</FlexWrapper>
			</Container>
		</HeroSection>


export const HeroSection = styled(SectionWithFullImg)`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	@media ${mobile} {
		background-position: 65%;
	}
	@media ${smMobile} {
		background-position: right;
		justify-content: space-around;
		align-content: center;
	}
`