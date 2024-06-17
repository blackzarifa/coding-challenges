/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pArr = dfs(p);
  const qArr = dfs(q);

  if (pArr.length !== qArr.length) return false;

  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] !== qArr[i]) return false;
  }

  return true;
};

const dfs = (root, arr = []) => {
  console.log(root);
  if (!root) {
    arr.push(null);
    return arr;
  }

  arr.push(root.val);

  arr = dfs(root.left, arr);
  arr = dfs(root.right, arr);

  return arr;
};
