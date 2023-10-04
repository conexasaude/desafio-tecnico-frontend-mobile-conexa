import React, { useState, useMemo, useEffect } from 'react';
import RNDatePicker from 'react-native-date-picker';
import * as Styled from './styles';
import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { useTheme } from '@emotion/react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatDateToLocale, formatDateToISO, formatTime } from '@/lib/utils';
import { Platform } from 'react-native';

interface DatePickerProps extends TouchableOpacityProps {
  placeholder?: string;
  label: string;
  mode?: 'date' | 'time' | 'datetime';
  onChange?: (date: string) => void;
  error?: string;
  wrapperStyle?: ViewStyle;
}

export function DatePicker({
  placeholder = 'Selecione...',
  label,
  mode = 'date',
  onChange,
  error,
  wrapperStyle = {},
  ...rest
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const { colors } = useTheme();

  const formatDate: string = useMemo(() => {
    if (!selectedDate) {
      return placeholder;
    }

    const dateFormat = formatDateToLocale(
      selectedDate.toLocaleDateString(),
      Platform.OS.toUpperCase(),
    );
    const timeFormat = formatTime(selectedDate.toLocaleTimeString());

    switch (mode) {
      case 'date':
        return dateFormat;
      case 'time':
        return timeFormat;
      default:
        return `${dateFormat} ${timeFormat}`;
    }
  }, [mode, placeholder, selectedDate]);

  useEffect(() => {
    if (onChange && formatDate !== placeholder) {
      if (mode === 'date') {
        onChange(formatDateToISO(formatDate));
      } else {
        onChange(formatDate);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formatDate, placeholder]);

  return (
    <>
      <Styled.Wrapper style={wrapperStyle}>
        <Styled.Container
          testID="date-picker"
          onPress={() => setOpen(true)}
          {...rest}>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Row>
            <Styled.Text>{formatDate}</Styled.Text>
            <Icon name="calendar" size={20} color={colors.primary} />
          </Styled.Row>
        </Styled.Container>

        {error ? <Styled.Error numberOfLines={1}>{error}</Styled.Error> : null}
      </Styled.Wrapper>

      <RNDatePicker
        modal
        open={open}
        date={selectedDate ?? new Date()}
        minimumDate={mode !== 'time' ? new Date() : undefined}
        mode={mode}
        cancelText="Cancelar"
        confirmText="Confirmar"
        onConfirm={date => {
          setOpen(false);
          setSelectedDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
