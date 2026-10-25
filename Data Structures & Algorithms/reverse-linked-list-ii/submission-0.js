
class Solution {
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0);
        dummy.next = head;

        // 1. Move prev to the node before the reversal
        let prev = dummy;

        for (let i = 1; i < left; i++) {
            prev = prev.next;
        }

        // 2. Start reversing the section
        let curr = prev.next;

        for (let i = 0; i < right - left; i++) {
            const next = curr.next;

            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return dummy.next;
    }
}
