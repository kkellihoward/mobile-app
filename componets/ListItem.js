import { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  gray: '#433E3E',
  postGray: '#696868',
  OnClickColor: '#B28FE5',
  cardColor: '#9969DD',
};
const { width, height } = Dimensions.get('window');
const LIST_ITEM_HEIGHT = 70;
const TRANSLATE_X_THRESHOLD = -width * 0.2;

const ListItem = ({ event, onDismiss, simultaneousHandlers }) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);
  const pangGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldDismissed) {
        translateX.value = withTiming(-width);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(event);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rEventContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return { opacity };
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  return (
    <Animated.View style={[styles.eventContainer, rEventContainerStyle]}>
      <Animated.View style={[styles.eventIcon, rIconContainerStyle]}>
        <Ionicons
          name="ios-checkmark-circle-outline"
          size={LIST_ITEM_HEIGHT * 0.5}
          color="green"
        />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={pangGesture}
      >
        <Animated.View style={[styles.event, rStyle]}>
          <Text style={styles.eventTitle}>{event.title}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  eventContainer: {
    width: '100%',
    alignItems: 'center',
  },
  event: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    backgroundColor: 'red',

    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: COLORS.cardColor,
    borderRadius: 10,
    shadowOpacity: 0.09,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  eventTitle: {
    fontSize: 18,
    color: COLORS.white,
  },
  eventIcon: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItem;
