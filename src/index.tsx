import React, { StrictMode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { persistor, store } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
	padding: 0;
}
body {
    overflow-x: hidden;
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}


h1, h2, h3, h4, h5, h6 {
	font-family: ${theme.fontFamily.title};
}

.swiper-pagination-bullet-active {
	background: ${theme.colors.accent}!important;
}

.swiper-pagination {
	bottom: 0!important;
}

.swiper-wrapper {
	align-items: center;
}

`;

export const wrapRootElement = ({ element }: any) => (
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					{element}
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</StrictMode>
);