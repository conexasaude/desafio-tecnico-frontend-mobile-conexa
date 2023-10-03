import styled from '@emotion/native';
import Logo from '../../../assets/svgs/logo-conexa.svg';

interface SpacerProps {
  flex?: number;
}

export const SafeArea = styled.SafeAreaView({
  flex: 1,
});

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingVertical: theme.effects.spacing.vl,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.tl,
  color: theme.colors.primary,
  marginBottom: theme.effects.spacing.lg,
}));

export const Form = styled.View({
  width: '100%',
});

export const LogoConexa = styled(Logo)({
  alignSelf: 'center',
});

export const Spacer = styled.View<SpacerProps>(({ flex }) => ({
  flex: flex ?? 1,
}));
