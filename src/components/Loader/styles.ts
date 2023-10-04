import styled from '@emotion/native';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.effects.spacing.hg,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Text = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[800],
  marginVertical: theme.effects.spacing.md,
}));
