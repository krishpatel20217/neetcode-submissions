class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        let map = new Map();
        let ans = words.length;
        for(let i=0;i<allowed.length;i++){
            map.set(allowed[i],(map.get(allowed[i])||0)+1);
        }
        for(let i=0;i<words.length;i++){
            let ch = words[i];
            for(let j=0;j<ch.length;j++){
                if(!map.has(ch[j])){
                    ans--;
                    break;
                }
            }
        }
        return ans;
    }
}
