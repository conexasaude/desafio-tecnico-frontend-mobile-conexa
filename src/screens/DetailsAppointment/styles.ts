import styled from '@emotion/native';

export const SafeArea = styled.SafeAreaView({
  flex: 1,
});

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingTop: theme.effects.spacing.hg,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Label = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.primary,
}));

export const Description = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.gray[600],
  marginBottom: theme.effects.spacing.md,
}));
