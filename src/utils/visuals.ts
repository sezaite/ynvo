import heroPic from 'assets/images/hero.jpg';
import smoke from 'assets/images/smoke.png';
import julep from 'assets/images/julep.webp';
import profilePic from 'assets/images/user.jpg';
import profilePic2 from 'assets/images/profilePic2.jpg';
import profilePic3 from 'assets/images/profilePic3.jpg';
import star from 'assets/images/star.svg'
import starGrey from 'assets/images/star-grey.svg';
import shape1 from 'assets/images/shape1.svg';
import shape2 from 'assets/images/shape2.svg'
import tick from 'assets/images/tick.svg';
import tickCircle from 'assets/images/tick-circle.svg';
import shadows from 'assets/images/shadows.jpg';
import haze from 'assets/images/haze.webp';
import heart from 'assets/images/heart.svg';
import instagram from 'assets/images/insta.svg';
import message from 'assets/images/message.svg'
import dummy from 'assets/images/dummy.jpg';
import shark from 'assets/images/shark.webp';
import logo from 'assets/images/logo-abstract.svg';
import lines from 'assets/images/lines.svg';
import animalprint from 'assets/images/animalprint.png';
import naomi from 'assets/images/naomi.webp';
import camel from 'assets/images/camel2.jpeg';
import paw from 'assets/images/paw.png';


export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	heroPic,
	smoke,
	julep,
	profilePic,
	profilePic2,
	profilePic3,
	star,
	starGrey,
	shape1,
	shape2,
	tick,
	tickCircle,
	shadows,
	haze,
	heart,
	instagram,
	message,
	dummy,
	shark,
	logo,
	lines,
	animalprint,
	naomi, 
	camel,
	paw
};