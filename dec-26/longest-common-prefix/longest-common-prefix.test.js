import longestCommonPrefix from './longest-common-prefix';

describe('Should pass all the tests', () => {
  test('Should find the longest common prefix in array of strings', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    expect(longestCommonPrefix([])).toBe('');
    expect(longestCommonPrefix(['aca', 'cba'])).toBe('');
  });
});
