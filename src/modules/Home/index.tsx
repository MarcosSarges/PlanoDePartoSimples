import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import SelectFlow from './pages/SelectFlow';

const { Navigator, Screen } = createStackNavigator();

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding-top: ${`${getStatusBarHeight()}px`};
  padding-bottom: ${`${getBottomSpace()}px`};
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Navigator
        initialRouteName="SelectFlow"
        screenOptions={{ header: () => false }}>
        <Screen name="SelectFlow" component={SelectFlow} />
      </Navigator>
    </Container>
  );
};

export default Home;
