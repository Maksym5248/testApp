// @flow
import React, { useState } from 'react';
import { View } from 'react-native';

import { type Navigation } from '~/types';
import { Text, Select, Icon } from '~/components';
import { colors } from '~/styles';

import { s } from './styles';

type ListSheetProps = {
  navigation: Navigation,
};

const options = ['Availabilities', 'Preferences'];

export const ListSheet = ({ navigation }: ListSheetProps) => {
  const [currentOption, setCurrentOption] = useState(options[0]);

  return (
    <View style={s.container}>
      <View style={s.selectContainer}>
        <Select
          options={options}
          value={currentOption}
          onChangeSelected={setCurrentOption}
        />
        <Icon
          type="MaterialCommunityIcons"
          name="plus"
          size={15}
          color={colors.textSecondary}
          containerStyle={s.plusButton}
        />
      </View>
      <View style={s.dateContainer}>
        <Icon
          name="arrow-back-ios"
          size={10}
          color={colors.textSecondary}
          containerStyle={s.arrowContainer}
          style={s.arrowLeft}
        />
        <Text>March 2020</Text>
        <Icon
          name="arrow-back-ios"
          size={10}
          color={colors.textSecondary}
          containerStyle={s.arrowContainer}
          style={s.arrowRight}
        />
      </View>
    </View>
  );
};
