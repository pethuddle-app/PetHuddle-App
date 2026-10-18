import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useReducedMotion,
} from 'react-native-reanimated';
import { SplashConstants } from '../../constants/splash';
import { AppColors } from '../../theme/colors';
import { AppSpacing } from '../../theme/spacing';
import { AppTypography } from '../../theme/typography';

export interface SplashContentProps {
  /** Opacity fade animation for the main title */
  titleFade?: SharedValue<number>;
  /** Spring scale animation for the main title */
  titleScale?: SharedValue<number>;
  /** Slide transition vertical offset for the main title */
  titleSlideY?: SharedValue<number>;
  /** Opacity fade animation for the delayed subtitle */
  subtitleFade?: SharedValue<number>;
  /** Slide transition vertical offset for the delayed subtitle */
  subtitleSlideY?: SharedValue<number>;
  /** Test ID for automated testing */
  testID?: string;
}

/**
 * Animated Text Content for Splash Screen: Wordmark and Tagline.
 *
 * Features choreographed spring entrance on the title, staggered delay
 * with smooth easing on the tagline, and full support for reduced-motion preferences.
 */
export const SplashContent: React.FC<SplashContentProps> = ({
  titleFade,
  titleScale,
  titleSlideY,
  subtitleFade,
  subtitleSlideY,
  testID = 'splash-content',
}) => {
  const reduceMotion = useReducedMotion();

  const titleAnimatedStyle = useAnimatedStyle(() => {
    if (reduceMotion) {
      return { opacity: 1, transform: [] };
    }
    return {
      opacity: titleFade !== undefined ? titleFade.value : 1,
      transform: [
        { translateY: titleSlideY !== undefined ? titleSlideY.value : 0 },
        { scale: titleScale !== undefined ? titleScale.value : 1 },
      ],
    };
  });

  const subtitleAnimatedStyle = useAnimatedStyle(() => {
    if (reduceMotion) {
      return { opacity: 1, transform: [] };
    }
    return {
      opacity: subtitleFade !== undefined ? subtitleFade.value : 1,
      transform: [
        { translateY: subtitleSlideY !== undefined ? subtitleSlideY.value : 0 },
      ],
    };
  });

  return (
    <View testID={testID} style={styles.container}>
      {/* Title: withSpring scale bounce, glide and fade */}
      <Animated.View style={titleAnimatedStyle}>
        <Text style={styles.wordmark} accessibilityRole="header">
          <Text style={styles.wordmarkPart1}>{SplashConstants.brandTitlePart1}</Text>
          <Text style={styles.wordmarkPart2}>{SplashConstants.brandTitlePart2}</Text>
        </Text>
      </Animated.View>

      <View style={styles.spacing} />

      {/* Subtitle: withDelay and smooth easing glide */}
      <Animated.View style={subtitleAnimatedStyle}>
        <Text style={styles.tagline}>{SplashConstants.tagline}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: AppSpacing.lg,
  },
  spacing: {
    height: AppSpacing.sm,
  },
  wordmark: {
    ...AppTypography.splashWordmark,
    textAlign: 'center',
  },
  wordmarkPart1: {
    color: AppColors.slate900,
  },
  wordmarkPart2: {
    color: AppColors.primary,
  },
  tagline: {
    ...AppTypography.splashTagline,
    color: AppColors.slate700,
    textAlign: 'center',
  },
});
