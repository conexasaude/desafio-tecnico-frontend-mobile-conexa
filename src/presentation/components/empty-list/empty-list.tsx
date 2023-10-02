import React from 'react';
import { routes } from '~/presentation/navigation/routes';
import { useNavigation } from '@react-navigation/native';

// Components
import { Heading } from '~/presentation/components/heading';

// Styles
import { EmptyListContainer, StyledButton, StyledImage, WhiteHeading } from './styles';

// Types
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function EmptyList() {
  const navigation = useNavigation<StackNavigation>();
  const emptyListSource = '../../../../assets/images/empty-list-image.png';

  function goToCreateAppointmentScreen() {
    navigation.navigate(routes.CreateAppointmentScreen);
  }
  return (
    <EmptyListContainer>
      <StyledImage source={require(emptyListSource)} alt="Lista vazia" />
      <Heading type="H1">Não há consultas</Heading>
      <StyledButton onPress={goToCreateAppointmentScreen}>
        <WhiteHeading type="H2">Crie suas consultas</WhiteHeading>
      </StyledButton>
    </EmptyListContainer>
  );
}
