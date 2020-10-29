import { theme, DefaultTheme } from '@chakra-ui/core';

const CustomTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Montserrat, system-ui,sans-serif',
    heading: 'Montserrat, system-ui,sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    thin: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#800080',
      600: '#670067',
      700: '#4d004d'
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  }
}

export default CustomTheme;
