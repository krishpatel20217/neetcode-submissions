class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let ans=0;
        let count=0;
        for(let i of nums){
            if(i===1){
                count++;
                ans = Math.max(ans, count);
            }
            else{ 
                count=0;
            }
        }
        return ans;
    }
}
