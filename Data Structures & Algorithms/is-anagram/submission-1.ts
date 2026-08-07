class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length){
            return false;
        }
        const freq ={};
        for(let i=0;i<s.length;i++){
            let ch=s[i];
            freq[ch]=(freq[ch]||0)+1;
        }
        for(let i=0;i<t.length;i++){
            let ch=t[i];
            if(freq[ch]){
                freq[ch]--;
            }else{
                return false;
            }
        }
        return true;
    }
}
