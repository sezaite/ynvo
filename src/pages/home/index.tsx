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
			HOMEPAGE
			</Container>
		</SectionWrapper>
	);
};

export default Home;