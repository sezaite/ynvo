import heroPic from 'assets/images/hero.jpg';
import smoke from 'assets/images/smoke.png';
import julep from 'assets/images/julep.webp';
import profilePic from 'assets/images/user.jpg'
import profilePic2 from 'assets/images/profilePic2.jpg',
import profilePic3 from 'assets/images/profilePic2.jpg'


export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	heroPic,
	smoke,
	julep,
	profilePic,
	profilePic2,
	profilePic3,
};