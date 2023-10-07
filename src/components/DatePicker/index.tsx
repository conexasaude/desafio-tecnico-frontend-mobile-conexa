import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { Label, Placeholder, Value, ValueContainer } from './styles';

interface DatePickerProps {
    label: string
    value: Date | null
    onPress: ((event: GestureResponderEvent) => void) | null | undefined
}

export default function DatePicker({ label, value, onPress }: DatePickerProps) {
    function valueFormat(date: Date) {
        const formattedDate = new Intl.DateTimeFormat('pt-BR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		}).format(date);

        return formattedDate
    }
    return (
        <Pressable onPress={onPress}>
            <Label>
                {label}
                <Text style={{ color: 'red' }}> *</Text>
            </Label>
            
            <ValueContainer>
                {value ? <Value>{valueFormat(value)}</Value> : <Placeholder>Selecione uma data</Placeholder> }
            </ValueContainer>
        </Pressable>
    )
}