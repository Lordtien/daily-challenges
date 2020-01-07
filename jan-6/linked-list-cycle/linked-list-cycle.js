/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let p1 = head; let p2 = head;
  while (p1 !== null && p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
    if (p2 === null) {
      return false;
    }
    p2 = p2.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};

export default hasCycle;
