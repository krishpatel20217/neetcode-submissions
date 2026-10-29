
class Solution {
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function height(node) {
            if (node === null) {
                return 0;
            }

            let leftHeight = height(node.left);
            let rightHeight = height(node.right);

            diameter = Math.max(
                diameter,
                leftHeight + rightHeight
            );

            return 1 + Math.max(leftHeight, rightHeight);
        }

        height(root);

        return diameter;
    }
}
