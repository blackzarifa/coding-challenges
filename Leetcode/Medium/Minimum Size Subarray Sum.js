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
var hasCycle = function (head, set = new Set()) {
  if (head === null) return false;
  if (set.has(head)) return true;

  set.add(head);
  return hasCycle(head.next, set);
};
