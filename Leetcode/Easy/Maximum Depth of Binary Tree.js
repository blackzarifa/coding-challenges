/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;

  if (root) {
    max = search(root, 0);
  }

  return max;
};

const search = (node, count) => {
  if (!node) return count;

  let left = search(node.left, count + 1);
  let right = search(node.right, count + 1);

  return Math.max(left, right);
};
