class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const deque = [];
        const ans = [];

        for(let i = 0; i < nums.length; i++) {

            // 1. Remove indices that are outside the window
            while(deque.length > 0 && deque[0] <= i - k) {
                deque.shift();
            }

            // 2. Remove smaller elements from the back
            while(
                deque.length > 0 &&
                nums[deque[deque.length - 1]] <= nums[i]
            ) {
                deque.pop();
            }

            // 3. Add current index
            deque.push(i);

            // 4. Once window reaches size k, front is maximum
            if(i >= k - 1) {
                ans.push(nums[deque[0]]);
            }
        }

        return ans;
    }
}