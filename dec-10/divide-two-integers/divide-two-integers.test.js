import divide from './divide-two-integers';

describe('Should pass all the tests', () => {
  test('Should produce correct quotient', () => {
    expect(divide(7, -3)).toBe(-2);
    expect(divide(0, 1)).toBe(0);
    expect(divide(1, 1)).toBe(1);
    expect(divide(-2147483648, -1)).toBe(2147483647);
  });
});
