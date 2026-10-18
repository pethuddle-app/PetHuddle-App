import { SplashConstants } from '../../../../src/constants/splash';
import { AppColors } from '../../../../src/theme/colors';
import { AppSpacing } from '../../../../src/theme/spacing';

describe('Splash Components Geometry & Tokens', () => {
  describe('SplashBackground geometry', () => {
    it('calculates background scale margins and yShift accurately for mobile viewport', () => {
      const width = 390;
      const height = 844;
      const scaleFactor = SplashConstants.backgroundScale; // 1.25
      const yShiftFactor = SplashConstants.backgroundYShiftFactor; // 0.08

      const yShift = height * yShiftFactor; // 67.52
      const extraW = (width * (scaleFactor - 1)) / 2; // 48.75
      const extraH = (height * (scaleFactor - 1)) / 2; // 105.5

      const top = -extraH + yShift;
      const bottom = -extraH - yShift;
      const left = -extraW;
      const right = -extraW;

      expect(yShift).toBeCloseTo(67.52, 2);
      expect(extraW).toBe(48.75);
      expect(extraH).toBe(105.5);
      expect(top).toBeCloseTo(-37.98, 2);
      expect(bottom).toBeCloseTo(-173.02, 2);
      expect(left).toBe(-48.75);
      expect(right).toBe(-48.75);
    });

    it('uses correct sky fallback background color to eliminate white screen flash', () => {
      expect(AppColors.splashSky).toBe('#E0F2FE');
    });
  });

  describe('SplashContent text layout', () => {
    it('positions content gracefully in the sky area above pets', () => {
      const height = 844;
      const topPadding = height * SplashConstants.contentTopPaddingFactor;
      // 844 * 0.32 = 270.08
      expect(topPadding).toBeCloseTo(270.08, 2);
    });

    it('splits brand name into Pet and Huddle for two-tone presentation', () => {
      expect(SplashConstants.brandTitlePart1).toBe('Pet');
      expect(SplashConstants.brandTitlePart2).toBe('Huddle');
    });

    it('has standard spacing between wordmark and tagline', () => {
      expect(AppSpacing.sm).toBe(8);
    });
  });

  describe('SplashLogo specs', () => {
    it('defaults to 185px size matching Flutter specification', () => {
      expect(SplashConstants.defaultLogoSize).toBe(185.0);
    });
  });
});
