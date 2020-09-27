import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  selectContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  plusButton: {
    backgroundColor: colors.primaryLight,
    height: 35,
    width: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
