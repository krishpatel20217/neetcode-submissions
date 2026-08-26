class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const text = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i=0;
        while(i<=Math.floor(text.length)){
            if(text[i]!=text[text.length-1-i]){
                return false;
            }
            i++;
        }
        return true;
    }
}
