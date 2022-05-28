import { Navigation } from 'components/layout/Nav';
import React from 'react';
import { About, Features, Hero, Reviews } from './sections';




const Home: React.FC = () => {
	return(
	<>
		<Navigation></Navigation>
		<Hero></Hero>
		<About></About>
		<Features></Features>
		<Reviews></Reviews>
	</>
	)
};

export default Home;


