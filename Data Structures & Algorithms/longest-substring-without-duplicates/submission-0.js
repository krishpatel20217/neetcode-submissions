class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        let st=0;
        let l=0;
        const map = new Map();
        for(let i=0;i<s.length;i++){
            if(map.has(s[i]) && map.get(s[i])>=st){   
                st = map.get(s[i]) + 1;
                l = i - map.get(s[i]);
                max = Math.max(max,l);
                map.set(s[i],i);
            }else{
                map.set(s[i],i);
                l++;
                max = Math.max(max,l);
            }
        }
        return max;
    }
}
