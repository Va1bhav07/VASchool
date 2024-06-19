import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#212529')(props),
      lineHeight: 'base',
    },
  }),
};

const colors = {
  brand: {
    700: '#2b3035',
    900: '#212529',
  },
};

// 3. extend the theme
const theme = extendTheme({ config, styles, colors });

export default theme;
