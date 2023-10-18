import {RFValue} from 'react-native-responsive-fontsize';

const theme = {
  COLORS: {
    WHITE: '#FFFFFF',

    GRAY_100: '#FAFAFA',
    GRAY_200: '#EFF0F0',
    GRAY_300: '#DDDEDF',
    GRAY_400: '#B9BBBC',
    GRAY_500: '#5C6265',
    GRAY_600: '#333638',
    GRAY_700: '#1B1D1E',

    BLUE_300: '#7dd3fc',
    BLUE_400: '#3CB4E7',
    BLUE_500: '#0284c7',
    BLUE_600: '#1800AE',

    GREEN_100: '#E5F0DB',
    GREEN_200: '#CBE4B4',
    GREEN_300: '#22c55e',
    GREEN_400: '#16a34a',

    RED_300: '#F4E6E7',
    RED_400: '#F3BABD',
    RED_500: '#EF4056',
    RED_600: '#BF3B44',
  },
  FONT_SIZE: {
    TITLE: {
      XS: RFValue(14),
      S: RFValue(16),
      M: RFValue(18),
      L: RFValue(20),
    },
    BODY: {
      XS: RFValue(12),
      S: RFValue(14),
      M: RFValue(16),
      L: RFValue(18),
    },
  },
};
export type Theme = typeof theme;

export default theme;
