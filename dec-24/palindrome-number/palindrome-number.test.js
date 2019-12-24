import isPalindrome from './palindrome-number';

describe('Should pass all the tests', () => {
  test('Should check palindrome according to the rules', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
  });
});
