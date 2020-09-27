import { Platform, Dimensions } from 'react-native';

export const device = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
};
