class Solution {
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        // Find the intersection inside the cycle
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        // Find the entrance to the cycle
        slow = 0;

        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}