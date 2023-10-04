import React from 'react';

// Components
import { Heading } from '~/presentation/components/heading';
import { MainButton } from '~/presentation/components/buttons';

// Styles
import { FieldContainer, ScreenContainer, StyledImage } from './styles';
import { useAccountScreenViewController } from './account-screen-view-controller';

// Types
import { AccountModel } from '~/domain/models';

export function AccountScreen() {
  const { user, signOut, isLoading } = useAccountScreenViewController();
  const avatarImageSource = '../../../../assets/images/patient-avatar-image.png';
  const { nome, email } = user as AccountModel;

  return (
    <ScreenContainer style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StyledImage source={require(avatarImageSource)} alt="Imagem do perfil" />
      <FieldContainer>
        <Heading type="H1">Nome: </Heading>
        <Heading type="H2">{nome}</Heading>
      </FieldContainer>
      <FieldContainer>
        <Heading type="H1">Email: </Heading>
        <Heading type="H2">{email}</Heading>
      </FieldContainer>
      <MainButton isLoading={isLoading} onPress={signOut} buttonText="Sair da conta" />
    </ScreenContainer>
  );
}
