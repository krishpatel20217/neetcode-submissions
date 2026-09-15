class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) {
            return false;
        }

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);

        // Store frequency of s1
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {

            // Add current character to window
            count2[s2.charCodeAt(right) - 97]++;

            // Keep window size equal to s1.length
            if (right - left + 1 > s1.length) {
                count2[s2.charCodeAt(left) - 97]--;
                left++;
            }

            // Compare frequencies
            if (right - left + 1 === s1.length) {

                let same = true;

                for (let i = 0; i < 26; i++) {
                    if (count1[i] !== count2[i]) {
                        same = false;
                        break;
                    }
                }

                if (same) {
                    return true;
                }
            }
        }

        return false;
    }
}