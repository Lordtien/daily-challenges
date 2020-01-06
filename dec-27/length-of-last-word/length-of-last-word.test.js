import lengthOfLastWord from './length-of-last-word';

describe('Should pass all the tests', () => {
  test('Should find length of the last word', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
    expect(lengthOfLastWord('')).toBe(0);
    expect(lengthOfLastWord('a ')).toBe(1);
    expect(lengthOfLastWord(' ')).toBe(0);
    expect(lengthOfLastWord(' a ')).toBe(1);
  });
});
