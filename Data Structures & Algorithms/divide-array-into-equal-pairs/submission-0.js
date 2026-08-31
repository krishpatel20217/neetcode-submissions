class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        let map = new Map();
        let n = nums.length/2;
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])||0)+1);
        }
        for(const [key,value] of map){
            if(value%2==0){
                n = n-(value/2)
            }else{
                return false;
            }
        }
        return true;

    }
}
