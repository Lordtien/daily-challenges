import strStr from './implement-strstr';

describe('Should pass all the tests', () => {
  test('Should provide the index where substring(needle) exist in a string(haystack)', () => {
    expect(strStr('hello', 'll')).toBe(2);
    expect(strStr('aaaaa', 'bba')).toBe(-1);
  });
});
