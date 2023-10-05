import { View, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputContainer, CustomInput, Label, IconButton } from './styles';
import { useState } from 'react';

export default function PasswordInput({ value, ...rest }: TextInputProps) {
    const [secure, setSecure] = useState(true)

    return (
        <View>
            <Label>Senha</Label>
            <InputContainer>
                <CustomInput
                    value={value}
                    secureTextEntry={secure}
                    {...rest}
                />
                
                <IconButton
                    onPress={() => setSecure(!secure)}
                    disabled={value === ''}
                >
                    {secure ? (
                        <MaterialCommunityIcons name="eye" size={24} color="black" />
                    ) : (
                        <MaterialCommunityIcons name="eye-off" size={24} color="black" />
                    )}
                </IconButton>
            </InputContainer>
        </View>
    )
}