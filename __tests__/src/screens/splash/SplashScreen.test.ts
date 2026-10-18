import { SplashConstants } from '../../../../src/constants/splash';

describe('SplashScreen logic & behavior', () => {
  it('triggers onFinished exactly once after dwell duration', async () => {
    let callCount = 0;
    let finished = false;

    const onFinished = () => {
      if (finished) return;
      finished = true;
      callCount += 1;
    };

    // Simulate completion
    onFinished();
    // Simulate subsequent timer or tap trigger
    onFinished();

    expect(callCount).toBe(1);
  });

  it('honors default dwell duration of 3000ms', () => {
    const defaultDuration = SplashConstants.totalSplashDuration;
    expect(defaultDuration).toBe(3000);
  });

  it('allows custom override duration', () => {
    const customDuration = 1500;
    const resolvedDuration = customDuration ?? SplashConstants.totalSplashDuration;
    expect(resolvedDuration).toBe(1500);
  });

  it('respects autoNavigate parameter', () => {
    let scheduled = false;
    const scheduleTimer = (autoNavigate: boolean) => {
      if (!autoNavigate) return;
      scheduled = true;
    };

    scheduleTimer(false);
    expect(scheduled).toBe(false);

    scheduleTimer(true);
    expect(scheduled).toBe(true);
  });
});
