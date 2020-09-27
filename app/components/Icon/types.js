//@flow
import { type TextStyle, type ViewStyle } from '~/types';

type IconTypes = 'MaterialIcons' | 'MaterialCommunityIcons';

export type IconProps = {
  type?: IconTypes,
  name?: any, // should be string
  onPress?: () => void,
  style?: TextStyle,
  containerStyle?: ViewStyle,
  size?: number,
  color?: string,
  disabledColor?: string,
  disabled?: boolean,
};
