//@flow
import { type TextStyle } from '~/types';

type IconTypes = 'MaterialIcons' | 'MaterialCommunityIcons';

export type IconProps = {
  type: IconTypes,
  name: any, // should be string
  onPress?: () => void,
  style?: TextStyle,
  size?: number,
  color?: string,
  disabledColor?: string,
  disabled?: boolean,
};
