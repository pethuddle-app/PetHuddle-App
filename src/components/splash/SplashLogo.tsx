import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { SplashConstants } from '../../constants/splash';
import { AppColors } from '../../theme/colors';

export interface SplashLogoProps {
  /** Optional entrance scale animation. */
  scale?: SharedValue<number>;
  /** Optional entrance fade animation. */
  fade?: SharedValue<number>;
  /** Vertical float displacement for subtle ambient motion. */
  floatOffset?: SharedValue<number> | number;
  /** Rendered dimensions (width & height) for the logo. Defaults to 185. */
  size?: number;
  /** Test ID for automated testing. */
  testID?: string;
}

/**
 * Animated 3D Pills Capsule Logo with smooth entrance scale and ambient float.
 */
export const SplashLogo: React.FC<SplashLogoProps> = ({
  scale,
  fade,
  floatOffset = 0,
  size = SplashConstants.defaultLogoSize,
  testID = 'splash-logo',
}) => {
  const [hasError, setHasError] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    const opacityValue = fade !== undefined ? Math.max(0, Math.min(1, fade.value)) : 1;
    const scaleValue = scale !== undefined ? scale.value : 1;
    const translateYValue =
      typeof floatOffset === 'object' && floatOffset !== null && 'value' in floatOffset
        ? (floatOffset as SharedValue<number>).value
        : typeof floatOffset === 'number'
        ? floatOffset
        : 0;

    return {
      opacity: opacityValue,
      transform: [{ translateY: translateYValue }, { scale: scaleValue }],
    };
  });

  return (
    <Animated.View
      testID={testID}
      style={[
        styles.container,
        { width: size, height: size },
        animatedStyle,
      ]}
    >
      {!hasError ? (
        <Animated.Image
          source={SplashConstants.logoAsset}
          style={styles.image}
          resizeMode="contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <View style={[styles.fallback, { borderRadius: size / 2 }]} />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    width: '100%',
    height: '100%',
    backgroundColor: AppColors.primary,
  },
});
