import maxProfit from './best-time-to-buy-and-sell-stock-ii';

describe('Should pass all the tests', () => {
  test('Should produce max profit for the give data', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
