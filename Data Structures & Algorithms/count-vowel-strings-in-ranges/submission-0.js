class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let arr = new Array(words.length).fill(0);
        for(let i=0;i<words.length;i++){
            if((words[i][0]=== 'a' || words[i][0]=== 'e' || words[i][0]=== 'i' ||   words[i][0]=== 'o' || words[i][0]=== 'u')&&(words[i][words[i].length-1]=== 'a' || words[i][words[i].length-1]=== 'e' || words[i][words[i].length-1]=== 'i' || words[i][words[i].length-1]=== 'o' || words[i][words[i].length-1]=== 'u')){
                arr[i]=1;
            }
        }
        const ans = new Array(queries.length).fill(0);
        for(let i=0;i<queries.length;i++){
            let currentcount =0;
            for(let j=queries[i][0];j<=queries[i][1];j++){
                if(arr[j]==1){
                    currentcount++;
                }
            }
            ans[i]=currentcount;
        }
        return ans;
    }
}
