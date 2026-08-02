class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let word of strs){
            result += word.length + "#" + word;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i=0;
        while(i< str.length){
            let j=i;
            while (str[j]!="#"){
                j++
            }
            const length = Number(str.substring(i,j))
            const word = str.substring(j+1, j+1+length);
            result.push(word);
            i = j + 1 + length;
        }
         return result;
    }
}
