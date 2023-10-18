import theme from '@theme/index';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styleSheet = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.BODY.S}px;
  color: ${theme.COLORS.WHITE};
`;
