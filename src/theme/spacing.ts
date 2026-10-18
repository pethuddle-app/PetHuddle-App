/**
 * PetHuddle Design System Spacing, Dimensions, and Inset Tokens.
 *
 * Centralizes layout dimensions, margins, paddings, and component bounds
 * across the application in compliance with theme design specifications.
 */
export const AppSpacing = {
  // Metrics
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,

  // Splash Layout & Dimensions
  splashBackgroundScale: 1.25,
  splashBackgroundYShiftFactor: 0.08,
  splashContentTopPaddingFactor: 0.32,
  splashDefaultLogoSize: 185.0,
} as const;

export type AppSpacingToken = keyof typeof AppSpacing;
