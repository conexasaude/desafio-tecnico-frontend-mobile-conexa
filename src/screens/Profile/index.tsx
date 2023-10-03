import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Styled from './styles';
import { useTheme } from '@emotion/react';
import { useReduxSelector } from '@/hooks/useReduxSelector';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';
import { userSlice } from '@/store/slices/user.slice';

export function ProfileScreen() {
  const { colors } = useTheme();
  const { user } = useReduxSelector(state => state.user);
  const dispatch = useReduxDispatch();

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Icon name="account-circle" size={64} color={colors.gray[400]} />
        <Styled.LabelName>{user?.nome}</Styled.LabelName>
        <Styled.LabelEmail>{user?.email}</Styled.LabelEmail>

        <Styled.Spacer />

        <Styled.LoggoutButton
          variant="outlined"
          title="Sair"
          onPress={() => dispatch(userSlice.actions.loggout())}
        />
      </Styled.Container>
    </Styled.SafeArea>
  );
}
