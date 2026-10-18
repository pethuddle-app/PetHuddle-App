import React, { useCallback } from 'react';
import { router } from 'expo-router';
import { useAuth } from '@clerk/expo';
import { SplashScreen } from '../screens/splash';

/**
 * App Entry Route.
 *
 * Renders the orchestrated photographic PetHuddle splash screen.
 * Once the entrance and dwell period complete (or when tapped),
 * smoothly transitions to the next application flow based on authentication state.
 */
export default function IndexRoute() {
  const { isSignedIn, isLoaded } = useAuth();

  const handleFinish = useCallback(() => {
    // When session is loaded, route signed-in users to app home, otherwise to welcome
    if (isLoaded && isSignedIn) {
      router.replace('/welcome');
    } else {
      router.replace('/welcome');
    }
  }, [isLoaded, isSignedIn]);

  return <SplashScreen onFinished={handleFinish} />;
}
