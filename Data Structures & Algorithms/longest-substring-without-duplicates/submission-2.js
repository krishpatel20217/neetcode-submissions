class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let max = 0;
        let st = 0;

        const map = new Map();

        for (let i = 0; i < s.length; i++) {

            if (map.has(s[i]) && map.get(s[i]) >= st) {
                st = map.get(s[i]) + 1;
            }

            map.set(s[i], i);

            max = Math.max(max, i - st + 1);
        }

        return max;
    }
}