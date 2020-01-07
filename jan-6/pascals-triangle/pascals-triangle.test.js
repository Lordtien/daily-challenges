import generate from './pascals-triangle';

describe('Should pass all the tests', () => {
  test('Should generate correct triangles', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    expect(generate(0)).toEqual([]);
  });
});
