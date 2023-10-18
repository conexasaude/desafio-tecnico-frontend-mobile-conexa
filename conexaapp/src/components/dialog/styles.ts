import {Dimensions, Modal, ScrollView} from 'react-native';
import {css} from 'styled-components';
import styled from 'styled-components/native';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export const Container = styled(Modal)``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: 'rgba(69, 59, 49,0.7)';
  align-items: center;
  justify-content: center;
`;

export const DialogContainer = styled.View`
  width: ${WIDTH * 0.8}px;
  max-height: ${HEIGHT / 1.5}px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  align-self: center;
`;

export const DialogTitleContainer = styled.View`
  width: 100%;
  padding: 15px;
  background-color: ${({theme}) => theme.COLORS.BLUE_600};
  border-radius: 10px 10px 0px 0px;
  justify-content: center;
`;

export const DialogTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    color: ${theme.COLORS.WHITE};
    font-weight: bold;
  `}
`;

export const DialogMessageContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const DialogMessage = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    color: ${theme.COLORS.GRAY_600};
    text-align: justify;
  `}
`;

export const DialogButtonContainer = styled.View`
  width: 100%;
  padding: 10px;
`;
