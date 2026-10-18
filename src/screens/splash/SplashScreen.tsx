import React, { useCallback, useEffect, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  Easing,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { SplashBackground } from '../../components/splash/SplashBackground';
import { SplashContent } from '../../components/splash/SplashContent';
import { SplashConstants } from '../../constants/splash';
import { AppColors } from '../../theme/colors';
import { AppMotion } from '../../theme/motion';

export interface SplashScreenProps {
  /** Callback invoked when splash animation and dwell duration conclude or on user tap. */
  onFinished?: () => void;
  /** Optional custom override duration (in milliseconds) for how long the splash stays visible. */
  duration?: number;
  /** Whether to automatically trigger onFinished after duration elapses. Defaults to true. */
  autoNavigate?: boolean;
  /** Test ID for automated testing. */
  testID?: string;
}

/**
 * Full-screen production Splash Screen with seamless photographic integration.
 * Displays the sunny sky background with cuddled retriever and cat,
 * with the PetHuddle brand naturally combined in the sky area.
 */
export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinished,
  duration,
  autoNavigate = true,
  testID = 'splash-screen',
}) => {
  const { height } = useWindowDimensions();
  const reduceMotion = useReducedMotion();

  // Reanimated shared values driving the entrance sequence
  const backgroundOpacity = useSharedValue<number>(reduceMotion ? 1 : 0);
  const backgroundScale = useSharedValue<number>(
    reduceMotion ? AppMotion.splashBackgroundScaleEnd : AppMotion.splashBackgroundScaleBegin
  );
  const titleFade = useSharedValue<number>(reduceMotion ? 1 : 0);
  const titleScale = useSharedValue<number>(
    reduceMotion ? AppMotion.splashTitleScaleEnd : AppMotion.splashTitleScaleBegin
  );
  const titleSlideY = useSharedValue<number>(
    reduceMotion ? 0 : AppMotion.splashTitleSlideBegin
  );
  const subtitleFade = useSharedValue<number>(reduceMotion ? 1 : 0);
  const subtitleSlideY = useSharedValue<number>(
    reduceMotion ? 0 : AppMotion.splashSubtitleSlideBegin
  );

  // Guard flag ensuring onFinished triggers at most once
  const finishedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinished?.();
  }, [onFinished]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    // 1. Photographic Background Fade (0.0 -> 0.45 interval) & subtle zoom-out (0.0 -> 0.85 interval)
    backgroundOpacity.value = withTiming(1, {
      duration: Math.round(SplashConstants.entranceDuration * 0.45), // 630ms
      easing: Easing.in(Easing.quad),
    });

    backgroundScale.value = withTiming(AppMotion.splashBackgroundScaleEnd, {
      duration: Math.round(SplashConstants.entranceDuration * 0.85), // 1190ms
      easing: Easing.out(Easing.cubic),
    });

    // 2. Title Entrance: begins at 0.18 interval (252ms)
    // Fade: 0.18 -> 0.55 (518ms duration)
    titleFade.value = withDelay(
      252,
      withTiming(1, {
        duration: 518,
        easing: Easing.out(Easing.quad),
      })
    );

    // Spring scale bounce into place: 0.18 -> 0.65
    titleScale.value = withDelay(
      252,
      withSpring(AppMotion.splashTitleScaleEnd, {
        dampingRatio: 0.7,
        duration: 658,
      })
    );

    // Slide down into place: 0.18 -> 0.65
    titleSlideY.value = withDelay(
      252,
      withTiming(0, {
        duration: 658,
        easing: Easing.out(Easing.cubic),
      })
    );

    // 3. Subtitle Entrance: begins at 0.42 interval (588ms)
    // Fade: 0.42 -> 0.85 (602ms duration)
    subtitleFade.value = withDelay(
      588,
      withTiming(1, {
        duration: 602,
        easing: Easing.out(Easing.quad),
      })
    );

    // Glide into place: 0.42 -> 0.85 (602ms duration)
    subtitleSlideY.value = withDelay(
      588,
      withTiming(0, {
        duration: 602,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [
    reduceMotion,
    backgroundOpacity,
    backgroundScale,
    titleFade,
    titleScale,
    titleSlideY,
    subtitleFade,
    subtitleSlideY,
  ]);

  // Dwell timer triggering automated navigation upon splash duration completion
  useEffect(() => {
    if (!autoNavigate) return;

    const totalDuration = duration ?? SplashConstants.totalSplashDuration;
    const timer = setTimeout(handleFinish, totalDuration);

    return () => clearTimeout(timer);
  }, [autoNavigate, duration, handleFinish]);

  const topPadding = height * SplashConstants.contentTopPaddingFactor;

  return (
    <View testID={testID} style={styles.container}>
      <StatusBar style="dark" />

      <Pressable
        testID="splash-pressable"
        style={styles.pressable}
        onPress={handleFinish}
        accessibilityRole="button"
        accessibilityLabel="Skip splash screen"
        accessibilityHint="Tap anywhere to skip to the app"
      >
        {/* Layer 1: Photographic Sky & Pets Background */}
        <SplashBackground
          opacity={backgroundOpacity}
          scale={backgroundScale}
        />

        {/* Layer 2: Foreground Brand Content (Wordmark & Tagline in sky area) */}
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={[styles.contentWrapper, { paddingTop: topPadding }]}>
            <SplashContent
              titleFade={titleFade}
              titleScale={titleScale}
              titleSlideY={titleSlideY}
              subtitleFade={subtitleFade}
              subtitleSlideY={subtitleSlideY}
            />
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.splashSky,
  },
  pressable: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
