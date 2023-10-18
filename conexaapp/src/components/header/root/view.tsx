import React from 'react';
import {ViewProps} from 'react-native';
import {Container} from './styles';

function Root({children, ...rest}: ViewProps) {
  return <Container {...rest}>{children}</Container>;
}

export {Root};
