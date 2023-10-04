import React from 'react';
import { Modal, View, Button } from 'react-native';

export interface DatePickerProps {
  open: boolean;
  mode?: 'date' | 'time' | 'datetime';
  placeholder?: string;
  onConfirm?: ((date: Date) => void) | undefined;
  onCancel?: () => void;
}

const DatePicker = ({ open, onConfirm, onCancel }: DatePickerProps) => {
  return (
    <Modal visible={open}>
      <View testID="date-picker-modal">
        <Button
          title="confirm"
          onPress={() => {
            onConfirm && onConfirm(new Date());
          }}
        />

        <Button title="cancel" onPress={() => onCancel && onCancel()} />
      </View>
    </Modal>
  );
};

export default DatePicker;
