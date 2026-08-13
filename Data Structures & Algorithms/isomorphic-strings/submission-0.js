class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const mapST = new Map();
        const mapTS = new Map();

        let i = 0;

        while (i < s.length) {

            if (mapST.has(s[i]) && mapST.get(s[i]) !== t[i]) {
                return false;
            }

            if (mapTS.has(t[i]) && mapTS.get(t[i]) !== s[i]) {
                return false;
            }

            mapST.set(s[i], t[i]);
            mapTS.set(t[i], s[i]);

            i++;
        }

        return true;
    }
}
