class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let map = new Map();
        let count = 0;

        for (let num of nums) {
            let frequency = map.get(num) || 0;

            count += frequency;

            map.set(num, frequency + 1);
        }

        return count;
    }
}