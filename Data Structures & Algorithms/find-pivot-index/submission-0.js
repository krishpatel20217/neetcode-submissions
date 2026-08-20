class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let pre=new Array(nums.length)
        let post=new Array(nums.length)
        let presum = 0;
        let postsum = 0;
        for(let i=0;i<nums.length;i++){
            pre[i] = presum;
            presum += nums[i];
        }
        for(let i=nums.length-1;i>=0;i--){
            post[i] = postsum;
            postsum += nums[i];
        }
        for(let i=0;i<nums.length;i++){
            if(pre[i]==post[i]){
                return i;
            }
        }
        return -1;
        
    }
}
