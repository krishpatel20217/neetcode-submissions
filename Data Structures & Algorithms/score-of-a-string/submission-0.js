class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let answer=0;
        for(let i=1;i<s.length;i++){
            answer += Math.abs((s[i-1].charCodeAt(0)-s[i].charCodeAt(0)))
        }
        return answer;
    }
}
