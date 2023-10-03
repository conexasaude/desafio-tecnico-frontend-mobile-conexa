import React from 'react';

// Components
import { Heading } from '~/presentation/components/heading';

// Hooks
import { useEmptyListViewController } from './empty-list-view-controller';

// Styles
import { EmptyListContainer, StyledButton, StyledImage, WhiteHeading } from './styles';

export function EmptyList() {
  const { goToCreateAppointmentScreen } = useEmptyListViewController();
  const emptyListSource = '../../../../assets/images/empty-list-image.png';

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
