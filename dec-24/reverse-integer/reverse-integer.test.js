import reverse from './reverse-integer';

describe('Should pass all the tests', () => {
  test('Should reverse correctly', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(-123)).toBe(-321);
    expect(reverse(120)).toBe(21);
    expect(reverse(1534236469)).toBe(0);
  });
});
