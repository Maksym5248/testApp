import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { screens } from '~/constants';
import { ListSheet } from '~/screens';

const Stack = createNativeStackNavigator();

const params = {
  initialRouteName: screens.ListSheet,
  routes: [
    {
      name: screens.ListSheet,
      component: ListSheet,
    },
  ],
};

export const StackNavigation = () => {
  const { routes, ...restParams } = params;

  return (
    <Stack.Navigator {...restParams}>
      {routes.map((el) => (
        <Stack.Screen key={el.name} {...el} />
      ))}
    </Stack.Navigator>
  );
};
