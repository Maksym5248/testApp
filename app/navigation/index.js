import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { screens } from '~/constants';
import { StackNavigation } from './stack';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation name={screens.Stack} />
    </NavigationContainer>
  );
};
