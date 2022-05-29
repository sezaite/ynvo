export type Colors = keyof typeof colors;
export type Background = keyof typeof background;

const colors = {
	primary: '#E5E5E5',//light grey
	// secondary: '#A5C099', //light green 
	secondary: '#57704b',
	selected: '#577a46',
	accent: '#CF9EAC',//dirty pink
	dark: '#1f1d1d',//dark
	light: '#fdfbec',
	white: '#ffffff',
	black: '#131515',
	transparent: 'transparent',
	
	
};

const background = {
	accentGradient: 'linear-gradient(291deg, rgba(207,158,172,1) 0%, rgba(31,29,29,0.958420868347339) 100%)',
	blackGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
	softGradient: 'linear-gradient(291deg, rgba(207,158,172,0.8015581232492998) 0%, rgba(229,229,229,0.8519782913165266) 100%);',
	secondaryGradient: 'linear-gradient(180deg, rgba(165,192,153,1) 0%, rgba(229,229,229,1) 100%)',
	whiteGradient: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%);',
	lightDirtyGradient: ' linear-gradient(180deg, rgba(224,212,212,0.6839110644257703) 0%, rgba(229,229,229,1) 100%);',
}	

export const theme = {
	colors,
	background, 
	fontFamily: {
		title: 'Playfair Display',
		titleSecondary: 'Yeseva One',
		primary: 'Poppins',
		secondary: 'Work Sans'
	},
	fontSizes: {
		fs64: '4rem',
		fs48: '3rem',
		fs24: '1.5rem',
		fs18: '1.125rem',
		fs16: '1rem',
		fs14: '0.875rem',
	},
	fontWeights: {
		fw900: 900,
		fw600: 600,
		fw500: 500,
		fw400: 400, 
		fw300: 300, 
	},
	lineHeights: {
		lhReg: '1.3em',
		lh1: '1em',
		lh0: '0',
	},
	breakpoints: ['24rem', '35rem', '47rem', '62rem', '90rem'] as unknown as Breakpoints,
	space: {
		sTinyMinus: '-0.7rem',
		auto: 'auto',
		s0: '0',
		s8: '0.5rem',
		s10: '0.625rem',
		s12: '0.75rem',
		s14: '0.875rem',
		s16: '1rem',
		s20: '1.25rem',
		s24: '1.5rem',
		s30: '1.875rem',
		s40: '2.5rem',
		s48: '3rem',
		s56: '3.5rem',
		s60: '3.75rem',
		s64: '4rem',
		s72: '4.5rem',
		s80: '5rem',

	},
	radii: {
		radius60: '3.75rem',
		radius30: '1.875rem',
		radius24: '1.5rem',
		radius20: '1.25rem',
		radius16: '1rem',
		radius8: '0.5rem',
		radius4: '0.25rem',
		circle: '50%',
	},
	borders: {
		primary: '1px solid rgba(0, 0, 0, 0.1);',
		accent: '1px solid #CF9EAC;' 
	},
	typography: {
		jumbo: {
			fontSize: '7rem',
			lineHeight: '1em',
			fontWeight: 700,
			fontSizeMobile: "6rem",
		},
		h1: {
			fontSize: '4.125rem',
			fontSizeDesktop: '3.8rem',
			fontSizeTablet: '3.4rem',
			fontSizeMobile: '3rem',
			fontWeight: 400,
			lineHeight: '1.18em',
		},
		h2: {
			fontSize: '3.8rem',
			fontSizeTablet: '3.4rem',
			fontSizeMobile: '3rem',
			fontWeight: 400,
			lineHeight: '1.18em',
		},
		h3: {
			fontSize: '3.5rem',
			fontSizeMobile: '2.5rem',
			fontWeight: 600,
			lineHeight: '1.3em',
		},
		h4: {
			fontSize: '3rem',
			fontSizeMobile: '2rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		},
		h5: {
			fontSize: '1.5rem',
			fontSizeMobile: '1rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		},
		h6: {
			fontSize: '1rem',
			fontSizeMobile: '0.6rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		},
		body20: {
			fontSize: '1.25rem',
			fontSizeMobile: '1rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		},
		body16: {
			fontSize: '1rem',
			fontSizeMobile: '0.875rem',
			fontWeight: 400,
			lineHeight: '1.875em',
		},
		body14: {
			fontSize: '0.875rem',
			fontSizeMobile: '0.75rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		},
		caption12: {
			fontSize: '0.75rem',
			fontSizeMobile: '0.5rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		},
		label12: {
			fontSize: '0.75rem',
			fontSizeMobile: '0.5rem',
			fontWeight: 400,
			lineHeight: '1.3em',
		}
	},
	letterSpacing: {
		normal: 0,
		theme: '0.02em'
	},

	opacity: {
		full: 1,
		op60: 0.6,
	},
	zIndices: {
		base: 0,
		upperElement: 4,
		topElement: 6,
		modal: 10,
		loader: 11,
	}
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.mobile = Breakpoints[1];
Breakpoints.tablet = Breakpoints[2];
Breakpoints.ltablet = Breakpoints[3];
Breakpoints.desktop = Breakpoints[4];

type Breakpoints<T = string> = {
	_: T;
	lmobile: T;
	tablet: T;
	ltablet: T;
	desktop: T;
};