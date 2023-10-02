import React from 'react';

// Components
import { RightArrowIcon } from '~/presentation/components/icons';
import { Heading } from '~/presentation/components/heading';
import { View } from 'react-native';

// Styles
import { Row, StyledTouchableOpacity } from './styles';

// Types
import { AppointmentButtonCardInterface } from './types';

export function AppointmentButtonCard({
  patient,
  date,
  time,
  observation,
}: AppointmentButtonCardInterface) {
  return (
    <StyledTouchableOpacity onPress={() => null}>
      <Row>
        <View style={{ flex: 1 }}>
          <Row>
            <Heading type="H2">Nome: </Heading>
            <Heading type="H3">{patient}</Heading>
          </Row>
          <Row>
            <Heading type="H2">Data: </Heading>
            <Heading type="H3">{date}</Heading>
          </Row>
          <Row>
            <Heading type="H2">Horário: </Heading>
            <Heading type="H3">{time}</Heading>
          </Row>
          <Row>
            <Heading type="H2">OBS: </Heading>
            <Heading type="H3">{observation}</Heading>
          </Row>
        </View>
        <RightArrowIcon />
      </Row>
    </StyledTouchableOpacity>
  );
}
