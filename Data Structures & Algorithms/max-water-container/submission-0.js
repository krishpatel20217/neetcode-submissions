class Solution {

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let i = 0;
        let j = heights.length - 1;
        let ans = 0;

        while (i < j) {

            let currentArea =
                Math.min(heights[i], heights[j]) * (j - i);

            ans = Math.max(ans, currentArea);

            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return ans;
    }
}