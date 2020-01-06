import mySqrt from './sqrtx';

describe('Should pass all the tests', () => {
  test('Should find square root', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(1739869407)).toBe(41711);
  });
});
