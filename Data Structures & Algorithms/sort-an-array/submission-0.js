class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        // Build max heap
        for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
            this.heapify(nums, nums.length, i);
        }

        // Move largest element to the end
        for (let i = nums.length - 1; i > 0; i--) {

            // Swap root with last element
            [nums[0], nums[i]] = [nums[i], nums[0]];

            // Restore heap
            this.heapify(nums, i, 0);
        }

        return nums;
    }

    heapify(nums, n, i) {

        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest !== i) {

            [nums[i], nums[largest]] = [nums[largest], nums[i]];

            this.heapify(nums, n, largest);
        }
    }
}