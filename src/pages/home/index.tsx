import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Box, Container, Image, SectionWrapper, Typography, FlexWrapper, GridWrapper } from 'components';
import { useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { StaticImage } from 'gatsby-plugin-image';
import { ThemeProvider } from 'styled-components/macro';



const Home: React.FC = () => {
	const { isMobile } = useQuery();

	return (
		<ThemeProvider theme={theme}>
		<SectionWrapper>
			<Container backgroundColor='accent'>
			<GridWrapper
				backgroundColor={{ _: 'secondary', ltablet: 'primary' }}
				minHeight={isMobile ? '50%' : '100vh'}
				minWidth='100vw'
				
			>

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
			
			</FlexWrapper>
			</Container>
		</SectionWrapper>
		</ThemeProvider>
	);
};

export default Home;