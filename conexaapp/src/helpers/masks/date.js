import {MaskService} from 'react-native-masked-text';

function DateMask(data) {
  if (typeof data !== 'string') return 'error';

  return MaskService.toMask('datetime', data, {
    format: 'DD/MM/YYYY',
  });
}

export {DateMask};
