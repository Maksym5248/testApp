//@flow
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { colors } from '~/styles';

import { Icon } from '../Icon';
import { Text } from '../Text';

import { s } from './styles';
import { ModalPiker } from './ModalPiker';
import { type SelectProps } from './types';

export const Select = ({
  value,
  options,
  onChangeSelected,
  maxHeight = 200,
}: SelectProps) => {
  const [isVisibleModal, setVisibleModal] = useState(false);

  const toggleVisibleModal = () => {
    setVisibleModal(!isVisibleModal);
  };

  return (
    <>
      <TouchableOpacity style={s.container} onPress={toggleVisibleModal}>
        <Text text={value} />
        <Icon style={s.icon} size={13} color={colors.primaryLight} />
      </TouchableOpacity>
      <ModalPiker
        options={options}
        value={value}
        isVisible={isVisibleModal}
        onClose={toggleVisibleModal}
        onChangeSelected={onChangeSelected}
        maxHeight={maxHeight}
      />
    </>
  );
};
