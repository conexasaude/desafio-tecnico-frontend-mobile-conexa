import styled from '@emotion/native';
import { Button } from '@/components/Button';

export const Wrapper = styled.TouchableOpacity(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.white,
  shadowColor: theme.colors.black,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.25,
  shadowRadius: 1.5,
  elevation: 2,
  padding: theme.effects.spacing.sm,
  borderRadius: theme.effects.border.radius.md,
  marginBottom: theme.effects.spacing.md,
}));

export const Row = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Column = styled.View(({ theme }) => ({
  flex: 1,
  height: 52,
  justifyContent: 'space-around',
  marginRight: theme.effects.spacing.nn,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[600],
}));

export const Description = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.regular,
  fontSize: theme.fonts.size.md,
  color: theme.colors.gray[500],
}));

export const SeeMore = styled(Button)({
  width: 'auto',
  height: 48,
});
