class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            ans[i] = nums[i];
            ans[i + len] = nums[i];
        }
    return ans;
    }
}
