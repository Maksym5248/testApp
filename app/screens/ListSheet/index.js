// @flow
import React from 'react';
import { View } from 'react-native';

import { type Navigation } from '~/types';
import { Text } from '~/components';

import { s } from './styles';

type ListSheetProps = {
  navigation: Navigation,
};

export const ListSheet = ({ navigation }: ListSheetProps) => {
  return (
    <View style={s.container}>
      <Text>ListSheet</Text>
    </View>
  );
};
