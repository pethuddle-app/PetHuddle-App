import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { SplashConstants } from '../../constants/splash';
import { AppColors } from '../../theme/colors';

export interface SplashBackgroundProps {
  /** Optional opacity animation value driving the entrance fade. */
  opacity?: SharedValue<number>;
  /** Optional scale animation value driving the subtle zoom-out. */
  scale?: SharedValue<number>;
  /** Test ID for automated testing. */
  testID?: string;
}

/**
 * Full-screen clean background displaying the sunny sky and cuddled pets
 * without any artificial gradient or tint overlays, rendered with fallback
 * sky blue to eliminate any initial white screen flash.
 *
 * Excluded from accessibility semantics since it is purely decorative.
 */
export const SplashBackground: React.FC<SplashBackgroundProps> = ({
  opacity,
  scale,
  testID = 'splash-background',
}) => {
  const { width, height } = useWindowDimensions();

  const scaleFactor = SplashConstants.backgroundScale;
  const yShift = height * SplashConstants.backgroundYShiftFactor;

  const extraW = (width * (scaleFactor - 1)) / 2;
  const extraH = (height * (scaleFactor - 1)) / 2;

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity !== undefined ? opacity.value : 1,
      transform: [{ scale: scale !== undefined ? scale.value : 1 }],
    };
  });

  return (
    <View
      testID={testID}
      style={styles.container}
      accessible={false}
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants"
    >
      <View
        style={[
          styles.imageWrapper,
          {
            top: -extraH + yShift,
            bottom: -extraH - yShift,
            left: -extraW,
            right: -extraW,
          },
        ]}
      >
        <Animated.Image
          source={SplashConstants.backgroundAsset}
          style={[styles.image, animatedImageStyle]}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: AppColors.splashSky,
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
