// @flow
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';

import { RootNavigation } from './navigation';
import { colors } from './styles';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundPrimary}
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
