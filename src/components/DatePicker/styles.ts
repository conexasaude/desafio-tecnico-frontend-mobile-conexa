import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Container = styled.TouchableOpacity(({ theme }) => ({
  height: 52,
  borderColor: theme.colors.primary,
  borderWidth: theme.effects.border.width.tl,
  borderRadius: theme.effects.border.radius.md,
  padding: theme.effects.spacing.vs,
  justifyContent: 'center',
  marginTop: theme.effects.spacing.md,
}));

export const Row = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
});

export const Text = styled.Text(({ theme }) => ({
  flex: 1,
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[900],
}));

export const Label = styled.Text(({ theme }) => ({
  position: 'absolute',
  top: -14,
  left: 16,
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.primary,
  backgroundColor: theme.colors.white,
  padding: theme.effects.spacing.nn,
}));

export const Error = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.status.error,
  marginTop: theme.effects.spacing.nn,
}));
