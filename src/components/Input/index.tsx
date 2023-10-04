import React, { forwardRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Styled from './styles';
import { useTheme } from '@emotion/react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  textArea?: boolean;
  wrapperStyle?: ViewStyle;
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      secureTextEntry,
      error,
      textArea = false,
      wrapperStyle = {},
      ...rest
    },
    ref,
  ) => {
    const [showTextEntry, setShowTextEntry] = useState(secureTextEntry);
    const { colors } = useTheme();

    return (
      <Styled.Wrapper style={wrapperStyle}>
        <Styled.Container testID="input-container" textArea={textArea}>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Row>
            <Styled.InputText
              ref={ref}
              testID={'input-text'}
              secureTextEntry={showTextEntry}
              multiline={textArea}
              numberOfLines={textArea ? 6 : undefined}
              textAlignVertical={textArea ? 'top' : 'center'}
              placeholderTextColor={colors.gray[400]}
              {...rest}
            />

            {secureTextEntry && (
              <Styled.BaseButtonSecurty
                onPress={() => setShowTextEntry(prev => !prev)}>
                <Icon
                  testID={
                    showTextEntry ? 'visibility-icon' : 'visibility-off-icon'
                  }
                  name={showTextEntry ? 'eye' : 'eye-off'}
                  size={24}
                  color={colors.primary}
                />
              </Styled.BaseButtonSecurty>
            )}
          </Styled.Row>
        </Styled.Container>

        {error ? <Styled.Error>{error}</Styled.Error> : null}
      </Styled.Wrapper>
    );
  },
);
