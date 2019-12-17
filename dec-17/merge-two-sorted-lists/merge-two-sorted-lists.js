/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

const mergeTwoLists = (l1, l2) => {
  if (l1 === null && l2 === null) return null;
  const firstNode = new ListNode();
  let list1 = l1;
  let list2 = l2;
  let currentNode = firstNode;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.val = list1.val;
      list1 = list1.next;
    } else {
      currentNode.val = list2.val;
      list2 = list2.next;
    }
    currentNode.next = new ListNode();
    currentNode = currentNode.next;
  }
  if (list1 !== null) {
    currentNode.val = list1.val;
    currentNode.next = list1.next;
    return firstNode;
  }
  if (list2 !== null) {
    currentNode.val = list2.val;
    currentNode.next = list2.next;
    return firstNode;
  }
  currentNode.next = null;
  return firstNode;
};

export default mergeTwoLists;
