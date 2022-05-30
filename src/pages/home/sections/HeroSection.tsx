import React from 'react';
import styled from 'styled-components/macro';
import { Box, Container, Typography, FlexWrapper } from 'components';
import heroPic from '../../../assets/images/hero.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';
import { mobile, smMobile } from 'styles/breakpoints';




export const Hero: React.FC = () => {

	const handleClick = () => {
		navigate('/quiz'); //navigate to edit page
	}
	
	return (
		<HeroSection backgroundImage={heroPic}>
			<Container height='100%' mt='s60'>
				<FlexWrapper justifyContent="flex-end" alignItems="center" height="100%">
					<Box maxWidth={{ _: '100%', mobile: '70%',  lmobile: '50%' }}>
						<Typography type="h1" color='primary'>A perfume is 
your scented slogan</Typography>
						<Typography mt="s16" mb="s24" type='body16' color='primary'>Complete this short quiz and we will help to spray your message to the world.</Typography>
						<DefaultButton onClick={handleClick}>Start a quiz</DefaultButton>
					</Box>
				</FlexWrapper>
			</Container>
		</HeroSection>
	);
};

export const HeroSection = styled(SectionWithFullImg)`
	min-height: 100vh;
	display: flex;
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