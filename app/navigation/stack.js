import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { Icon, Text } from '~/components';
import { screens } from '~/constants';
import { ListSheet } from '~/screens';
import { styles, colors } from '~/styles';

const Stack = createNativeStackNavigator();

const params = {
  initialRouteName: screens.ListSheet,
  screenOptions: {
    headerLeft: () => (
      <Icon
        size={16}
        color={colors.textSecondary}
        containerStyle={styles.backButton}
      />
    ),
    headerCenter: () => (
      <Text type="title" color={colors.textSecondary} text="AVAILABILITIES" />
    ),
    headerStyle: styles.headerStyle,
  },
  routes: [
    {
      name: screens.ListSheet,
      component: ListSheet,
    },
  ],
};

export const StackNavigation = () => {
  const { routes, ...rest } = params;

  return (
    <Stack.Navigator {...rest}>
      {routes.map((el) => (
        <Stack.Screen key={el.name} {...el} />
      ))}
    </Stack.Navigator>
  );
};
