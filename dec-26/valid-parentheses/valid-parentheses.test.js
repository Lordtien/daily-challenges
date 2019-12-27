import isValid from './valid-parentheses';

describe('Should pass all the tests', () => {
  test('Should check the string for valid parentheses structure', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
  });
});
