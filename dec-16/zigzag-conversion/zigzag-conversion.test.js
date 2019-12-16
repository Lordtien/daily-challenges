import convert from './zigzag-conversion';

describe('Should pass all the tests', () => {
  test('Should produce correct quotient', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    expect(convert('', 1)).toBe('');
    expect(convert('A', 1)).toBe('A');
    expect(convert('AB', 1)).toBe('AB');
  });
});
