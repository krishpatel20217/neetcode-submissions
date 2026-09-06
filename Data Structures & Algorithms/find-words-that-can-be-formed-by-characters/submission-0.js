class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        let map = new Map();
        for(let i=0;i<chars.length;i++){
            map.set(chars[i],(map.get(chars[i]) || 0)+1);
        }
        let count = 0;
        for(let i=0;i<words.length;i++){
            let current = new Map();
            for(let j=0;j<words[i].length;j++){
                current.set(words[i][j],(current.get(words[i][j]) || 0)+1)
            }
            let currentcount = 0;
            let valid = true;
            for(const [key,value] of current){
                if(map.get(key) >= value){
                    currentcount += value;
                }else{
                    valid = false;
                    break;
                }
            }
            if(valid){
                count += currentcount;
            }
        }
        return count;
    }
}
