import React, {ReactNode} from 'react';
import {
  Text,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {Title, styleSheet} from './styles';

interface Props extends TouchableOpacityProps {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  title?: string;
  children?: ReactNode;
  titleStyle?: StyleProp<TextStyle>;
}

function Button({
  leftElement,
  rightElement,
  title,
  children,
  titleStyle,
  ...rest
}: Props) {
  return (
    <TouchableOpacity {...rest} style={styleSheet.Container}>
      {!children && (
        <>
          {leftElement}
          <Title style={titleStyle} numberOfLines={1}>
            {title}
          </Title>
          {rightElement}
        </>
      )}
      {children}
    </TouchableOpacity>
  );
}

export {Button};
