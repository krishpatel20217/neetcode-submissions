class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {

        const prefix = new Array(words.length).fill(0);

        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

        for(let i = 0; i < words.length; i++){

            if(
                vowels.has(words[i][0]) &&
                vowels.has(words[i][words[i].length - 1])
            ){
                prefix[i] = 1;
            }

            if(i > 0){
                prefix[i] += prefix[i - 1];
            }
        }

        const ans = [];

        for(let i = 0; i < queries.length; i++){

            const left = queries[i][0];
            const right = queries[i][1];

            if(left === 0){
                ans.push(prefix[right]);
            }else{
                ans.push(prefix[right] - prefix[left - 1]);
            }
        }

        return ans;
    }
}