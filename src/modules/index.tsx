import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Menu from './Menu';

const { Navigator, Screen } = createNativeStackNavigator();

const Modules: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Menu" component={Menu} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Modules;
