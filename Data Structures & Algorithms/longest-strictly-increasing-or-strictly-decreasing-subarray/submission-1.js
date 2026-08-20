class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let max = 1;
        let inc = 1;
        let dec = 1;
        for(let i=1;i<nums.length;i++){
            if(nums[i-1]<nums[i]){
                inc++;
                dec=1;
            }
            else if(nums[i-1]>nums[i]){
                dec++;
                inc=1;
            }else{
                inc =1;
                dec=1;
            }
            max = Math.max(max,inc,dec)
        }
        return max
    }
}
