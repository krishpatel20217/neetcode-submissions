class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let max = nums[0];
        let pre = nums[0];
        for(let i=1;i<nums.length;i++){
            if(nums[i-1]<nums[i]){
                pre+=nums[i];
            }else{
                pre=nums[i];
            }
            max = Math.max(max,pre)
        }
        return max;
    }
}
