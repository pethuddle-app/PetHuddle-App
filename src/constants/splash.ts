import { ImageSourcePropType } from 'react-native';
import { AppMotion } from '../theme/motion';
import { AppSpacing } from '../theme/spacing';

/**
 * PetHuddle Splash Screen Constants and Configuration.
 *
 * Core layer defining animation timings, brand typography tokens,
 * layout ratios, and asset references utilized across the PetHuddle splash screen experience.
 */
export const SplashConstants = {
  // Asset References
  logoAsset: require('../../assets/icon.png') as ImageSourcePropType,
  backgroundAsset: require('../../assets/images/splash.png') as ImageSourcePropType,

  // Animation Durations (in milliseconds)
  entranceDuration: AppMotion.splashEntrance,
  breathingDuration: AppMotion.splashBreathing,
  totalSplashDuration: AppMotion.splashDwell,
  transitionDuration: AppMotion.transition,

  // Text Branding
  brandTitlePart1: 'Pet',
  brandTitlePart2: 'Huddle',
  tagline: 'Every dose. One shared record.',

  // Layout & Positioning Tokens
  backgroundScale: AppSpacing.splashBackgroundScale,
  backgroundYShiftFactor: AppSpacing.splashBackgroundYShiftFactor,
  contentTopPaddingFactor: AppSpacing.splashContentTopPaddingFactor,
  defaultLogoSize: AppSpacing.splashDefaultLogoSize,

  // Vertical slide offsets (pixels)
  titleSlideBegin: AppMotion.splashTitleSlideBegin,
  subtitleSlideBegin: AppMotion.splashSubtitleSlideBegin,
} as const;
