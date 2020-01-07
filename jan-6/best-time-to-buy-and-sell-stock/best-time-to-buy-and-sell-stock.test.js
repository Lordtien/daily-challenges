import maxProfit from './best-time-to-buy-and-sell-stock';

describe('Should pass all the tests', () => {
  test('Should produce max profit for the given data', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    expect(maxProfit([2, 4, 1])).toEqual(2);
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toEqual(2);
  });
});
