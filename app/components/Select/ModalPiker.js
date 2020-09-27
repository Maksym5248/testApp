//@flow
import React, { useRef, useEffect, memo } from 'react';
import { Modal, Animated, View, TouchableOpacity } from 'react-native';
import {
  TouchableWithoutFeedback,
  PanGestureHandler,
  State,
  FlatList,
} from 'react-native-gesture-handler';
import { useSafeArea } from 'react-native-safe-area-context';

import { colors } from '~/styles';
import { device } from '~/utils';

import { Text } from '../Text';

import { s } from './styles';
import { type ModalPikerProps } from './types';

const { Value, timing, event } = Animated;

const isMoveEnd = (state) => State.BEGAN !== state && State.ACTIVE !== state;

const offset = {
  HIDDEN: device.windowHeight,
  VISIBLE: 0,
};

const time = 100;

export const ModalPiker = memo<ModalPikerProps>(
  ({
    value,
    options,
    isVisible,
    onClose,
    onChangeSelected,
    maxHeight,
  }: ModalPikerProps) => {
    const self = useRef({ offsetY: new Value(offset.HIDDEN) }).current;
    const safeArea = useSafeArea();

    const backgroundStyles = {
      opacity: self.offsetY.interpolate({
        inputRange: [offset.VISIBLE, offset.HIDDEN],
        //$FlowFixMe
        outputRange: [0.4, 0],
        extrapolate: 'clamp',
      }),
    };

    const contentStyles = {
      paddingBottom: safeArea.bottom,
      transform: [
        {
          translateY: self.offsetY.interpolate({
            inputRange: [offset.VISIBLE, offset.HIDDEN],
            //$FlowFixMe
            outputRange: [offset.VISIBLE, offset.HIDDEN],
            extrapolate: 'clamp',
          }),
        },
      ],
    };

    useEffect(() => {
      if (isVisible) {
        timing(self.offsetY, {
          toValue: offset.VISIBLE,
          time,
          useNativeDriver: true,
        }).start();
      }
    }, [isVisible, self.offsetY]);

    const _onClose = () => {
      timing(self.offsetY, {
        toValue: offset.HIDDEN,
        time,
        useNativeDriver: true,
      }).start(() => {
        !!onClose && onClose();
      });
    };

    const _onChangeSelected = (newValue) => {
      timing(self.offsetY, {
        toValue: offset.HIDDEN,
        time,
        useNativeDriver: true,
      }).start(() => {
        !!onChangeSelected && onChangeSelected(newValue);
        !!onClose && onClose();
      });
    };

    const onHandlerStateChange = (e) => {
      const {
        nativeEvent: { state, translationY },
      } = e;

      if (isMoveEnd(state)) {
        const toValue = translationY > 30 ? offset.HIDDEN : offset.VISIBLE;

        timing(self.offsetY, {
          toValue,
          time,
          useNativeDriver: true,
        }).start(() => {
          if (toValue === offset.HIDDEN) {
            !!onClose && onClose();
          }
        });
      }
    };

    return (
      <Modal animationType="none" visible={isVisible} transparent={true}>
        <View style={s.modalContainer}>
          <Animated.View style={[s.background, backgroundStyles]}>
            <TouchableWithoutFeedback onPress={_onClose}>
              <View style={s.backgroundButton} />
            </TouchableWithoutFeedback>
          </Animated.View>
          <PanGestureHandler
            onHandlerStateChange={onHandlerStateChange}
            onGestureEvent={event(
              [{ nativeEvent: { translationY: self.offsetY } }],
              {
                useNativeDriver: true,
              },
            )}>
            <Animated.View style={[s.content, contentStyles, { maxHeight }]}>
              <FlatList
                bounces={false}
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                  const isSelected = item === value;

                  return (
                    <TouchableOpacity
                      onPress={() => _onChangeSelected(item)}
                      style={[
                        s.itemContainer,
                        {
                          backgroundColor: isSelected
                            ? colors.primaryLight
                            : colors.backgroundPrimary,
                        },
                      ]}>
                      <Text
                        color={
                          isSelected ? colors.textSecondary : colors.textPrimary
                        }>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                ListFooterComponent={
                  <TouchableOpacity
                    style={s.cancelContainer}
                    onPress={_onClose}>
                    <Text color={colors.primaryLight}>Cancel</Text>
                  </TouchableOpacity>
                }
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </Modal>
    );
  },
);
