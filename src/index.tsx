import React, { StrictMode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'state/store';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
	padding: 0;
}
body {
    overflow: hidden auto;
}

h1, h2, h3, h4, h5, h6 {
	font-family: ${theme.fontFamily.title};
}
html {
    font-family: ${theme.fontFamily.primary};
}
`;

export const wrapRootElement = ({ element }: any) => (
	<StrictMode>
		<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{element}
		</ThemeProvider>
		</Provider>
	</StrictMode>
);