import styled from '@emotion/native';

export const SafeArea = styled.SafeAreaView({
  flex: 1,
});

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingVertical: theme.effects.spacing.vl,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Description = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.gray[600],
  marginBottom: theme.effects.spacing.md,
}));

export const Form = styled.View({
  width: '100%',
});

export const Row = styled.View(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.effects.spacing.md,
}));

export const Spacer = styled.View({
  flex: 1,
});
