class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {
        let map= new Map();
        for(let i=0; i<s.length;i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }
        let maxOdd = 0;
        let minEven = Infinity;

        for (const [key, value] of map.entries()) {
            if (value % 2 !== 0) {
                maxOdd = Math.max(maxOdd, value);
            } else {
                minEven = Math.min(minEven, value);
            }
        }
        return maxOdd-minEven
    }
}
