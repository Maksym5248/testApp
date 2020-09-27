// @flow
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { format } from 'date-fns';

import { type Navigation } from '~/types';
import { Text, Select, Icon } from '~/components';
import { colors } from '~/styles';

import { s } from './styles';
import { mockData } from './mockData';

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
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const isAvailabilities = currentOption === options[0];
          const backgroundColor =
            index % 2 ? colors.backgroundSecondary : colors.backgroundPrimary;
          return (
            <View style={[s.itemContainer, { backgroundColor }]}>
              <View style={s.itemContainerLeft}>
                <Text type="title">{format(item.date, 'dd')}</Text>
                <Text color={colors.textInert}>
                  {format(item.date, 'EEEE')}
                </Text>
              </View>
              {isAvailabilities && (
                <View style={s.itemContainerRight}>
                  <View style={s.dot} />
                  <Text>{item.availabilities}</Text>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};
