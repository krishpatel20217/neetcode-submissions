class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let st = 0;
        let end = nums.length-1;
        while(st<=end){
            let mid = Math.floor(st + (end - st) / 2);
            if(nums[mid]==target){
                return mid;
            }
            if(nums[mid]>target){
                end = mid -1;
            }else{
                st = mid +1;
            }
        }
        return -1;
    }
}
