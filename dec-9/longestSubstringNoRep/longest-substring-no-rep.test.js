import lengthOfLongestSubString from './longest-substring-no-rep';

describe('Should pass all the tests', () => {
  test('Should return largest length of a string', () => {
    expect(lengthOfLongestSubString('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubString('bbbbb')).toBe(1);
    expect(lengthOfLongestSubString('pewwkew')).toBe(3);
    expect(lengthOfLongestSubString('jbpnbwwd')).toBe(4);
    expect(lengthOfLongestSubString('aab')).toBe(2);
    expect(lengthOfLongestSubString('dvdf')).toBe(3);
  });
});
