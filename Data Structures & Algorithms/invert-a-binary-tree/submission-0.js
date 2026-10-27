
class Solution {
    invertTree(root) {
        if (root == null) {
            return null;
        }

        let leftnode = root.left;
        let rightnode = root.right;

        root.left = rightnode;
        root.right = leftnode;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
