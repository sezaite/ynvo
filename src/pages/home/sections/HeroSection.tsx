import React from 'react';
import { Box, Container, Typography, FlexWrapper } from 'components';
import heroPic from '../../../assets/images/hero-min.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';



export const Hero: React.FC = () => {

	const handleClick = () => {
		navigate('/quiz'); //navigate to edit page
	}
	
	return (
		<SectionWithFullImg backgroundImage={heroPic}>
			<Container height='100%'>
				<FlexWrapper justifyContent="flex-end" alignItems="center" height="100%">
					<Box maxWidth={{ _: '100%', tablet: '70%', ltablet: '50%' }}>
						<Typography type="h1" color='primary'>Your next viral obsession</Typography>
						<Typography mt="s8" mb="s60" type='body20' color='primary'>We'll help you to figure out what to ware based on your current mood</Typography>
						<DefaultButton onClick={handleClick}>Start a quiz</DefaultButton>
					</Box>
				</FlexWrapper>
			</Container>
		</SectionWithFullImg>
	);
};

