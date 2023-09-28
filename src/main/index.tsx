import React from 'react';
import { registerRootComponent } from 'expo';
import { AppNavigator } from '~/presentation/navigation';

registerRootComponent(Main);

export default function Main() {
  return <AppNavigator />;
}
