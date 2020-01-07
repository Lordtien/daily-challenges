import isPalindrome from './valid-palindrome';

describe('Should pass all the tests', () => {
  test('Should check palindromes correctly', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toEqual(false);
  });
});
