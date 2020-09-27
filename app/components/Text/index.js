// @flow
import React from 'react';
import { Text as TextRN } from 'react-native';

import { type TextProps } from './types';
import { s } from './styles';

export const Text = ({
  text,
  children,
  type = 'regular',
  color,
  size = 14,
  style,
}: TextProps) => {
  const typeStyle = s[type];

  return (
    <TextRN style={[typeStyle, style, { color, fontSize: size }]}>
      {text || children}
    </TextRN>
  );
};
