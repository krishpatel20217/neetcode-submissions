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
            }
            if(ch===" "){
                return count;
            }
            i--
        }
        return count
    }
}
