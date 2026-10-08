class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if (head === null) {
            return null;
        }

        const map = new Map();

        // Step 1: create a new node for every original node
        let curr = head;

        while (curr !== null) {
            const newNode = new Node(curr.val);
            map.set(curr, newNode);

            curr = curr.next;
        }

        // Step 2: connect next and random pointers
        curr = head;

        while (curr !== null) {
            const newNode = map.get(curr);

            if (curr.next !== null) {
                newNode.next = map.get(curr.next);
            }

            if (curr.random !== null) {
                newNode.random = map.get(curr.random);
            }

            curr = curr.next;
        }

        return map.get(head);
    }
}