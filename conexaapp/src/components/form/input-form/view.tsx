import React, {ReactNode} from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {
  Container,
  ControllerContainer,
  Error,
  InputContainer,
  Label,
  LabelContainer,
  RightElement,
} from './styles';
import {Input} from '../input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined;
  label?: string;
  rightElement?: ReactNode;
  insertMask?: (value: string) => string;
}

export function InputForm({
  label,
  control,
  name,
  error,
  rightElement,
  style,
  insertMask,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <ControllerContainer>
            {label && (
              <LabelContainer>
                <Label>{label}</Label>
              </LabelContainer>
            )}
            <InputContainer>
              <Input
                onChangeText={text => {
                  if (insertMask) {
                    return onChange(insertMask(text));
                  }
                  return onChange(text);
                }}
                value={value}
                style={[style, {flex: 1}]}
                {...rest}
              />
              {rightElement && <RightElement>{rightElement}</RightElement>}
            </InputContainer>
          </ControllerContainer>
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
