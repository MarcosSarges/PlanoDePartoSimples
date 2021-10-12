import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Theme from '../../src/assets/theme';

const wrapperTheme = children => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default wrapperTheme;
