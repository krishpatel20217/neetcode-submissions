class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count=0;
        let se=s.trim();
        let i=se.length-1;
        while(i>=0){
            const ch=se[i];
            if(ch!=" "){
                count ++;
                i--
            }
            if(ch===" "){
                return count;
            }
        }
        return count
    }
}
