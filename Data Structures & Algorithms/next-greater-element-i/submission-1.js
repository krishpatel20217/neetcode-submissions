class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const stack = [];
        const map = new Map();

        for (const num of nums2) {

            while (
                stack.length > 0 &&
                num > stack[stack.length - 1]
            ) {
                const smaller = stack.pop();
                map.set(smaller, num);
            }

            stack.push(num);
        }

        while (stack.length > 0) {
            map.set(stack.pop(), -1);
        }

        const result = [];

        for (const num of nums1) {
            result.push(map.get(num));
        }

        return result;
    }
}