import {DateMask} from './date';

describe('Date helper', () => {
  it('should be return "error" when the param is not string.', () => {
    expect(DateMask(12)).toEqual('error');
  });

  it('should be return masked date.', () => {
    expect(DateMask('10102010')).toEqual('10/10/2010');
  });
});
