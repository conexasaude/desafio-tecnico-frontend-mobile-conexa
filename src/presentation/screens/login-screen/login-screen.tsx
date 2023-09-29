import React from 'react';
import { View } from 'react-native';

// Components
import { Heading } from '~/presentation/components';

export function LoginScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Heading type="H1">This is the Login Screen</Heading>
    </View>
  );
}
