
class Solution {
    addTwoNumbers(l1, l2) {
        let li1 = l1;
        let li2 = l2;

        let dummy = new ListNode(0);
        let tail = dummy;
        let temp = 0;

        while (li1 !== null || li2 !== null) {
            let x = li1 !== null ? li1.val : 0;
            let y = li2 !== null ? li2.val : 0;

            let sum = x + y + temp;

            let digit = sum % 10;
            temp = Math.floor(sum / 10);

            tail.next = new ListNode(digit);
            tail = tail.next;

            if (li1 !== null) li1 = li1.next;
            if (li2 !== null) li2 = li2.next;
        }

        if (temp > 0) {
            tail.next = new ListNode(temp);
        }

        return dummy.next;
    }
}
