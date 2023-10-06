import { TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, CustomInput, IconContainer, InputContainer, } from './styles';

export default function SearchInput({ ...rest }: TextInputProps) {
    return (
        <Container>
            <InputContainer>
                <IconContainer>
                    <MaterialCommunityIcons name="magnify" size={24} color="black" />
                </IconContainer>

                <CustomInput
                    placeholder='Nome do paciente ou # da consulta'
                    autoCorrect={false}
                    {...rest}
                />
            </InputContainer>
        </Container>
    )
}