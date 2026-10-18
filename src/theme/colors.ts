/**
 * PetHuddle Design System Color Tokens & Palette.
 *
 * Core theme module defining brand, semantic status, slate neutrals,
 * surfaces, and photographic splash palettes.
 */
export const AppColors = {
  // Core Brand Tokens
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  primaryLight: '#3B82F6',
  primarySubtleLight: '#DBEAFE',
  primarySubtleDark: '#1E3A8A',

  // Brand Secondary
  secondaryLight: '#E6F4FE',
  secondaryDark: '#1E3A8A',
  secondaryContainerDark: '#162C4E',

  // Splash photographic background fallback sky tint
  splashSky: '#E0F2FE',

  // Semantic Status Colors
  success: '#10B981',
  successLightTint: '#D1FAE5',
  successLightText: '#065F46',
  successDarkTint: '#064E3B',
  successDarkText: '#6EE7B7',

  warning: '#F59E0B',
  warningLightTint: '#FEF3C7',
  warningLightText: '#92400E',
  warningDarkTint: '#78350F',
  warningDarkText: '#FCD34D',

  danger: '#F97316',
  dangerAlt: '#EF4444',
  dangerLightTint: '#FEE2E2',
  dangerLightText: '#991B1B',
  dangerDarkTint: '#7F1D1D',
  dangerDarkText: '#FCA5A5',

  upcomingLight: '#475569',
  upcomingLightTint: '#F1F5F9',
  upcomingDark: '#94A3B8',
  upcomingDarkTint: '#1E293B',

  skippedLight: '#64748B',
  skippedLightTint: '#F1F5F9',
  skippedDark: '#94A3B8',
  skippedDarkTint: '#334155',

  // Slate Neutral Palette
  slate50: '#F8FAFC',
  slate100: '#F1F5F9',
  slate200: '#E2E8F0',
  slate300: '#CBD5E1',
  slate400: '#94A3B8',
  slate500: '#64748B',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1E293B',
  slate900: '#0F172A',
  slate950: '#0B1120',

  // Base Light Mode Surfaces
  lightBackground: '#F8FAFC',
  lightSurface: '#FFFFFF',
  lightSurfaceVariant: '#F1F5F9',
  lightCard: '#FFFFFF',
  lightBorder: '#E2E8F0',
  lightBorderFocus: '#2563EB',
  lightTextPrimary: '#0F172A',
  lightTextSecondary: '#64748B',
  lightTextMuted: '#94A3B8',

  // Base Dark Mode Surfaces
  darkBackground: '#0F172A',
  darkSurface: '#1E293B',
  darkSurfaceVariant: '#161F30',
  darkCard: '#1E293B',
  darkBorder: '#334155',
  darkBorderFocus: '#3B82F6',
  darkTextPrimary: '#F8FAFC',
  darkTextSecondary: '#94A3B8',
  darkTextMuted: '#64748B',

  // Common Constants
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type AppColorName = keyof typeof AppColors;
