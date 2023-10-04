import { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Label } from './styles';

interface SelectProps {
	label: string
	items: { label: string, value: string }[]
	value: string
	setValue: any
}

export default function Select({ label, items, value, setValue }: SelectProps) {
	const [open, setOpen] = useState(false);

	return (
		<View style={{ zIndex: 1 }}>
			<Label>{label}</Label>
			
			<DropDownPicker
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				onSelectItem={(item) => {
					setValue(item.value);
				}}
				placeholder='Selecione um paciente'
				placeholderStyle={{ color: '#C7C7CD', fontSize: 16 }}
				listItemLabelStyle={{ fontSize: 16 }}
				textStyle={{
					fontSize: 16
				}}
			/>
		</View>
	)
}