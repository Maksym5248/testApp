// @flow
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { type IconProps } from './types';

const icons = {
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
};

export const Icon = ({
  type = 'MaterialIcons',
  name = 'arrow-back',
  size = 22,
  disabled = false,
  color = 'black',
  disabledColor = 'grey',
  style,
  onPress,
}: IconProps) => {
  const CurrentIcon = icons[type];

  return (
    <CurrentIcon
      name={name}
      size={size}
      style={style}
      color={disabled ? disabledColor : color}
      onPress={disabled ? undefined : onPress}
    />
  );
};
