class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        // Frequency of characters required from t
        const map = new Map();

        for (let char of t) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        let left = 0;

        // Number of required characters currently satisfied
        let have = 0;
        let need = t.length;

        // Frequency of characters inside current window
        const window = new Map();

        let ans = "";
        let minLength = Infinity;

        for (let right = 0; right < s.length; right++) {

            let char = s[right];

            // Add character to current window
            if (map.has(char)) {
                window.set(char, (window.get(char) || 0) + 1);

                // This occurrence satisfies a required character
                if (window.get(char) <= map.get(char)) {
                    have++;
                }
            }

            // Current window contains everything required
            while (have === need) {

                // Update answer
                let length = right - left + 1;

                if (length < minLength) {
                    minLength = length;
                    ans = s.substring(left, right + 1);
                }

                // Remove left character
                let leftChar = s[left];

                if (map.has(leftChar)) {

                    if (window.get(leftChar) <= map.get(leftChar)) {
                        have--;
                    }

                    window.set(
                        leftChar,
                        window.get(leftChar) - 1
                    );
                }

                left++;
            }
        }

        return ans;
    }
}