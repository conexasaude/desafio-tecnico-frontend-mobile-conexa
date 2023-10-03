import styled from '@emotion/native';

interface ContainerProps {
  textArea: boolean;
}

export const Wrapper = styled.View``;

export const Container = styled.View<ContainerProps>(({ theme, textArea }) => ({
  height: textArea ? 180 : 52,
  borderColor: theme.colors.primary,
  borderWidth: theme.effects.border.width.tl,
  borderRadius: theme.effects.border.radius.md,
  padding: theme.effects.spacing.vs,
  marginTop: theme.effects.spacing.md,
}));

export const Row = styled.View({
  flex: 1,
  flexDirection: 'row',
});

export const InputText = styled.TextInput(({ theme }) => ({
  flex: 1,
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[900],
  padding: 0,
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

export const BaseButtonSecurty = styled.TouchableOpacity({
  justifyContent: 'center',
});

export const Error = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.status.error,
  marginTop: theme.effects.spacing.nn,
}));
