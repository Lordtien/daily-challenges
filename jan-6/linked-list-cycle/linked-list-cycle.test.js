import hasCycle from './linked-list-cycle';

const ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
};

describe('Should pass all the tests', () => {
  test('Should check cycles in linked lists correctly', () => {
    let list = [3, 2, 0, -4];
    let head = new ListNode(list[0]);
    let curr = head;
    for (let i = 1; i < list.length; i += 1) {
      const temp = new ListNode(list[i]);
      curr.next = temp;
      curr = temp;
    }
    curr.next = head.next;
    expect(hasCycle(head)).toBe(true);

    list = [1, 2];
    head = new ListNode(list[0]);
    head.next = new ListNode(list[1]);
    head.next.next = head;
    expect(hasCycle(head)).toEqual(true);

    list = [1];
    head = new ListNode(list[0]);
    expect(hasCycle(head)).toEqual(false);
  });
});
