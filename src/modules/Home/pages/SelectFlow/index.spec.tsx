import React from 'react';
import { render } from '@testing-library/react-native';
import SelectFlow from './';
import wrapperTheme from '../../../../../jest/helpers/wrapperTheme';

describe('Run', () => {
  it('renders correctly', () => {
    render(wrapperTheme(<SelectFlow />));
    expect(1).toBe(1);
  });
});
