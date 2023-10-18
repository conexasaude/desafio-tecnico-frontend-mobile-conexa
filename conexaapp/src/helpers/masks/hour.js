import {MaskService} from 'react-native-masked-text';

function HourMask(data) {
  if (typeof data !== 'string') return 'error';

  return MaskService.toMask('datetime', data, {
    format: 'HH:mm',
  });
}

export {HourMask};
