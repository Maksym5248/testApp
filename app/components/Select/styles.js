import { StyleSheet } from 'react-native';
import { colors } from '~/styles';
import { device } from '~/utils';

const ITEM_HEIGHT = 35;

export const s = StyleSheet.create({
  container: {
    height: 35,
    flex: 1,
    borderColor: colors.inert,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    transform: [{ rotate: '-90deg' }],
    marginTop: -4,
  },

  // ModalPiker
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  backgroundButton: {
    height: device.windowHeight,
    width: device.windowWidth,
  },
  content: {
    backgroundColor: colors.backgroundPrimary,
    padding: 20,
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    marginBottom: 10,
    borderRadius: ITEM_HEIGHT / 2,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  cancelContainer: {
    borderTopColor: colors.inert,
    borderTopWidth: 1,
    justifyContent: 'center',
    // borderColorTop: colors.inert,
    height: 50,
  },
});
