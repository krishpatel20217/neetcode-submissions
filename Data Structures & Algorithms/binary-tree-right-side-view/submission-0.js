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
     * @return {number[]}
     */
    rightSideView(root) {
        if(root === null){
            return [];
        }
        let result = [];
        let queue = [root];

        while(queue.length>0){
            let size = queue.length;
            let rightval = null;

            for(let i=0 ; i<size ; i++){
                let node = queue.shift();
                rightval = node.val;
                if(node.left != null){
                    queue.push(node.left);
                }
                if(node.right != null){
                    queue.push(node.right);
                }
            }
            result.push(rightval);
        }

        return result;
    }
}
