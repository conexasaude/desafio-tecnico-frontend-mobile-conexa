import React from 'react';

// Components
import { View } from 'react-native';
import { Heading } from '~/presentation/components/heading';

export function AppointmentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Heading type="H1">This is the AppointmentsScreen</Heading>
    </View>
  );
}
