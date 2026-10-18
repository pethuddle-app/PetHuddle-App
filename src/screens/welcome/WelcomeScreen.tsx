import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../theme/colors';
import { AppSpacing } from '../../theme/spacing';
import { AppTypography } from '../../theme/typography';

/**
 * Welcome screen introducing the PetHuddle promise:
 * "A shared record for every pet dose".
 */
export const WelcomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.titlePart1}>Pet</Text>
          <Text style={styles.titlePart2}>Huddle</Text>
        </Text>
        <Text style={styles.tagline}>Every dose. One shared record.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.lightBackground,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: AppSpacing.lg,
  },
  title: {
    ...AppTypography.splashWordmark,
  },
  titlePart1: {
    color: AppColors.slate900,
  },
  titlePart2: {
    color: AppColors.primary,
  },
  tagline: {
    ...AppTypography.splashTagline,
    color: AppColors.slate700,
    marginTop: AppSpacing.sm,
  },
});
