import React from 'react';

import { ThemeProvider as ChakraThemeProvider, ColorModeProvider, CSSReset, ITheme } from '@chakra-ui/core';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import theme from '../../styles/theme';

const config = (theme: ITheme) => ({
	light: {
		color: theme.colors.gray[700],
		bg: theme.colors.gray[300],
		borderColor: theme.colors.gray[400],
		placeholderColor: theme.colors.gray[600]
	},
	dark: {
		color: theme.colors.whiteAlpha[900],
		bg: theme.colors.gray[800],
		borderColor: theme.colors.whiteAlpha[300],
		placeholderColor: theme.colors.whiteAlpha[400]
	}
});

const ThemeContainer: React.FC = ({ children }) => {
	return (
		<ChakraThemeProvider>
			<ColorModeProvider value="light" >
				<EmotionThemeProvider theme={theme}>
					<CSSReset config={config} />
					{children}
				</EmotionThemeProvider>
			</ColorModeProvider>
		</ChakraThemeProvider>
	);
}

export default ThemeContainer;