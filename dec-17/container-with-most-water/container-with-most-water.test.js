import maxArea from './container-with-most-water';

describe('Should pass all the tests', () => {
  test('Should produce correct quotient', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
