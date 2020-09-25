// @flow
import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';

import { RootNavigation } from './navigation';

enableScreens();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootNavigation />
    </>
  );
};

export default App;
