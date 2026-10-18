import { AppColors } from '../../../src/theme/colors';
import { AppMotion } from '../../../src/theme/motion';
import { AppSpacing } from '../../../src/theme/spacing';
import { AppTypography } from '../../../src/theme/typography';

describe('PetHuddle Theme Tokens', () => {
  describe('AppColors', () => {
    it('defines correct core brand colors', () => {
      expect(AppColors.primary).toBe('#2563EB');
      expect(AppColors.primaryDark).toBe('#1D4ED8');
      expect(AppColors.primaryLight).toBe('#3B82F6');
      expect(AppColors.primarySubtleLight).toBe('#DBEAFE');
    });

    it('defines splash photographic background fallback color', () => {
      expect(AppColors.splashSky).toBe('#E0F2FE');
    });

    it('defines contrast-compliant slate neutrals', () => {
      expect(AppColors.slate900).toBe('#0F172A');
      expect(AppColors.slate700).toBe('#334155');
      expect(AppColors.slate600).toBe('#475569');
      expect(AppColors.slate100).toBe('#F1F5F9');
    });
  });

  describe('AppSpacing', () => {
    it('defines standard spacing scale', () => {
      expect(AppSpacing.xxs).toBe(2);
      expect(AppSpacing.xs).toBe(4);
      expect(AppSpacing.sm).toBe(8);
      expect(AppSpacing.md).toBe(16);
      expect(AppSpacing.lg).toBe(24);
      expect(AppSpacing.xl).toBe(32);
    });

    it('defines splash-specific layout factors', () => {
      expect(AppSpacing.splashBackgroundScale).toBe(1.25);
      expect(AppSpacing.splashBackgroundYShiftFactor).toBe(0.08);
      expect(AppSpacing.splashContentTopPaddingFactor).toBe(0.32);
      expect(AppSpacing.splashDefaultLogoSize).toBe(185.0);
    });
  });

  describe('AppMotion', () => {
    it('defines splash animation durations', () => {
      expect(AppMotion.splashEntrance).toBe(1400);
      expect(AppMotion.splashBreathing).toBe(2000);
      expect(AppMotion.splashDwell).toBe(3000);
      expect(AppMotion.transition).toBe(600);
    });

    it('defines splash scale and slide values', () => {
      expect(AppMotion.splashBackgroundScaleBegin).toBe(1.06);
      expect(AppMotion.splashBackgroundScaleEnd).toBe(1.0);
      expect(AppMotion.splashTitleScaleBegin).toBe(0.88);
      expect(AppMotion.splashTitleScaleEnd).toBe(1.0);
      expect(AppMotion.splashTitleSlideBegin).toBe(24);
      expect(AppMotion.splashSubtitleSlideBegin).toBe(20);
    });

    it('defines choreography intervals', () => {
      expect(AppMotion.splashBackgroundFadeInterval).toEqual([0.0, 0.45]);
      expect(AppMotion.splashBackgroundScaleInterval).toEqual([0.0, 0.85]);
      expect(AppMotion.splashTitleFadeInterval).toEqual([0.18, 0.55]);
      expect(AppMotion.splashTitleScaleInterval).toEqual([0.18, 0.65]);
      expect(AppMotion.splashSubtitleFadeInterval).toEqual([0.42, 0.85]);
    });
  });

  describe('AppTypography', () => {
    it('defines splash wordmark typography specs', () => {
      expect(AppTypography.splashWordmark.fontSize).toBe(42);
      expect(AppTypography.splashWordmark.lineHeight).toBe(48);
      expect(AppTypography.splashWordmark.fontWeight).toBe('800');
      expect(AppTypography.splashWordmark.letterSpacing).toBe(-1.0);
    });

    it('defines splash tagline typography specs', () => {
      expect(AppTypography.splashTagline.fontSize).toBe(17);
      expect(AppTypography.splashTagline.lineHeight).toBe(22);
      expect(AppTypography.splashTagline.fontWeight).toBe('500');
      expect(AppTypography.splashTagline.letterSpacing).toBe(-0.2);
    });
  });
});
