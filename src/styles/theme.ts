export type Colors = keyof typeof colors;
export type Background = keyof typeof background;

const colors = {
	primary: '#E5E5E5',//light grey
	secondary:  '#E7FAFE',//light blue
	accent: '#FF6363',//orange
	white: '#ffffff',
	black: '#000000',
};

const background = {
	primaryGradient: 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);',
	greenGradient: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
	redGradient: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)',
	greyGradient: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);',
	yellowGradient: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);',
	blackGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);'
}

export const theme = {
	colors,
	background, 
	fontFamily: {primary: 'Inter'},
	fontSizes: {
		fs64: '4rem',
		fs48: '3rem',
		fs24: '1.5rem',
		fs18: '1.125rem',
		fs16: '1rem',
		fs14: '0.875rem',
	},
	fontWeights: {
		fw600: 600,
		fw500: 500,
		fw400: 400, 
	},
	lineHeight: {
		lh: '1.3em',
	},
	breakpoints: ['24rem', '47rem', '90rem'] as unknown as Breakpoints,
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
		s72: '4..5rem',
		s80: '5rem',

	},
	radii: {
		radius60: '3.75rem',
		radius30: '1.875rem',
		radius24: '1.5rem',
		radius20: '1.25rem',
		radius16: '1rem',
		circle: '50%',
	},
	borders: {
		primary: '1px solid rgba(0, 0, 0, 0.1);'
	},
	typography: {
		h1: {
			fonstSize: '5rem',
			fontSizeMobile: '4rem',
			fontWeight: 500,
			lineHeight: '1.3em',
		},
		h2: {
			fonstSize: '4.5rem',
			fontSizeMobile: '3.5rem',
			fontWeight: 500,
			lineHeight: '1.3em',
		},
		h3: {
			fonstSize: '3.5rem',
			fontSizeMobile: '2.5rem',
			fontWeight: 600,
			lineHeight: '1.3em',
		},
		h4: {
			fonstSize: '3rem',
			fontSizeMobile: '2rem',
			fontWeight: 600,
			lineHeight: '1.3em',
		},
		h5: {
			fonstSize: '2.5rem',
			fontSizeMobile: '1.625rem',
			fontWeight: 600,
			lineHeight: '1.3em',
		},
		h6: {
			fonstSize: '2rem',
			fontSizeMobile: '1.5rem',
			fontWeight: 600,
			lineHeight: '1.3em',
		},
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
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
	_: T;
	lmobile: T;
	ltablet: T;
	desktop: T;
};