class Solution {
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let prev = dummy;

        let l1 = list1;
        let l2 = list2;

        while (l1 !== null && l2 !== null) {

            if (l1.val <= l2.val) {
                prev.next = l1;
                l1 = l1.next;
            } else {
                prev.next = l2;
                l2 = l2.next;
            }

            prev = prev.next;
        }

        prev.next = l1 !== null ? l1 : l2;

        return dummy.next;
    }
}