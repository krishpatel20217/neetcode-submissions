class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const arr = new Set(nums);
        const result = [];
        for(let i=1; i<=nums.length;i++){
            if(!arr.has(i)){
                result.push(i)
            }
        }
        return result;
    }
}
