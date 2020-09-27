import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const ITEM_HEIGHT = 40;

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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    height: ITEM_HEIGHT,
    backgroundColor: colors.backgroundSecondary,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    height: 25,
    width: 25,
    borderRadius: 12.5,
  },
  arrowLeft: {
    marginLeft: 5,
  },
  arrowRight: {
    transform: [{ rotate: '180deg' }],
    marginRight: 5,
  },
});
