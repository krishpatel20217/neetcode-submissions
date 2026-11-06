/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
                function dfs(node, maxValue) {

            if (node === null) {
                return 0;
            }

            let count = 0;

            if (node.val >= maxValue) {
                count++;
            }

            maxValue = Math.max(maxValue, node.val);

            count += dfs(node.left, maxValue);
            count += dfs(node.right, maxValue);

            return count;
        }

        return dfs(root, root.val);


    }
}
