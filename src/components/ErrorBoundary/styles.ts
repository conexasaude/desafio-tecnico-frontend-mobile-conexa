import styled from '@emotion/native';
import { Button } from '../Button';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.effects.spacing.hg,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Text = styled.Text(({ theme }) => ({
  width: '90%',
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[800],
  marginVertical: theme.effects.spacing.lg,
  textAlign: 'center',
}));

export const ButtonTryAgain = styled(Button)({
  width: '50%',
});
