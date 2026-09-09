class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        if (nums.length <= 1) {
            return nums;
        }

        let mid = Math.floor(nums.length / 2);

        let left = nums.slice(0, mid);
        let right = nums.slice(mid);

        left = this.sortArray(left);
        right = this.sortArray(right);

        return this.merge(left, right);
    }

    merge(left, right) {

        let result = [];

        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {

            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            result.push(left[i]);
            i++;
        }

        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    }
}