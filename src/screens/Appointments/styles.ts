import { Button } from '@/components/Button';
import styled from '@emotion/native';

export const SafeArea = styled.SafeAreaView({
  flex: 1,
});

export const Container = styled.View({
  flex: 1,
});

export const Column = styled.View(({ theme }) => ({
  marginTop: theme.effects.spacing.hg,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.tl,
  color: theme.colors.primary,
}));

export const Line = styled.View(({ theme }) => ({
  height: 1,
  width: '100%',
  backgroundColor: theme.colors.gray[200],
  marginTop: theme.effects.spacing.md,
  marginBottom: theme.effects.spacing.hg,
}));

export const Row = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: theme.effects.spacing.vl,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const ScheduleButton = styled(Button)({
  width: '40%',
});

export const DescriptionList = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  color: theme.colors.gray[600],
}));
