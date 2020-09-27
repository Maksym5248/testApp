import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  backButton: {
    backgroundColor: colors.primaryLight,
    borderRadius: 15,
    height: 30,
    width: 30,
    paddingLeft: 7,
    paddingTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    backgroundColor: colors.primary,
  },
});
