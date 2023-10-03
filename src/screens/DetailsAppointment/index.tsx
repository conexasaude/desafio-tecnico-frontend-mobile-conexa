import React, { useEffect } from 'react';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';
import { useReduxSelector } from '@/hooks/useReduxSelector';
import { RouteProp, useRoute } from '@react-navigation/native';
import { fetchAppointmentById } from '@/store/thunks/appointment.thunk';
import { useToast } from 'react-native-toast-notifications';
import * as Styled from './styles';

type StackParamsList = {
  DetailsData: { id: number };
};

export function DetailsAppointmentScreen() {
  const { show } = useToast();
  const { params } = useRoute<RouteProp<StackParamsList, 'DetailsData'>>();
  const { appointment } = useReduxSelector(state => state.appointment);

  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchAppointmentById({ id: params.id, onError: show }));
  }, [dispatch, params.id, show]);

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Styled.Label>Nome do paciente:</Styled.Label>
        <Styled.Description>{appointment?.paciente}</Styled.Description>
        <Styled.Label>Data:</Styled.Label>
        <Styled.Description>{appointment?.dataConsulta}</Styled.Description>
        <Styled.Label>Observação:</Styled.Label>
        <Styled.Description>{appointment?.observacao}</Styled.Description>
      </Styled.Container>
    </Styled.SafeArea>
  );
}
