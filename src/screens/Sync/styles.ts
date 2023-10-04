import styled from '@emotion/native';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.primary,
}));

export const Text = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.s1,
  color: theme.colors.white,
  marginBottom: theme.effects.spacing.sm,
}));
