export type Colors = keyof typeof colors;
export type Background = keyof typeof background;

const colors = {
	primary: '#A1BD94',//light green
	secondary: '#F8FCCB', //very light green 
	light: '#FAE5C8',
	accent: '#CB6551',//peach
	text: '#071A13',//darkgreen
	white: '#ffffff',
	black: '#131515',
	darkgreen: '#386A5A',//teal muted
};

const background = {
	primaryGradient: 'linear-gradient(291deg, rgba(255,255,255,0) 0%, rgba(7,26,19,1) 100%)',
	blackGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);'
}

export const theme = {
	colors,
	background, 
	fontFamily: {
		title: 'Raleway',
		titleSecondary: 'Yeseva One',
		primary: 'Roboto',
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
	},
	lineHeight: {
		lh: '1.3em',
	},
	breakpoints: ['24rem', '47rem', '62rem', '90rem'] as unknown as Breakpoints,
	space: {
		s8: '0.5rem',
		s10: '0.625rem',
		s13: '0.8125rem',
		s16: '1rem',
		s20: '1.25rem',
		s24: '1.5rem',
		s30: '1.875rem',
		s40: '2.5rem',
		s48: '3rem',
		s60: '3.75rem',
		s64: '4rem',
		s72: '4..5rem',
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
		accent: '1px solid #FF6363;' 
	},
	typography: {
		h1: {
			fontSize: '4.5rem',
			fontSizeTablet: '4rem',
			fontSizeMobile: '3rem',
			fontWeight: 900,
			lineHeight: '1.3em',
		},
		h2: {
			fontSize: '4.5rem',
			fontSizeTablet: '4rem',
			fontSizeMobile: '3rem',
			fontWeight: 500,
			lineHeight: '1.3em',
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
			fontWeight: 600,
			lineHeight: '1.3em',
		},
		h5: {
			fontSize: '2.5rem',
			fontSizeMobile: '1.625rem',
			fontWeight: 600,
			lineHeight: '1.3em',
		},
		h6: {
			fontSize: '2rem',
			fontSizeMobile: '1.5rem',
			fontWeight: 600,
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
			lineHeight: '1.3em',
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
	opacity: {
		1: 1,
		60: 0.6,
	},
	zIndex: {
		base: 0,
		upperElement: 1,
		modal: 10,
		loader: 11,
	}
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.ltablet = Breakpoints[2];
Breakpoints.desktop = Breakpoints[3];

type Breakpoints<T = string> = {
	_: T;
	lmobile: T;
	tablet: T;
	ltablet: T;
	desktop: T;
};