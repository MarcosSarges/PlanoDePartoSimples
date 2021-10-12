/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Modules from './modules';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import Theme from './assets/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Modules />
    </ThemeProvider>
  );
};

export default App;
