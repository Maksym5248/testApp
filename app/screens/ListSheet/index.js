// @flow
import React from 'react';
import { View, Text } from 'react-native';

import { type Navigation } from '~/types';
import { Icon } from '~/components';

import s from './styles';

type ListSheetProps = {
  navigation: Navigation,
};

export const ListSheet = ({ navigation }: ListSheetProps) => {
  return (
    <View style={s.container}>
      <Text>ListSheet</Text>
      <Icon name="plus-thick" />
    </View>
  );
};
