
class Solution {
    reverseKGroup(head, k) {
        const dummy = new ListNode(0);
        dummy.next = head;

        let groupPrev = dummy;

        while (true) {
            // 1. Find the kth node of the current group
            let kth = groupPrev;

            for (let i = 0; i < k; i++) {
                kth = kth.next;

                // Not enough nodes left
                if (kth === null) {
                    return dummy.next;
                }
            }

            // 2. Save the node after this group
            const groupNext = kth.next;

            // 3. Reverse the current group
            let prev = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            // 4. Connect the reversed group
            const temp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = temp;
        }
    }
}
