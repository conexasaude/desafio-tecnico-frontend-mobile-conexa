import styled from '@emotion/native';

interface WrapperProps {
  variant: 'contained' | 'outlined';
}

interface TitleProps {
  variant: 'contained' | 'outlined';
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>(
  ({ theme, variant }) => {
    const isContained = variant === 'contained';

    return {
      width: '100%',
      height: 52,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: isContained ? theme.colors.primary : 'transparent',
      borderStyle: 'solid',
      borderWidth: isContained ? 0 : theme.effects.border.width.df,
      borderColor: theme.colors.primary,
      borderRadius: theme.effects.border.radius.md,
      padding: theme.effects.spacing.vs,
    };
  },
);

export const Title = styled.Text<TitleProps>(({ theme, variant }) => {
  const isContained = variant === 'contained';

  return {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.md,
    color: isContained ? theme.colors.white : theme.colors.primary,
    textAlign: 'center',
  };
});
