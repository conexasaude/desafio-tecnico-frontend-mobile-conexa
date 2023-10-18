import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LogoSvg from '@assets/logo-conexa.svg';
import styles from './styles';

export function Splash() {
  return (
    <View style={styles.Container}>
      <Animatable.View
        animation="slideInDown"
        iterationCount="infinite"
        direction="alternate">
        <LogoSvg />
      </Animatable.View>

      <Animatable.Text
        animation="pulse"
        iterationCount="infinite"
        style={{color: '#FFFFFF'}}>
        Carregando...
      </Animatable.Text>
    </View>
  );
}
