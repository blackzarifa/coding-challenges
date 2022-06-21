/*
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.


Example 1:

Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

Example 2:

Input: root = [2,1,1]
Output: [[1]]

Example 3:

Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]


Constraints:

The number of the nodes in the tree will be in the range [1, 10^4]
-200 <= Node.val <= 200
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var findDuplicateSubtrees = function (root) {
  const duplicates = [];
  const map = new Map();
  const search = (root, duplicates, map) => {
    if (!root) return 'X';

    const subtree = `${root.val} - ${search(root.left, duplicates, map)} - ${search(root.right, duplicates, map)}`;

    if (map.has(subtree)) {
      map.set(subtree, map.get(subtree) + 1);

      if (map.get(subtree) === 2) duplicates.push(root);
    } else {
      map.set(subtree, 1);
    }

    return subtree;
  };

  search(root, duplicates, map);

  return duplicates;
};