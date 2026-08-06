class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let count = 0;
        let se = s.trim();
        let i=se.length-1;
        while(i>=0){
            if (se[i] === " ") {
                return count;
            }
            count ++;
            i--
        }
        return count;
    }
}
