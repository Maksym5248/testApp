//@flow
import * as React from 'react';
import { type TextStyle } from '~/types';

export type TextProps = {
  type?: 'title' | 'regular',
  text?: string,
  children?: React.Node,
  style?: TextStyle,
  color?: string,
  size?: number,
};
