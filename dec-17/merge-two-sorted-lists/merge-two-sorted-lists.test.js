import mergeTwoLists from './merge-two-sorted-lists';

const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

describe('Should pass all the tests', () => {
  const l1 = [4, 2, 1];
  const l2 = [4, 3, 1];
  let firstListHead = null;
  let secondListHead = null;
  l1.map((value) => {
    const current = new ListNode(value);
    current.next = firstListHead;
    firstListHead = current;
    return null;
  });
  l2.map((value) => {
    const current = new ListNode(value);
    current.next = secondListHead;
    secondListHead = current;
    return null;
  });

  const finalArray = [];
  let mergedListHead = mergeTwoLists(firstListHead, secondListHead);
  while (mergedListHead !== null) {
    finalArray.push(mergedListHead.val);
    mergedListHead = mergedListHead.next;
  }

  test('Should merge lists correctly', () => {
    expect(finalArray).toEqual([1, 1, 2, 3, 4, 4]);
  });
});
