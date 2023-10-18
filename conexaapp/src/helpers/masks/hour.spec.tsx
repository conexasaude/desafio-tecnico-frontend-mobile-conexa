import {HourMask} from './hour';

describe('Date helper', () => {
  it('should be return "error" when the param is not string.', () => {
    expect(HourMask(12)).toEqual('error');
  });

  it('should be return masked date.', () => {
    expect(HourMask('1010')).toEqual('10:10');
  });
});
