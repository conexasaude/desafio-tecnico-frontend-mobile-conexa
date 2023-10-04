import { Button } from '@/components/Button';
import styled from '@emotion/native';

export const SafeArea = styled.SafeAreaView({
  flex: 1,
});

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  paddingVertical: theme.effects.spacing.vl,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Row = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
});

export const LabelName = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[800],
  marginTop: theme.effects.spacing.md,
  marginBottom: theme.effects.spacing.nn,
}));

export const LabelEmail = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.gray[600],
}));

export const Spacer = styled.View({
  flex: 1,
});

export const LoggoutButton = styled(Button)({});
