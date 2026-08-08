class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let word = strs[i];
            let j = 0;

            while (j < ans.length && j < word.length && ans[j] === word[j]) {
                j++;
            }

            ans = ans.slice(0, j);

            if (ans === '') {
                return '';
            }
        }

        return ans;
    }
}