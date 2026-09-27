class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length-1;
        let ans = 1001;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            ans = Math.min(ans,nums[mid]);
            if(nums[low]<=nums[mid]){
                if(nums[low]<nums[high]){
                    high = mid-1;
                }else{
                    low = mid+1;
                }
            }else{
                if(nums[low]<nums[high]){
                    low = mid+1;
                }else{
                    high = mid-1;
                }
            }
        }
        return ans;
    }
}
