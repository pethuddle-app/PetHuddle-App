import { TextStyle } from 'react-native';

/**
 * PetHuddle Design System Typography Tokens.
 *
 * Implements standardized text styles, weights, letter-spacings, and
 * adheres to the Inter typography specifications.
 */
export const AppTypography = {
  fontFamily: 'Inter-Regular',
  fontFamilyMedium: 'Inter-Medium',
  fontFamilySemiBold: 'Inter-SemiBold',
  fontFamilyBold: 'Inter-Bold',

  splashWordmark: {
    fontFamily: 'Inter-Bold',
    fontSize: 42,
    lineHeight: 48,
    fontWeight: '800',
    letterSpacing: -1.0,
  } as const satisfies TextStyle,

  splashTagline: {
    fontFamily: 'Inter-Medium',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: -0.2,
  } as const satisfies TextStyle,
} as const;
