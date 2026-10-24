
class Solution {
    mergeInBetween(list1, a, b, list2) {
        // Find the node immediately before index a
        let beforeA = list1;

        for (let i = 0; i < a - 1; i++) {
            beforeA = beforeA.next;
        }

        // Find the node immediately after index b
        let afterB = beforeA.next;

        for (let i = a; i <= b; i++) {
            afterB = afterB.next;
        }

        // Find the last node of list2
        let tail2 = list2;

        while (tail2.next !== null) {
            tail2 = tail2.next;
        }

        // Connect the three parts
        beforeA.next = list2;
        tail2.next = afterB;

        return list1;
    }
}
