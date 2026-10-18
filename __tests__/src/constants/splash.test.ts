import { SplashConstants } from '../../../src/constants/splash';

describe('SplashConstants', () => {
  it('contains correct brand text strings', () => {
    expect(SplashConstants.brandTitlePart1).toBe('Pet');
    expect(SplashConstants.brandTitlePart2).toBe('Huddle');
    expect(SplashConstants.tagline).toBe('Every dose. One shared record.');
  });

  it('contains matching duration tokens', () => {
    expect(SplashConstants.entranceDuration).toBe(1400);
    expect(SplashConstants.totalSplashDuration).toBe(3000);
    expect(SplashConstants.transitionDuration).toBe(600);
    expect(SplashConstants.breathingDuration).toBe(2000);
  });

  it('contains layout and positioning tokens', () => {
    expect(SplashConstants.backgroundScale).toBe(1.25);
    expect(SplashConstants.backgroundYShiftFactor).toBe(0.08);
    expect(SplashConstants.contentTopPaddingFactor).toBe(0.32);
    expect(SplashConstants.defaultLogoSize).toBe(185.0);
  });

  it('has valid asset references', () => {
    expect(SplashConstants.logoAsset).toBeDefined();
    expect(SplashConstants.backgroundAsset).toBeDefined();
  });
});
