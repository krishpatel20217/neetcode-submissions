class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let ans = 0;

        const map = new Map();

        for (let right = 0; right < s.length; right++) {

            // Add current character
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            // Highest frequency in current window
            maxFreq = Math.max(maxFreq, map.get(s[right]));

            // Characters that need to be replaced
            let replacements = (right - left + 1) - maxFreq;

            // Window is invalid
            if (replacements > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            // Valid window
            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}