import React from 'react';
import { Modal as RNModal } from 'react-native';
import { CenteredView, ModalView, ModalTitle, ButtonContainer, ButtonNewAppointment, ButtonBack, NewButtonText, BackButtonText } from './styles';

interface ModalProps {
	isVisible: boolean
	changeVisibility: React.Dispatch<React.SetStateAction<boolean>>
	backHome: () => void
	resetForm: () => void
}

const Modal = ({ isVisible, changeVisibility, backHome, resetForm }: ModalProps) => {
	
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        changeVisibility(!isVisible);
      }}>
      <CenteredView>
        <ModalView>
			<ModalTitle>Consulta cadastrada!</ModalTitle>
			
			<ButtonContainer>
					<ButtonNewAppointment
						onPress={() => {
							changeVisibility(!isVisible)
							resetForm()
						}}
					>
						<NewButtonText>Criar outra consulta</NewButtonText>
					</ButtonNewAppointment>

					<ButtonBack 
						onPress={() => {
							changeVisibility(!isVisible)
							backHome()
						}}
					>
						<BackButtonText>Voltar à Home</BackButtonText>
					</ButtonBack>
			</ButtonContainer>
        </ModalView>
      </CenteredView>
    </RNModal>
  );
};

export default Modal;