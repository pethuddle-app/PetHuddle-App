/**
 * PetHuddle Design System Motion & Animation Tokens.
 *
 * Centralizes all transition durations, choreography timings, and easing curves
 * across the application in compliance with theme design specifications.
 */
export const AppMotion = {
  // Durations (in milliseconds)
  fast: 150,
  medium: 300,
  screenSwitch: 450,
  transition: 600,
  splashEntrance: 1400,
  splashBreathing: 2000,
  splashDwell: 3000,

  // Slide Offsets & Scales
  splashBackgroundScaleBegin: 1.06,
  splashBackgroundScaleEnd: 1.0,
  splashTitleScaleBegin: 0.88,
  splashTitleScaleEnd: 1.0,
  splashTitleSlideBegin: 24,
  splashSubtitleSlideBegin: 20,

  // Choreography normalized intervals [start, end]
  splashBackgroundFadeInterval: [0.0, 0.45] as const,
  splashBackgroundScaleInterval: [0.0, 0.85] as const,
  splashTitleFadeInterval: [0.18, 0.55] as const,
  splashTitleScaleInterval: [0.18, 0.65] as const,
  splashTitleSlideInterval: [0.18, 0.65] as const,
  splashSubtitleFadeInterval: [0.42, 0.85] as const,
  splashSubtitleSlideInterval: [0.42, 0.85] as const,
} as const;

export type AppMotionToken = keyof typeof AppMotion;
