class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words: string[]): string[] {
        let ans: Set<string> = new Set();
        for(let i=0;i<words.length;i++){
            for(let j=0;j<words.length;j++){
                if (i !== j && words[j].includes(words[i])) {
                    ans.add(words[i]);
                
                }
            }
        }
        return [...ans];
    }
}
