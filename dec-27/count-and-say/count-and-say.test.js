import countAndSay from './count-and-say';

describe('Should pass all the tests', () => {
  test('Should create correct count-and-say sequence', () => {
    expect(countAndSay(1)).toBe('1');
    expect(countAndSay(4)).toBe('1211');
  });
});
