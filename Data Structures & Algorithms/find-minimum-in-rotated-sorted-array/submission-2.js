class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length-1;
        let ans = 1001;
        while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return nums[low];
    }
}
