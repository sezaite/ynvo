import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper } from 'components';
import heroPic from '../../assets/images/hero-min.jpg';
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { navigate } from 'gatsby';
import { About, Features, Hero, Reviews } from './sections';
import julep from '../../assets/images/julep.webp';
import { StaticImage } from 'gatsby-plugin-image';



const Home: React.FC = () => {
	return(
	<>
		<Hero></Hero>
		<About></About>
		<Features></Features>
		<Reviews></Reviews>
	</>
	)
};

export default Home;


