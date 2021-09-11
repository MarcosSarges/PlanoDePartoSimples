/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from './App';
import { render } from 'react-native-testing-library';

describe('Run', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
