import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Box, Container, Image, SectionWrapper, Typography, FlexWrapper, GridWrapper } from 'components';
import { useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { StaticImage } from 'gatsby-plugin-image';
import { ThemeProvider } from 'styled-components/macro';
import { InputWrap } from 'components/Input';



const Home: React.FC = () => {
	const { isMobile } = useQuery();
	

	return (
		<SectionWrapper>
			<Container backgroundColor='accent'>
			<GridWrapper
				backgroundColor={{ _: 'secondary', ltablet: 'primary' }}
				minHeight={isMobile ? '50%' : '100vh'}
				minWidth='100vw'
				
			>
				<InputWrap id="test-input" type="text" placeholder='test test test' label="Test input"> </InputWrap>
				<InputWrap border="3px solid red" id="test-input-number" type="number" placeholder='74125' label="Test input"> </InputWrap>
				<Typography type='h1' textAlign='center'>
					fooood
				</Typography>
				<Image maxHeight='6.25rem' src='gatsbyImg' alt='gatsby' />
				<StaticImage
					src='../../assets/images/icon.png'
					alt='studenciukai'
					placeholder='tracedSVG'
					draggable='false'
					style={{
						maxWidth: '500px',
						margin: '0 auto',
					}}
				/>
			
			</GridWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default Home;