class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let map = new Map()
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],map.get(nums[i])+1 || 1)
            if(map.get(nums[i])>(nums.length/2)){
                return nums[i];
            }
            
        }
    }
}
