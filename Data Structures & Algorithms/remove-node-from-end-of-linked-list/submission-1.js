class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let current = head;

        // Pass 1: Find length
        while (current) {
            length++;
            current = current.next;
        }

        // Removing the head
        if (n === length) {
            return head.next;
        }

        // Pass 2: Go to node before the target
        current = head;

        for (let i = 0; i < length - n - 1; i++) {
            current = current.next;
        }

        // Remove target node
        current.next = current.next.next;

        return head;
    }
}