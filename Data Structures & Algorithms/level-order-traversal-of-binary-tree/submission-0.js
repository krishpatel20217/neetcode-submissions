
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {

        if (root === null) {
            return [];
        }

        let result = [];
        let queue = [root];

        while (queue.length > 0) {

            let size = queue.length;
            let currentLevel = [];

            for (let i = 0; i < size; i++) {

                let node = queue.shift();

                currentLevel.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            result.push(currentLevel);
        }

        return result;
    }
}
