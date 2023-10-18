import {ActivityIndicator, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height: HEIGHT} = Dimensions.get('screen');

export const Container = styled.View`
  width: 100%;
  height: ${HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 100;
`;

export const StyledActivityIndicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: 'blue',
  animating: true,
})`
  position: absolute;
  align-self: center;
  z-index: 100;
  top: ${HEIGHT / 2}px;
`;
