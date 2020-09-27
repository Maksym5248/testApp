// @flow
import React, { Fragment } from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { device } from '~/utils';

import { type IconProps } from './types';

const icons = {
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
};

export const Icon = ({
  type = 'MaterialIcons',
  name = device.isAndroid ? 'arrow-back' : 'arrow-back-ios',
  size = 22,
  disabled = false,
  color = 'black',
  disabledColor = 'grey',
  style,
  containerStyle,
  onPress,
}: IconProps) => {
  const CurrentIcon = icons[type];
  const Container = containerStyle ? View : Fragment;

  const containerProps = containerStyle ? { style: containerStyle } : {};

  return (
    <Container {...containerProps}>
      <CurrentIcon
        name={name}
        size={size}
        style={style}
        color={disabled ? disabledColor : color}
        onPress={disabled ? undefined : onPress}
      />
    </Container>
  );
};
