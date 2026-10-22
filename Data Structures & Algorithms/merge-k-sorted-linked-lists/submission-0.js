
class Solution {
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }

        // Merge lists in pairs until only one remains
        let interval = 1;

        while (interval < lists.length) {
            for (let i = 0; i + interval < lists.length; i += interval * 2) {
                lists[i] = this.mergeTwoLists(
                    lists[i],
                    lists[i + interval]
                );
            }

            interval *= 2;
        }

        return lists[0];
    }

    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
        let current = dummy;

        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }

            current = current.next;
        }

        // Attach whichever list still has nodes
        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        return dummy.next;
    }
}
